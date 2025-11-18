"use client";

import { useEffect, useState } from "react";
import { FaNewspaper } from "react-icons/fa6";
import { MdCancel, MdNewReleases } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function NewsModal({ onClose }) {
    const [news, setNews] = useState(null);
    const [selected, setSelected] = useState(null);

    // Load news and track seen status
    useEffect(() => {
        let intervalId;

        async function load() {
            try {
                const res = await fetch("/news/news.json");
                let data = await res.json();

                // Sort by id descending (highest id first)
                data.sort((a, b) => b.id - a.id);

                // Get seen news from localStorage
                const seen = JSON.parse(localStorage.getItem("seenNews") || "[]");

                // Add a 'seen' property to each item
                const updatedNews = data.map(n => ({
                    ...n,
                    seen: seen.includes(n.id)
                }));

                setNews(updatedNews);
            } catch (err) {
                console.error("Failed to load news:", err);
            }
        }

        // Initial load
        load();

        // Poll every 10 seconds to update NEW badges
        intervalId = setInterval(load, 10000);

        return () => clearInterval(intervalId);
    }, []);

    // Mark item as read when clicked
    function openArticle(item) {
        setSelected(item);

        const seen = JSON.parse(localStorage.getItem("seenNews") || "[]");
        if (!seen.includes(item.id)) {
            const updatedSeen = [...seen, item.id];
            localStorage.setItem("seenNews", JSON.stringify(updatedSeen));

            // Update the news state so NEW badge disappears immediately
            setNews(prev => prev.map(n =>
                n.id === item.id ? { ...n, seen: true } : n
            ));
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
            <div className="bg-gray-900 p-6 rounded-xl w-full max-w-lg text-white relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl cursor-pointer hover:text-red-600 transition-colors"
                    title="Close"
                >
                    <MdCancel className="w-6 h-6 md:w-8 md:h-8 text-red-900" />
                </button>

                {!selected ? (
                    <>
                        <h2 className="text-2xl font-bold text-amber-300 flex mb-4 gap-2">
                            <FaNewspaper className="w-6 h-6 md:w-8 md:h-8 text-green-600" /> Latest News
                        </h2>

                        {!news ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                                {news.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => openArticle(item)}
                                        className="border border-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
                                                {item.title}
                                                {!item.seen && (
                                                    <MdNewReleases className="text-red-500" size={20} />
                                                )}
                                            </h3>
                                            <span className="text-sm text-gray-400">{item.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div>
                        <button
                            onClick={() => setSelected(null)}
                            className="mb-4 flex items-center cursor-pointer hover:text-blue-400 transition-colors"
                            title="Back"
                        >
                            <IoMdArrowRoundBack className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                        </button>

                        <h2 className="text-2xl font-bold text-yellow-300 mb-2">{selected.title}</h2>
                        <p className="text-sm text-gray-400 mb-4">{selected.date}</p>
                        <p className="whitespace-pre-line leading-relaxed">{selected.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
