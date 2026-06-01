"use client";

import { useTheme } from "@/context/ThemeContext";
import { faviconDataUrl } from "@/lib/favicon";
import { useEffect } from "react";

export default function DynamicFavicon() {
  const { theme } = useTheme();

  useEffect(() => {
    const href = faviconDataUrl(theme.accent, theme.accentDark);
    const links = document.querySelectorAll<HTMLLinkElement>(
      "link[rel='icon'], link[rel='apple-touch-icon']"
    );
    if (links.length === 0) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
      link.href = href;
      return;
    }
    links.forEach((link) => {
      link.href = href;
      link.type = "image/svg+xml";
    });
  }, [theme.accent, theme.accentDark]);

  return null;
}
