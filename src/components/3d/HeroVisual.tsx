"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import HeroMobileSvg from "./HeroMobileSvg";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="hero-canvas-wrap hero-canvas-wrap--loading" aria-hidden>
      <div className="hero-canvas-loading-pulse" />
    </div>
  ),
});

function useWebGLAvailable() {
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

/** Rotating 3D phone on all devices; static SVG only if WebGL unavailable or reduced motion */
export default function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const webgl = useWebGLAvailable();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="hero-visual-root">
        <div className="hero-canvas-wrap hero-canvas-wrap--loading" aria-hidden>
          <div className="hero-canvas-loading-pulse" />
        </div>
      </div>
    );
  }

  if (reducedMotion || !webgl) {
    return (
      <div className="hero-visual-root">
        <HeroMobileSvg />
      </div>
    );
  }

  return (
    <div className="hero-visual-root">
      <HeroCanvas />
    </div>
  );
}
