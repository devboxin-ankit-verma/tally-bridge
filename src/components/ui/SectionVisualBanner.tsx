"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SafeImage from "./SafeImage";

type Props = {
  src: string;
  alt: string;
  height?: "sm" | "md" | "lg";
  overlay?: "strong" | "medium" | "light";
  className?: string;
  priority?: boolean;
};

const heights = {
  sm: "min-h-[220px] sm:min-h-[280px]",
  md: "min-h-[280px] sm:min-h-[380px]",
  lg: "min-h-[320px] sm:min-h-[440px]",
};

const overlays = {
  strong:
    "from-[var(--bg-deep)]/70 via-[var(--bg-deep)]/30 to-[var(--bg-deep)]/10",
  medium: "from-[var(--bg-deep)]/50 via-transparent to-[var(--bg-deep)]/20",
  light: "from-[var(--bg-deep)]/35 via-transparent to-transparent",
};

export default function SectionVisualBanner({
  src,
  alt,
  height = "md",
  overlay = "light",
  className = "",
  priority = false,
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.96, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`premium-visual-frame relative overflow-hidden rounded-3xl border border-white/12 ${heights[height]} ${className}`}
    >
      <SafeImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 1280px"
        className="z-0 object-cover"
        quality={92}
      />
      <div
        className={`absolute inset-0 z-[1] bg-gradient-to-t ${overlays[overlay]}`}
        aria-hidden
      />
      <div className="visual-shine pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-[3] opacity-35"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, var(--glow), transparent 55%)`,
        }}
        aria-hidden
      />
    </motion.div>
  );
}
