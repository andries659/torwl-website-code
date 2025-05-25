import type { Route } from "./+types/website-updates";
import PostMeta from "../../components/PostMeta";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Website Updates" },
  ];
}

export default function WebsiteUpdates() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <PostMeta
        category="Website"
        date="May 20, 2025"
        author="Andries"
      />

      <h1 className="text-3xl font-bold mt-6">Website Updates</h1>

      <p className="mt-4 text-muted-foreground">
        Welcome to the website updates page! Here, you'll find the latest features, bug fixes,
        and changes to our site. Stay tuned for more!
      </p>

      <div className="mt-8 text-left">
        <h2 className="text-xl font-semibold mb-2">Latest Changes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Added new UI for post meta display.</li>
          <li>Improved layout on mobile devices.</li>
          <li>Bug fix: header icons now align properly.</li>
        </ul>
      </div>
    </div>
  );
}
