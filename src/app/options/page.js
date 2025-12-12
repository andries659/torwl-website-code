"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaCogs, FaUsers, FaSkullCrossbones, FaMagic, FaClipboardList, FaUsersCog, FaSlidersH, FaCog } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4, fa5, faDesktop, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/Footer";

// Tabs metadata
const tabsMeta = [
    { id: "Options", label: "Options", icon: FaCogs, color: "green" },
    { id: "Modifier Settings", label: "Modifier Settings", icon: FaSlidersH, color: "orange" },
    { id: "Crewmate Role Settings", label: "Crewmate Roles", icon: FaUsers, color: "blue" },
    { id: "Impostor Role Settings", label: "Impostor Roles", icon: FaSkullCrossbones, color: "red" },
    { id: "Neutral Role Settings", label: "Neutral Roles", icon: FaMagic, color: "gray" },
    { id: "Coven Role Settings", label: "Coven Roles", icon: FaClipboardList, color: "purple" },
    { id: "Roles", label: "Role Settings", icon: FaUsersCog, color: "yellow" },
];

// Tailwind dynamic color map
const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    gray: "bg-gray-600 hover:bg-gray-700",
    orange: "bg-orange-600 hover:bg-orange-700",
};

// Friendly section names
const sectionNames = {
    "LaunchpadReloaded.Options.BattleRoyaleOptions": (
        <span className="flex items-center gap-2">
            <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> Battle Royal Options
        </span>
    ),
    "LaunchpadReloaded.Options.FunOptions": (
        <span className="flex items-center gap-2">
            <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> Fun Options
        </span>
    ),
    "LaunchpadReloaded.Options.GeneralOptions": (
        <span className="flex items-center gap-2">
            <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> General Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.CrewmateModifierOptions": (
        <span className="flex items-center gap-2">
            <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> Crewmate Modifier Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.LpModifierOptions": (
        <span className="flex items-center gap-2">
            <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> LP Modifier Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.UniversalModifierOptions": (
        <span className="flex items-center gap-2">
            <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> Universal Modifier Options
        </span>
    ),
    "LaunchpadReloaded.Options.VotingOptions": (
        <span className="flex items-center gap-2">
            <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> Voting Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.Crewmate.BaitOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate-Mod/Bait.png"
                alt="alt"
                width={28}
                height={28}
            />
            Bait Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.Crewmate.BurstOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate-Mod/Burst.png"
                alt="alt"
                width={28}
                height={28}
            />
            Burst Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.Crewmate.MayorOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate-Mod/Mayor.png"
                alt="alt"
                width={28}
                height={28}
            />
            Mayor Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.Crewmate.TorchOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate-Mod/Torch.png"
                alt="alt"
                width={28}
                height={28}
            />
            Torch Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.Universal.FlashOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Universal/Flash.png"
                alt="alt"
                width={28}
                height={28}
            />
            Flash Options
        </span>
    ),
    "LaunchpadReloaded.Options.Modifiers.Universal.KingOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Universal/VIP.png"
                alt="alt"
                width={28}
                height={28}
            />
            VIP Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Coven.TavernKeeperOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Coven/TavernKeeper.png"
                alt="alt"
                width={28}
                height={28}
            />
            Tavern Keeper Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Crewmate.CoronerOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate/Coroner.png"
                alt="alt"
                width={28}
                height={28}
            />
            Coroner Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Crewmate.GamblerOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate/Gambler.png"
                alt="alt"
                width={28}
                height={28}
            />
            Gambler Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Crewmate.MedicOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate/Medic.png"
                alt="alt"
                width={28}
                height={28}
            />
            Medic Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Crewmate.SealerOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate/Sealer.png"
                alt="alt"
                width={28}
                height={28}
            />
            Sealer Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Crewmate.SheriffOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate/Sheriff.png"
                alt="alt"
                width={28}
                height={28}
            />
            Sheriff Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Crewmate.TeleporterOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Crewmate/Teleporter.png"
                alt="alt"
                width={28}
                height={28}
            />
            Teleporter Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.BurrowerOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Burrower.png"
                alt="alt"
                width={28}
                height={28}
            />
            Burrower Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.SilencerOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Silencer.png"
                alt="alt"
                width={28}
                height={28}
            />
            Silencer Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.HitmanOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Hitman.png"
                alt="alt"
                width={28}
                height={28}
            />
            Hitman Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.JanitorOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Janitor.png"
                alt="alt"
                width={28}
                height={28}
            />
            Janitor Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.SurgeonOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Surgeon.png"
                alt="alt"
                width={28}
                height={28}
            />
            Surgeon Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.SwapshifterOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Swapshifter.png"
                alt="alt"
                width={28}
                height={28}
            />
            Swapshifter Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.ToxifierOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Toxifier.png"
                alt="alt"
                width={28}
                height={28}
            />
            Toxifier Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Impostor.PoltergeistOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Impostor/Poltergeist.png"
                alt="alt"
                width={28}
                height={28}
            />
            Poltergeist Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Neutral.ExecutionerOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Neutral/Executioner.png"
                alt="alt"
                width={28}
                height={28}
            />
            Executioner Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Neutral.JesterOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Neutral/Jester.png"
                alt="alt"
                width={28}
                height={28}
            />
            Jester Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Neutral.NeutralKillerOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Neutral/NeutralKiller.png"
                alt="alt"
                width={28}
                height={28}
            />
            Neutral Killer Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Neutral.ReaperOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Neutral/Reaper.png"
                alt="alt"
                width={28}
                height={28}
            />
            Reaper Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Neutral.TraitorOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Neutral/Traitor.png"
                alt="alt"
                width={28}
                height={28}
            />
            Traitor Options
        </span>
    ),
    "LaunchpadReloaded.Options.Roles.Neutral.SurvivorOptions": (
        <span className="flex items-center gap-2">
            <img
                src="/icons/Neutral/Survivor.png"
                alt="alt"
                width={28}
                height={28}
            />
            Survivor Options
        </span>
    ),
};

export default function ExportConfigPage() {
    // === CONFIG SECTIONS ===
    // Each section key is the exact section header that will appear in the .cfg.
    // Each item: { id, label, key, type, value }
    // - id: internal id for React keys (must be unique)
    // - label: friendly name shown to the user
    // - key: exact key text that will be output in the .cfg (right side of "=")
    // - type: "boolean" | "int" | "float" | "string"
    // - value: default value
    const [sections, setSections] = useState({
        "LaunchpadReloaded.Options.BattleRoyaleOptions": [
            {
                id: "seekerCharacter",
                label: "Seeker Character",
                key: "SeekerCharacter",
                type: "boolean",
                value: true,
            },
            {
                id: "showKnife",
                label: "Show Knife",
                key: "ShowKnife",
                type: "boolean",
                value: true,
            },
        ],

        "LaunchpadReloaded.Options.FunOptions": [
            {
                id: "friendlyFire",
                label: "Friendly Fire",
                key: "FriendlyFire",
                type: "boolean",
                value: false,
            },
            {
                id: "uniqueColors",
                label: "Unique Colors",
                key: "UniqueColors",
                type: "boolean",
                value: true,
            },
            {
                id: "character",
                label: "Character (index)",
                key: "Character",
                type: "int",
                value: 0,
            },
        ],

        "LaunchpadReloaded.Options.GeneralOptions": [
            {
                id: "notepad",
                label: "Notepad Enabled",
                key: "Notepad",
                type: "boolean",
                value: true,
            },
            {
                id: "banCheaters",
                label: "Ban Cheaters",
                key: "BanCheaters",
                type: "boolean",
                value: true,
            },
            {
                id: "disableMeetingTeleport",
                label: "Disable Meeting Teleport",
                key: "DisableMeetingTeleport",
                type: "boolean",
                value: false,
            },
        ],

        "LaunchpadReloaded.Options.Modifiers.Crewmate.BaitOptions": [
            {
                id: "baitAmount",
                label: "Bait Amount",
                key: "BaitAmount",
                type: "float",
                value: 1,
            },
        ],

        "LaunchpadReloaded.Options.Modifiers.Crewmate.BurstOptions": [
            {
                id: "burstAmount",
                label: "Burst Amount",
                key: "BurstAmount",
                type: "float",
                value: 1,
            },
            {
                id: "burstRadius",
                label: "Burst Radius",
                key: "BurstRadius",
                type: "float",
                value: 45,
            },
        ],

        "LaunchpadReloaded.Options.Modifiers.Crewmate.MayorOptions": [
            {
                id: "mayorAmount",
                label: "Mayor Amount",
                key: "MayorAmount",
                type: "float",
                value: 1,
            },
            {
                id: "extraVotes",
                label: "Extra Votes",
                key: "ExtraVotes",
                type: "float",
                value: 1,
            },
            {
                id: "allowVotingTwice",
                label: "Allow Voting Twice",
                key: "AllowVotingTwice",
                type: "boolean",
                value: true,
            },
        ],

        "LaunchpadReloaded.Options.Modifiers.Crewmate.TorchOptions": [
            {
                id: "torchAmount",
                label: "Torch Amount",
                key: "TorchAmount",
                type: "float",
                value: 1,
            },
            {
                id: "useFlashlight",
                label: "Use Flashlight",
                key: "UseFlashlight",
                type: "boolean",
                value: true,
            },
            {
                id: "torchFlashlightSize",
                label: "Torch Flashlight Size",
                key: "TorchFlashlightSize",
                type: "float",
                value: 0.25,
            },
        ],

        "LaunchpadReloaded.Options.Modifiers.Universal.FlashOptions": [
            { id: "flashAmount", label: "Flash Amount", key: "FlashAmount", type: "float", value: 1 },
        ],

        "LaunchpadReloaded.Options.Modifiers.Universal.KingOptions": [
            { id: "kingAmount", label: "VIP Amount", key: "KingAmount", type: "float", value: 1 },
        ],

        "LaunchpadReloaded.Options.Modifiers.CrewmateModifierOptions": [
            { id: "mayorChance", label: "Mayor Chance", key: "MayorChance", type: "float", value: 0 },
            { id: "torchChance", label: "Torch Chance", key: "TorchChance", type: "float", value: 0 },
            { id: "baitChance", label: "Bait Chance", key: "BaitChance", type: "float", value: 0 },
            { id: "burstChance", label: "Burst Chance", key: "BurstChance", type: "float", value: 0 },
        ],

        "LaunchpadReloaded.Options.Modifiers.LpModifierOptions": [
            { id: "modifierLimit", label: "Modifier Limit", key: "ModifierLimit", type: "float", value: 1 },
        ],

        "LaunchpadReloaded.Options.Modifiers.UniversalModifierOptions": [
            { id: "flashChance", label: "Flash Chance", key: "FlashChance", type: "float", value: 0 },
            { id: "kingChance", label: "King Chance", key: "KingChance", type: "float", value: 0 },
        ],

        // --- Roles tabs: split into separate tabs later via `tabs` mapping below
        "LaunchpadReloaded.Options.Roles.Coven.TavernKeeperOptions": [
            { id: "roleBlockCooldown", label: "Role Block Cooldown", key: "RoleBlockCooldown", type: "float", value: 20 },
            { id: "roleBlockUses", label: "Role Block Uses", key: "RoleBlockUses", type: "float", value: 5 },
            { id: "roleBlockDuration", label: "Role Block Duration", key: "RoleBlockDuration", type: "float", value: 20 },
        ],

        "LaunchpadReloaded.Options.Roles.Crewmate.CoronerOptions": [
            { id: "freezeCooldown", label: "Freeze Cooldown", key: "FreezeCooldown", type: "float", value: 15 },
            { id: "freezeUses", label: "Freeze Uses", key: "FreezeUses", type: "float", value: 0 },
        ],

        "LaunchpadReloaded.Options.Roles.Crewmate.GamblerOptions": [
            { id: "gambleCooldown", label: "Gamble Cooldown", key: "GambleCooldown", type: "float", value: 25 },
            { id: "gambleUses", label: "Gamble Uses", key: "GambleUses", type: "float", value: 0 },
        ],

        "LaunchpadReloaded.Options.Roles.Crewmate.MedicOptions": [
            { id: "onlyAllowInMedbay", label: "Only Allow In Medbay", key: "OnlyAllowInMedbay", type: "boolean", value: false },
            { id: "dragBodies", label: "Drag Bodies", key: "DragBodies", type: "boolean", value: false },
            { id: "maxRevives", label: "Max Revives", key: "MaxRevives", type: "float", value: 2 },
            { id: "reviveCooldown", label: "Revive Cooldown", key: "ReviveCooldown", type: "float", value: 20 },
        ],

        "LaunchpadReloaded.Options.Roles.Crewmate.SealerOptions": [
            { id: "sealVentCooldown", label: "Seal Vent Cooldown", key: "SealVentCooldown", type: "float", value: 35 },
            { id: "sealVentUses", label: "Seal Vent Uses", key: "SealVentUses", type: "float", value: 3 },
            { id: "sealReveal", label: "Seal Reveal", key: "SealReveal", type: "boolean", value: true },
        ],

        "LaunchpadReloaded.Options.Roles.Crewmate.SheriffOptions": [
            { id: "shotCooldown", label: "Shot Cooldown", key: "ShotCooldown", type: "float", value: 45 },
            { id: "shotsPerGame", label: "Shots Per Game", key: "ShotsPerGame", type: "float", value: 3 },
            { id: "shouldCrewmateDie", label: "Should Crewmate Die", key: "ShouldCrewmateDie", type: "boolean", value: false },
        ],

        "LaunchpadReloaded.Options.Roles.Crewmate.TeleporterOptions": [
            { id: "teleportCooldown", label: "Teleport Cooldown", key: "TeleportCooldown", type: "float", value: 10 },
            { id: "teleportDuration", label: "Teleport Duration", key: "TeleportDuration", type: "float", value: 10 },
            { id: "teleportZoomDistance", label: "Teleport Zoom Distance", key: "ZoomDistance", type: "float", value: 6 },
            { id: "teleportUses", label: "Teleport Uses", key: "TeleportUses", type: "float", value: 3 },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.BurrowerOptions": [
            { id: "ventDigCooldown", label: "Vent Dig Cooldown", key: "VentDigCooldown", type: "float", value: 35 },
            { id: "ventDigUses", label: "Vent Dig Uses", key: "VentDigUses", type: "float", value: 0 },
            { id: "ventDist", label: "Vent Distance", key: "VentDist", type: "float", value: 1.5 },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.SilencerOptions": [
            { id: "silenceCooldown", label: "Silence Cooldown", key: "SilenceCooldown", type: "float", value: 35 },
            { id: "silenceUses", label: "Silence Uses", key: "SilenceUses", type: "float", value: 0 },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.HitmanOptions": [
            { id: "deadlockCooldown", label: "Deadlock Cooldown", key: "DeadlockCooldown", type: "float", value: 40 },
            { id: "deadlockUses", label: "Deadlock Uses", key: "DeadlockUses", type: "float", value: 3 },
            { id: "markLimit", label: "Mark Limit", key: "MarkLimit", type: "float", value: 2 },
            { id: "deadlockDuration", label: "Deadlock Duration", key: "DeadlockDuration", type: "float", value: 20 },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.JanitorOptions": [
            { id: "hideCooldown", label: "Hide Cooldown", key: "HideCooldown", type: "float", value: 5 },
            { id: "dragSpeed", label: "Drag Speed", key: "DragSpeed", type: "float", value: 1.75 },
            { id: "hideUses", label: "Hide Uses", key: "HideUses", type: "float", value: 3 },
            { id: "cleanInsteadOfHide", label: "Clean Instead Of Hide", key: "CleanInsteadOfHide", type: "boolean", value: false },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.SurgeonOptions": [
            { id: "injectCooldown", label: "Inject Cooldown", key: "InjectCooldown", type: "float", value: 10 },
            { id: "injectUses", label: "Inject Uses", key: "InjectUses", type: "float", value: 0 },
            { id: "dissectCooldown", label: "Dissect Cooldown", key: "DissectCooldown", type: "float", value: 35 },
            { id: "dissectUses", label: "Dissect Uses", key: "DissectUses", type: "float", value: 0 },
            { id: "poisonDelay", label: "Poison Delay", key: "PoisonDelay", type: "float", value: 10 },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.SwapshifterOptions": [
            { id: "swapCooldown", label: "Swap Cooldown", key: "SwapCooldown", type: "float", value: 30 },
            { id: "swapDuration", label: "Swap Duration", key: "SwapDuration", type: "float", value: 15 },
            { id: "swapUses", label: "Swap Uses", key: "SwapUses", type: "float", value: 3 },
            { id: "canSwapImpostors", label: "Can Swap Impostors", key: "CanSwapImpostors", type: "boolean", value: true },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.ToxifierOptions": [
            { id: "toxifyCooldown", label: "Toxify Cooldown", key: "ToxifyCooldown", type: "float", value: 10 },
            { id: "toxifiedDelay", label: "Toxified Delay", key: "ToxifiedDelay", type: "float", value: 10 },
            { id: "toxifyUses", label: "Toxify Uses", key: "ToxifyUses", type: "float", value: 0 },
        ],

        "LaunchpadReloaded.Options.Roles.Impostor.PoltergeistOptions": [
            { id: "curseCooldown", label: "Curse Cooldown", key: "CurseCooldown", type: "float", value: 10 },
            { id: "curseDuration", label: "Curse Duration", key: "CurseDuration", type: "float", value: 10 },
        ],

        "LaunchpadReloaded.Options.Roles.Neutral.ExecutionerOptions": [
            { id: "executionerCanCallMeeting", label: "Can Call Meeting", key: "CanCallMeeting", type: "boolean", value: false },
            { id: "executionerTargetDeathNewRole", label: "Target Death New Role", key: "TargetDeathNewRole", type: "int", value: 1 },
        ],

        "LaunchpadReloaded.Options.Roles.Neutral.JesterOptions": [
            { id: "jesterCanUseVents", label: "Can Use Vents", key: "CanUseVents", type: "boolean", value: true },
        ],

        "LaunchpadReloaded.Options.Roles.Neutral.NeutralKillerOptions": [
            { id: "neutralKillerCooldown", label: "Neutral Kill Cooldown", key: "NeutralKillCooldown", type: "float", value: 20 },
            { id: "neutralKillerCanUseVents", label: "Can Use Vents", key: "CanUseVents", type: "boolean", value: true },
        ],

        "LaunchpadReloaded.Options.Roles.Neutral.ReaperOptions": [
            { id: "soulCollections", label: "Soul Collections", key: "SoulCollections", type: "float", value: 3 },
            { id: "collectCooldown", label: "Collect Cooldown", key: "CollectCooldown", type: "float", value: 20 },
        ],

        "LaunchpadReloaded.Options.Roles.Neutral.TraitorOptions": [
            { id: "traitorCanCallMeeting", label: "Can Call Meeting", key: "CanCallMeeting", type: "boolean", value: false },
            { id: "traitorTargetDeathNewRole", label: "Target Death New Role", key: "TargetDeathNewRole", type: "int", value: 1 },
        ],

        "LaunchpadReloaded.Options.Roles.Neutral.SurvivorOptions": [
            { id: "vestCooldown", label: "Vest Cooldown", key: "VestCooldown", type: "float", value: 25 },
            { id: "vestDuration", label: "Vest Duration", key: "VestDuration", type: "float", value: 10 },
            { id: "maxVestUses", label: "Max Vests", key: "MaxVests", type: "float", value: 10 },
        ],

        "LaunchpadReloaded.Options.VotingOptions": [
            { id: "votingType", label: "Voting Type", key: "VotingType", type: "int", value: 0 },
            { id: "maxVotes", label: "Max Votes", key: "MaxVotes", type: "float", value: 3 },
            { id: "allowVotingForSamePerson", label: "Allow Voting For Same Person", key: "AllowVotingForSamePerson", type: "boolean", value: false },
            { id: "allowConfirmingVotes", label: "Allow Confirming Votes", key: "AllowConfirmingVotes", type: "boolean", value: false },
            { id: "hideVotingIcons", label: "Hide Voting Icons", key: "HideVotingIcons", type: "boolean", value: false },
            { id: "showPercentages", label: "Show Percentages", key: "ShowPercentages", type: "boolean", value: false },
        ],

        // Roles block - raw keys (these are different in style, they include Num/Chance prefixes)
        Roles: [
            { id: "numExecutioner", label: "Num Executioner Role", key: "Num LaunchpadReloaded.Roles.Neutral.ExecutionerRole", type: "int", value: 1 },
            { id: "chanceExecutioner", label: "Chance Executioner Role", key: "Chance LaunchpadReloaded.Roles.Neutral.ExecutionerRole", type: "int", value: 100 },

            { id: "numJester", label: "Num Jester Role", key: "Num LaunchpadReloaded.Roles.Neutral.JesterRole", type: "int", value: 1 },
            { id: "chanceJester", label: "Chance Jester Role", key: "Chance LaunchpadReloaded.Roles.Neutral.JesterRole", type: "int", value: 100 },

            { id: "numNeutralKiller", label: "Num Neutral Killer Role", key: "Num LaunchpadReloaded.Roles.Neutral.NeutralKillerRole", type: "int", value: 1 },
            { id: "chanceNeutralKiller", label: "Chance Neutral Killer Role", key: "Chance LaunchpadReloaded.Roles.Neutral.NeutralKillerRole", type: "int", value: 100 },

            { id: "numReaper", label: "Num Reaper Role", key: "Num LaunchpadReloaded.Roles.Neutral.ReaperRole", type: "int", value: 1 },
            { id: "chanceReaper", label: "Chance Reaper Role", key: "Chance LaunchpadReloaded.Roles.Neutral.ReaperRole", type: "int", value: 100 },

            { id: "numTraitor", label: "Num Traitor Role", key: "Num LaunchpadReloaded.Roles.Neutral.TraitorRole", type: "int", value: 1 },
            { id: "chanceTraitor", label: "Chance Traitor Role", key: "Chance LaunchpadReloaded.Roles.Neutral.TraitorRole", type: "int", value: 100 },

            { id: "numSurvivor", label: "Num Survivor Role", key: "Num LaunchpadReloaded.Roles.Neutral.SurvivorRole", type: "int", value: 1 },
            { id: "chanceSurvivor", label: "Chance Survivor Role", key: "Chance LaunchpadReloaded.Roles.Neutral.SurvivorRole", type: "int", value: 100 },

            { id: "numBurrower", label: "Num Burrower Role", key: "Num LaunchpadReloaded.Roles.Impostor.BurrowerRole", type: "int", value: 1 },
            { id: "chanceBurrower", label: "Chance Burrower Role", key: "Chance LaunchpadReloaded.Roles.Impostor.BurrowerRole", type: "int", value: 100 },

            { id: "numHitman", label: "Num Hitman Role", key: "Num LaunchpadReloaded.Roles.Impostor.HitmanRole", type: "int", value: 1 },
            { id: "chanceHitman", label: "Chance Hitman Role", key: "Chance LaunchpadReloaded.Roles.Impostor.HitmanRole", type: "int", value: 100 },

            { id: "numJanitor", label: "Num Janitor Role", key: "Num LaunchpadReloaded.Roles.Impostor.JanitorRole", type: "int", value: 1 },
            { id: "chanceJanitor", label: "Chance Janitor Role", key: "Chance LaunchpadReloaded.Roles.Impostor.JanitorRole", type: "int", value: 100 },

            { id: "numSurgeon", label: "Num Surgeon Role", key: "Num LaunchpadReloaded.Roles.Impostor.SurgeonRole", type: "int", value: 1 },
            { id: "chanceSurgeon", label: "Chance Surgeon Role", key: "Chance LaunchpadReloaded.Roles.Impostor.SurgeonRole", type: "int", value: 100 },

            { id: "numSwapshifter", label: "Num Swapshifter Role", key: "Num LaunchpadReloaded.Roles.Impostor.SwapshifterRole", type: "int", value: 1 },
            { id: "chanceSwapshifter", label: "Chance Swapshifter Role", key: "Chance LaunchpadReloaded.Roles.Impostor.SwapshifterRole", type: "int", value: 100 },

            { id: "numSilencer", label: "Num Silencer Role", key: "Num LaunchpadReloaded.Roles.Impostor.SilencerRole", type: "int", value: 1 },
            { id: "chanceSilencer", label: "Chance Silencer Role", key: "Chance LaunchpadReloaded.Roles.Impostor.SilencerRole", type: "int", value: 100 },

            { id: "numToxifier", label: "Num Toxifier Role", key: "Num LaunchpadReloaded.Roles.Impostor.ToxifierRole", type: "int", value: 1 },
            { id: "chanceToxifier", label: "Chance Toxifier Role", key: "Chance LaunchpadReloaded.Roles.Impostor.ToxifierRole", type: "int", value: 100 },

            { id: "numPoltergeist", label: "Num Poltergeist Role", key: "Num LaunchpadReloaded.Roles.Impostor.PoltergeistRole", type: "int", value: 1 },
            { id: "chancePoltergeist", label: "Chance Poltergeist Role", key: "Chance LaunchpadReloaded.Roles.Impostor.PoltergeistRole", type: "int", value: 100 },

            { id: "numCoroner", label: "Num Coroner Role", key: "Num LaunchpadReloaded.Roles.Crewmate.CoronerRole", type: "int", value: 1 },
            { id: "chanceCoroner", label: "Chance Coroner Role", key: "Chance LaunchpadReloaded.Roles.Crewmate.CoronerRole", type: "int", value: 100 },

            { id: "numGambler", label: "Num Gambler Role", key: "Num LaunchpadReloaded.Roles.Crewmate.GamblerRole", type: "int", value: 1 },
            { id: "chanceGambler", label: "Chance Gambler Role", key: "Chance LaunchpadReloaded.Roles.Crewmate.GamblerRole", type: "int", value: 100 },

            { id: "numMedic", label: "Num Medic Role", key: "Num LaunchpadReloaded.Roles.Crewmate.MedicRole", type: "int", value: 1 },
            { id: "chanceMedic", label: "Chance Medic Role", key: "Chance LaunchpadReloaded.Roles.Crewmate.MedicRole", type: "int", value: 100 },

            { id: "numSealer", label: "Num Sealer Role", key: "Num LaunchpadReloaded.Roles.Crewmate.SealerRole", type: "int", value: 1 },
            { id: "chanceSealer", label: "Chance Sealer Role", key: "Chance LaunchpadReloaded.Roles.Crewmate.SealerRole", type: "int", value: 100 },

            { id: "numSheriff", label: "Num Sheriff Role", key: "Num LaunchpadReloaded.Roles.Crewmate.SheriffRole", type: "int", value: 1 },
            { id: "chanceSheriff", label: "Chance Sheriff Role", key: "Chance LaunchpadReloaded.Roles.Crewmate.SheriffRole", type: "int", value: 100 },

            { id: "numTeleporter", label: "Num Teleporter Role", key: "Num LaunchpadReloaded.Roles.Crewmate.TeleporterRole", type: "int", value: 1 },
            { id: "chanceTeleporter", label: "Chance Teleporter Role", key: "Chance LaunchpadReloaded.Roles.Crewmate.TeleporterRole", type: "int", value: 100 },

            { id: "numTavernKeeper", label: "Num TavernKeeper Role", key: "Num LaunchpadReloaded.Roles.Coven.TavernKeeperRole", type: "int", value: 1 },
            { id: "chanceTavernKeeper", label: "Chance TavernKeeper Role", key: "Chance LaunchpadReloaded.Roles.Coven.TavernKeeperRole", type: "int", value: 100 },
        ],
    });

    // Tabs mapping: which section keys show under which tab
    const tabs = {
        Options: [
            "LaunchpadReloaded.Options.BattleRoyaleOptions",
            "LaunchpadReloaded.Options.FunOptions",
            "LaunchpadReloaded.Options.GeneralOptions",
            "LaunchpadReloaded.Options.VotingOptions",
            "LaunchpadReloaded.Options.Modifiers.CrewmateModifierOptions",
            "LaunchpadReloaded.Options.Modifiers.LpModifierOptions",
            "LaunchpadReloaded.Options.Modifiers.UniversalModifierOptions",
        ],
        "Modifier Settings": [
            "LaunchpadReloaded.Options.Modifiers.Crewmate.BaitOptions",
            "LaunchpadReloaded.Options.Modifiers.Crewmate.BurstOptions",
            "LaunchpadReloaded.Options.Modifiers.Crewmate.MayorOptions",
            "LaunchpadReloaded.Options.Modifiers.Crewmate.TorchOptions",
            "LaunchpadReloaded.Options.Modifiers.Universal.FlashOptions",
            "LaunchpadReloaded.Options.Modifiers.Universal.KingOptions",
        ],
        "Crewmate Role Settings": [
            "LaunchpadReloaded.Options.Roles.Crewmate.CaptainOptions",
            "LaunchpadReloaded.Options.Roles.Crewmate.CoronerOptions",
            "LaunchpadReloaded.Options.Roles.Crewmate.GamblerOptions",
            "LaunchpadReloaded.Options.Roles.Crewmate.MedicOptions",
            "LaunchpadReloaded.Options.Roles.Crewmate.SealerOptions",
            "LaunchpadReloaded.Options.Roles.Crewmate.SheriffOptions",
            "LaunchpadReloaded.Options.Roles.Crewmate.TeleporterOptions",
        ],
        "Impostor Role Settings": [
            "LaunchpadReloaded.Options.Roles.Impostor.BurrowerOptions",
            "LaunchpadReloaded.Options.Roles.Impostor.SilencerOptions",
            "LaunchpadReloaded.Options.Roles.Impostor.HitmanOptions",
            "LaunchpadReloaded.Options.Roles.Impostor.JanitorOptions",
            "LaunchpadReloaded.Options.Roles.Impostor.SurgeonOptions",
            "LaunchpadReloaded.Options.Roles.Impostor.SwapshifterOptions",
            "LaunchpadReloaded.Options.Roles.Impostor.ToxifierOptions",
            "LaunchpadReloaded.Options.Roles.Impostor.PoltergeistOptions",
        ],
        "Neutral Role Settings": [
            "LaunchpadReloaded.Options.Roles.Neutral.ExecutionerOptions",
            "LaunchpadReloaded.Options.Roles.Neutral.JesterOptions",
            "LaunchpadReloaded.Options.Roles.Neutral.NeutralKillerOptions",
            "LaunchpadReloaded.Options.Roles.Neutral.ReaperOptions",
            "LaunchpadReloaded.Options.Roles.Neutral.TraitorOptions",
            "LaunchpadReloaded.Options.Roles.Neutral.SurvivorOptions",
        ],
        "Coven Role Settings": [
            "LaunchpadReloaded.Options.Roles.Coven.TavernKeeperOptions",
        ],
        Roles: ["Role"],
    };

    // UI state
    const [activeTab, setActiveTab] = useState("Options");
    const [collapsedSections, setCollapsedSections] = useState(() => {
        const initialState = {};
        Object.keys(sections).forEach((sectionKey) => {
            initialState[sectionKey] = true; // closed by default
        });
        initialState["RolesBlock"] = true;
        return initialState;
    });

    // ref map to measure collapsible content heights (keyed by sectionName)
    const contentRefs = useRef({});
    // store measured heights so style reads are stable
    const [measuredHeights, setMeasuredHeights] = useState({});

    // measure after each render when sections / collapsedSections / activeTab change
    useEffect(() => {
        // measure all refs we care about (only RolesBlock here, but generic)
        const newHeights = {};
        Object.keys(contentRefs.current).forEach((key) => {
            const el = contentRefs.current[key];
            if (el && typeof el.scrollHeight === "number") {
                // add a small padding allowance so nothing clips
                newHeights[key] = el.scrollHeight + 8;
            }
        });
        // only update state if changed to avoid rerender loops
        setMeasuredHeights((prev) => {
            const same = Object.keys(newHeights).every((k) => prev[k] === newHeights[k]) &&
                Object.keys(prev).every((k) => newHeights[k] === prev[k]);
            return same ? prev : { ...prev, ...newHeights };
        });
    }, [sections, collapsedSections, activeTab]);

    // Toggle collapse
    const toggleCollapse = (sectionName) => {
        setCollapsedSections((prev) => ({ ...prev, [sectionName]: !prev[sectionName] }));
    };

    // Helpers to update a value
    const updateItemValue = (sectionName, itemId, rawValue) => {
        setSections((prev) => {
            const copy = JSON.parse(JSON.stringify(prev));
            const list = copy[sectionName];
            if (!list) return prev;
            const item = list.find((it) => it.id === itemId);
            if (!item) return prev;

            // Parse value according to type
            if (item.type === "boolean") {
                // rawValue may be "true"/"false" or boolean
                item.value = rawValue === true || rawValue === "true";
            } else if (item.type === "int") {
                const n = parseInt(rawValue, 10);
                item.value = Number.isNaN(n) ? 0 : n;
            } else if (item.type === "float") {
                const f = parseFloat(rawValue);
                item.value = Number.isNaN(f) ? 0 : f;
            } else {
                // string
                item.value = rawValue;
            }
            return copy;
        });
    };

    // Build cfg content and download
    const exportConfig = () => {
        const lines = [];

        // iterate in the same order as sections object
        for (const [sectionName, itemList] of Object.entries(sections)) {
            // Write section header
            lines.push(`[${sectionName}]`);
            lines.push(""); // blank line after header

            // For "Roles" (the special block stored as an array of simple keys),
            // we output each key = value exactly as specified
            for (const item of itemList) {
                // Format value
                let valText;
                if (item.type === "boolean") {
                    valText = item.value ? "true" : "false";
                } else {
                    // numbers and strings we output raw
                    valText = String(item.value);
                }
                lines.push(`${item.key} = ${valText}`);
                lines.push("");
            }
        }

        // Join and create blob
        const cfgContent = lines.join("\n");
        const blob = new Blob([cfgContent], { type: "text/plain;charset=utf-8" });
        const href = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = href;
        a.download = "TORWModPreset.cfg";
        // Trigger immediate download
        a.click();
        URL.revokeObjectURL(href);
    };

    // Render input depending on type
    const renderInput = (sectionName, item) => {
        if (item.type === "boolean") {
            return (
                <select
                    value={item.value ? "true" : "false"}
                    onChange={(e) => updateItemValue(sectionName, item.id, e.target.value)}
                    className="bg-zinc-800 p-2 rounded-lg"
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            );
        }
        // number fields (int/float)
        if (item.type === "int" || item.type === "float") {
            return (
                <input
                    type="number"
                    step={item.type === "int" ? "1" : "any"}
                    value={item.value}
                    onChange={(e) => updateItemValue(sectionName, item.id, e.target.value)}
                    className="bg-zinc-800 p-2 rounded-lg"
                />
            );
        }
        // fallback string
        return (
            <input
                type="text"
                value={item.value}
                onChange={(e) => updateItemValue(sectionName, item.id, e.target.value)}
                className="bg-zinc-800 p-2 rounded-lg"
            />
        );
    };

    // Flatten sections for the currently active tab
    const getSectionsForTab = (tabName) => {
        const sectionKeys = tabs[tabName] || [];
        // Keep only existing keys in `sections`
        return sectionKeys.filter((k) => sections[k]);
    };

    const activeTabColor = tabsMeta.find(t => t.id === activeTab)?.color;

    // Lighter colors for dropdown bars
    const headerLighterMap = {
        blue: "bg-blue-400",
        green: "bg-green-400",
        red: "bg-red-400",
        purple: "bg-purple-400",
        yellow: "bg-yellow-600",
        gray: "bg-gray-400",
        orange: "bg-orange-500",
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center text-center px-4 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white space-y-16">
                <h1 className="text-3xl font-bold mb-6">Config Builder For TOR-W: L</h1>

                {/* Tabs */}
                <div className="flex gap-3 mb-6 flex-wrap justify-center">
                    {tabsMeta.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${colorClasses[tab.color]} px-3 py-1 rounded ${activeTab === tab.id ? "ring-2 ring-offset-1" : ""}`}
                            >
                                <Icon className="inline mr-1 w-4 h-4" /> {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="max-w-5xl w-full mx-auto space-y-4">
                    {getSectionsForTab(activeTab).map((sectionKey) => (
                        <div key={sectionKey} className="mb-4 rounded-2xl overflow-hidden shadow">
                            {/* Dropdown bar */}
                            <button
                                onClick={() => toggleCollapse(sectionKey)}
                                className={`w-full p-4 flex justify-between items-center rounded-t-2xl ${headerLighterMap[activeTabColor] || "bg-zinc-700"}`}
                            >
                                <div className="font-bold">{sectionNames[sectionKey] || sectionKey}</div>
                                <div className="text-sm">{collapsedSections[sectionKey] ? "▼" : "▲"}</div>
                            </button>

                            {/* Collapsible content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out rounded-b-2xl`}
                                style={{
                                    maxHeight: collapsedSections[sectionKey] ? "0px" : `${sections[sectionKey].length * 80}px`,
                                    padding: collapsedSections[sectionKey] ? "0" : "1rem",
                                    backgroundColor: collapsedSections[sectionKey] ? "transparent" : "#1f2937", // bg-zinc-800
                                }}
                            >
                                {sections[sectionKey].map((item) => (
                                    <div key={item.id} className="grid grid-cols-3 gap-3 items-center mb-2">
                                        <div className="col-span-2 text-left">
                                            <div className="text-sm font-medium">{item.label}</div>
                                            <div className="text-xs opacity-60">{item.key}</div>
                                        </div>
                                        <div className="text-right">{renderInput(sectionKey, item)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Roles block */}
                    {activeTab === "Roles" && (
                        <div className="mb-6 rounded-2xl overflow-hidden shadow">
                            <button
                                onClick={() => toggleCollapse("RolesBlock")}
                                className={`w-full p-4 flex justify-between items-center rounded-t-2xl ${headerLighterMap[activeTabColor] || "bg-zinc-700"}`}
                            >
                                <div className="font-bold">
                                    <span className="flex items-center gap-2">
                                        <FaCogs className="w-6 h-6 md:w-8 md:h-8 text-white" /> Roles (Num / Chance)
                                    </span>
                                </div>
                                <div className="text-sm">{collapsedSections["RolesBlock"] ? "▼" : "▲"}</div>
                            </button>

                            <div
                                ref={(el) => (contentRefs.current["RolesBlock"] = el)}
                                className="overflow-hidden transition-[max-height] duration-500 ease-in-out space-y-3"
                                style={{
                                    // use measured height if available, otherwise fallback to a reasonable estimate
                                    maxHeight: collapsedSections["RolesBlock"]
                                        ? "0px"
                                        : `${measuredHeights["RolesBlock"] ?? sections.Roles.length * 64}px`,
                                    padding: collapsedSections["RolesBlock"] ? "0" : "1rem",
                                    backgroundColor: collapsedSections["RolesBlock"] ? "transparent" : "#1f2937", // bg-zinc-800
                                }}
                            >
                                {sections.Roles.map((item) => (
                                    <div key={item.id} className="grid grid-cols-3 gap-3 items-center">
                                        <div className="col-span-2 text-left">
                                            <div className="text-sm font-medium">{item.label}</div>
                                            <div className="text-xs opacity-60">{item.key}</div>
                                        </div>
                                        <div className="text-right">
                                            <input
                                                type="number"
                                                step="1"
                                                value={item.value}
                                                onChange={(e) =>
                                                    setSections((prev) => {
                                                        const copy = JSON.parse(JSON.stringify(prev));
                                                        const idx = copy.Roles.findIndex((it) => it.id === item.id);
                                                        copy.Roles[idx].value = parseInt(e.target.value, 10) || 0;
                                                        return copy;
                                                    })
                                                }
                                                className="bg-zinc-800 p-2 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Installation Section */}
                <section className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-6 text-white">
                        <h2 className="flex items-center gap-2 text-xl sm:text-2xl md:text-4xl font-bold">
                            <div
                                className="flex items-center justify-center w-10 h-10 rounded-lg"
                                style={{ backgroundColor: "rgba(59,130,246,0.2)" }} // light blue bg
                            >
                                <FaCog className="text-blue-500 text-2xl" />
                            </div>
                            Preset Config Installation
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg mb-4">Follow these steps to place your custom Preset Config:</p>

                    <div className="space-y-6">
                        {/* PC Section */}
                        <div>
                            <p className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold">
                                <FontAwesomeIcon icon={faDesktop} className="text-sky-400" />
                                PC:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-2 text-sm sm:text-base md:text-lg">
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa1} className="mt-0.5" />
                                    <span>
                                        Locate <code className="px-2 py-1 rounded-md bg-black/30 text-gray-100 text-xs sm:text-sm">\AppData\LocalLow\Innersloth\Among Us\mira_presets</code> in your folder directory.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa2} className="mt-0.5" />
                                    <span>Look for the mod file for the Preset Config. In this case it is <code className="px-2 py-1 rounded-md bg-black/30 text-gray-100 text-xs sm:text-sm">angel.launchpad</code>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa3} className="mt-0.5" />
                                    <span>Take the downloaded Preset Config file, and paste it into the <code className="px-2 py-1 rounded-md bg-black/30 text-gray-100 text-xs sm:text-sm">angel.launchpad</code> folder.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa4} className="mt-0.5" />
                                    <span>Boot up the game, with the mod, the navigate to the mod Presets tab, and select your newely added Preset.</span>
                                </li>
                            </ul>
                            <br></br>
                            <p className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold">
                                <FontAwesomeIcon icon={faMobilePhone} className="text-sky-400" />
                                Mobile (aka Starlight):
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-2 text-sm sm:text-base md:text-lg">
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa1} className="mt-0.5" />
                                    <span>
                                        Download the{" "}
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.marc.files"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-sky-400 hover:text-sky-500"
                                        >
                                            Files App
                                        </a>{" "}
                                        from the Google Play Store.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa2} className="mt-0.5" />
                                    <span>Then go to <code className="px-2 py-1 rounded-md bg-black/30 text-gray-100 text-xs sm:text-sm">Android → data → dev.allofus.starlight → files → mira_presets</code>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa3} className="mt-0.5" />
                                    <span>Look for the mod file for the Preset Config. In this case it is <code className="px-2 py-1 rounded-md bg-black/30 text-gray-100 text-xs sm:text-sm">angel.launchpad</code>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa4} className="mt-0.5" />
                                    <span>Take the downloaded Preset Config file, and paste it into the <code className="px-2 py-1 rounded-md bg-black/30 text-gray-100 text-xs sm:text-sm">angel.launchpad</code> folder.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={fa5} className="mt-0.5" />
                                    <span>Launch the mod from Starlight, then go to the mod Presets Tab and select your newely added Preset.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Export */}
                <div className="mt-6 flex gap-3 flex-wrap justify-center items-center">
                    <button
                        onClick={exportConfig}
                        className="bg-zinc-600 px-5 py-3 rounded-xl font-bold hover:bg-zinc-700"
                    >
                        Export Config (Download TORWModPreset.cfg)
                    </button>

                    <div className="flex-1 text-sm text-zinc-400 self-center max-w-md">
                        This will export all configured values (including defaults) into the .cfg file.
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
