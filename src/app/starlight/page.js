import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import { FaRocket, FaMobileAlt, FaDownload, FaInfoCircle, FaStar } from "react-icons/fa";

export const metadata = {
  title: "TOR-W: L | Starlight",
  description: "Quickly install and launch your Among Us mods on mobile."
};

export default function Starlight() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex flex-col items-center text-center px-4 pt-20 pb-20 text-white space-y-16"
        style={{
          backgroundImage: `
      radial-gradient(1200px 800px at 50% 35%, rgba(255, 215, 0, 0.25), transparent 55%),
      linear-gradient(135deg, rgb(42, 32, 0) 0%, rgb(15, 10, 0) 100%)
    `
        }}
      >
        {/* Hero Section */}
        <section className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Starlight Mobile Mod Launcher
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-100">
            Quickly install and launch your Among Us mods on mobile, with guides, features, and downloads.
          </p>
          <Link href="/">
            <button className="mt-8 px-6 py-3 rounded-2xl bg-yellow-500 text-gray-900 font-semibold shadow-lg hover:scale-105 transition">
              Back to Home
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-xl border-2 border-[#c49104]">
          <div className="flex items-center justify-center gap-2 mb-6 text-white">
            <FaStar className="text-3xl text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-semibold">Features</h2>
          </div>
          <ul className="space-y-3 text-left md:text-lg">
            <li className="flex items-center gap-2"><FaMobileAlt className="inline text-white" /> Mobile-first installation</li>
            <li className="flex items-center gap-2"><FaRocket className="inline text-white" /> Fast mod launching</li>
            <li className="flex items-center gap-2"><FaInfoCircle className="inline text-white" /> Step-by-step usage guides</li>
            <li className="flex items-center gap-2"><FaDownload className="inline text-white" /> Download mods directly from Starlight</li>
          </ul>
        </section>

        {/* Usage Section */}
        <section className="w-full flex justify-center mt-8">
          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl p-8 rounded-xl border-2 border-[#c49104]">
            <div className="flex items-center justify-center gap-2 mb-4 text-white">
              <FaRocket className="text-3xl text-white" />
              <h2 className="text-3xl md:text-4xl font-semibold">How to Launch</h2>
            </div>
            <div className="md:text-lg mt-4 w-full">
              <p className="mb-4 text-lg md:text-2xl text-center">Watch this video for instructions:</p>
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/Sgc549J0R-I"
                  title="Starlight Mod Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Download Section */}
        <section className="max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-xl flex flex-col items-center border-2 border-[#c49104]">
          <div className="flex items-center justify-center gap-2 mb-4 text-white">
            <FaDownload className="text-3xl text-white" />
            <h2 className="text-3xl md:text-4xl font-semibold">Download</h2>
          </div>
          <p className="md:text-lg mb-4">Click below to get the latest version for mobile:</p>
          <a
            href="https://allofus.dev/starlight.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Download Latest Version
          </a>
        </section>
        <Footer />
      </main>
    </>
  );
}
