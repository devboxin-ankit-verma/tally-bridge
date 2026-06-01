"use client";

import { images } from "@/lib/images";
import AnimatedImage from "./ui/AnimatedImage";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    title: "Connect Tally",
    caption:
      "Install TallyBridge Desktop Connector to sync with your Tally data securely.",
    image: images.stepConnect,
    alt: "Developer configuring Tally desktop connector on laptop for secure sync",
  },
  {
    title: "Sync Data",
    caption:
      "One-click import — pull accounts, stock, parties, and vouchers into the app.",
    image: images.stepSync,
    alt: "Team collaborating as cloud data synchronizes between business systems",
  },
  {
    title: "Access Anywhere",
    caption:
      "Open the app to view invoices, reports, enter entries, and send reminders anytime.",
    image: images.stepAccess,
    alt: "Executive checking live Tally reports and business metrics on smartphone",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Simple setup"
          title="How it works"
          subtitle="Three steps from desktop Tally to mobile freedom."
        />

        <div className="gsap-stagger grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="gsap-stagger-item flex flex-col items-center text-center"
            >
              <div className="relative mb-6 w-full max-w-[240px]">
                <span
                  className="absolute -right-1 -top-1 z-20 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white shadow-md"
                  style={{ background: "var(--accent-dark)" }}
                >
                  {i + 1}
                </span>
                <div
                  className="glow-orb absolute -inset-4 -z-10 h-full w-full opacity-50"
                  aria-hidden
                />
                <AnimatedImage
                  src={step.image}
                  alt={step.alt}
                  aspect="square"
                  className="w-full"
                  reveal="scale"
                  float={i === 1}
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-muted sm:text-base">
                {step.caption}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
