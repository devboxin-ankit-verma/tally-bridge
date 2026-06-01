"use client";

import { motion } from "framer-motion";
import HeroVisual from "@/components/3d/HeroVisual";
import HeroHeadline from "@/components/hero/HeroHeadline";
import HeroTrustBadge from "@/components/hero/HeroTrustBadge";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import MagneticCTA from "./ui/MagneticCTA";
import Container from "./ui/Container";

const badges = ["100% Secure", "Real-time Sync", "Offline Access"];

const stats = [
  { value: "5,000+", label: "Businesses" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Access" },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="gradient-hero hero-section relative flex min-h-[100dvh] flex-col overflow-x-clip"
      aria-labelledby="hero-heading"
    >
      <div className="glow-orb -left-40 top-0 h-72 w-72 opacity-40 sm:h-96 sm:w-96 sm:opacity-50" aria-hidden />
      <div className="glow-orb -right-32 bottom-0 h-64 w-64 opacity-30 sm:h-[28rem] sm:w-[28rem] sm:opacity-35" aria-hidden />

      <Container className="hero-section-inner relative flex min-h-0 flex-1 flex-col justify-center py-14 sm:py-16 lg:py-20">
        <motion.div
          variants={reducedMotion ? undefined : staggerContainer}
          initial="hidden"
          animate="visible"
          className="hero-layout relative z-10 w-full"
        >
          <HeroTrustBadge />

          <div className="[grid-area:hero-title]">
            <HeroHeadline className="[grid-area:unset]" />
          </div>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-center text-base leading-relaxed text-on-gradient-muted [grid-area:hero-desc] sm:text-lg lg:text-left"
          >
            Access your Tally accounting data anywhere, anytime. Track sales, send
            invoices, view reports, and manage payments — all from your mobile device.
          </motion.p>

          <div
            className="hero-visual-area [grid-area:hero-visual]"
            style={{ opacity: 1, visibility: "visible" }}
          >
            <HeroVisual />
          </div>

          <motion.div
            variants={staggerItem}
            className="hero-cta-row flex w-full flex-col gap-3 [grid-area:hero-cta] sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
          >
            <MagneticCTA href="#cta-final" className="w-full sm:w-auto">
              Get Started
            </MagneticCTA>
            <MagneticCTA href="#how-it-works" variant="outline" className="w-full sm:w-auto">
              Download the App
            </MagneticCTA>
          </motion.div>

          <motion.ul
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-on-gradient sm:text-sm [grid-area:hero-badges] lg:justify-start"
          >
            {badges.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/90" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={staggerItem}
            className="grid w-full max-w-md grid-cols-3 gap-2 [grid-area:hero-stats] sm:gap-3 lg:max-w-none"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl px-2 py-2.5 text-center sm:px-3 sm:py-3 lg:text-left"
              >
                <p className="text-base font-bold text-on-gradient sm:text-xl">{s.value}</p>
                <p className="mt-0.5 text-[0.625rem] text-on-gradient-muted sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
