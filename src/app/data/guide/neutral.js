export const neutral = {
  slug: "neutral",
  name: "Neutral",
  color: "#bdbdbd",
  roles: [
    {
      slug: "jester",
      name: "Jester",
      alignment: "Neutral Chaos",
      description:
        "The Jester wins by getting voted out. Convince the crew you're suspicious without revealing your role.",
      abilities: ["Wins if voted out", "Has no kill or ability"],
      settings: [
        { key: "JesterCanVent", label: "Can Vent", type: "toggle", default: false },
        { key: "JesterHasTasks", label: "Has Fake Tasks", type: "toggle", default: true },
        { key: "JesterWinsOnExile", label: "Wins on Exile Only", type: "toggle", default: true },
      ],
    },
    {
      slug: "executioner",
      name: "Executioner",
      alignment: "Neutral Killing",
      description:
        "The Arsonist douses players with fuel. Once enough players are doused, they can ignite and win.",
      abilities: ["Douses players", "Ignites all doused players at once"],
      settings: [
        { key: "ArsonistCooldown", label: "Douse Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "DouseRequiredToWin", label: "Players Needed to Ignite", type: "number", default: 3, min: 1, max: 10 },
        { key: "ArsonistCanVent", label: "Can Vent", type: "toggle", default: false },
      ],
    },
    {
      slug: "neutralkiller",
      name: "Neutral Killer",
      alignment: "Neutral Killing",
      description:
        "The Arsonist douses players with fuel. Once enough players are doused, they can ignite and win.",
      abilities: ["Douses players", "Ignites all doused players at once"],
      settings: [
        { key: "ArsonistCooldown", label: "Douse Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "DouseRequiredToWin", label: "Players Needed to Ignite", type: "number", default: 3, min: 1, max: 10 },
        { key: "ArsonistCanVent", label: "Can Vent", type: "toggle", default: false },
      ],
    },
    {
      slug: "reaper",
      name: "Reaper",
      alignment: "Neutral Killing",
      description:
        "The Arsonist douses players with fuel. Once enough players are doused, they can ignite and win.",
      abilities: ["Douses players", "Ignites all doused players at once"],
      settings: [
        { key: "ArsonistCooldown", label: "Douse Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "DouseRequiredToWin", label: "Players Needed to Ignite", type: "number", default: 3, min: 1, max: 10 },
        { key: "ArsonistCanVent", label: "Can Vent", type: "toggle", default: false },
      ],
    },
    {
      slug: "survivor",
      name: "Survivor",
      alignment: "Neutral Killing",
      description:
        "The Arsonist douses players with fuel. Once enough players are doused, they can ignite and win.",
      abilities: ["Douses players", "Ignites all doused players at once"],
      settings: [
        { key: "ArsonistCooldown", label: "Douse Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "DouseRequiredToWin", label: "Players Needed to Ignite", type: "number", default: 3, min: 1, max: 10 },
        { key: "ArsonistCanVent", label: "Can Vent", type: "toggle", default: false },
      ],
    },
    {
      slug: "traitor",
      name: "Traitor",
      alignment: "Neutral Killing",
      description:
        "The Arsonist douses players with fuel. Once enough players are doused, they can ignite and win.",
      abilities: ["Douses players", "Ignites all doused players at once"],
      settings: [
        { key: "ArsonistCooldown", label: "Douse Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "DouseRequiredToWin", label: "Players Needed to Ignite", type: "number", default: 3, min: 1, max: 10 },
        { key: "ArsonistCanVent", label: "Can Vent", type: "toggle", default: false },
      ],
    },
  ],
};
