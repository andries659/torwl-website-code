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
    status: "In Progress",
    description: "Implementing modular custom roles.",
    tags: ["In The Works", "Unfinished"],
  },
];

export default function Roadmap() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Project Roadmap</h1>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Tag Legend</h2>
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
              <div className="text-gray-700 italic mb-1">Status: {displayStatus}</div>
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
    </main>
  );
                                                                  }
