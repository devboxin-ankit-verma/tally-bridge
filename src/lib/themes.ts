export type ThemeId =
  | "royalPurple"
  | "emeraldLuxury"
  | "cyberBlue"
  | "neonViolet"
  | "goldenPrestige"
  | "midnightSapphire"
  | "auroraGreen"
  | "darkPremium";

export type Theme = {
  id: ThemeId;
  label: string;
  gradientStart: string;
  gradientMid: string;
  gradientEnd: string;
  accent: string;
  accentDark: string;
  glow: string;
  aurora1: string;
  aurora2: string;
  bgDeep: string;
  textHero: string;
  textHeroMuted: string;
};

export const themes: Theme[] = [
  {
    id: "royalPurple",
    label: "Royal Purple",
    gradientStart: "rgba(178, 0, 184, 1)",
    gradientMid: "rgba(120, 0, 140, 1)",
    gradientEnd: "rgba(71, 0, 159, 1)",
    accent: "#c026d3",
    accentDark: "#86198f",
    glow: "rgba(178, 0, 184, 0.45)",
    aurora1: "rgba(178, 0, 184, 0.35)",
    aurora2: "rgba(71, 0, 159, 0.4)",
    bgDeep: "#06040f",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.78)",
  },
  {
    id: "emeraldLuxury",
    label: "Emerald Luxury",
    gradientStart: "rgba(52, 211, 153, 0.9)",
    gradientMid: "rgba(16, 185, 129, 0.85)",
    gradientEnd: "rgba(6, 78, 59, 1)",
    accent: "#34d399",
    accentDark: "#059669",
    glow: "rgba(52, 211, 153, 0.4)",
    aurora1: "rgba(52, 211, 153, 0.3)",
    aurora2: "rgba(6, 78, 59, 0.5)",
    bgDeep: "#030f0a",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.75)",
  },
  {
    id: "cyberBlue",
    label: "Cyber Blue",
    gradientStart: "rgba(56, 189, 248, 0.95)",
    gradientMid: "rgba(37, 99, 235, 0.9)",
    gradientEnd: "rgba(30, 27, 75, 1)",
    accent: "#38bdf8",
    accentDark: "#2563eb",
    glow: "rgba(56, 189, 248, 0.4)",
    aurora1: "rgba(56, 189, 248, 0.35)",
    aurora2: "rgba(30, 27, 75, 0.55)",
    bgDeep: "#030712",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.78)",
  },
  {
    id: "neonViolet",
    label: "Neon Violet",
    gradientStart: "rgba(167, 139, 250, 1)",
    gradientMid: "rgba(139, 92, 246, 0.95)",
    gradientEnd: "rgba(76, 29, 149, 1)",
    accent: "#a78bfa",
    accentDark: "#7c3aed",
    glow: "rgba(167, 139, 250, 0.45)",
    aurora1: "rgba(167, 139, 250, 0.35)",
    aurora2: "rgba(76, 29, 149, 0.5)",
    bgDeep: "#08051a",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.78)",
  },
  {
    id: "goldenPrestige",
    label: "Golden Prestige",
    gradientStart: "rgba(251, 191, 36, 0.95)",
    gradientMid: "rgba(217, 119, 6, 0.9)",
    gradientEnd: "rgba(69, 26, 3, 1)",
    accent: "#fbbf24",
    accentDark: "#d97706",
    glow: "rgba(251, 191, 36, 0.4)",
    aurora1: "rgba(251, 191, 36, 0.3)",
    aurora2: "rgba(69, 26, 3, 0.55)",
    bgDeep: "#0c0804",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.78)",
  },
  {
    id: "midnightSapphire",
    label: "Midnight Sapphire",
    gradientStart: "rgba(99, 102, 241, 0.95)",
    gradientMid: "rgba(67, 56, 202, 0.9)",
    gradientEnd: "rgba(15, 23, 42, 1)",
    accent: "#818cf8",
    accentDark: "#4f46e5",
    glow: "rgba(99, 102, 241, 0.4)",
    aurora1: "rgba(99, 102, 241, 0.35)",
    aurora2: "rgba(15, 23, 42, 0.6)",
    bgDeep: "#020617",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.78)",
  },
  {
    id: "auroraGreen",
    label: "Aurora Green",
    gradientStart: "rgba(163, 247, 191, 0.95)",
    gradientMid: "rgba(34, 197, 94, 0.85)",
    gradientEnd: "rgba(6, 95, 70, 1)",
    accent: "#4ade80",
    accentDark: "#16a34a",
    glow: "rgba(74, 222, 128, 0.4)",
    aurora1: "rgba(163, 247, 191, 0.3)",
    aurora2: "rgba(6, 95, 70, 0.5)",
    bgDeep: "#030f0a",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.78)",
  },
  {
    id: "darkPremium",
    label: "Dark Premium",
    gradientStart: "rgba(148, 163, 184, 0.5)",
    gradientMid: "rgba(51, 65, 85, 0.9)",
    gradientEnd: "rgba(15, 23, 42, 1)",
    accent: "#94a3b8",
    accentDark: "#475569",
    glow: "rgba(148, 163, 184, 0.25)",
    aurora1: "rgba(148, 163, 184, 0.2)",
    aurora2: "rgba(15, 23, 42, 0.65)",
    bgDeep: "#030303",
    textHero: "#ffffff",
    textHeroMuted: "rgba(255, 255, 255, 0.72)",
  },
];

export const defaultThemeId: ThemeId = "royalPurple";
