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

// ✅ Add `finished: true` for roles/modifiers that are done
const plannedRoles = [
  {
    name: "Snitch",
    team: "Crewmate",
    description: (
  <>
    Finish tasks to see the <span className="text-red-500">Impostors</span>. Be warned, once you see them, they can see you.
  </>
),
    finished: false,
    percent: 0,
  },
  {
    name: "Witch Doctor",
    team: "Coven",
    description: "Can curse players to disable their abilities temporarily.",
    finished: true,
    percent: 100,
  },
  {
    name: "Dark Fairy",
    team: "Coven",
    description: "Darken players to add them to your team. If you lose, the darkened players lose as well, and the same for winning.",
    finished: true,
    percent: 90,
  },
  {
    name: "Arsonist",
    team: "Neutral",
    description: "Douse players and ignite them to win.",
    finished: false,
    percent: 0,
  },
  {
    name: "Survivor",
    team: "Neutral",
    description: "Stay alive to win, that's all.",
    finished: false,
    percent: 90,
  },
  {
    name: "Blackmailer",
    team: "Impostor",
    description: (
  <>
    Mute other players so they can't talk in the <b>next</b> meeting.
  </>
),
    finished: false,
    percent: 0,
  },
  {
    name: "Glow",
    team: "Modifier",
    description: "You give off light when lights are down.",
    finished: true,
    percent: 100,
  },
  {
    name: "Bait",
    team: "Modifier",
    description: "Make your killer self-report.",
    finished: true,
    percent: 100,
  },
  {
    name: "Burst",
    team: "Modifier",
    description: "You kill other players in your radius when you die.",
    finished: true,
    percent: 100,
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
          {/* Badges container - fixed single row with bottom border */}
          <div className="absolute top-2 left-2 right-2 flex overflow-x-auto whitespace-nowrap border-b border-gray-600 pb-1 pr-2">
            {/* ROLE / MODIFIER badge */}
            <span
              className={`inline-block text-white text-xs font-bold px-2 py-1 rounded mr-2 ${
                role.team === "Modifier" ? "bg-yellow-500" : "bg-blue-600"
              }`}
            >
              {role.team === "Modifier" ? "MODIFIER" : "ROLE"}
            </span>

            {/* Percent badge */}
            {role.percent !== undefined && (
              <span
                className={`inline-block text-white text-xs font-bold px-2 py-1 rounded mr-2 ${
                  role.percent === 0
                    ? "bg-gradient-to-r from-red-900 to-red-700"
                    : role.percent === 10
                    ? "bg-gradient-to-r from-red-800 to-red-500"
                    : role.percent === 20
                    ? "bg-gradient-to-r from-red-700 to-red-400"
                    : role.percent === 30
                    ? "bg-gradient-to-r from-orange-600 to-orange-300"
                    : role.percent === 40
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-300"
                    : role.percent === 50
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-200"
                    : role.percent === 60
                    ? "bg-gradient-to-r from-lime-500 to-lime-300"
                    : role.percent === 70
                    ? "bg-gradient-to-r from-green-600 to-green-400"
                    : role.percent === 80
                    ? "bg-gradient-to-r from-green-500 to-green-300"
                    : role.percent === 90
                    ? "bg-gradient-to-r from-green-500 to-green-200"
                    : "bg-gradient-to-r from-emerald-500 to-emerald-200"
                }`}
                style={{ whiteSpace: "nowrap" }}
              >
                {role.percent}%
              </span>
            )}

            {/* Finished badge */}
            {role.finished && (
              <span
                className="inline-block text-white text-xs font-bold px-2 py-1 rounded bg-gradient-to-r from-blue-900 to-blue-400"
                style={{ whiteSpace: "nowrap" }}
              >
                Finished!
              </span>
            )}
          </div>

          {/* Content (pushed down by padding top due to absolute badges) */}
          <div className="pt-10">
            <h3 className="text-xl font-bold mb-2">{role.name}</h3>
            <p className="italic text-sm mb-1">Team: {role.team}</p>
            <p>{role.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
              }
