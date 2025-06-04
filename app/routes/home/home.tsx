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
  const [showModal, setShowModal] = useState(false);
  const [releaseTitle, setReleaseTitle] = useState('');

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
        content: `📥 **Feedback Received**\n\n**User:** ${username}\n**Type:** ${feedbackType}\n**Message:**\n${message}`
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

  useEffect(() => {
    fetch('https://api.github.com/repos/TownofReworked/TORWLaunchpad/releases/latest')
      .then(res => res.json())
      .then(data => setReleaseTitle(data.name))
      .catch(err => console.error('Failed to fetch release title:', err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-10">
      <div className="w-full max-w-7xl bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl text-center border-2 border-yellow-500">
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
              </a>, but here are a couple of them:<br />
              <ul className="list-disc list-inside text-left text-white mt-4 space-y-1">
                <li>Gradient Colors</li>
                <li>Special Voting Modes</li>
                <li>Feature-Rich Roles</li>
                <li>New Game Options</li>
                <li>Exciting Gamemodes</li>
              </ul>
            </p>
          </section>

          {/* Compatibility */}
          <section>
            <h2 className="text-2xl text-yellow-500 font-semibold">🔧 Compatibility</h2>
            <p className="text-lg text-white text-justify mt-2">
              <ul className="list-disc list-inside text-left text-white mt-2 space-y-1">
                <li>Supports 2025.3.25 (16.0.0) on PC (Android support coming soon™).</li>
                <li>TOR-W: Launchpad is <b>NOT</b> a host-only mod. Every player needs to install it to enjoy.</li>
                <li>TOR-W: Launchpad does <b>NOT</b> work on normal Among Us servers. We host our own private game servers instead.</li>
              </ul>
            </p>
          </section>

          {/* Installation */}
          <section>
            <h2 className="text-2xl text-yellow-500 font-semibold">📥 Installation</h2>
            <p className="text-lg text-white text-justify mt-2">
              <b>For manual installation, you must also download:<br /></b>
              <ul className="list-disc list-inside text-left text-white mt-2 space-y-1">
                <li>Unity.Il2Cpp win-x86 BepInEx build</li>
                <li>Reactor</li>
                <li>Mira API</li>
              </ul><br />
            </p>
          </section>
        </header>
      </div>

      <div className="w-full max-w-7xl bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl text-center border-2 border-yellow-500">
        <div className="flex items-start space-x-4">
          <div className="text-3xl">📢</div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-500">Town Of Re-Worked: Launchpad</h3>
            <p className="mt-2 text-sm text-gray-200">
              Elevate your Among Us gameplay with our client-sided mod. Customize settings, add new roles, and create a unique experience for your crew. Ideal for streamers and private lobbies!
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
            >
              Read More
            </button>

            {showModal && (
              <div
                onClick={() => setShowModal(false)}
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              >
                <div
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the modal itself
                  className="bg-white p-6 rounded-lg text-black"
                >
                  So far there’s no extra info!<br />
                  :(
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl border-2 border-yellow-500 mx-auto">
      <div className="flex items-start space-x-4">
        <div className="text-3xl">✨</div>
        <div className="flex-1 text-center">
          <h3 className="text-2xl font-bold text-yellow-500">Download</h3>
          <p className="mt-2 text-sm text-gray-200">
            The mod is posted on GitHub. Pressing the "Download" button will take you to the latest release published.<br />
            The mod will not be updated for a long time now, due to my exams.
          </p>

          {releaseTitle && (
            <p className="mt-2 text-sm text-yellow-400">
              <strong>Latest release:</strong> {releaseTitle}
            </p>
          )}

          <button
            onClick={() => window.open('https://github.com/TownofReworked/TORWLaunchpad/releases/latest', '_blank')}
            className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
          >
            Download
          </button>
        </div>
      </div>
    </div>

      {/* Feedback Form */}
      <div className="w-full max-w-7xl bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl text-center border-2 border-yellow-500">
        <h2 className="text-2xl font-bold text-yellow-500 text-center">📝 Send Feedback</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            className="w-full p-3 bg-black/40 border border-white/20 rounded"
            placeholder="Discord Username (e.g. andries123)"
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
