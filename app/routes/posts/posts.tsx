import type { Route } from "./+types/posts";
import { CalendarIcon, UserIcon } from "lucide-react";
import PostMeta from "../../components/PostMeta";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Posts" }];
}

// Example post list – in a real app you'd fetch or import this
const posts = [
  {
    title: "Website Updates",
    href: "/posts/website-updates",
    category: "Website",
    date: "May 25, 2025",
    updated: "May 27, 2025",
    author: "Andries",
  },
  {
    title: "Mod Updates",
    href: "/posts/mod-updates",
    category: "Mod",
    date: "May 26, 2025",
    updated: "May 27, 2025",
    author: "Andries",
  },
  // Add more posts here
];

export default function PostsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-center">Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.href}
            className="rounded-xl border p-6 hover:bg-muted transition-colors"
          >
            <a
              href={post.href}
              className="block text-xl font-semibold hover:underline"
            >
              {post.title}
            </a>
            <PostMeta
              category={post.category}
              date={post.date}
              updated={post.updated}
              author={post.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
