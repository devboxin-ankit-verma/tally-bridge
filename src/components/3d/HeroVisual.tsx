"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import HeroMobileSvg from "./HeroMobileSvg";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <HeroMobileSvg />,
});

export default function HeroVisual() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reducedMotion = useReducedMotion();

  if (reducedMotion || !isDesktop) {
    return <HeroMobileSvg />;
  }

  return (
    <div className="relative w-full max-w-full">
      <HeroCanvas />
    </div>
  );
}
