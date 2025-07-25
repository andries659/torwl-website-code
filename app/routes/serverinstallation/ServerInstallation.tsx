import type { Route } from "./+types/installation";
import React from "react";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Server Installation" }];
}

export default function ServerInstallation() {
  const moddedServers = [
    {
      name: "Modded EU",
      href: "amongus://init?servername=Modded_EU&serverport=443&serverip=https%3A%2F%2Fau-eu.duikbo.at&usedtls=false",
    },
    {
      name: "Modded NA",
      href: "amongus://init?servername=Modded_NA&serverport=443&serverip=https%3A%2F%2Faumods.org&usedtls=false",
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
    <section className="text-white space-y-10">
      {/* Intro */}
      <br />
      <div className="w-full max-w-7xl mx-auto bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl text-center border-2 border-yellow-500">
        <h2 className="text-2xl text-yellow-500 font-semibold">🧪 Server Installation</h2>
        <p className="mt-2">Want to play on Modded Servers but none are installed on your device? Follow the instructions below.</p>
        <p className="mt-2 font-semibold">Why do I need modded servers?</p>
        <p className="mt-1">
          Modded Servers are required for features in TOHE, like Crowded lobbies, and offer fewer restrictions than official servers.
        </p>
      </div>

      {/* Windows Instructions */}
      <div className="w-full max-w-7xl mx-auto bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl border-2 border-yellow-500">
        <h3 className="text-xl text-yellow-400 font-bold">🖥️ On Windows:</h3>
        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 text-left">
          <li>Download the .bat file by clicking the Windows button below.</li>
          <li>Run the .bat file to install the servers.</li>
        </ol>
        <div className="text-center mt-4">
          <a href="/server/Setup_Custom_Server.bat" download className="inline-block">
            <img
              src="https://img.shields.io/badge/Windows-E4405F?style=for-the-badge&logo=pcgamingwiki&logoColor=white&color=324ec0"
              alt="Download for Windows"
            />
          </a>
        </div>
        <p className="text-sm mt-2 text-center">
          This file is provided for convenience. We at <b>TOR-W</b> do not maintain or guarantee its safety. Use at your own discretion.
        </p>
      </div>

      {/* Mobile Instructions */}
      <div className="w-full max-w-7xl mx-auto bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl border-2 border-yellow-500">
        <h3 className="text-xl text-yellow-400 font-bold">📱 On Mobile:</h3>
        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 text-left">
          <li>Open the game.</li>
          <li>Click on a server link below to join directly.</li>
        </ol>

        {/* Modded Servers */}
        <div className="text-center mt-6">
          <p className="font-bold text-lg">Modded Servers</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {moddedServers.map((server) => (
              <a
                key={server.name}
                href={server.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://img.shields.io/badge/${encodeURIComponent(server.name)}-E4405F?style=for-the-badge&logo=gitbook&logoColor=white&color=324ec0`}
                  alt={server.name}
                />
              </a>
            ))}
          </div>
        </div>

        {/* NikoCat Servers */}
        <div className="text-center mt-8">
          <p className="font-bold text-lg">NikoCat233's Modded Servers</p>
          <p className="text-sm text-gray-300 mb-4">
            These have a built-in Anti-Cheat tailored for host-only mods.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {nikoServers.map((server) => (
              <a
                key={server.name}
                href={server.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://img.shields.io/badge/${encodeURIComponent(server.name)}-E4405F?style=for-the-badge&logo=naver&logoColor=white&color=324ec0`}
                  alt={server.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
