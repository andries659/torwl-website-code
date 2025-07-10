import { useEffect, useState } from "react";
import type { Route } from "./+types/mod-updates";
import PostMeta from "../../components/PostMeta";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Mod Updates" }];
}

interface Release {
  id: number;
  name: string;
  body: string;
  tag_name: string;
  published_at: string;
}

export default function ModUpdates() {
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/TownofReworked/TORWLaunchpad/releases")
      .then(res => res.json())
      .then(data => setReleases(data))
      .catch(err => console.error("Error fetching releases:", err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <PostMeta
        category="Mod"
        date={releases[0]?.published_at ?? "Unknown"}
        updated={releases[0]?.published_at ?? "Unknown"}
        author="Andries"
      />

      <h1 className="text-3xl font-bold mt-6">Mod Updates</h1>

      <p className="mt-4 text-muted-foreground">
        Welcome to the mod updates page! Here, you'll find the latest features, bug fixes,
        and changes to our mod. Stay tuned for more!
      </p>

      <div className="mt-8 text-left">
        <h2 className="text-xl font-semibold mb-4">Latest Changes</h2>

        {releases.map((release, idx) => (
          <div key={release.id} className="mb-8">
            <div className="mb-2">
              <img
                src={`/version-${release.tag_name}.png`}
                alt={`Update ${release.tag_name}`}
                className="mx-auto rounded-lg max-h-24 w-auto object-contain"
              />
            </div>

            <h3 className="text-lg font-bold mb-2">{release.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Published on {new Date(release.published_at).toLocaleDateString()}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {release.body.split("\n").map((line, i) =>
                line.trim() ? <li key={i}>{line.replace(/^[-*]\s*/, "")}</li> : null
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
