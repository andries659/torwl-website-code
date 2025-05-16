import type { Route } from "./+types/home";
import Logo from '/app/routes/home/logo.png';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
  ];
}

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl text-yellow-500 font-bold">🚀 TOR-W Launchpad</h1><br></br>
      <img src={Logo} alt="TOR-W Logo" className="mx-auto my-6 w-128 h-auto" />
      <header className="flex flex-col items-center gap-9"><br></br>
        <a href="https://discord.com/invite/HczqtuBfcu" target="_blank"><img src="https://dcbadge.limes.pink/api/server/HczqtuBfcu" /></a>
        <h2 className="text-2xl text-yellow-500 font-semibold">❔ About Us</h2>
        <p className="text-lg text-white">TOR-W: Launchpad is a mod for Among Us that adds in brand new roles, features, and gamemodes!<br></br>It is designed so that the roles and features stay somewhat consistent with the original game and don't feel out of place!</p>
        <h2 className="text-2xl text-yellow-500 font-semibold">🌟 Features</h2>
        <p className="text-lg text-white text-justify">You can read about all of the features on the <a href="https://launchpad.xtracube.dev/" target="_blank" className="font-bold text-fuchsia-400 hover:underline hover:text-fuchsia-300">wiki</a>, but here are a couple of them:<br></br><br></br>
          ♦ ✅ Gradient Colors<br></br>
          ♦ ✅ Special Voting Modes<br></br>
          ♦ ✅ Feature-Rich Roles<br></br>
          ♦ ✅ New Game Options<br></br>
          ♦ ✅ Exciting Gamemodes</p>
        <h2 className="text-2xl text-yellow-500 font-semibold">🔧 Compatibility</h2>
        <p className="text-lg text-white text-justify">♦ ✔️ Supports 2025.3.25 (16.0.0) on PC (Android support coming soon™).<br></br>
          ♦ ❗️ TOR-W: Launchpad is <b>NOT</b> a host-only mod. Every player needs to install it to enjoy.<br></br>
          ♦ 🔒 Launchpad does <b>NOT</b> work on normal Among Us servers. We host our own private game servers instead.</p>
        <h2 className="text-2xl text-yellow-500 font-semibold">📥 Installation</h2>
        <p className="text-lg text-white text-justify"><b>🛠️ For manual installation, you must also download:<br></br><br></br></b>

          ♦ Unity.Il2Cpp win-x86 BepInEx build<br></br>
          ♦ Reactor<br></br>
          ♦ Mira API<br></br><br></br></p>
      </header>

    </div>
  )
}
