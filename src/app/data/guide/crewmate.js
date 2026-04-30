export const crewmate = {
  slug: "crewmate",
  name: "Crewmate",
  color: "#4fc3f7",
  roles: [
    {
      slug: "sheriff",
      name: "Sheriff",
      alignment: "Crewmate Power",
      description:
        "You can shoot players, if you shoot an Impostor you will kill him but if you shoot a Crewmate, you will die with him.",
      abilities: ["Can shoot one player per game", "Dies if shooting a Crewmate"],
      settings: [
        { key: "ShotCooldown", label: "Shot Cooldown (s)", type: "number", default: 45, min: 0, max: 120 },
        { key: "ShotsPerGame", label: "Shot Limit", type: "number", default: 3, min: 1, max: 10 },
        { key: "ShouldCrewmateDie", label: "Shoeld Crewmate Die", type: "toggle", default: false },
      ],
    },
    {
      slug: "coroner",
      name: "Coroner",
      alignment: "Crewmate Support",
      description:
        "Freeze bodies to prevent them from disappearing.",
      abilities: ["Freeze bodies to let them stay forever"],
      settings: [
        { key: "FreezeCooldown", label: "Freeze Cooldown (s)", type: "number", default: 15, min: 0, max: 50 },
        { key: "FreezeUses", label: "Freeze Uses", type: "number", default: 0, min: 1, max: 10 },
      ],
    },
    {
      slug: "sealer",
      name: "Sealer",
      alignment: "Crewmate Power",
      description:
        "Seal vents around the map. This will prevent anyone from entering the vent.",
      abilities: ["Seal vents around the map"],
      settings: [
        { key: "SealVentUses", label: "Seal Vent Uses", type: "number", default: 3, min: 0, max: 10 },
        { key: "SealReveal", label: "Seal Reveals Bodies", type: "toggle", default: true },
        { key: "SealVentCooldown", label: "Seal Vent Cooldown (s)", type: "number", default: 35, min: 0, max: 120 },
      ],
    },
    {
      slug: "medic",
      name: "Medic",
      alignment: "Crewmate Power",
      description:
        "Use your revive ability to bring dead bodies back to life!",
      abilities: ["Can revive dead players"],
      settings: [
        { key: "OnlyAllowInMedbay", label: "Only Allow Reviving in Medbay/Labrotory", type: "toggle", default: false },
        { key: "DragBodies", label: "Can Drag Bodies", type: "toggle", default: false },
        { key: "MaxRevives", label: "Max Revives", type: "number", default: 2, min: 1, max: 9 },
        { key: "ReviveCooldown", label: "Revive Cooldown (s)", type: "number", default: 20, min: 1, max: 50 },
      ],
    },
    {
      slug: "gambler",
      name: "Gambler",
      alignment: "Crewmate Support",
      description:
        "Guess a player's role to reveal it! However, if you get it incorrect, you will die.",
      abilities: ["Can guess a player's role to reveal it"],
      settings: [
        { key: "GambleUses", label: "Gamble Uses", type: "number", default: 0, min: 0, max: 10 },
        { key: "GambleCooldown", label: "Gamble Cooldown (s)", type: "number", default: 25, min: 0, max: 60 },
      ],
    },
    {
      slug: "teleporter",
      name: "Teleporter",
      alignment: "Crewmate Power",
      description:
        "Zoom out and teleport across the map!",
      abilities: ["Can zoom out and teleport across the map"],
      settings: [
        { key: "TeleportUses", label: "Teleport Uses", type: "number", default: 3, min: 0, max: 10 },
        { key: "ZoomDistance", label: "Zoom Distance", type: "number", default: 6, min: 4, max: 15 },
        { key: "TeleportDuration", label: "Teleport Duration (s)", type: "number", default: 10, min: 5, max: 25 },
        { key: "TeleportCooldown", label: "Teleport Cooldown (s)", type: "number", default: 10, min: 5, max: 60 },
      ],
    },
    {
      slug: "shielder",
      name: "Shielder",
      alignment: "Crewmate Protective",
      description:
        "You can shield one other crewmate at a time. If someone tries to kill your shielded target, the kill is blocked and you are notified — but you won't know who attacked them. The shield is consumed after blocking one kill. You cannot shield yourself.\n",
      abilities: ["Can shield players from kill attempts"],
      settings: [
        { key: "MaxShields", label: "Max Shields", type: "number", default: 3, min: 0, max: 8 },
        { key: "ShieldCooldown", label: "Alert Cooldown (s)", type: "number", default: 25, min: 5, max: 60 },
      ],
    },
  ],
};
