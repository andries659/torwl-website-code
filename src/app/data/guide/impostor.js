export const impostor = {
  slug: "impostor",
  name: "Impostor",
  color: "#ef5350",
  roles: [
    {
      slug: "silencer",
      name: "Silencer",
      alignment: "Impostor Support",
      description:
        "The Blackmailer can silence a player each round, preventing them from speaking during meetings.",
      abilities: ["Can blackmail one player per round", "Blackmailed players cannot speak"],
      settings: [
        { key: "BlackmailerCooldown", label: "Blackmail Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "ShowBlackmailWarning", label: "Show Warning to Target", type: "toggle", default: true },
        { key: "BlackmailDuration", label: "Silence Duration (meetings)", type: "number", default: 1, min: 1, max: 3 },
      ],
    },
    {
      slug: "burrower",
      name: "Burrower",
      alignment: "Impostor Deception",
      description:
        "The Morphling can sample a player's appearance and morph into them for a limited time.",
      abilities: ["Can copy another player's appearance", "Morph lasts a limited time"],
      settings: [
        { key: "MorphCooldown", label: "Morph Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "MorphDuration", label: "Morph Duration (s)", type: "number", default: 15, min: 5, max: 60 },
        { key: "MorphChangesSize", label: "Copies Player Size", type: "toggle", default: false },
      ],
    },
    {
      slug: "janitor",
      name: "Janitor",
      alignment: "Impostor Deception",
      description:
        "The Morphling can sample a player's appearance and morph into them for a limited time.",
      abilities: ["Can copy another player's appearance", "Morph lasts a limited time"],
      settings: [
        { key: "MorphCooldown", label: "Morph Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "MorphDuration", label: "Morph Duration (s)", type: "number", default: 15, min: 5, max: 60 },
        { key: "MorphChangesSize", label: "Copies Player Size", type: "toggle", default: false },
      ],
    },
    {
      slug: "poltergeist",
      name: "Poltergeist",
      alignment: "Impostor Deception",
      description:
        "The Morphling can sample a player's appearance and morph into them for a limited time.",
      abilities: ["Can copy another player's appearance", "Morph lasts a limited time"],
      settings: [
        { key: "MorphCooldown", label: "Morph Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "MorphDuration", label: "Morph Duration (s)", type: "number", default: 15, min: 5, max: 60 },
        { key: "MorphChangesSize", label: "Copies Player Size", type: "toggle", default: false },
      ],
    },
    {
      slug: "hitman",
      name: "Hitman",
      alignment: "Impostor Deception",
      description:
        "The Morphling can sample a player's appearance and morph into them for a limited time.",
      abilities: ["Can copy another player's appearance", "Morph lasts a limited time"],
      settings: [
        { key: "MorphCooldown", label: "Morph Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "MorphDuration", label: "Morph Duration (s)", type: "number", default: 15, min: 5, max: 60 },
        { key: "MorphChangesSize", label: "Copies Player Size", type: "toggle", default: false },
      ],
    },
    {
      slug: "surgeon",
      name: "Surgeon",
      alignment: "Impostor Deception",
      description:
        "The Morphling can sample a player's appearance and morph into them for a limited time.",
      abilities: ["Can copy another player's appearance", "Morph lasts a limited time"],
      settings: [
        { key: "MorphCooldown", label: "Morph Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "MorphDuration", label: "Morph Duration (s)", type: "number", default: 15, min: 5, max: 60 },
        { key: "MorphChangesSize", label: "Copies Player Size", type: "toggle", default: false },
      ],
    },
    {
      slug: "swapshifter",
      name: "Swapshifter",
      alignment: "Impostor Deception",
      description:
        "The Morphling can sample a player's appearance and morph into them for a limited time.",
      abilities: ["Can copy another player's appearance", "Morph lasts a limited time"],
      settings: [
        { key: "MorphCooldown", label: "Morph Cooldown (s)", type: "number", default: 30, min: 5, max: 60 },
        { key: "MorphDuration", label: "Morph Duration (s)", type: "number", default: 15, min: 5, max: 60 },
        { key: "MorphChangesSize", label: "Copies Player Size", type: "toggle", default: false },
      ],
    },
  ],
};
