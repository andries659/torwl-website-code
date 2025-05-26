import type { Route } from "./+types/mod-updates";
import PostMeta from "../../components/PostMeta";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Mod Updates" },
  ];
}

export default function ModUpdates() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <PostMeta
        category="Mod"
        date="May 26, 2025"
        author="Andries"
      />

      <h1 className="text-3xl font-bold mt-6">Mod Updates</h1>

      <p className="mt-4 text-muted-foreground">
        Welcome to the mod updates page! Here, you'll find the latest features, bug fixes,
        and changes to our mod. Stay tuned for more!
      </p>

      <div className="mt-8 text-left">
        <h2 className="text-xl font-semibold mb-2">Latest Changes</h2>

        {/* Image directly below the heading */}
        <div className="mb-4">
          <img
            src="/version-1-0-0.png" // Replace with your image path
            alt="Latest Mod Update Banner"
            className="rounded-lg w-full object-cover"
          />
        </div>

        <ul className="list-disc list-inside space-y-2">
          <li>Added new UI for post meta display.</li>
          <li>Improved layout on mobile devices.</li>
          <li>Added the Posts section with Website Updates.</li>
          <li>Added roles from v1.1.0 to the Roles page.</li>
          <li>Made a sleek design for Roadmaps page.</li>
          <li>Added some smooth dropdown transitions for TOR-W & Events Bots.</li>
        </ul>
      </div>
    </div>
  );
}
