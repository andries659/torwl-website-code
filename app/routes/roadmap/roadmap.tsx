import React from "react";

export function meta() {
  return [{ title: "Roadmap" }];
}

const tagColors: Record<string, string> = {
  "Done!": "bg-green-600",
  "In The Works": "bg-yellow-600",
  "Bugged": "bg-red-600",
  "Unstable": "bg-orange-600",
  "Unfinished": "bg-blue-600",
  "Almost Done!": "bg-purple-600",
};

// Map basic statuses to emoji-prefixed versions
const statusMap: Record<string, string> = {
  Completed: "🎉│Done",
  "In Progress": "💡│Doing",
  Bugged: "🐛│Bug Fixes",
  Planned: "🗂️│To Do",
};

const statusColors: Record<string, string> = {
  "🎉│Done": "bg-green-300",
  "💡│Doing": "bg-yellow-300",
  "🐛│Bug Fixes": "bg-red-300",
  "🗂️│To Do": "bg-blue-300",
};

const roadmapItems = [
  {
    title: "Translations",
    status: "Planned",
    description: "Making translations per language set in the game, such as Español and Français.",
    tags: ["In The Works", "Unfinished"],
  },
  {
    title: "Roles",
    status: "Planned",
    description: <>Add new roles for v1.2.0, which starts introducing <span style={{ color: "#a855f7" }}>Coven</span> Roles.</>,
    tags: ["In The Works", "Almost Done!"],
  },
  {
    title: "Hacker - bugged; can't unhack nodes",
    status: "Bugged",
    description: "Whenever the hacker 'Hacks' the crew, the crew is unable to unhack any of the nodes",
    tags: ["Bugged", "Unstable"],
  },
  {
    title: "Giant - bugged; can't climb up ladders",
    status: "Bugged",
    description: "Whenever with the Giant modifier, the player get's pushed off of the ladders, into the out of bounds section of the map",
    tags: ["Bugged", "Unstable"],
  },
];

// 🚀 New roles section (you can customize or expand this)
const plannedRoles = [
  {
    name: "Witch Doctor",
    team: "Coven",
    description: "Can curse players to disable their abilities temporarily.",
  },
  {
    name: "Dark Fairy",
    team: "Coven",
    description: "Darken players to add them to your team. If you lose, the darkened players lose as well, and the same for winning.",
  },
  {
    name: "Mimic",
    team: "Neutral",
    description: "You can vote someone to kill them and take their place.",
  },
  {
    name: "Survivor",
    team: "Neutral",
    description: "Stay alive to win, that's all.",
  },
  {
    name: "Puppeteer",
    team: "Impostor",
    description: "Controll other players and let them kill for you.",
  },
  {
    name: "Glow",
    team: "Modifier",
    description: "You give off light when lights are down.",
  },
  {
    name: "Bait",
    team: "Modifier",
    description: "Make your killer self-report.",
  },
  {
    name: "Burst",
    team: "Modifier",
    description: "You kill other players in your radius when you die.",
  },
];

export default function Roadmap() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">TOR-W: L Roadmap</h1>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Tag Legends</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(tagColors).map(([label, color]) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded-full ${color}`}></span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <ul className="space-y-4">
        {roadmapItems.map((item, index) => {
          const displayStatus = statusMap[item.status] || item.status;
          const bgColor = statusColors[displayStatus] || "bg-gray-200";

          return (
            <li key={index} className={`p-4 rounded shadow ${bgColor}`}>
              <div className="text-xl font-semibold text-gray-900">{item.title}</div>
              <div className="text-gray-700 mb-1">Status: {displayStatus}</div>
              <div className="text-gray-800 mb-2">{item.description}</div>
              <div className="flex gap-2 flex-wrap">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`w-3 h-3 rounded-full ${tagColors[tag]}`}
                    title={tag}
                  ></span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      {/* 💠 Role Cards Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white mb-4">🧙 Planned Roles (v1.2.0)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plannedRoles.map((role, index) => (
            <div
              key={index}
              className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 relative"
            >
              <div
                className="bg-black p-6 rounded-xl text-white h-full relative 
                           hover:shadow-[0_0_15px_rgba(225,225,225,1)] 
                           hover:-translate-y-1 active:-translate-y-1 
                           transition duration-200 ease-in-out"
              >
                {/* ROLE / MODIFIER tag */}
                <div className="absolute top-2 right-2">
                  {role.team === "Modifier" ? (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                      MODIFIER
                    </span>
                  ) : (
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ROLE
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{role.name}</h3>
                <p className="italic text-sm mb-1">Team: {role.team}</p>
                <p>{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
