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

// 🧠 Formats ISO dates to readable form
function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ✅ Basic Markdown & block tag parser
function parseMarkdown(md: string): string {
  let html = md;

  // Support for callout blocks
  html = html.replace(
    /^> *\[!(WARNING|INFO|TIP|NOTE|DANGER)\]\s*\n?>?(.*(?:\n?>?.+)*)/gim,
    (_, type, content) => {
      const colorMap: Record<string, string> = {
        WARNING: "border-yellow-500 bg-yellow-100/10",
        INFO: "border-blue-500 bg-blue-100/10",
        TIP: "border-green-500 bg-green-100/10",
        NOTE: "border-white/40 bg-white/5",
        DANGER: "border-red-500 bg-red-100/10",
      };
      return `<div class="border-l-4 p-4 my-2 rounded-md ${colorMap[type] || ""}">
        <strong>${type}:</strong> ${content.replace(/^> ?/gm, "").trim()}
      </div>`;
    }
  );

  // Headings
  html = html.replace(/^### (.*)$/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*)$/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*)$/gim, "<h1>$1</h1>");

  // Lists
  html = html.replace(/^\s*[-*] (.*)$/gim, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>");
  html = html.replace(/<\/ul>\s*<ul>/gim, "");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");

  // Line breaks
  html = html.replace(/\n/g, "<br>");

  return html.trim();
}

export default function ModUpdates() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [openRelease, setOpenRelease] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/TownofReworked/TORWLaunchpad/releases")
      .then((res) => res.json())
      .then((data) => setReleases(data))
      .catch((err) => console.error("Error fetching releases:", err));
  }, []);

  const latestDate =
    releases.length > 0
      ? releases
          .map((r) => new Date(r.published_at))
          .sort((a, b) => b.getTime() - a.getTime())[0]
      : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <PostMeta
        category="Mod"
        date="May 26, 2025"
        updated={latestDate ? formatDate(latestDate.toISOString()) : "Unknown"}
        author="Andries"
      />

      <h1 className="text-3xl font-bold mt-6">Mod Updates</h1>

      <p className="mt-4 text-muted-foreground">
        Welcome to the mod updates page! Here, you'll find the latest features, bug fixes,
        and changes to our mod. Stay tuned for more!
      </p>

      <div className="mt-8 flex flex-col items-center gap-6">
        {releases.map((release) => {
          const isOpen = openRelease === release.id;
          return (
            <div
              key={release.id}
              className="w-full max-w-7xl bg-black/50 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-xl text-center border-2 border-yellow-500"
            >
              <button
                onClick={() => setOpenRelease(isOpen ? null : release.id)}
                className="w-full text-left focus:outline-none"
              >
                <h2 className="text-2xl font-bold mb-2">{release.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Published on {formatDate(release.published_at)}
                </p>
              </button>

              {isOpen && (
                <div
                  className="text-left prose prose-invert max-w-none mx-auto mt-6"
                  dangerouslySetInnerHTML={{
                    __html: parseMarkdown(release.body || "No changelog provided."),
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
