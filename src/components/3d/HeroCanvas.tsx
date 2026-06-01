"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";
import HeroSceneContent from "./HeroScene";

function SceneLoader() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#c026d3" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function HeroCanvas() {
  const tier = usePerformanceTier();

  const dpr: [number, number] =
    tier === "mobile" ? [1, 1.25] : tier === "tablet" ? [1, 1.5] : [1, 1.75];

  const camera =
    tier === "mobile"
      ? { position: [0, 0, 6] as [number, number, number], fov: 50 }
      : tier === "tablet"
        ? { position: [0, 0, 5.75] as [number, number, number], fov: 46 }
        : { position: [0, 0, 5.5] as [number, number, number], fov: 42 };

  return (
    <div
      className="hero-canvas-wrap"
      role="img"
      aria-label="Animated 3D phone with rotating rings showing Tally mobile sync"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-60 blur-3xl"
        style={{ background: "var(--glow)" }}
        aria-hidden
      />
      <Canvas
        className="hero-canvas relative z-10 !h-full !w-full touch-none"
        camera={camera}
        dpr={dpr}
        gl={{
          antialias: tier !== "mobile",
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent", display: "block" }}
      >
        <Suspense fallback={<SceneLoader />}>
          <HeroSceneContent tier={tier} />
        </Suspense>
      </Canvas>
    </div>
  );
}
