import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="p-5 bg-indigo-800 text-white flex space-x-4 justify-left text-xl font-arial shadow-md sticky top-0 z-20">
        <Link href="/" className="hover:text-indigo-200">Home</Link>
        <Link href="/events" className="hover:text-indigo-200">Events</Link>
        <Link href="/login" className="ml-auto hover:text-indigo-200">Login</Link>
        <Link href="/register" className="hover:text-indigo-200">Register</Link>
    </nav>
  )
}
