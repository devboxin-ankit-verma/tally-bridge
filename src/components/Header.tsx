"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import MagneticCTA from "./ui/MagneticCTA";
import Container from "./ui/Container";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[var(--bg-deep)]/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between gap-3 py-3.5 sm:py-4">
        <Link href="#" className="flex shrink-0 items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white shadow-[0_0_24px_var(--glow)]"
            style={{
              background: `linear-gradient(145deg, var(--accent), var(--accent-dark))`,
            }}
          >
            TB
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            TallyBridge
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-lg px-3 py-2 text-sm font-medium text-gray-muted transition hover:text-foreground"
            >
              {link.label}
              <span
                className="absolute bottom-1 left-3 right-3 h-px scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <div className="hidden md:block">
            <MagneticCTA
              href="#cta-final"
              variant="secondary"
              className="!min-h-[42px] !min-w-0 !px-5 !py-2.5 !text-sm"
            >
              Get Started
            </MagneticCTA>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </Container>

      {open && (
        <nav
          className="border-t border-white/10 bg-[var(--bg-deep)]/95 px-4 py-4 backdrop-blur-2xl xl:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-lg px-2 py-3 text-sm font-medium text-gray-muted hover:bg-white/5 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta-final"
            className="mt-3 block rounded-xl py-3.5 text-center text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-dark))` }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </nav>
      )}
    </motion.header>
  );
}
