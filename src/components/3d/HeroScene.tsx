"use client";

import type { PerformanceTier } from "@/hooks/usePerformanceTier";
import { useTheme } from "@/context/ThemeContext";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Environment,
  Torus,
  RoundedBox,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingCore({ lowQuality }: { lowQuality: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const { theme } = useTheme();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const px = lowQuality ? pointer.x * 0.2 : pointer.x * 0.35;
    const py = lowQuality ? pointer.y * 0.08 : pointer.y * 0.15;
    group.current.rotation.y = t * 0.12 + px;
    group.current.rotation.x = py;
  });

  const accent = useMemo(() => new THREE.Color(theme.accent), [theme.accent]);
  const accentDark = useMemo(() => new THREE.Color(theme.accentDark), [theme.accentDark]);

  const torusSegments = lowQuality ? 24 : 64;

  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.6}>
        <RoundedBox
          args={[1.15, 2.1, 0.14]}
          radius={0.08}
          smoothness={lowQuality ? 4 : 8}
          position={[0, 0, 0]}
        >
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.05}
            transmission={0.92}
            thickness={0.8}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={1.2}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.09]}>
          <planeGeometry args={[0.95, 1.75]} />
          <meshBasicMaterial color={accent} transparent opacity={0.15} />
        </mesh>
      </Float>

      <Torus args={[1.65, 0.018, torusSegments, 64]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.8} />
      </Torus>
      <Torus args={[2.05, 0.012, torusSegments, 64]} rotation={[Math.PI / 3, 0.4, 0]}>
        <meshStandardMaterial
          color={accent}
          emissive={accentDark}
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
        />
      </Torus>

      <mesh position={[0, 0, -0.3]}>
        <sphereGeometry args={[0.35, lowQuality ? 32 : 64, lowQuality ? 32 : 64]} />
        <MeshDistortMaterial
          color={accent}
          emissive={accentDark}
          emissiveIntensity={0.6}
          distort={0.25}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 4) * Math.PI * 2) * 1.4,
            Math.sin((i / 4) * Math.PI * 2) * 0.5,
            Math.sin((i / 4) * Math.PI * 2) * 0.4,
          ]}
        >
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.2} />
        </mesh>
      ))}
    </group>
  );
}

function DataParticles({
  accentColor,
  tier,
}: {
  accentColor: string;
  tier: PerformanceTier;
}) {
  const main = tier === "mobile" ? 50 : tier === "tablet" ? 80 : 120;
  const secondary = tier === "mobile" ? 28 : tier === "tablet" ? 45 : 60;

  return (
    <>
      <Sparkles count={main} scale={5} size={2} speed={0.35} opacity={0.65} color={accentColor} />
      <Sparkles
        count={secondary}
        scale={7}
        size={1.2}
        speed={0.2}
        opacity={0.35}
        color="#ffffff"
      />
    </>
  );
}

type Props = {
  tier?: PerformanceTier;
};

export default function HeroSceneContent({ tier = "desktop" }: Props) {
  const { theme } = useTheme();
  const lowQuality = tier === "mobile";

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 8, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-6, 4, -4]} intensity={0.6} color={theme.accent} />
      <pointLight position={[0, 2, 3]} intensity={1.5} color={theme.accent} distance={12} />
      {tier === "desktop" && <Environment preset="city" />}
      <FloatingCore lowQuality={lowQuality} />
      <DataParticles accentColor={theme.accent} tier={tier} />
    </>
  );
}
