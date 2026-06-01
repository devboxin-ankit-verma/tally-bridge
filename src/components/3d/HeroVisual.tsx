"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import HeroMobileSvg from "./HeroMobileSvg";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <HeroMobileSvg />,
});

function useCanUseWebGL() {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setOk(
        !!(
          c.getContext("webgl") ||
          c.getContext("webgl2") ||
          c.getContext("experimental-webgl")
        )
      );
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

export default function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const webgl = useCanUseWebGL();
  const [isDesktop3D, setIsDesktop3D] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop3D(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const showCanvas = isDesktop3D && !reducedMotion && webgl;

  return (
    <div className="hero-visual-root relative w-full min-w-0 max-w-full">
      {showCanvas ? <HeroCanvas /> : <HeroMobileSvg />}
    </div>
  );
}
