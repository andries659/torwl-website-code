"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* Frosted glass background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />

      <div className="relative max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-white">
          TOR-W: L
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link href="/roles" className="hover:text-purple-400 transition-colors">Roles</Link>
          <Link href="/options" className="hover:text-purple-400 transition-colors">Mod Options</Link>
          <Link href="/servers" className="hover:text-purple-400 transition-colors">Server Installation</Link>
          <Link href="/starlight" className="text-yellow-400 hover:text-yellow-200 transition-colors">Starlight</Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden relative w-10 h-10">
          <button
            onClick={() => setOpen(!open)}
            className="absolute inset-0 flex flex-col justify-center items-center p-2 border border-white/30 backdrop-blur-md rounded-md"
          >
            {/* Top bar */}
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transform transition-all duration-300
                ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            {/* Middle bar */}
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-300
                ${open ? "opacity-0" : ""}`}
            />
            {/* Bottom bar */}
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transform transition-all duration-300
                ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </div>

      {/* Animated, blurry mobile menu */}
      <div
        className={`md:hidden absolute left-1/2 transform -translate-x-1/2 w-3/4 top-16 
                    bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl 
                    flex flex-col items-center overflow-hidden transition-all duration-500
                    ${open ? "max-h-96 py-4" : "max-h-0 py-0"}`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-white py-2 w-full text-center hover:text-purple-400 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/roles"
          onClick={() => setOpen(false)}
          className="text-white py-2 w-full text-center hover:text-purple-400 transition-colors"
        >
          Roles
        </Link>
        <Link
          href="/options"
          onClick={() => setOpen(false)}
          className="text-white py-2 w-full text-center hover:text-purple-400 transition-colors"
        >
          Mod Options
        </Link>
        <Link
          href="/servers"
          onClick={() => setOpen(false)}
          className="text-white py-2 w-full text-center hover:text-purple-400 transition-colors"
        >
          Server Installation
        </Link>
        <Link
          href="/starlight"
          onClick={() => setOpen(false)}
          className="py-2 w-full text-center text-yellow-400 hover:text-yellow-200 transition-colors"
        >
          Starlight
        </Link>
      </div>
    </nav>
  );
}
