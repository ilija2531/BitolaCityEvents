"use client"

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof window === 'undefined') return

    // immediate check in case footer is already visible
    const check = () => {
      const rect = node.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom >= 0
      if (inView) document.body.classList.add('footer-visible')
      else document.body.classList.remove('footer-visible')
    }

    check()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) document.body.classList.add('footer-visible')
          else document.body.classList.remove('footer-visible')
        })
      },
      { root: null, threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)
    window.addEventListener('resize', check)
    window.addEventListener('scroll', check)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', check)
      window.removeEventListener('scroll', check)
    }
  }, [])

  return (
    <footer ref={ref} className="footer-animate relative bg-gradient-to-r from-indigo-800 via-indigo-700 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
          <img src="/images/logo.png" alt="Bitolacity Events Logo" className="w-90 h-50 object-contain absolute left-0 top-1/2 -translate-y-1/2 -translate-x-80 z-20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
          <div>
            <h3 className="text-2xl font-semibold">Bitola City Events</h3>
            <p className="mt-3 text-sm text-indigo-100">Discover events, meet people, and celebrate the spirit of Bitola. Concerts, festivals, exhibitions and more — all in one place.</p>
            <div className="flex gap-3 mt-4 justify-center" aria-label="Social media links">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors" title="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.61 3.52-3.61.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.71h2.52l-.4 2.9h-2.12v7.03C18.34 21.2 22 17.06 22 12.07z"/></svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="hover:text-sky-400 transition-colors" title="X">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.66.3-1.36.5-2.09.6.75-.45 1.32-1.17 1.59-2.03-.7.42-1.48.72-2.3.88C18.9 4.1 17.9 3.6 16.8 3.6c-1.6 0-2.88 1.3-2.88 2.9 0 .23.03.45.08.66-2.39-.12-4.52-1.26-5.95-3-.25.43-.39.94-.39 1.48 0 1.02.53 1.92 1.33 2.45-.49-.02-.95-.15-1.35-.37v.04c0 1.42 1.01 2.6 2.36 2.87-.25.07-.52.11-.8.11-.2 0-.4-.02-.59-.06.4 1.25 1.55 2.16 2.92 2.19-1.07.84-2.41 1.34-3.88 1.34-.25 0-.5-.01-.75-.04C6.9 19.35 8.6 20 10.46 20c6.4 0 9.91-5.3 9.91-9.89v-.45c.68-.48 1.26-1.08 1.72-1.77-.62.28-1.28.46-1.96.54z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors" title="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.6a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-sky-600 transition-colors" title="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.6-1.8C20.7 8.8 22 11 22 14.8V21h-4v-5.3c0-1.3 0-3-1.8-3-1.8 0-2 1.4-2 2.9V21H9z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Useful Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-indigo-100">
              <li><Link className="hover:text-white" href="/">Home</Link></li>
              <li><Link className="hover:text-white" href="/events">Events</Link></li>
              <li><Link className="hover:text-white" href="/events">Explore Events</Link></li>
              <li><Link className="hover:text-white" href="#">Create Event</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <address className="not-italic mt-3 text-sm text-indigo-100">
              <div>City Hall, Bitola</div>
              <div>Phone: <a className="hover:text-white" href="tel:+38970000000">+389 70 000 000</a></div>
              <div>Email: <a className="hover:text-white" href="mailto:info@bitolacityevents.mk">info@bitolacityevents.mk</a></div>
            </address>
          </div>

          {/* Subscribe section removed as requested */}
        </div>

        <div className="mt-8 border-t border-black pt-6 text-sm text-indigo-100 text-center">
          <p>&copy; {year} Bitola City Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
