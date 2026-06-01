"use client";

import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/lib/themes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="glass flex h-9 items-center gap-2 rounded-lg px-2.5 transition hover:shadow-[0_0_20px_var(--glow)]"
        aria-label="Change gradient theme"
        aria-expanded={open}
        title="Gradient themes"
      >
        <span
          className="h-5 w-5 shrink-0 rounded-full ring-1 ring-black/8"
          style={{
            background: `radial-gradient(circle at 28% 28%, var(--gradient-start), var(--gradient-end))`,
          }}
        />
        <span className="hidden text-xs font-medium text-gray-muted sm:inline">
          Theme
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-[60] mt-2 max-h-[min(70vh,420px)] w-56 overflow-y-auto rounded-xl border border-white/10 bg-[var(--bg-deep)]/95 p-1.5 shadow-[var(--shadow-premium)] backdrop-blur-2xl"
          >
            <p className="px-2.5 py-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-gray-muted">
              Gradient preset
            </p>
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setThemeId(t.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left text-sm transition ${
                  themeId === t.id
                    ? "bg-white/10 font-semibold text-foreground"
                    : "text-gray-muted hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <span
                  className="h-7 w-7 shrink-0 rounded-full ring-1 ring-black/8"
                  style={{
                    background: `radial-gradient(circle at 25% 25%, ${t.gradientStart}, ${t.gradientEnd})`,
                  }}
                />
                <span className="leading-tight">{t.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
