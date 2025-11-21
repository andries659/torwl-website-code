"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLightbulb, FaInfoCircle } from "react-icons/fa";

export default function Roles() {
  const roles = [
    {
      name: "Coroner",
      description: "Freeze bodies to make them stay.",
      icon: <img src="/icons/Crewmate/Coroner.png" alt="alt" width="42" />,
      badges: ["Crewmate", "v1.0.0"],
      video: "",
      extra: "If you freeze a body, the body will stay forever, but can only be reported once as well.",
      images: []
    },
    {
      name: "Sealer",
      description: "You can seal vents.",
      icon: <img src="/icons/Crewmate/Sealer.png" alt="alt" width="42" />,
      badges: ["Crewmate", "v1.0.0"],
      video: "",
      extra: "You are able to seal vents, which prevents them from being used.",
      images: []
    },
    {
      name: "Medic",
      description: "Revive dead players.",
      icon: <img src="/icons/Crewmate/Medic.png" alt="alt" width="42" />,
      badges: ["Crewmate", "v1.0.0"],
      video: "",
      extra: "You have the ability to revive dead players.",
      images: []
    },
    {
      name: "Sheriff",
      description: "Shoot the Impostor.",
      icon: <img src="/icons/Crewmate/Sheriff.png" alt="alt" width="42" />,
      badges: ["Crewmate", "v1.0.0"],
      video: "",
      extra: "You can shoot any player, to guess if they are the Impostor. If you shoot the Impostor, you live. But if you shoot a Crewmate, you die.",
      images: []
    },
    {
      name: "Gambler",
      description: "Guess the roles of others.",
      icon: <img src="/icons/Crewmate/Gambler.png" alt="alt" width="42" />,
      badges: ["Crewmate", "v1.0.0"],
      video: "",
      extra: "You can guess the roles of others. When you are correct, the role is revealed, if you are wrong, you die.",
      images: []
    },
    {
      name: "Teleporter",
      description: "Teleport across the map.",
      icon: <img src="/icons/Crewmate/Teleporter.png" alt="alt" width="42" />,
      badges: ["Crewmate", "v1.1.0"],
      video: "",
      extra: "",
      tips: "Using it well and timing it well, you can also catch Impostors in the act of killing!",
      images: [
        { src: "/screenshots/teleporter-1.png", label: "", type: "screenshot" },
        { src: "/screenshots/teleporter-2.png", label: "", type: "screenshot" }
      ]
    },
    {
      name: "Burrower",
      description: "Can dig vents around the map.",
      icon: <img src="/icons/Impostor/Burrower.png" alt="alt" width="42" />,
      badges: ["Impostor", "v1.0.0"],
      video: "",
      extra: "You are able to dig vents anywhere on the map.",
      images: []
    },
    {
      name: "Janitor",
      description: "Can drag & hide bodies.",
      icon: <img src="/icons/Impostor/Janitor.png" alt="alt" width="42" />,
      badges: ["Impostor", "v1.0.0"],
      video: "",
      extra: "You are able to drag around bodies around the map, and hide them in vents.",
      images: []
    },
    {
      name: "Hitman",
      description: "Can slow time down and kill.",
      icon: <img src="/icons/Impostor/Hitman.png" alt="alt" width="42" />,
      badges: ["Impostor", "v1.0.0"],
      video: "",
      extra: "You are able to slow down the time and pick your targets.",
      images: []
    },
    {
      name: "Surgeon",
      description: "Poison the crew to win..",
      icon: <img src="/icons/Impostor/Surgeon.png" alt="alt" width="42" />,
      badges: ["Impostor", "v1.0.0"],
      video: "",
      extra: "You are able to inject players and kill them, and if you disect the body, it's unreportable.",
      images: []
    },
    {
      name: "Swapshifter",
      description: "Switch people around.",
      icon: <img src="/icons/Impostor/Swapshifter.png" alt="alt" width="42" />,
      badges: ["Impostor", "v1.0.0"],
      video: "",
      extra: "You are able to choose people to make them switch places, it also works with you.",
      images: []
    },
    {
      name: "Silencer",
      description: "Silence players so they can not speak in the next meeting.",
      icon: <img src="/icons/Impostor/Silencer.png" alt="alt" width="42" />,
      badges: ["Impostor", "v2.0-f"],
      video: "",
      extra: "Silence players, which makes it unable for hem to talk during a meeting.",
      images: []
    },
    {
      name: "Traitor",
      description: (
        <>
          Act like an <span className="text-red-400 font-bold">Impostor</span>, to betray the <span className="text-red-400 font-bold">Impostor(s)</span>.
        </>
      ),
      icon: <img src="/icons/Neutral/Traitor.png" alt="alt" width="42" />,
      badges: ["Neutral", "v1.0.0"],
      video: "",
      extra: "This role has no ability button or anything. A 'Target' tag will be added to the Impostor the Traitor has to vote off to win.",
      tips: "Do not try to vote out the Impostor, since it could make you the next target.\nThink like an Impostor.",
      images: [
        { src: "/screenshots/traitor.png", label: "", type: "screenshot" }
      ]
    },
    {
      name: "Executioner",
      description: "Vote out the target to win the game.",
      icon: <img src="/icons/Neutral/Executioner.png" alt="alt" width="42" />,
      badges: ["Neutral", "v1.1.0"],
      video: "",
      extra: "This role has no ability button or anything. A 'Target' tag will be added to a random player the Executioner has to vote off to win.",
      tips: "Do not try to vote out your target, since it could make you the next target.\nThink like an Impostor.",
      images: [
        { src: "/screenshots/exe.png", label: "", type: "screenshot" }
      ]
    },
    {
      name: "Neutral Killer",
      description: "Kill players as a Neutral role to win alone.",
      icon: <img src="/icons/Neutral/NeutralKiller.png" alt="alt" width="42" />,
      badges: ["Neutral", "v1.1.1"],
      video: "",
      extra: "",
      tips: "When trying to kill, kill like a normal Impostor would. Don\'t rush anything.\nAlso, if you kill and get caught, and get voted out, YOU\'LL LOSE.",
      images: [
        { src: "/screenshots/nk-1.png", label: "", type: "screenshot" },
        { src: "/screenshots/nk-2.png", label: "", type: "screenshot" }
      ]
    },
    {
      name: "Jester",
      description: "Must fool the crew.",
      icon: <img src="/icons/Neutral/Jester.png" alt="alt" width="42" />,
      badges: ["Neutral", "v1.0.0"],
      video: "",
      extra: "Act suspicious to get ejected and win.",
      images: []
    },
    {
      name: "Reaper",
      description: "Collect the souls.",
      icon: <img src="/icons/Neutral/Reaper.png" alt="alt" width="42" />,
      badges: ["Neutral", "v1.0.0"],
      video: "",
      extra: "Go around the map and collect souls from dead bodies.",
      images: []
    },
    {
      name: "Tavern Keeper",
      description: "Role Block players to stop them from using abilities.",
      icon: <img src="/icons/Coven/TavernKeeper.png" alt="alt" width="42" />,
      badges: ["Coven", "v2.0.0-r"],
      video: "",
      extra: "This role cannot win (so far). It can stop Impostors, Crewmates, or Neutrals from using their abilities for a set period of time.",
      tips: "Try to stop the Impostors from winning. Take a wild guess, and remove the abilities from your tarhet for a set period of time.",
      images: []
    },
  ];

  const modifiers = [
    {
      name: "Flash",
      description: "Moves faster than everyone else.",
      icon: <img src="/icons/Universal/Flash.png" alt="alt" width="42" />,
      badges: ["Universal Modifier", "v1.0.0"],
      video: "/videos/flash.mp4",
      extra: "You're just a bit faster than the average player.",
      tips: "Even though the video is above the icon, it has no screenshots at all.",
      images: []
    },
    {
      name: "VIP",
      description: "A modifier that makes you look fancy.",
      icon: <img src="/icons/Universal/VIP.png" alt="alt" width="42" />,
      badges: ["Universal Modifier", "v1.0.0"],
      video: "",
      extra: "You're just there to brag how cool you look.",
      images: [
        { src: "/screenshots/vip.png", label: "", type: "screenshot" }
      ]
    },
    {
      name: "Bait",
      description: "Your killer self reports when they kill you.",
      icon: <img src="/icons/Crewmate-Mod/Bait.png" alt="alt" width="42" />,
      badges: ["Crewmate Modifier", "v1.1.1"],
      video: "",
      extra: "There is not really a use, but the use is that your killer self reports when they kill you.",
      images: []
    },
    {
      name: "Torch",
      description: "Sees clearly in the dark.",
      icon: <img src="/icons/Crewmate-Mod/Torch.png" alt="alt" width="42" />,
      badges: ["Crewmate Modifier", "v1.1.1"],
      video: "",
      extra: "You're given access to a torch to see when lights are down.",
      images: [
        { src: "/screenshots/torch.png", label: "", type: "screenshot" }
      ]
    },
    {
      name: "Burst",
      description: "Explodes when killed.",
      icon: <img src="/icons/Crewmate-Mod/Burst.png" alt="alt" width="42" />,
      badges: ["Crewmate Modifier", "v2.0-r"],
      video: "",
      extra: "When you get killed, you explode. Killing other players in a radius set by the host.",
      images: [
        { src: "/screenshots/burst.png", label: "", type: "screenshot" }
      ]
    },
    {
      name: "Mayor",
      description: "You get extra votes.",
      icon: <img src="/icons/Crewmate-Mod/Mayor.png" alt="alt" width="42" />,
      badges: ["Crewmate Modifier", "v2.0-r"],
      video: "",
      extra: "You get extra votes in meetings.",
      images: []
    },
  ];

  function ItemCard({ item }) {
    const [open, setOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const badgeColors = {
      Crewmate: "bg-blue-500/30 text-blue-100",
      Impostor: "bg-red-500/30 text-red-100",
      Neutral: "bg-yellow-500/30 text-yellow-100",
      Coven: "bg-purple-500/30 text-purple-100",
      "Universal Modifier": "bg-green-400/30 text-green-100",
      "Crewmate Modifier": "bg-blue-400/30 text-blue-100",
    };

    const getBadgeColor = (badge) => {
      if (badge.startsWith("v1")) {
        return "bg-indigo-500/30 text-indigo-100"; // custom v1 style
      }
      if (badge.endsWith("-a")) {
        return "bg-orange-500/30 text-orange-100"; // Alpha
      }
      if (badge.endsWith("-b")) {
        return "bg-yellow-500/30 text-yellow-100"; // Beta
      }
      if (badge.endsWith("-rc")) {
        return "bg-purple-500/30 text-purple-100"; // Release Candidate
      }
      if (badge.endsWith("-r")) {
        return "bg-green-500/30 text-green-100"; // Release (stable)
      }
      if (badge.endsWith("-d")) {
        return "bg-gray-500/30 text-gray-100"; // Dev
      }
      if (badge.endsWith("-t")) {
        return "bg-blue-500/30 text-blue-100"; // Test
      }
      if (badge.endsWith("-h")) {
        return "bg-red-600/30 text-red-100"; // Hotfix
      }
      if (badge.endsWith("-p")) {
        return "bg-indigo-500/30 text-indigo-100"; // Patch
      }
      if (badge.endsWith("-u")) {
        return "bg-cyan-500/30 text-cyan-100"; // Update
      }
      if (badge.endsWith("-f")) {
        return "bg-pink-500/30 text-pink-100"; // Feature
      }
      if (badge.endsWith("-o")) {
        return "bg-teal-500/30 text-teal-100"; // Overhaul
      }
      return badgeColors[badge] || "bg-gray-500/30 text-gray-100"; // fallback
    };

    return (
      <div className="p-4 md:p-5 rounded-xl bg-black/30 backdrop-blur-md shadow flex flex-col gap-3">
        <div className="flex items-center gap-4">
          {item.icon}
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-bold">{item.name}</h2>
            <div className="flex flex-wrap gap-1 mt-1">
              {item.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`text-xs md:text-sm px-2 py-0.5 rounded-full ${getBadgeColor(
                    badge
                  )}`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-1 text-gray-200 text-sm md:text-base flex items-center gap-2">
              <FaInfoCircle className="text-blue-400 flex-shrink-0" />
              <span className="underline font-bold">Description:</span>
            </p>
            <p className="ml-6 text-gray-300 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="mt-2 text-xs md:text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition"
        >
          {open ? "Show Less ▲" : "Show More ▼"}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
        >
          <div className="p-3 bg-black/20 rounded-lg space-y-3">

            {/* Extra Text */}
            {item.extra && <p className="text-sm">{item.extra}</p>}

            {/* Tips & Tricks Box */}
            {item.tips && (
              <div className="mt-3 p-3 bg-yellow-400/20 border border-yellow-500/40 rounded-lg flex items-start gap-3">
                <FaLightbulb className="text-yellow-400 text-lg mt-1" />
                <p className="text-yellow-100 text-sm">{item.tips}</p>
              </div>
            )}

            {/* Local Video */}
            {item.video && <video className="w-full rounded-lg" controls src={item.video} />}

            {/* Images */}
            {item.images && item.images.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center ${img.type === "button" ? "w-auto" : "w-full"
                      }`}
                  >
                    {/* Ability Button */}
                    {img.type === "button" ? (
                      <img
                        src={img.src}
                        alt={img.label || ""}
                        className="w-16 h-16 object-contain rounded-md mx-auto"
                      />
                    ) : (
                      /* Screenshot (modal on click) */
                      <button
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setModalImage(img.src)}
                      >
                        <img
                          src={img.src}
                          alt={img.label || ""}
                          className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
                        />
                      </button>
                    )}
                    {img.label && <span className="text-xs mt-1">{img.label}</span>}
                  </div>
                ))}
              </div>
            )}

            {modalImage && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="relative max-w-3xl w-full p-4">
                  <button
                    onClick={() => setModalImage(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-red-500 hover:text-red-700 text-xl font-bold px-3 py-1 rounded"
                  >
                    ✕
                  </button>
                  <img
                    src={modalImage}
                    alt="Expanded view"
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center px-4 py-10 pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">Roles & Modifiers</h1>

        {/* Roles Section (Only Renders If You Add Roles) */}
        {roles.length > 0 && (
          <section className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Roles</h2>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
              {roles.map((item) => (
                <ItemCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Modifiers Section */}
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Modifiers</h2>
          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
            {modifiers.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        </section>
        <br></br>
        <Footer />
      </main>
    </>
  );
}
