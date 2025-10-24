"use client";

import { useEffect, useState } from "react";
import { FaHistory, FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "github-markdown-css/github-markdown-dark.css";
import "highlight.js/styles/github-dark.css";

export default function ChangelogSection() {
    const [changelog, setChangelog] = useState("");
    const [version, setVersion] = useState("");
    const [htmlUrl, setHtmlUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchChangelog() {
            try {
                const res = await fetch(
                    "https://api.github.com/repos/TownofReworked/TORWLaunchpad/releases/latest"
                );
                const data = await res.json();
                if (data?.body) setChangelog(data.body);
                if (data?.tag_name) setVersion(data.tag_name);
                if (data?.html_url) setHtmlUrl(data.html_url);
            } catch (err) {
                console.error("Failed to fetch changelog:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchChangelog();
    }, []);

    return (
        <section className="w-full flex flex-col items-center justify-center text-white px-4 py-10">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-gray-800 rounded-xl shadow-lg p-6">
                {/* Header */}
                <div className="flex flex-col items-center justify-center gap-3 mb-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-lg"
                            style={{ backgroundColor: "rgba(245,158,11,0.2)" }} // light yellow/orange bg
                        >
                            <FaHistory className="text-yellow-500 text-2xl" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Changelog {version && `(${version})`}
                        </h2>
                    </div>
                </div>

                {/* Markdown Changelog */}
                {loading ? (
                    <p className="text-gray-300 text-center">Fetching changelog...</p>
                ) : changelog ? (
                    <article
                        className="markdown-body bg-[#0d1117] p-4 rounded-lg border border-gray-800 overflow-x-auto"
                        style={{
                            colorScheme: "dark",
                            fontWeight: 400,
                        }}
                    >
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                        >
                            {changelog}
                        </ReactMarkdown>

                        {/* View on GitHub Button at the bottom */}
                        {htmlUrl && (
                            <div className="flex justify-center mt-6">
                                <a
                                    href={htmlUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-[#238636] hover:bg-[#2ea043] text-white px-5 py-2.5 rounded-lg font-medium shadow-md transition-transform hover:scale-105"
                                >
                                    <FaGithub className="text-xl" />
                                    View on GitHub
                                </a>
                            </div>
                        )}
                    </article>
                ) : (
                    <p className="text-gray-400 text-center">No changelog available.</p>
                )}
            </div>
        </section>
    );
}
