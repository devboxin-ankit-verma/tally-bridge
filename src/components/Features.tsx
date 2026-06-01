"use client";

import { images } from "@/lib/images";
import AnimatedImage from "./ui/AnimatedImage";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import SectionVisualBanner from "./ui/SectionVisualBanner";

const features = [
  {
    title: "Real-time Data Sync",
    description:
      "Connect Tally desktop to your phone instantly. Ledgers, stock, and parties stay up to date across every device.",
    bullets: ["One-click sync", "Secure API connection", "Multi-company support"],
    image: images.sync,
    alt: "Futuristic 3D glass data bridge representing secure Tally desktop to mobile sync",
    imageLeft: true,
  },
  {
    title: "Sales Tracking",
    description:
      "Monitor daily sales, top products, and team performance with live dashboards designed for decision-makers on the move.",
    bullets: ["Live sales dashboards", "Top customer insights", "Daily summaries"],
    image: images.sales,
    alt: "Luxury fintech analytics dashboard with revenue growth charts on displays",
    imageLeft: false,
  },
  {
    title: "Invoices & GST Billing",
    description:
      "Generate GST-compliant bills and e-invoices from your phone. Share via WhatsApp or email in seconds.",
    bullets: ["GST e-invoice ready", "eWay bill support", "Instant sharing"],
    image: images.billing,
    alt: "Business professional creating GST invoices and financial documents on desk",
    imageLeft: true,
  },
  {
    title: "Reports & Dashboards",
    description:
      "Real-time sales, receivables, and cash flow. Track pending orders and business health at a glance.",
    bullets: ["Receivables aging", "Cash flow view", "Custom report access"],
    image: images.reports,
    alt: "Business intelligence screens showing receivables and cash flow reports",
    imageLeft: false,
  },
  {
    title: "Payment Reminders",
    description:
      "Never miss a follow-up. Send payment reminders and track outstanding dues directly from your phone.",
    bullets: ["Automated reminders", "Party-wise dues", "WhatsApp & SMS ready"],
    image: images.payments,
    alt: "Mobile banking interface for payment reminders and outstanding invoice tracking",
    imageLeft: true,
  },
  {
    title: "Offline Access",
    description:
      "Manage and enter accounts without internet. Store Tally data on-device for reliable daily usage anywhere.",
    bullets: ["Works without signal", "Auto-sync when online", "On-device encryption"],
    image: images.offline,
    alt: "Entrepreneur using smartphone for Tally accounting without internet connection",
    imageLeft: false,
  },
];

function FeatureBlock({
  title,
  description,
  bullets,
  image,
  alt,
  imageLeft,
}: (typeof features)[0]) {
  return (
    <article
      className={`flex flex-col items-stretch gap-10 py-14 first:pt-0 last:pb-0 md:flex-row md:items-center md:gap-16 ${
        imageLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-[46%]">
        <AnimatedImage
          src={image}
          alt={alt}
          aspect="video"
          reveal={imageLeft ? "left" : "right"}
        />
      </div>
      <div className="flex w-full flex-col justify-center md:w-[54%]">
        <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-gray-muted sm:text-lg">
          {description}
        </p>
        <ul className="mt-8 space-y-3.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-[0.9375rem] text-foreground">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold text-white"
                style={{ background: "var(--accent-dark)" }}
                aria-hidden
              >
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-padding bg-surface-muted">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything you need, in your pocket"
          subtitle="Sync, sell, bill, report, remind, and work offline — a complete mobile workflow for Tally."
        />

        <SectionVisualBanner
          src={images.featuresIntro}
          alt="Premium analytics command center with live business intelligence dashboards"
          height="md"
          overlay="light"
          className="mb-14"
        />

        <div className="divide-y divide-[var(--border-subtle)]">
          {features.map((f) => (
            <FeatureBlock key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
