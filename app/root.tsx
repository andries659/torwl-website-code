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
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
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
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isTorwOpen, setIsTorwOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="fixed top-4 right-4 z-50 text-white text-3xl lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Desktop Left Sidebar */}
      <aside className="hidden lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-64 lg:bg-gray-900 lg:text-white lg:p-6 lg:flex lg:flex-col lg:gap-4 z-40">
        <div className="text-xl font-bold mb-4">TOR-W: L</div>

        <a href="/" className="hover:underline font-bold">Home</a>
        <a href="/roles" className="hover:underline font-bold">Roles</a>
        <a href="/roadmap" className="hover:underline font-bold">Roadmap</a>

        <div className="relative font-bold">
          <button onClick={() => setIsEventsOpen(!isEventsOpen)}>Events Bot <span className="material-symbols-outlined">arrow_drop_down</span></button>
          <div className={`absolute left-0 mt-2 bg-gray-800 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out transform z-50 w-48 ${isEventsOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}>
            <a href="/events-bot/terms-of-service" className="block py-1 hover:underline">Terms of Service</a>
            <a href="/events-bot/privacy-policy" className="block py-1 hover:underline">Privacy Policy</a>
          </div>
        </div>

        <div className="relative font-bold">
          <button onClick={() => setIsTorwOpen(!isTorwOpen)}>TOR-W Bot <span className="material-symbols-outlined">arrow_drop_down</span></button>
          <div className={`absolute left-0 mt-2 bg-gray-800 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out transform z-50 w-48 ${isTorwOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}>
            <a href="/torw-bot/terms-of-service" className="block py-1 hover:underline">Terms of Service</a>
            <a href="/torw-bot/privacy-policy" className="block py-1 hover:underline">Privacy Policy</a>
          </div>
        </div>

        <a
          href="https://github.com/andries659/test-website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Contribute! <span className="material-symbols-outlined">open_in_new</span>
        </a>
      </aside>

      {/* Top header for desktop and mobile */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 h-16 px-6 flex items-center bg-black/30 backdrop-blur border-b border-white/10 transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="text-2xl font-extrabold text-white">TOR-W: L</div>
      </header>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="text-white text-xl px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

=======
>>>>>>> parent of 2aa3816 (I hope the dark/light thingy works)
=======
>>>>>>> parent of 2aa3816 (I hope the dark/light thingy works)
      {/* Mobile Sidebar Drawer */}
      <aside className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-gray-900 text-white p-6 z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
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
          <a href="/roadmap" onClick={() => setIsOpen(false)}>Roadmap</a>

          <div className="relative">
            <button onClick={() => setIsEventsOpen(!isEventsOpen)}>Events Bot <span className="material-symbols-outlined">arrow_drop_down</span></button>
            <div className={`absolute left-0 mt-2 bg-gray-800 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out transform z-50 w-48 ${isEventsOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}>
              <a href="/events-bot/terms-of-service" className="block py-1 hover:underline" onClick={() => setIsOpen(false)}>Terms of Service</a>
              <a href="/events-bot/privacy-policy" className="block py-1 hover:underline" onClick={() => setIsOpen(false)}>Privacy Policy</a>
            </div>
          </div>

          <div className="relative">
            <button onClick={() => setIsTorwOpen(!isTorwOpen)}>TOR-W Bot <span className="material-symbols-outlined">arrow_drop_down</span></button>
            <div className={`absolute left-0 mt-2 bg-gray-800 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out transform z-50 w-48 ${isTorwOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}>
              <a href="/torw-bot/terms-of-service" className="block py-1 hover:underline" onClick={() => setIsOpen(false)}>Terms of Service</a>
              <a href="/torw-bot/privacy-policy" className="block py-1 hover:underline" onClick={() => setIsOpen(false)}>Privacy Policy</a>
            </div>
          </div>

          <a href="https://github.com/andries659/test-website" target="_blank" rel="noopener noreferrer" className="underline" onClick={() => setIsOpen(false)}>
            Contribute! <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="pt-20 px-6 lg:pt-16 lg:ml-64">
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
