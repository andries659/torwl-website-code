import type { Route } from "./+types/installation";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as emoji from "node-emoji"; // ✅ fixed import

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Mod Notices" }];
}

function renderDiscordEmoji(text: string): string {
  const regex = /<a?:([\w]+):(\d+)>/g;
  return text.replace(regex, (_, name, id) => {
    const ext = _.startsWith('<a:') ? 'gif' : 'webp';
    return `![](https://cdn.discordapp.com/emojis/${id}.${ext}?size=32)`;
  });
}

const isDiscordChannelLink = (href: string) => {
  return href.startsWith("https://discord.com/channels/");
};

// Replace emoji shortcodes with actual emojis
const rawNotices = [
  `**Dev Build Notice <:megaphone:1367962028916084786>**\n
As y'all might've seen, there have been 3 dev builds. None were public or published, so I've come to a conclusion, to post ***daily** small/big dev builds, each containing something to test before v1.2.0 releases.\n\n
**Dev-4 Build <:dev:904792335668359190>**\n
As y'all saw, Dev-1, Dev-2 & Dev-3 were all unannounced at all, but has been in the modNews JSON file, containing updates of what was added/changed/removed, or containing weird but silly bugs.
But v1.2.0-Dev-4 will be a publicly released dev build, which is **NOT** behind paywalls/boosting whatsoever, this is because people feel like the mod owner is greedy and needs any money just to continue their mods. The dev builds will be published in [💻│test-builds](https://discord.com/channels/1246386585419911218/1289344992933838964).\n\n
**Smol Sneak Peek For Dev-4 <:rainbow_penguin_peek:1226304396686524478>**\n
This version will contain, a new role (basically two, but Dark Fairy is incomplete), known as Survivor. All the previous roles that won in the poll, will be added to the dev builds, each containing something special, same for a QOL update <a:Eyes:1251498705471803536>.\n\n
Happy playing, and have a great day/evening!\n\n
— angel <:Etto:1249785837995032678>\n\n
*All dev build might not get released daily, due to some personal issues/plans, or just school getting in the way!`,
];

// Convert :emoji: to actual emoji
const notices = rawNotices.map((text) =>
  renderDiscordEmoji(emoji.emojify(text))
);

export default function ModNotices() {
  return (
    <section className="text-white space-y-10">
      <br />
      <div className="w-full max-w-7xl mx-auto bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl text-center border-2 border-red-500">
        <h2 className="text-2xl text-red-500 font-semibold">📢 Mod Notices</h2>
        <p className="mt-2">Stay up to date with the latest updates, warnings, and important information for TOR-W: L.</p>
        <p className="mt-2 font-semibold">Supports Discord formatting & emojis</p>
      </div>

      {/* Notices */}
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {notices.map((notice, i) => (
          <div
            key={i}
            className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur text-left shadow-lg"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-invert max-w-full"
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    style={{ width: "20px", height: "20px", display: "inline-block", verticalAlign: "middle" }}
                  />
                ),
                a: ({ href, children, ...props }) => {
                  if (href && isDiscordChannelLink(href)) {
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 transition"
                        style={{ textDecoration: "none" }}
                      >
                        <span>#</span>
                        <span>{children}</span>
                      </a>
                    );
                  }
                  // Default anchor rendering
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                      {children}
                    </a>
                  );
                },
              }}
            >
              {notice}
            </ReactMarkdown>
          </div>
        ))}
      </div>
      <br />
    </section>
  );
}
