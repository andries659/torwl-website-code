import React from "react";

export function meta() {
  return [{ title: "Roadmap" }];
}

const roadmapItems = [
  {
    title: "Core game logic",
    status: "Completed",
    description: "All core game systems are finished and functional.",
  },
  {
    title: "Role system",
    status: "In Progress",
    description: "Implementing custom roles with unique abilities.",
  },
  {
    title: "Custom UI",
    status: "Planned",
    description: "New UI layout for role selection and voting screen.",
  },
  {
    title: "Networking bugs",
    status: "Bugged",
    description: "Multiplayer sync issues and desync glitches.",
  },
];

const statusColors: Record<string, string> = {
  Completed: "bg-green-200",
  "In Progress": "bg-yellow-200",
  Planned: "bg-blue-200",
  Bugged: "bg-red-200",
};

export default function Roadmap() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Project Roadmap</h1>
      <ul className="space-y-4">
        {roadmapItems.map((item, index) => (
          <li
            key={index}
            className={`p-4 rounded shadow ${statusColors[item.status] || "bg-gray-200"}`}
          >
            <div className="text-xl font-semibold">{item.title}</div>
            <div className="text-gray-700 italic mb-1">Status: {item.status}</div>
            <div className="text-gray-800">{item.description}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
