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

// Replace emoji shortcodes with actual emojis
const rawNotices = [
  `> ⚠️ **Warning:** Version \`1.2.4\` is not compatible with Among Us v2024.7.23!  
  Please downgrade or wait for an update.`,

  `<:Etto:1249785837995032678> **New Update Released!**  
  The \`/contractor\` role has been revamped. Try it now! 🎉`,

  `:sparkles: *Community event this weekend!* Join our [Discord](https://discord.gg/yourserver) to participate.`,
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
