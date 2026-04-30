export const coven = {
  slug: "coven",
  name: "Coven",
  color: "#ce93d8",
  roles: [
    {
      slug: "hexbinder",
      name: "Hexbinder",
      alignment: "Coven Hexcraft",
      description:
        "Place a hex on a player that will kill them after a configurable number of meetings pass.",
      abilities: ["Curse players with a delayed death"],
      settings: [
        { key: "HexCooldown", label: "Hex Cooldown (s)", type: "number", default: 20, min: 0, max: 60 },
        { key: "Uses", label: "Curses to Kill", type: "number", default: 4, min: 0, max: 8 },
        { key: "MeetingsUntilDeath", label: "Curses to Kill", type: "number", default: 2, min: 1, max: 5 },
      ],
      tips: [
        { type: "tip", text: "Use your ability early in the round to gather info before the vote." },
        { type: "warning", text: "The Sheriff can identify you if you act too aggressively." },
        { type: "lore", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
      ],
    },
    {
      slug: "scribe",
      name: "Scribe",
      alignment: "Coven Hexcraft",
      description:
        "Gather the player role alignment to use it to your will, which can be any way.",
      abilities: ["Use insight on a player for their role alignment"],
      settings: [
        { key: "InsightCooldown", label: "Insight Cooldown (s)", type: "number", default: 20, min: 0, max: 60 },
        { key: "MaxInsightUses", label: "Max Insight Uses", type: "number", default: 5, min: 0, max: 10 },
      ],
      tips: [
        { type: "tip", text: "Use your ability early in the round to gather info before the vote." },
        { type: "warning", text: "The Sheriff can identify you if you act too aggressively." },
        { type: "lore", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
        { type: "info", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
      ],
    },
    {
      slug: "alchemist",
      name: "Alchemist",
      alignment: "Coven Alchemica",
      description:
        "Can brew potions on players that have special effects, such as a speed boost or a permanent kill.",
      abilities: ["Can brew potions"],
      settings: [
        { key: "BrewCooldown", label: "Brew Cooldown (s)", type: "number", default: 25, min: 0, max: 60 },
        { key: "EffectDuration", label: "Potion Effect Duration (s)", type: "number", default: 10, min: 5, max: 60 },
        { key: "CanBrewKill", label: "Can Brew Kill Potion", type: "toggle", default: false },
      ],
      tips: [
        { type: "tip", text: "Use your ability early in the round to gather info before the vote." },
        { type: "warning", text: "The Sheriff can identify you if you act too aggressively." },
        { type: "lore", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
      ],
    },
    {
      slug: "tavernkeeper",
      name: "Tavern\nKeeper",
      alignment: "Coven Dominion",
      description:
        "Use your role block ability to stop players from using their ability.",
      abilities: ["Block players from using their abilities"],
      settings: [
        { key: "RoleBlockCooldown", label: "Role Block Cooldown (s)", type: "number", default: 20, min: 0, max: 60 },
        { key: "RoleBlockUses", label: "Max Role Block Uses", type: "number", default: 5, min: 0, max: 10 },
        { key: "RoleBlockDuration", label: "Role Block Duration (s)", type: "number", default: 20, min: 0, max: 60 },
      ],
      tips: [
        { type: "tip", text: "Use your ability early in the round to gather info before the vote." },
        { type: "warning", text: "The Sheriff can identify you if you act too aggressively." },
        { type: "lore", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
      ],
    },
    {
      slug: "poisoner",
      name: "Poisoner",
      alignment: "Coven Alchemica",
      description:
        "Poison a player each round. They will die at the beginning of the next meeting unless you cure them.",
      abilities: ["Poison a player", "Can cure a poisoned player"],
      settings: [
        { key: "Uses", label: "Max Poison Uses", type: "number", default: 4, min: 0, max: 8 },
        { key: "PoisonCooldown", label: "Poison Cooldown (s)", type: "number", default: 20, min: 0, max: 60 },
        { key: "CanCure", label: "Can Cure", type: "toggle", default: true },
      ],
      tips: [
        { type: "tip", text: "Use your ability early in the round to gather info before the vote." },
        { type: "warning", text: "The Sheriff can identify you if you act too aggressively." },
        { type: "lore", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
      ],
    },
    {
      slug: "shroudweaver",
      name: "Shroud\nweaver",
      alignment: "Coven Hexcraft",
      description:
        "Shroud a player each round, making them appear dead on Scientist vitals and the Coroner until the next meeting.",
      abilities: ["Make players appear dead to vitals"],
      settings: [
        { key: "MaxUses", label: "Max Shroud Uses", type: "number", default: 4, min: 1, max: 8 },
        { key: "ShroudCooldown", label: "Shroud Cooldown (s)", type: "number", default: 20, min: 0, max: 60 },
      ],
      tips: [
        { type: "tip", text: "Use your ability early in the round to gather info before the vote." },
        { type: "warning", text: "The Sheriff can identify you if you act too aggressively." },
        { type: "lore", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
      ],
    },
    {
      slug: "dominator",
      name: "Dominator",
      alignment: "Coven Dominion",
      description:
        "Once per game, take control of a crewmate's ability and force them to use it on your command.",
      abilities: ["Hijack a crewmate's ability"],
      settings: [
        { key: "MaxUses", label: "Max Dominate Uses", type: "number", default: 4, min: 1, max: 8 },
        { key: "DominateCooldown", label: "Dominante Cooldown (s)", type: "number", default: 30, min: 0, max: 60 },
      ],
      tips: [
        { type: "tip", text: "Use your ability early in the round to gather info before the vote." },
        { type: "warning", text: "The Sheriff can identify you if you act too aggressively." },
        { type: "lore", text: "Sworn to the void between stars, the Coroner speaks only with the dead." },
      ],
    },
  ],
};
