"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import { FaPalette, FaVoteYea, FaPuzzlePiece, FaCog, FaGamepad, FaCheckCircle, FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ChangelogSection from "./components/ChangelogSection";

// Define DownloadButton (NOT default export)
function DownloadButton() {
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    async function fetchLatest() {
      const res = await fetch("https://api.github.com/repos/TownofReworked/TORWLaunchpad/releases/latest");
      const data = await res.json();
      if (data.assets?.length > 0) {
        setDownloadUrl(data.assets[0].browser_download_url);
      }
    }
    fetchLatest();
  }, []);

  return (
    <a
      href={downloadUrl || "#"}
      className={`relative px-8 py-4 rounded-2xl font-bold text-white shadow-lg overflow-hidden group transition ${downloadUrl ? "hover:scale-105 cursor-pointer" : "opacity-50 cursor-not-allowed"
        }`}
      download
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-[length:300%_300%] animate-slow group-hover:animate-fast"></span>
      <span className="relative flex items-center gap-2 z-10">
        <FaDownload className="text-xl" />
        {downloadUrl ? "Download Now!" : "Fecthing Latest Release..."}
      </span>
    </a>
  );
}

// Main Page — Only one default export
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center text-center px-4 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white space-y-16">

        {/* Hero Section */}
        <section className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Welcome to the TOR-W: L Website
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-100">
            A place for roles, features, and updates — optimized for both mobile and desktop.
          </p>

          {/* Insert Animated Download Button */}
          <div className="mt-8 flex justify-center">
            <DownloadButton />
          </div>

          {/* Other Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/roles" className="px-6 py-3 rounded-2xl bg-white text-purple-700 font-bold shadow-lg hover:scale-105 transition cursor-pointer">
              View Roles
            </Link>
            <Link href="/starlight" className="px-6 py-3 rounded-2xl bg-yellow-600 text-yellow-400 font-bold shadow-lg hover:scale-105 transition cursor-pointer">
              Starlight
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-xl">
          <div className="flex items-center justify-center gap-2 mb-6 text-white">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(135, 58, 199, 0.57)" }}
            >
              <FaPuzzlePiece className="text-purple-500 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
          </div>
          <ul className="space-y-3 text-left md:text-lg">
            <li className="flex items-center gap-2"><FaPalette className="inline text-white" /> Gradient Colors and UI enhancements</li>
            <li className="flex items-center gap-2"><FaVoteYea className="inline text-white" /> Special Voting Modes</li>
            <li className="flex items-center gap-2"><FaPuzzlePiece className="inline text-white" /> Custom and Feature-Rich Roles</li>
            <li className="flex items-center gap-2"><FaCog className="inline text-white" /> New Game Options and Settings</li>
            <li className="flex items-center gap-2"><FaGamepad className="inline text-white" /> Exciting Gamemodes</li>
          </ul>
        </section>

        {/* Compatibility Section */}
        <section className="max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-xl">
          <div className="flex items-center justify-center gap-2 mb-4 text-white">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(34,197,94,0.2)" }} // light green bg
            >
              <FaCheckCircle className="text-green-500 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Compatibility</h2>
          </div>
          <p className="md:text-lg">Supports version 2025.11.18 (17.1.0) on PC.</p>
          <p className="md:text-lg mt-2">Will support Starlight in the near future.</p>
          <p className="md:text-lg mt-2">Not a host-only mod — all players must install it.</p>
          <p className="md:text-lg mt-2">Only works on private TOR-W servers (not official Among Us servers).</p>
        </section>

        {/* Installation Section */}
        <section className="max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-xl">
          <div className="flex items-center justify-center gap-2 mb-4 text-white">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(59,130,246,0.2)" }} // light blue bg
            >
              <FaCog className="text-blue-500 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Installation</h2>
          </div>
          <p className="md:text-lg">Follow these steps to install:</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
            <li>Install Unity.Il2Cpp win-x86 BepInEx build</li>
            <li>Install Reactor</li>
            <li>Install Mira API</li>
          </ul>
        </section>
        <ChangelogSection />
        <Footer />
      </main>
    </>
  );
}
