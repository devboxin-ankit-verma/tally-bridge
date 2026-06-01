"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import BrandLogo from "./ui/BrandLogo";
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
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const logoVariant = theme.isLight ? "dark" : "light";

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`site-header fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--border-subtle)] bg-transparent shadow-none"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between gap-2 py-3 sm:gap-3 sm:py-3.5">
        <BrandLogo
          showTagline
          size="sm"
          variant={logoVariant}
          className="max-w-[min(100%,220px)] sm:max-w-none"
        />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link group relative rounded-lg px-3 py-2 text-sm font-medium transition"
            >
              {link.label}
              <span
                className="absolute bottom-1 left-3 right-3 h-px scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeSwitcher />
          <div className="hidden md:block">
            <MagneticCTA
              href="#cta-final"
              variant="secondary"
              className="!min-h-[40px] !min-w-0 !px-4 !py-2 !text-sm"
            >
              Get Started
            </MagneticCTA>
          </div>
          <button
            type="button"
            className="nav-menu-btn flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-0.5 w-5 transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </Container>

      {open && (
        <nav
          className="mobile-nav border-t px-4 py-4 xl:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link block rounded-lg px-2 py-3 text-sm font-medium"
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
