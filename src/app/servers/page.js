"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCog } from "react-icons/fa";

export default function ServerInstallation() {
  const moddedServers = [
    {
      name: "Modded EU",
      href: "amongus://init?servername=Modded_EU&serverport=443&serverip=https%3A%2F%2Fau-eu.duikbo.at&usedtls=false",
    },
    {
      name: "Modded NA",
      href: "amongus://init?servername=Modded_NA&serverport=443&serverip=https%3A%2F%2Fau-us.duikbo.at&usedtls=false",
    },
    {
      name: "Modded Asia",
      href: "amongus://init?servername=Modded_AS&serverport=443&serverip=https%3A%2F%2Fau-as.duikbo.at&usedtls=false",
    },
  ];

  const nikoServers = [
    {
      name: "NikoCat EU",
      href: "amongus://init?servername=Niko233(EU)&serverport=443&serverip=https%3A%2F%2Fau-eu.niko233.me&usedtls=false",
    },
    {
      name: "NikoCat NA",
      href: "amongus://init?servername=Niko233(NA)&serverport=443&serverip=https%3A%2F%2Fau-us.niko233.me&usedtls=false",
    },
    {
      name: "NikoCat Asia",
      href: "amongus://init?servername=Niko233(AS)&serverport=443&serverip=https%3A%2F%2Fau-as.niko233.me&usedtls=false",
    },
    {
      name: "NikoCat CN",
      href: "amongus://init?servername=Niko233(CN)&serverport=443&serverip=https%3A%2F%2Fau-cn.niko233.me&usedtls=false",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center text-center px-4 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white space-y-16">

        {/* Hero / Intro */}
        <section className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Server Installation</h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-100">
            These Modded Servers can be used to play the TOR-W: L mod, as it is not playble on the Innersloth Servers.
          </p>
        </section>

        {/* Windows Installation */}
        <section className="max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-xl">
          <div className="flex items-center justify-center gap-2 mb-4 text-white">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(59,130,246,0.2)" }} // light blue bg
            >
              <FaCog className="text-blue-500 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Windows Installation</h2>
          </div>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-left md:text-lg">
            <li>Download the .bat file below.</li>
            <li>Run the .bat file to install servers.</li>
          </ol>
          <div className="mt-4 text-center">
            <a href="/server/Setup_Custom_Server.bat" download className="inline-block">
              <img
                src="https://img.shields.io/badge/Windows-E4405F?style=for-the-badge&logo=pcgamingwiki&logoColor=white&color=324ec0"
                alt="Download for Windows"
              />
            </a>
          </div>
          <p className="mt-2 text-sm text-center">
            Provided for convenience. Use at your own discretion.
          </p>
        </section>

        {/* Mobile Installation */}
        <section className="max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-xl">
          <div className="flex items-center justify-center gap-2 mb-4 text-white">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(59,130,246,0.2)" }} // light blue bg
            >
              <FaCog className="text-blue-500 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Mobile Installation</h2>
          </div>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-left md:text-lg">
            <li>Open the game.</li>
            <li>Click a server link below to join directly.</li>
          </ol>

          {/* Modded Servers */}
          <div className="mt-6 text-center">
            <p className="font-bold text-lg">Modded Servers</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {moddedServers.map((server) => (
                <a key={server.name} href={server.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://img.shields.io/badge/${encodeURIComponent(server.name)}-E4405F?style=for-the-badge&logo=gitbook&logoColor=white&color=324ec0`}
                    alt={server.name}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* NikoCat Servers */}
          <div className="mt-8 text-center">
            <p className="font-bold text-lg">NikoCat233&apos;s Modded Servers</p>
            <p className="text-sm text-gray-300 mb-4">
              Includes built-in Anti-Cheat for host-only mods.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {nikoServers.map((server) => (
                <a key={server.name} href={server.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://img.shields.io/badge/${encodeURIComponent(server.name)}-E4405F?style=for-the-badge&logo=naver&logoColor=white&color=324ec0`}
                    alt={server.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
