"use client";

import { motion } from "framer-motion";
import HeroVisual from "@/components/3d/HeroVisual";
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
      className="gradient-hero relative min-h-[100svh] overflow-x-clip overflow-y-visible"
      aria-labelledby="hero-heading"
    >
      <div className="glow-orb -left-40 top-0 h-96 w-96 opacity-50" aria-hidden />
      <div className="glow-orb -right-32 bottom-0 h-[28rem] w-[28rem] opacity-35" aria-hidden />

      <Container className="relative min-h-[100svh] w-full max-w-full py-16 sm:py-20 lg:py-24">
        <motion.div
          variants={reducedMotion ? undefined : staggerContainer}
          initial="hidden"
          animate="visible"
          className="hero-layout relative z-10 w-full"
        >
          <motion.p
            variants={staggerItem}
            className="hero-eyebrow eyebrow [grid-area:hero-eyebrow] justify-self-center rounded-full px-5 py-2.5 font-semibold lg:justify-self-start"
          >
            Trusted by 5,000+ businesses across India
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mb-2 text-center text-lg font-semibold tracking-tight text-on-gradient-muted [grid-area:hero-brand] lg:text-left"
          >
            TallyBridge
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={staggerItem}
            className="heading-display text-center text-on-gradient [grid-area:hero-title] lg:text-left"
          >
            Tally On Phone
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-center text-lg leading-relaxed text-on-gradient-muted [grid-area:hero-desc] sm:text-xl lg:text-left"
          >
            Access your Tally accounting data anywhere, anytime. Track sales, send
            invoices, view reports, and manage payments — all from your mobile device.
          </motion.p>

          {/* Visual: above CTAs on mobile; large right column on desktop */}
          <motion.div
            variants={staggerItem}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="hero-visual-area [grid-area:hero-visual]"
          >
            <HeroVisual />
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex w-full flex-col gap-4 [grid-area:hero-cta] sm:flex-row sm:justify-center lg:justify-start"
          >
            <MagneticCTA href="#cta-final">Get Started</MagneticCTA>
            <MagneticCTA href="#how-it-works" variant="outline">
              Download the App
            </MagneticCTA>
          </motion.div>

          <motion.ul
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-on-gradient [grid-area:hero-badges] lg:justify-start"
          >
            {badges.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={staggerItem}
            className="grid w-full max-w-md grid-cols-3 gap-3 [grid-area:hero-stats] sm:gap-4 lg:max-w-none"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl px-2 py-3 text-center sm:px-3 sm:py-4 lg:text-left"
              >
                <p className="text-lg font-bold text-on-gradient sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-[0.6875rem] text-on-gradient-muted sm:text-xs">
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
