"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const pages = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Downloads", url: "/downloads" },
  { title: "Mods", url: "/mods" },
];

export default function SearchBar({ mobile = false }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    if (!q) return setResults([]);
    setResults(pages.filter(p => p.title.toLowerCase().includes(q.toLowerCase())));
  };

  useEffect(() => {
    if (mobile && open && inputRef.current) inputRef.current.focus();
  }, [mobile, open]);

  if (mobile) {
    return (
      <div className="relative w-full flex justify-center items-center">
        {/* Icon button */}
        <button
          onClick={() => setOpen(!open)}
          className={`z-10 flex items-center justify-center p-2 bg-white/30 backdrop-blur-md rounded-full text-white transition-all duration-300
            ${open ? "absolute left-3" : ""}`}
        >
          <FaSearch className="text-lg" />
        </button>

        {/* Input expands to the right of icon */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className={`ml-0 transition-all duration-300 ease-in-out rounded border border-gray-300 bg-white/70 p-2 text-black
            ${open ? "ml-12 w-[calc(100%-3rem)] opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
        />

        {/* Search results */}
        <div
          className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out
            ${open && results.length > 0 ? "max-h-96 mt-2" : "max-h-0 mt-0"}`}
        >
          <ul className="w-full bg-white/90 border border-gray-300 rounded shadow-md z-50 relative">
            {results.map((r) => (
              <li key={r.url} className="p-2 hover:bg-gray-100 text-blue-700 hover:text-blue-900">
                <Link href={r.url}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative w-full">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {results.length > 0 && (
        <ul className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-md z-50">
          {results.map((r) => (
            <li key={r.url} className="p-2 hover:bg-gray-100 text-blue-700 hover:text-blue-900">
              <Link href={r.url}>{r.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
