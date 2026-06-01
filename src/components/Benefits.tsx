"use client";

import { images } from "@/lib/images";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import SectionVisualBanner from "./ui/SectionVisualBanner";
import UltraVisualCard from "./ui/UltraVisualCard";

const benefits = [
  {
    title: "24/7 Tally Access",
    description:
      "Check balances, vouchers, and reports anytime — morning commute or late night.",
    image: images.benefitAccess,
    alt: "Professional using TallyBridge on smartphone for accounting at any hour",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
      />
    ),
  },
  {
    title: "Easy Daily Usage",
    description:
      "Intuitive mobile UI built for speed. Enter vouchers and share documents in seconds.",
    image: images.benefitEase,
    alt: "Close-up of mobile payment and accounting app interface",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Bank-Grade Security",
    description:
      "Encrypted sync, ISO-ready practices, and zero password storage on our servers.",
    image: images.benefitSecurity,
    alt: "Cybersecurity and secure data protection visualization",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Productive Workflow",
    description:
      "Reliable sync, smart reminders, and clear reports keep your team aligned and efficient.",
    image: images.benefitWorkflow,
    alt: "Team collaborating on business analytics and workflow",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Why TallyBridge"
          title="Built for how you actually work"
          subtitle="Owners, accountants, and field teams who need Tally without being tied to a desk."
        />

        <SectionVisualBanner
          src={images.benefitsBanner}
          alt="Dynamic business growth visualization with modern technology atmosphere"
          height="sm"
          overlay="light"
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <UltraVisualCard
              key={b.title}
              src={b.image}
              alt={b.alt}
              title={b.title}
              description={b.description}
              icon={
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  {b.icon}
                </svg>
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
