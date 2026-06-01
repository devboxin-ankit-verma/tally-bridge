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

      <Container className="relative grid min-h-[100svh] w-full max-w-full items-center gap-10 py-20 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <motion.div
          variants={reducedMotion ? undefined : staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.p
            variants={staggerItem}
            className="hero-eyebrow eyebrow mb-6 rounded-full px-5 py-2.5 font-semibold"
          >
            Trusted by 5,000+ businesses across India
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mb-2 text-lg font-semibold tracking-tight text-on-gradient-muted"
          >
            TallyBridge
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={staggerItem}
            className="heading-display text-on-gradient"
          >
            Tally On Phone
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-lg leading-relaxed text-on-gradient-muted sm:text-xl"
          >
            Access your Tally accounting data anywhere, anytime. Track sales, send
            invoices, view reports, and manage payments — all from your mobile device.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <MagneticCTA href="#cta-final">Get Started</MagneticCTA>
            <MagneticCTA href="#how-it-works" variant="outline">
              Download the App
            </MagneticCTA>
          </motion.div>

          <motion.ul
            variants={staggerItem}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-on-gradient lg:justify-start"
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
            className="mt-12 grid w-full max-w-md grid-cols-3 gap-4 lg:max-w-none"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl px-3 py-4 text-center lg:text-left"
              >
                <p className="text-xl font-bold text-on-gradient sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-xs text-on-gradient-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full min-w-0"
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
