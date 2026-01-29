"use client"

import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'

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
    <main>
      <h1>Upcoming Events</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!events && !error && <p>Loading events…</p>}
      {events && (
        <div style={{ display: 'grid', gap: 12 }}>
          {events.map((ev) => (
            <EventCard key={ev.id} id={ev.id} title={ev.title} startTime={ev.startTime} photos={ev.photos} />
          ))}
        </div>
      )}
    </main>
  )
}