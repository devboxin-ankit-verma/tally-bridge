"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
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
  return (
    <div className="relative h-[min(420px,50vh)] w-full sm:h-[min(520px,58vh)] lg:h-[600px]">
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-60 blur-3xl"
        style={{ background: "var(--glow)" }}
        aria-hidden
      />
      <Canvas
        className="relative z-10 !h-full !w-full"
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<SceneLoader />}>
          <HeroSceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
