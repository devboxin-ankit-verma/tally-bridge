"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { images } from "@/lib/images";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import AnimatedImage from "./ui/AnimatedImage";

const faqs = [
  {
    q: "Does TallyBridge work without internet?",
    a: "Yes. TallyBridge stores essential Tally data on your device so you can view reports, create vouchers, and manage accounts offline. Changes sync automatically when you're back online.",
  },
  {
    q: "How does syncing with Tally desktop work?",
    a: "Install the TallyBridge Desktop Connector on the PC where Tally runs. It securely connects to your company data and syncs via our encrypted API — usually within seconds.",
  },
  {
    q: "Can I generate GST e-invoices from the app?",
    a: "Pro and Business plans include GST-compliant billing, e-invoices, and eWay bill generation. You can share documents instantly via WhatsApp or email.",
  },
  {
    q: "Is my data secure?",
    a: "We use bank-grade encryption, ISO 27001 certified infrastructure, and never store your Tally password. All sync traffic is encrypted end-to-end.",
  },
  {
    q: "Which Tally versions are supported?",
    a: "TallyBridge supports Tally.ERP 9 and Tally Prime. Contact us if you need help with a specific release or multi-company setup.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-subtle)] last:border-0">
      <button
        type="button"
        id={`faq-btn-${q.slice(0, 12)}`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[var(--accent)]"
      >
        <span className="text-base font-semibold text-foreground sm:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-light"
          style={{
            background: "color-mix(in srgb, var(--accent) 18%, transparent)",
            color: "var(--accent)",
          }}
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${q.slice(0, 12)}`}
            role="region"
            aria-labelledby={`faq-btn-${q.slice(0, 12)}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-base leading-relaxed text-gray-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-surface-muted">
      <Container className="max-w-6xl">
        <SectionHeading
          eyebrow="Support"
          title="Have questions?"
          subtitle="Find answers to common questions below, or reach out to our team."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="gsap-reveal card-premium px-5 sm:px-8">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>

            <div className="gsap-reveal card-premium mt-8 p-7 sm:p-9">
              <h3 className="text-xl font-bold tracking-tight text-foreground">Get in touch</h3>
              <p className="mt-2 text-gray-muted">
                Can&apos;t find what you need? Send us a message.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    className="min-h-[48px] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/50 px-4 py-3 text-base text-foreground outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_25%,transparent)]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    autoComplete="email"
                    className="min-h-[48px] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/50 px-4 py-3 text-base text-foreground outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_25%,transparent)]"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/50 px-4 py-3 text-base text-foreground outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_25%,transparent)]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="min-h-[48px] w-full rounded-xl px-10 py-3.5 font-semibold text-white shadow-md transition hover:brightness-110 sm:w-auto"
                  style={{ background: "var(--accent-dark)" }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>

          <div className="gsap-reveal lg:sticky lg:top-28 lg:self-start">
            <AnimatedImage
              src={images.faqVisual}
              alt="Support team collaborating to help TallyBridge customers"
              aspect="portrait"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
