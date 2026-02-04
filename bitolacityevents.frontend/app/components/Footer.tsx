import React from 'react'

export default function Footer() {
  return (
    <footer className="p-5 bg-gradient-to-r from-indigo-800 via-indigo-700 to-purple-800 text-white text-center mb-0">
        <p>&copy; {new Date().getFullYear()} Bitola City Events. All rights reserved.</p>
    </footer>
  )
}
