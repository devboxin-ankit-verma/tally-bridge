"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultThemeId, themes, type Theme, type ThemeId } from "@/lib/themes";

type ThemeContextValue = {
  theme: Theme;
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme.id;
  const entries: Record<string, string> = {
    "--gradient-start": theme.gradientStart,
    "--gradient-mid": theme.gradientMid,
    "--gradient-end": theme.gradientEnd,
    "--accent": theme.accent,
    "--accent-dark": theme.accentDark,
    "--glow": theme.glow,
    "--aurora-1": theme.aurora1,
    "--aurora-2": theme.aurora2,
    "--bg-deep": theme.bgDeep,
    "--text-hero": theme.textHero,
    "--text-hero-muted": theme.textHeroMuted,
    "--background": theme.background,
    "--foreground": theme.foreground,
    "--gray-muted": theme.grayMuted,
    "--surface": theme.surface,
    "--surface-muted": theme.surfaceMuted,
    "--surface-elevated": theme.surfaceElevated,
    "--border-subtle": theme.borderSubtle,
  };
  Object.entries(entries).forEach(([k, v]) => root.style.setProperty(k, v));
  root.classList.toggle("theme-light", Boolean(theme.isLight));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(defaultThemeId);
  const [mounted, setMounted] = useState(false);

  const theme = useMemo(
    () => themes.find((t) => t.id === themeId) ?? themes[0],
    [themeId]
  );

  const setThemeId = useCallback((id: ThemeId) => {
    setThemeIdState(id);
    try {
      localStorage.setItem("tallybridge-theme", id);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tallybridge-theme") as ThemeId | null;
      if (saved && themes.some((t) => t.id === saved)) {
        setThemeIdState(saved);
      }
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) applyTheme(theme);
  }, [theme, mounted]);

  const value = useMemo(
    () => ({ theme, themeId, setThemeId }),
    [theme, themeId, setThemeId]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
