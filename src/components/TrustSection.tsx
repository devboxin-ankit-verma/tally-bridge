"use client";

import { images } from "@/lib/images";
import Container from "./ui/Container";
import SectionVisualBanner from "./ui/SectionVisualBanner";
import AnimatedImage from "./ui/AnimatedImage";

const clientLogos = [
  "Kumar Traders",
  "Sharma Electronics",
  "Patel Distributors",
  "Mehta & Co.",
  "Gupta Industries",
  "Singh Retail",
];

const badges = [
  { label: "ISO 27001", sub: "Certified infrastructure" },
  { label: "256-bit", sub: "Encryption in transit" },
  { label: "SOC 2", sub: "Security practices" },
];

export default function TrustSection() {
  return (
    <section
      className="border-y border-[var(--border-subtle)] bg-surface-muted section-padding"
      aria-label="Trust and credibility"
    >
      <Container>
        <p className="gsap-reveal eyebrow text-center text-[var(--gray-muted)]">
          Trusted by growing businesses
        </p>

        <SectionVisualBanner
          src={images.trustBanner}
          alt="Earth-from-space technology network symbolizing global secure business infrastructure"
          height="md"
          overlay="light"
          className="mt-8"
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <AnimatedImage
            src={images.trustSecurity}
            alt="Cybersecurity shield protecting encrypted cloud business data"
            aspect="video"
            reveal="left"
          />
          <AnimatedImage
            src={images.trustNetwork}
            alt="Warehouse logistics and inventory tracking in modern business operations"
            aspect="video"
            reveal="right"
          />
        </div>

        <div className="gsap-stagger mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clientLogos.map((name) => (
            <span
              key={name}
              className="gsap-stagger-item text-sm font-semibold tracking-tight text-[var(--gray-muted)] sm:text-base"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="gsap-stagger mt-12 grid gap-4 sm:grid-cols-3">
          {badges.map((b) => (
            <div
              key={b.label}
              className="gsap-stagger-item card-premium flex flex-col items-center px-6 py-6 text-center"
            >
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                {b.label}
              </span>
              <span className="mt-1 text-sm text-gray-muted">{b.sub}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
