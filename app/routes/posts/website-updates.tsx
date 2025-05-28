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
        date="May 25, 2025"
        updated="May 27, 2025"
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
          <li>Added the Posts section with Website Updates.</li>
          <li>Added roles from v1.1.0 to the Roles page.</li>
          <li>Made a sleek design for Roadmaps page.</li>
          <li>Added some smooth dropdown transitions for TOR-W & Events Bots.</li>
          <li>Added the "Mod Updates" to the Posts page.</li>
          <li>Added the "Website Updates" to the Posts page.</li>
        </ul>
        <br />
        <div className="mb-4">
          <img
            src="/BUGZONE-1024x160.webp"
            alt="Latest Mod Update Banner"
            className="mx-auto rounded-lg max-h-24 w-auto object-contain"
          />
        </div>
        <p>So far there asre no bugs as of right now!</p>
      </div>
    </div>
  );
}
