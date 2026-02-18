"use client"

import React, { useEffect, useState } from 'react'
import { useLanguage } from '../providers/LanguageProvider'
import EventCard from '../components/EventCard'
import Link from 'next/link'

type EventPhoto = { url: string }
type EventType = {
  id: string
  title: string
  startTime: string
  photos?: EventPhoto[]
}

export default function Events() {
  const [events, setEvents] = useState<EventType[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { t } = useLanguage()
  const categories = [
    t('categories.All'),
    t('categories.Music'),
    t('categories.Food'),
    t('categories.Art'),
    t('categories.Sports'),
    t('categories.Technology'),
  ]

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
    fetch(`${API_URL}/api/events`)
      .then((r) => {
        if (!r.ok) throw new Error('Network response was not ok')
        return r.json()
      })
      .then((data) => setEvents(data))
      .catch((err) => setError(String(err)))
  }, [])

  return (
    <main className="min-h-screen bg-linear-to-b from-indigo-600 via-indigo-500 to-purple-500 relative py-12">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-down">
            {t('events.title')}
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            {t('events.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-white text-indigo-600 shadow-lg'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Error State */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-8 text-red-100 text-center">
              <p>{t('events.failed')} {error}</p>
            </div>
          )}

        {/* Loading State */}
        {!events && !error && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="text-white text-lg mt-4">{t('events.loading')}</p>
          </div>
        )}

        {/* Events Grid */}
        {events && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <EventCard
                  id={event.id}
                  title={event.title}
                  startTime={event.startTime}
                  photos={event.photos}
                />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {events && events.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white text-2xl mb-4">{t('events.noFound')}</p>
            <p className="text-indigo-100 mb-8">{t('events.checkBack')}</p>
            <Link href="/">
              <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                {t('events.backToHome')}
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-indigo-300 to-transparent"></div>
    </main>
  )
}