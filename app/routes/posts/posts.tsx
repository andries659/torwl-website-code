import type { Route } from "./+types/posts";
import { CalendarIcon } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "News" }];
}

const posts = [
  {
    title: "Website Updates",
    href: "/news/website-updates",
    category: "Website",
    date: "May 25, 2025",
    updated: "May 27, 2025",
    author: "Andries",
    image: "/web-updates.webp", // Add appropriate image paths
    tags: ["UPDATE", "WEBSITE", "DEV LOG"],
  },
  {
    title: "Mod Updates",
    href: "/news/mod-updates",
    category: "Mod",
    date: "May 26, 2025",
    updated: "August 13, 2025",
    author: "Andries",
    image: "/mod-updates.webp",
    tags: ["MOD", "PATCH NOTES", "DEV LOG"],
  },
  {
    title: "Mod Notices",
    href: "/news/mod-notices",
    category: "Mod",
    date: "May 26, 2025",
    updated: "May 27, 2025",
    author: "Andries",
    image: "/mod-notices.png",
    tags: ["MOD", "NOTICE", "IMPORTANT", "UPDATE"]
  },
];

export default function PostsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-extrabold text-white">News</h1>
        <div className="ml-4 h-0.5 w-20 bg-red-500" />
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <a key={post.href} href={post.href} className="group block rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-neutral-800 bg-neutral-900">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex flex-wrap gap-2 text-xs font-bold uppercase text-white">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-red-600 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                {post.date}
              </div>
              <h2 className="text-lg font-bold text-white group-hover:underline">{post.title}</h2>
            </div>
          </a>
        ))}
      </div>
      <br />
      <a href="/news" className="text-sm font-semibold text-red-500 hover:underline">More News →</a>
    </div>
  );
}
