"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
};

export default function GlassCard({ children, className = "", tilt = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (!tilt || reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, transparent), transparent 50%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-50"
        style={{
          background: `linear-gradient(135deg, var(--accent), transparent 60%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
