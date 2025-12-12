"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function FeaturesPage() {
    // RainbowText function defined inside the page
    function RainbowText({ text }) {
        const colors = [
            "rgb(255,127,80)",   // Coral
            "rgb(128,128,0)",    // Olive
            "rgb(42,82,190)",    // Cerulean
            "rgb(255,218,185)",  // Peach
            "rgb(255,0,255)",    // Magenta
            "rgb(220,20,60)",    // Crimson
            "rgb(0,255,255)",    // Aqua
            "rgb(242,133,0)",    // Tangerine
            "rgb(106,90,205)",   // SlateBlue
            "rgb(0,255,0)",      // Lime
            "rgb(210,105,30)",   // Chocolate
            "rgb(218,112,214)",  // Orchid
            "rgb(0,130,120)",    // TealGreen
            "rgb(224,17,95)",    // Ruby
            "rgb(207,113,207)",  // SkyMagenta
            "rgb(152,255,152)",  // MintGreen
            "rgb(25,25,112)",    // MidnightBlue
            "rgb(255,120,150)",  // AmberRose
            "rgb(222,49,99)",    // Cerise
            "rgb(238,232,170)"   // PaleGold
        ];

        const [offset, setOffset] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setOffset((prev) => (prev + 1) % colors.length);
            }, 150); // change every 150ms, adjust for speed
            return () => clearInterval(interval);
        }, []);

        return (
            <span>
                {text.split("").map((char, i) => (
                    <span
                        key={i}
                        style={{ color: colors[(i + offset) % colors.length], transition: "color 0.15s linear" }}
                    >
                        {char}
                    </span>
                ))}
            </span>
        );
    }

    const features = [
        {
            title: "Main Menu Rework",
            description:
                "The UI has been set to fit the color theme of this mod, which, as you can see, is blue.\nIt removes the normal Among Us logo and adds the custom TOR-W: L logo.",
            image: "/features/feature1.png",
        },
        {
            title: "MANY COLORS!!!!!",
            description: (
                <>
                    There are many colors to choose from, in the latest update, there was <b><RainbowText text="20 extra" /></b> colors added!!<br />
                    You can even add a <b>SECONDARY</b> color!
                </>
            ),
            image: "/features/feature2.png",
        },
        {
            title: "Custom News",
            description:
                "I basically took this idea from another mod, which was taken from another mod, so yeah, self explanatory.",
            image: "/features/feature3.png",
        },
        {
            title: "Custom Settings",
            description:
                "Customize your game to your liking with the custom settings TOR-W: L has to offer!",
            image: "/features/feature4.png",
        },
        {
            title: "Custom Presets",
            description:
                "MiraAPI provides the working functionality for this to work, the mod allows you add custom templates/presets.",
            image: "/features/feature5.png",
        },
        {
            title: "Game Settings",
            description:
                "Customize the matches to your liking. Just also ask what hey do before enabling some of them...",
            image: "/features/feature6.png",
        },
        {
            title: "Custom & Unique Roles",
            description:
                <p>This mod adds <span style={{ color: "rgb(207,113,207)", fontWeight: "bold" }}>21 UNIQUE</span> roles to spice up the game. Feel free to test them in freeplay first.</p>,
            image: "/features/feature7.png",
        },
        {
            title: "Custom & Unique Modifiers",
            description:
                <p>This mod adds <span style={{ color: "rgb(0,255,255)", fontWeight: "bold" }}>6 UNIQUE</span> modifiers to the game (excluding Vendetta).</p>,
            image: "/features/feature8.png",
        },
        {
            title: "Lobby UI",
            description:
                "The Lobby Pane has been customized to fit the feel and volor xcheme of the mod.",
            image: "/features/feature9.png",
        },
        {
            title: "\"Take NOTES!!\"",
            description:
                "The Notepad feature helps players take notesduring the game, so that there is no mis information among the crew.",
            image: "/features/feature10.png",
        },
        {
            title: "Settings View Pane UI",
            description:
                "The color scheme was also applied here, but the buttons have been finished, there are plans to also change the background as well.",
            image: "/features/feature11.png",
        },
        {
            title: "Custom Button Ability Counters",
            description:
                "Added custom Ability Counters for each role depending on the action.",
            image: "/features/feature12.png",
        },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center px-4 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white space-y-16">
                <h1 className="text-4xl font-bold text-center mb-12">TOR-W: L Features</h1>

                {features.map((f, i) => (
                    <section
                        key={i}
                        className={`flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-xl p-8 rounded-xl max-w-4xl w-full ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-1/2">
                            <img src={f.image} alt={f.title} className="w-full h-auto" />
                        </div>

                        <div className="space-y-4 w-full md:w-1/2">
                            <h2 className="text-3xl font-semibold">{f.title}</h2>
                            {typeof f.description === "string" ? (
                                <p
                                    className="text-lg opacity-90"
                                    dangerouslySetInnerHTML={{ __html: f.description }}
                                ></p>
                            ) : (
                                <div className="text-lg opacity-90">{f.description}</div>
                            )}
                        </div>
                    </section>
                ))}

                <Footer />
            </main>
        </>
    );
}
