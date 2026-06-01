"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import GlassCard from "./GlassCard";
import SafeImage from "./SafeImage";

export type RevealStyle = "up" | "left" | "right" | "scale";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspect?: "video" | "square" | "portrait";
  reveal?: RevealStyle;
  float?: boolean;
};

const aspectClasses = {
  video: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

const revealVariants: Record<RevealStyle, Variants> = {
  up: {
    hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  },
  left: {
    hidden: { opacity: 0, x: -56, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  },
  right: {
    hidden: { opacity: 0, x: 56, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export default function AnimatedImage({
  src,
  alt,
  priority = false,
  className = "",
  aspect = "video",
  reveal = "up",
  float = true,
}: Props) {
  const reducedMotion = useReducedMotion();
  const variants = revealVariants[reveal];

  return (
    <motion.div
      variants={reducedMotion ? undefined : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      <motion.div
        animate={
          reducedMotion || !float
            ? undefined
            : { y: [0, -6, 0] }
        }
        transition={
          reducedMotion || !float
            ? undefined
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <GlassCard className="premium-visual-frame p-0" tilt={!reducedMotion}>
          <div className={`image-frame relative w-full ${aspectClasses[aspect]}`}>
            <SafeImage
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority={priority}
              loading={priority ? undefined : "lazy"}
              quality={92}
            />
            <div className="visual-shine pointer-events-none absolute inset-0 z-[1]" aria-hidden />
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{
                background: `linear-gradient(155deg, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 45%, color-mix(in srgb, var(--bg-deep) 25%, transparent) 100%)`,
              }}
              aria-hidden
            />
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
