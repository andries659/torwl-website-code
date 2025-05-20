import type { Route } from "./+types/home";
import { useState } from "react";
import logo from './logo.png'; // Updated path if local, adjust as needed
import { Filter } from "bad-words";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
  ];
}

export default function Home() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [username, setUsername] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const filter = new Filter();
    if (filter.isProfane(message)) {
      setStatus("error");
      alert("⚠️ Your feedback contains inappropriate language.");
      return;
    }

    try {
      const webhookUrl = "https://discord.com/api/webhooks/1373591931115802654/hqidEdHPb5EAA64RDr5VpiH8b1cwSfrODdEygsSsiV0d0FWIGc0Wl7DnJ6wIYuYecMNL"; // 🔒 Don't expose real webhook URLs in frontend
      const payload = {
        content: `📥 **New Feedback Received**\n\n**User:** ${username}\n**Type:** ${feedbackType}\n**Message:**\n${message}`
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("sent");
        setUsername("");
        setFeedbackType("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-6 sm:gap-10">
      <div className="w-full max-w-full sm:max-w-7xl bg-black/50 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-xl text-center border border-yellow-500">
        <h1 className="text-4xl text-yellow-500 font-bold">🚀 TOR-W Launchpad</h1>
        <img src={logo} alt="TOR-W Logo" className="mx-auto my-6 w-70 h-auto" />

        <header className="flex flex-col items-center gap-9">
          <a href="https://discord.com/invite/HczqtuBfcu" target="_blank" rel="noopener noreferrer">
            <img src="https://dcbadge.limes.pink/api/server/HczqtuBfcu" alt="Discord Server Badge" />
          </a>

          {/* About */}
          <section>
            <h2 className="text-2xl text-yellow-500 font-semibold">❔ About Us</h2>
            <p className="text-lg text-white mt-2">
              TOR-W: Launchpad is a mod for Among Us that adds in brand new roles, features, and gamemodes!<br />
              It is designed so that the roles and features stay somewhat consistent with the original game and don't feel out of place!
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl text-yellow-500 font-semibold">🌟 Features</h2>
            <p className="text-lg text-white text-justify mt-2">
              You can read about all of the features on the{" "}
              <a href="https://launchpad.xtracube.dev/" target="_blank" rel="noopener noreferrer"
                className="font-bold text-fuchsia-400 hover:underline hover:text-fuchsia-300">
                wiki
              </a>, but here are a couple of them:<br /><br />
              ✅ Gradient Colors<br />
              ✅ Special Voting Modes<br />
              ✅ Feature-Rich Roles<br />
              ✅ New Game Options<br />
              ✅ Exciting Gamemodes
            </p>
          </section>

          {/* Compatibility */}
          <section>
            <h2 className="text-2xl text-yellow-500 font-semibold">🔧 Compatibility</h2>
            <p className="text-lg text-white text-justify mt-2">
              ✔️ Supports 2025.3.25 (16.0.0) on PC (Android support coming soon™).<br />
              ❗️ TOR-W: Launchpad is <b>NOT</b> a host-only mod. Every player needs to install it to enjoy.<br />
              🔒 Launchpad does <b>NOT</b> work on normal Among Us servers. We host our own private game servers instead.
            </p>
          </section>

          {/* Installation */}
          <section>
            <h2 className="text-2xl text-yellow-500 font-semibold">📥 Installation</h2>
            <p className="text-lg text-white text-justify mt-2">
              <b>🛠️ For manual installation, you must also download:<br /><br /></b>
              • Unity.Il2Cpp win-x86 BepInEx build<br />
              • Reactor<br />
              • Mira API<br /><br />
            </p>
          </section>
        </header>
      </div>

      {/* Feedback Form */}
      <div className="w-full max-w-full sm:max-w-7xl bg-black/50 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-xl text-center border border-yellow-500">
        <h2 className="text-2xl font-bold text-yellow-500 text-center">📝 Send Feedback</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            className="w-full p-3 bg-black/40 border border-white/20 rounded"
            placeholder="Your Discord Username (e.g. andries123)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <select
            className="w-full p-3 bg-black/40 border border-white/20 rounded text-white"
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
            required
          >
            <option value="">Select Feedback Type</option>
            <option value="🐞 Bug Report">🐞 Bug Report</option>
            <option value="🎯 Feedback">🎯 Feedback</option>
            <option value="💡 Suggestion">💡 Suggestion</option>
            <option value="📝 Other">📝 Other</option>
          </select>

          <textarea
            className="w-full p-3 bg-black/40 border border-white/20 rounded resize-none"
            rows={4}
            placeholder="Write your feedback here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={status === "sending" || message.trim() === ""}
            className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 disabled:opacity-50 transition"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "sent" && <p className="text-green-400 text-sm">✅ Feedback sent!</p>}
          {status === "error" && <p className="text-red-400 text-sm">❌ Failed to send. Try again.</p>}
        </form>
      </div>
    </div>
  );
}
