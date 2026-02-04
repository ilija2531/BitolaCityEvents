import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <header className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-5 animate-fade-in-down drop-shadow-lg'>
            Welcome to Bitola City Events
          </h1>
          
          {/* Subtitle with styling */}
          <p className='text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-md'>
            Platform that unites citizens and local organizations by providing a space for collaboration and information sharing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Link href="/events">
            <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Events
            </button>
            </Link>
            <button className="px-8 py-3 bg-indigo-400 bg-opacity-30 text-white font-bold rounded-lg border-2 border-white border-opacity-50 hover:border-opacity-100 hover:bg-opacity-50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              Create Event
            </button>
          </div>

          {/* Decorative bottom accent */}
          <div className="flex justify-center mt-8">
            <div className="h-1 w-20 bg-linear-to-r from-transparent via-white to-transparent opacity-60"></div>
          </div>
        </div>
    </header>
  )
}
