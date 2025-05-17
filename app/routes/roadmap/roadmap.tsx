import React from "react";

export function meta() {
  return [{ title: "Roadmap" }];
}

const tagColors: Record<string, string> = {
  "Done!": "bg-green-500",
  "In The Works": "bg-yellow-500",
  "Bugged": "bg-red-500",
  "Unstable": "bg-orange-500",
  "Unfinished": "bg-blue-500",
  "Almost Done!": "bg-purple-500",
};

const statusColors: Record<string, string> = {
  Completed: "bg-green-200",
  "In Progress": "bg-yellow-200",
  Bugged: "bg-red-200",
  Planned: "bg-blue-200",
};

const roadmapItems = [
  {
    title: "Core game logic",
    status: "Completed",
    description: "All core systems are implemented and stable.",
    tags: ["Done!"],
  },
  {
    title: "Role system",
    status: "In Progress",
    description: "Implementing modular custom roles.",
    tags: ["In The Works", "Unstable"],
  },
  {
    title: "UI redesign",
    status: "Planned",
    description: "Revamping the interface for a cleaner look.",
    tags: ["Unfinished"],
  },
  {
    title: "Multiplayer sync",
    status: "Bugged",
    description: "Players are occasionally desynced in matches.",
    tags: ["Bugged", "Unstable"],
  },
  {
    title: "Settings menu",
    status: "In Progress",
    description: "Custom configuration support in progress.",
    tags: ["Almost Done!"],
  },
];

export default function Roadmap() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Project Roadmap</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Tag Legend</h2>
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
        {roadmapItems.map((item, index) => (
          <li
            key={index}
            className={`p-4 rounded shadow ${statusColors[item.status] || "bg-gray-200"}`}
          >
            <div className="text-xl font-semibold">{item.title}</div>
            <div className="text-gray-700 italic mb-1">Status: {item.status}</div>
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
        ))}
      </ul>
    </main>
  );
}
