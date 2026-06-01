"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "@/lib/images";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import SectionVisualBanner from "./ui/SectionVisualBanner";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    recommended: false,
    features: [
      "Up to 100 vouchers/day",
      "Basic reports",
      "Single device",
      "Email support",
      "7-day data history",
    ],
    cta: "Sign Up",
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    recommended: true,
    features: [
      "Unlimited vouchers",
      "GST e-invoices & eWay bills",
      "Up to 3 devices",
      "Priority support",
      "90-day data history",
      "WhatsApp sharing",
    ],
    cta: "Upgrade",
  },
  {
    name: "Business",
    price: "₹999",
    period: "/month",
    recommended: false,
    features: [
      "Everything in Pro",
      "Team features (10 users)",
      "Advanced analytics",
      "API access",
      "Dedicated account manager",
      "Unlimited data history",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-surface-muted">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with you"
          subtitle="Transparent pricing for solo operators and growing teams."
        />

        <SectionVisualBanner
          src={images.pricingHero}
          alt="Premium SaaS pricing concept with modern subscription and fintech workspace"
          height="sm"
          overlay="light"
          className="mb-12"
        />

        <div className="gsap-stagger grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`gsap-stagger-item card-premium flex flex-col overflow-hidden ${
                plan.recommended
                  ? "relative z-10 ring-2 ring-[var(--accent)] lg:-my-2 lg:py-2"
                  : ""
              }`}
            >
              <div
                className="px-6 py-6 text-center"
                style={{
                  background: plan.recommended
                    ? `linear-gradient(135deg, var(--accent-dark), var(--accent))`
                    : `linear-gradient(135deg, var(--gradient-mid), var(--gradient-end))`,
                }}
              >
                {plan.recommended && (
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="text-center">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-gray-muted">{plan.period}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[0.9375rem] leading-snug text-foreground/90"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: "var(--accent)" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ y: -2 }} className="mt-8">
                  <Link
                    href="#cta-final"
                    className={`flex min-h-[48px] items-center justify-center rounded-xl text-center text-[0.9375rem] font-semibold transition-all ${
                      plan.recommended
                        ? "text-white shadow-md"
                        : "border-2 bg-transparent hover:bg-surface-muted"
                    }`}
                    style={
                      plan.recommended
                        ? { background: "var(--accent-dark)" }
                        : {
                            borderColor: "var(--accent)",
                            color: "var(--accent-dark)",
                          }
                    }
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
