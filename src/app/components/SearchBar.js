"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const pages = [
  { title: "Home", url: "/" },
];

export default function SearchBar({ mobile = false }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false); // for mobile icon toggle
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const q = e.target.value;
    setQuery(q);

    if (!q) {
      setResults([]);
      return;
    }

    const filtered = pages.filter((p) =>
      p.title.toLowerCase().includes(q.toLowerCase())
    );
    setResults(filtered);
  };

  useEffect(() => {
    if (mobile && open && inputRef.current) inputRef.current.focus();
  }, [mobile, open]);

  if (mobile) {
    return (
      <div className="relative w-full">
        {/* Mobile search container */}
        <div className="relative w-full">
          {/* Icon */}
          <button
            onClick={() => setOpen(!open)}
            className={`absolute top-1/2 p-2 text-white text-lg transition-all duration-300 ease-in-out
            ${open ? "left-2 -translate-y-1/2" : "left-1/2 -translate-x-1/2 -translate-y-1/2"}`}
          >
            <FaSearch />
          </button>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            className={`transition-all duration-300 ease-in-out w-full pl-10 p-2 border rounded border-gray-300 bg-white/70 text-black focus:outline-none
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />

          {/* Transparent button overlay to toggle open */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>

        {/* Mobile search results with slide down animation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${open && results.length > 0 ? "max-h-96 mt-1" : "max-h-0 mt-0"
            }`}
        >
          <ul className="w-full bg-white/90 border border-gray-300 rounded shadow-md z-50 relative">
            {results.map((r) => (
              <li
                key={r.url}
                className="p-2 hover:bg-gray-100 text-blue-700 hover:text-blue-900"
              >
                <Link href={r.url}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Desktop
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
            <li
              key={r.url}
              className="p-2 hover:bg-gray-100 text-blue-700 hover:text-blue-900"
            >
              <Link href={r.url}>{r.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
