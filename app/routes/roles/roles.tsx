import { useState } from "react";
import type { Route } from "./+types/roles";
import Crewmate from '/app/routes/roles/crewmates.png';
import Impostor from '/app/routes/roles/impostors.png';
import Neutral from '/app/routes/roles/neutrals.png';
import Modifier from '/app/routes/roles/modifiers.png';

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Roles" }];
}

type RoleCardProps = {
  title: string;
  alignment: "Impostor" | "Crewmate" | "Neutral" | "Coven" | "Disease" | "Modifier";
  version: "v1.0.0" | "v1.1.0" | "v1.1.1";
  description: string;
  howToUse: string;
};

function RoleCard({ title, alignment, version, description, howToUse }: RoleCardProps) {
  const [hovered, setHovered] = useState(false);

  const versionColor = {
    "v1.0.0": "#0ee865",    // green & mint mix
    "v1.1.0": "#fc6b03",    // orange
    "v1.1.1": "#bd8f11",
  }[version];

  const bgColor = {
    Impostor: "#ff4d4d",    // red
    Crewmate: "#00d9ff",    // cyan
    Neutral: "#a0a0a0",     // gray
    Coven: "#c084fc",       // purple
    Disease: "#055c02",     // green
    Modifier: "#c4c104",    // yellow
  }[alignment];

  const alignmentColor = {
    Impostor: "#ff4d4d",
    Crewmate: "#00d9ff",
    Neutral: "#828282",
    Coven: "#c084fc",
    Disease: "#055c02",
    Modifier: "#c4c104",
  }[alignment];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/5 rounded-lg p-6 shadow-md w-full sm:w-[95%] mx-auto mb-6 opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 transform"
      style={{
        backgroundColor: hovered ? `${bgColor}33` : `${bgColor}1A`,
      }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <span
            className="inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded-full"
            style={{
              backgroundColor: versionColor,
              color: "#000000",
            }}
          >
            {version}
          </span>
        </div>
        <span
          className="text-sm font-bold mt-1"
          style={{ color: alignmentColor }}
        >
          {alignment}
        </span>
      </div>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-white font-medium">How to Use:</p>
      <p className="text-sm text-gray-200 whitespace-pre-line">{howToUse}</p>
    </div>
  );
}

export default function Roles() {
  return (
    <div className="text-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6">Roles</h1>
      <p className="text-l text-white mb-6">The page dedicated to all the roles in the TOR-W: L mod</p>

      {/* Grid for RoleCards */}
      <h1 className="text-3xl font-bold text-white mb-6"><img src={Crewmate} style={{ width: '45px', height: '45px', display: 'inline' }} /> <span style={{ color: "#00d9ff" }}>Crewmate</span> Roles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <RoleCard
          title="Captain"
          version="v1.0.0"
          alignment="Crewmate"
          description="Zoom out and check on the crew."
          howToUse="You can zoom out for certain amount of time, and you can call meetings from anywhere."
        />
        <RoleCard
          title="Coroner"
          version="v1.0.0"
          alignment="Crewmate"
          description="Freeze bodies to make them stay."
          howToUse="If you freeze a body, the body will stay forever, but can only be reported once as well."
        />
        <RoleCard
          title="Detective"
          version="v1.0.0"
          alignment="Crewmate"
          description="Get clues from dead bodies."
          howToUse="You can 'research' a body to get clues. You can also see the footprints of other players when you press a button."
        />
        <RoleCard
          title="Gambler"
          version="v1.0.0"
          alignment="Crewmate"
          description="Guess the roles of others."
          howToUse="You can guess the roles of others. When you are correct, the role is revealed, if you are wrong, you die."
        />
        <RoleCard
          title="Mayor"
          version="v1.0.0"
          alignment="Crewmate"
          description="You get extra votes."
          howToUse="You get extra votes in meetings."
        />
        <RoleCard
          title="Medic"
          version="v1.0.0"
          alignment="Crewmate"
          description="Revive dead players."
          howToUse="You have the ability to revive dead players."
        />
        <RoleCard
          title="Sealer"
          version="v1.0.0"
          alignment="Crewmate"
          description="You can seal vents."
          howToUse="You are able to seal vents, which prevents them from being used."
        />
        <RoleCard
          title="Sheriff"
          version="v1.0.0"
          alignment="Crewmate"
          description="Shoot the Impostor."
          howToUse="You can shoot any player, to guess if they are the Impostor. If you shoot the Impostor, you live. But if you shoot a Crewmate, you die."
        />
        <RoleCard
          title="Teleporter"
          version="v1.1.0"
          alignment="Crewmate"
          description="Teleport across the map."
          howToUse="You can zoom out to pick a place to teleport to."
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white mb-6"><img src={Impostor} style={{ width: '45px', height: '45px', display: 'inline' }} /> <span style={{ color: "#ff4d4d" }}>Impostor</span> Roles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <RoleCard
            title="Burrower"
            version="v1.0.0"
            alignment="Impostor"
            description="Can dig vents around the map."
            howToUse="You are able to dig vents anywhere on the map."
          />
          <RoleCard
            title="Hitman"
            version="v1.0.0"
            alignment="Impostor"
            description="Can slow time down and kill."
            howToUse="You are able to slow down the time and pick your targets."
          />
          <RoleCard
            title="Janitor"
            version="v1.0.0"
            alignment="Impostor"
            description="Can drag & hide bodies."
            howToUse="You are able to drag around bodies around the map, and hide them in vents."
          />
          <RoleCard
            title="Surgeon"
            version="v1.0.0"
            alignment="Impostor"
            description="Poison the crew to win."
            howToUse="You are able to inject players and kill them, and if you disect the body, it's unreportable."
          />
          <RoleCard
            title="Swapshifter"
            version="v1.0.0"
            alignment="Impostor"
            description="Switch people around."
            howToUse="You are able to choose people to make them switch places, it also works with you."
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white mb-6"><img src={Neutral} style={{ width: '45px', height: '45px', display: 'inline' }} /> <span style={{ color: "#a0a0a0" }}>Neutral</span> Roles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <RoleCard
            title="Jester"
            version="v1.0.0"
            alignment="Neutral"
            description="Must fool the crew."
            howToUse="Act suspicious to get ejected and win."
          />
          <RoleCard
            title="Traitor"
            version="v1.0.0"
            alignment="Neutral"
            description="Betray the Impostors."
            howToUse="You can see who your target is, and you must betray that Impostor to win."
          />
          <RoleCard
            title="Reaper"
            version="v1.0.0"
            alignment="Neutral"
            description="Collect the souls."
            howToUse="Go around the map and collect souls from dead bodies."
          />
          <RoleCard
            title="Executioner"
            version="v1.1.0"
            alignment="Neutral"
            description="Vote your target to win."
            howToUse="You can see your target with a Target tag. If you vote that player, you win the game."
          />
          <RoleCard
            title="Neutral Killer"
            version="v1.1.1"
            alignment="Neutral"
            description="Kill everyone to win."
            howToUse="ou're basically an Impostor who wins and works alone to win."
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-[#c4c104] mb-6"><img src={Modifier} style={{ width: '45px', height: '45px', display: 'inline' }} /> Modifiers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <RoleCard
            title="Flash"
            version="v1.0.0"
            alignment="Modifier"
            description="You're fast."
            howToUse="You're just a bit faster than the average player."
          />
          <RoleCard
            title="Child"
            version="v1.0.0"
            alignment="Modifier"
            description="You're small."
            howToUse="You're just smaller than the average player."
          />
          <RoleCard
            title="Giant"
            version="v1.0.0"
            alignment="Modifier"
            description="You're BIG."
            howToUse="You're bigger than the average player."
          />
          <RoleCard
            title="V.I.P"
            version="v1.0.0"
            alignment="Modifier"
            description="You're the VIP."
            howToUse="You're just there to brag how cool you look."
          />
          <RoleCard
            title="Bait"
            version="v1.1.1"
            alignment="Modifier"
            description="Your killer self reports when they kill you."
            howToUse="There is not really a use, but the use is that your killer self reports when they kill you."
          />
          <RoleCard
            title="Torch"
            version="v1.1.1"
            alignment="Modifier"
            description="You can see in the dark!"
            howToUse="You're given access to a torch to see when lights are down."
          />
        </div>
      </div>
      {/* Add more RoleCard components as needed */}
    </div>
  );
}
