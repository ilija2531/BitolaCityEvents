'use client'
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <nav className="p-5 bg-gradient-to-r from-indigo-800 via-indigo-700 to-purple-800 text-white flex items-center justify-between text-lg font-semibold shadow-xl sticky top-0 z-50 backdrop-blur-md border-b border-white/10 gap-4">
      {/* Left Navigation */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="hover:text-indigo-200 transition-colors duration-300 hover:scale-110 transform">
         <button className="relative group px-6 py-2.5 bg-gradient-to-r from-indigo-800 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden  border-white/80 border">
          {/* Animated background shine effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 group-hover:skew-x-12"></div>
          
          {/* Button content */}
          <span className="relative flex items-center gap-2">
            <img src="/images/homeicon.png" alt="Home Icon" className="w-7 h-7" />
            Home
          </span>
        </button>
        </Link>
        <Link href="/events" className="hover:text-indigo-200 transition-colors duration-300 hover:scale-110 transform">
         <button className="relative group px-6 py-2.5 bg-gradient-to-r from-indigo-800 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden  border-white/80 border">
          {/* Animated background shine effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 group-hover:skew-x-12"></div>
          
          {/* Button content */}
          <span className="relative flex items-center gap-2">
            <img src="/images/eventicon.png" alt="Events Icon" className="w-7 h-7" />
            Events
          </span>
        </button>
        </Link>
      </div>

      {/* Center Search Bar */}
      <form onSubmit={handleSearch} className="flex-1 max-w-md mx-auto">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80 px-6 py-2.5 rounded-full bg-white/20 border border-white/40 text-white placeholder-white/60 focus:outline-none focus:bg-white/30 focus:border-white/60 transition-all duration-300 shadow-lg group-hover:bg-white/25"
          />
          <button
            type="submit"
            className="absolute right-35 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-sm"
          >
            🔍
          </button>
        </div>
      </form>

      {/* Right Sign Up */}
      <Link href="/register" className="hover:text-indigo-200 transition-colors duration-300 hover:scale-110 transform">
        <button className="relative group px-6 py-2.5 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden border-white/80 border">
          {/* Animated background shine effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 group-hover:skew-x-12"></div>
          
          {/* Button content */}
          <span className="relative flex items-center gap-2">
            <img src="/images/signup.png" alt="Sign Up Icon" className="w-7 h-7" />
            Sign Up
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>
      </Link>
    </nav>
  )
}
