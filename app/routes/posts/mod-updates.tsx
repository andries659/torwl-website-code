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

      <div className="mt-8 flex flex-col items-center gap-6">
        {releases.map((release) => (
          <div
            key={release.id}
            className="w-full max-w-7xl bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl text-center border-2 border-yellow-500"
          >
            <h2 className="text-2xl font-bold mb-2">{release.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Published on {new Date(release.published_at).toLocaleDateString()}
            </p>
            <div
              className="text-left prose prose-invert max-w-none mx-auto"
              dangerouslySetInnerHTML={{
                __html: (window as any).marked?.parse(release.body || "") || "",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
