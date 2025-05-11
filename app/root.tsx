import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useState } from "react";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-900 text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Floating Hamburger - Always top-right */}
      <button
        className="fixed top-4 right-4 z-50 text-white text-3xl lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 backdrop-blur bg-black/30 border-b border-white/10 transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-white text-lg font-semibold">TOR-W: L</div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 font-bold">
            <a href="/" className="text-white hover:underline">Home</a>
            <a href="/roles" className="text-white hover:underline">Roles</a>
        
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Events Bot
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-gray-800 text-white py-2 px-4 rounded shadow-md z-50 w-48">
                  <a href="/events-bot/terms-of-service" className="block py-1 hover:underline">Terms of Service</a>
                  <a href="/events-bot/privacy-policy" className="block py-1 hover:underline">Privacy Policy</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                TOR-W Bot
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-gray-800 text-white py-2 px-4 rounded shadow-md z-50 w-48">
                  <a href="/torw-bot/terms-of-service" className="block py-1 hover:underline">Terms of Service</a>
                  <a href="/torw-bot/privacy-policy" className="block py-1 hover:underline">Privacy Policy</a>
                </div>
              )}
            </div>
            <a href="https://github.com/andries659/test-website" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Contribute!</a>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-gray-900 text-white p-6 z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
      >
        <button
          className="text-white text-2xl mb-4"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="flex flex-col gap-4 text-lg font-semibold">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/roles" onClick={() => setIsOpen(false)}>Roles</a>
          <a href="https://github.com/andries659/test-website" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Contribute!</a>

          {/* Events Bot Section with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
            >
              Events Bot
            </button>
            {/* Dropdown Menu for Terms of Service and Privacy Policy */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 bg-gray-800 text-white py-2 px-4 rounded">
                <a href="/events-bot/terms-of-service" className="block py-1 hover:underline">Terms of Service</a>
                <a href="/events-bot/privacy-policy" className="block py-1 hover:underline">Privacy Policy</a>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="pt-20 px-6">
        <Outlet />
      </main>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-20 p-4 container mx-auto">
      <h1 className="text-3xl font-bold">{message}</h1>
      <p className="text-gray-300">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto text-sm bg-gray-800 rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
