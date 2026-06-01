"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[min(420px,50vh)] w-full items-center justify-center lg:h-[600px]">
      <div
        className="h-48 w-48 animate-pulse rounded-full opacity-40 blur-2xl"
        style={{ background: "var(--glow)" }}
      />
    </div>
  ),
});

function MobileFallback() {
  return (
    <div className="relative flex h-[min(320px,45vh)] w-full items-center justify-center lg:hidden">
      <div
        className="absolute h-56 w-56 animate-pulse rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--glow)" }}
      />
      <div className="glass-dark relative z-10 flex h-48 w-28 flex-col items-center justify-center rounded-[2rem] border border-white/20 shadow-2xl">
        <div
          className="mb-3 h-8 w-8 rounded-full"
          style={{
            background: `linear-gradient(135deg, var(--accent), var(--accent-dark))`,
          }}
        />
        <div className="h-20 w-20 rounded-xl bg-white/10" />
        <div className="mt-3 h-1 w-12 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

export default function HeroVisual() {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const reducedMotion = useReducedMotion();

  if (isMobile || reducedMotion) {
    return <MobileFallback />;
  }

  return (
    <div className="hidden lg:block">
      <HeroCanvas />
    </div>
  );
}
