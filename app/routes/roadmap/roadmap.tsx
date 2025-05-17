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

export default function Roadmap() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Project Roadmap</h1>
      <ul className="space-y-4">
        {roadmapItems.map((item, index) => (
          <li key={index} className="p-4 border rounded shadow">
            <div className="text-xl font-semibold">{item.title}</div>
            <div className="text-gray-500">Status: {item.status}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
