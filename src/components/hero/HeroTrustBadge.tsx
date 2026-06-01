"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { staggerItem } from "@/lib/motion";

type Props = {
  className?: string;
};

export default function HeroTrustBadge({ className = "" }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.p
      variants={reduced ? undefined : staggerItem}
      className={`hero-eyebrow hero-eyebrow-shine eyebrow [grid-area:hero-eyebrow] justify-self-center rounded-full px-5 py-2.5 font-semibold lg:justify-self-start ${className}`}
    >
      <span className="relative z-10">Trusted by 5,000+ businesses across India</span>
      {!reduced && <span className="hero-eyebrow-sweep" aria-hidden />}
    </motion.p>
  );
}
