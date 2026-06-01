"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-[var(--accent-dark)] shadow-[0_0_40px_color-mix(in_srgb,var(--accent)_35%,transparent)]",
  secondary:
    "text-white shadow-[0_0_32px_color-mix(in_srgb,var(--accent)_45%,transparent)]",
  outline:
    "border border-white/25 bg-white/8 text-white backdrop-blur-xl hover:bg-white/15 hover:border-white/40",
  ghost:
    "border border-white/10 bg-white/5 text-white hover:bg-white/10",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export default function MagneticCTA({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 28 });
  const springY = useSpring(y, { stiffness: 350, damping: 28 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`group relative inline-flex min-h-[48px] min-w-[140px] items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-3.5 text-[0.9375rem] font-semibold tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${variants[variant]} ${className}`}
        style={
          variant === "secondary"
            ? { background: `linear-gradient(135deg, var(--accent), var(--accent-dark))` }
            : undefined
        }
      >
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
          }}
          aria-hidden
        />
        <span className="relative z-10">{children}</span>
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </motion.div>
  );
}
