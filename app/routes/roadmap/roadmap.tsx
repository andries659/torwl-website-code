import React from "react";

export function meta() {
  return [{ title: "Roadmap" }];
}

const roadmapItems = [
  { title: "Core game logic", status: "Completed" },
  { title: "Role system", status: "In Progress" },
  { title: "Custom UI", status: "Planned" },
  { title: "Online multiplayer", status: "Planned" },
];

// Map statuses to Tailwind background color classes
const statusColors: Record<string, string> = {
  "Completed": "bg-green-200",
  "In Progress": "bg-yellow-200",
  "Planned": "bg-blue-200",
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
            <div className="text-gray-700">Status: {item.status}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
