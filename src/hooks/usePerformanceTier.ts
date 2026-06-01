"use client";

import { useEffect, useState } from "react";

export type PerformanceTier = "mobile" | "tablet" | "desktop";

export function usePerformanceTier(): PerformanceTier {
  const [tier, setTier] = useState<PerformanceTier>("mobile");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setTier("mobile");
      else if (w < 1024) setTier("tablet");
      else setTier("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return tier;
}
