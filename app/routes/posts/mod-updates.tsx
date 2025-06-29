import type { Route } from "./+types/mod-updates";
import PostMeta from "../../components/PostMeta";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Mod Updates" },
  ];
}

export default function ModUpdates() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">

      {/* 🔥 Animated Wave CSS 🔥 */}
      <style>
        {`
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .wave-animation {
            animation: wave 8s linear infinite;
          }
        `}
      </style>

      {/* 🔥 Top Section with Image and Animated Wave 🔥 */}
      <div className="flex flex-col items-center justify-center mb-8">
        {/* Split Image */}
        <img
          src="/mod-updates.webp"
          alt="Crewmates Update Banner"
          className="w-11/12 max-w-4xl rounded-lg shadow-lg"
        />

        {/* Animated Wave */}
        <div className="relative w-full overflow-hidden mt-[-50px]">
          <svg
            className="w-[200%] md:w-full h-32 wave-animation"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#000000"
              d="M0,160L80,165.3C160,171,320,181,480,192C640,203,800,213,960,192C1120,171,1280,117,1360,90.7L1440,64V320H0Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* 🔥 End of Top Section 🔥 */}

      <PostMeta
        category="Mod"
        date="May 26, 2025"
        updated="May 27, 2025"
        author="Andries"
      />

      <h1 className="text-3xl font-bold mt-6">Mod Updates</h1>

      <p className="mt-4 text-muted-foreground">
        Welcome to the mod updates page! Here, you'll find the latest features, bug fixes,
        and changes to our mod. Stay tuned for more!
      </p>

      <div className="mt-8 text-left">
        <h2 className="text-xl font-semibold mb-2">Latest Changes</h2>

        {/* Image directly below the heading */}
        <div className="mb-4">
          <img
            src="/version-1-0-0.png"
            alt="Latest Mod Update Banner"
            className="mx-auto rounded-lg max-h-24 w-auto object-contain"
          />
        </div>

        <ul className="list-disc list-inside space-y-2">
          <li>Added 17 new colors.</li>
          <li>Added the "Traitor" role.</li>
        </ul>
        <br />

        <div className="mb-4">
          <img
            src="/version-1-1-0.png"
            alt="Latest Mod Update Banner"
            className="mx-auto rounded-lg max-h-24 w-auto object-contain"
          />
        </div>

        <ul className="list-disc list-inside space-y-2">
          <li>Added the "Teleporter" role.</li>
          <li>Added the "Chameleon" role.</li>
          <li>Added the "Executioner" role.</li>
          <li>Added the "Neutral Killer" role as a template role.</li>
          <li>Updated the cosmetics for the "VIP" modifier.</li>
          <li>Updated the "Crewmate Roles" to "♦ Crewmate Roles ♦" and so on for the others.</li>
        </ul>
      </div>
    </div>
  );
}
