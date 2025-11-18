"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "./SearchBar";
import { FaNewspaper } from "react-icons/fa";
import NewsModal from "./NewsModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openNews, setOpenNews] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    let intervalId;

    async function checkNews() {
      try {
        const res = await fetch("/news/news.json");
        let data = await res.json();

        // Sort by id descending (highest id first)
        data.sort((a, b) => b.id - a.id);

        const seen = JSON.parse(localStorage.getItem("seenNews") || "[]");
        const unreadExists = data.some(item => !seen.includes(item.id));
        setHasUnread(unreadExists);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    }

    // Initial check
    checkNews();

    // Poll every 10 seconds (adjust as needed)
    intervalId = setInterval(checkNews, 10000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />


        <div className="relative max-w-6xl mx-auto flex justify-between items-center px-4 py-3">


          <Link href="/" className="text-2xl font-bold text-white">TOR-W: L</Link>


          <div className="hidden md:block w-1/3"><Search /></div>


          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 text-white items-center">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link href="/roles" className="hover:text-purple-400 transition-colors">Roles</Link>
            <Link href="/options" className="hover:text-purple-400 transition-colors">Mod Options</Link>
            <Link href="/servers" className="hover:text-purple-400 transition-colors">Server Installation</Link>
            <Link href="/starlight" className="text-yellow-400 hover:text-yellow-200 transition-colors">Starlight</Link>


            <button
              onClick={() => setOpenNews(true)}
              className="relative hover:text-blue-300 transition-colors flex items-center"
            >
              <FaNewspaper className="mr-1" /> News


              {hasUnread && (
                <span className="absolute -top-1 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>
              )}
            </button>
          </div>


          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3 relative">
            <button
              onClick={() => setOpenNews(true)}
              className="relative w-10 h-10 flex justify-center items-center border border-white/30 rounded-md backdrop-blur-md text-white text-xl"
            >
              <FaNewspaper />


              {hasUnread && (
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              )}
            </button>


            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="relative w-10 h-10 flex flex-col justify-center items-center p-2 border border-white/30 backdrop-blur-md rounded-md"
            >
              <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>
        </div>


        {/* Mobile dropdown */}
        <div className={`md:hidden absolute left-1/2 transform -translate-x-1/2 w-3/4 top-16 bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl flex flex-col items-center overflow-hidden transition-all duration-500 ${open ? "max-h-[500px] py-4" : "max-h-0 py-0"}`}>
          <Link href="/" onClick={() => setOpen(false)} className="text-white py-2 w-full text-center hover:text-purple-400">Home</Link>
          <Link href="/roles" onClick={() => setOpen(false)} className="text-white py-2 w-full text-center hover:text-purple-400">Roles</Link>
          <Link href="/options" onClick={() => setOpen(false)} className="text-white py-2 w-full text-center hover:text-purple-400">Mod Options</Link>
          <Link href="/servers" onClick={() => setOpen(false)} className="text-white py-2 w-full text-center hover:text-purple-400">Server Installation</Link>
          <Link href="/starlight" onClick={() => setOpen(false)} className="py-2 w-full text-center text-yellow-400 hover:text-yellow-200">Starlight</Link>


          <div className="w-full mt-2 px-4"><Search mobile /></div>
        </div>
      </nav>


      {openNews && <NewsModal onClose={() => setOpenNews(false)} />}
    </>
  );
}