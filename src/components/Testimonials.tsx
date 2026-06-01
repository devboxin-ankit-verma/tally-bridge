"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import SectionVisualBanner from "./ui/SectionVisualBanner";
import SafeImage from "./ui/SafeImage";

const testimonials = [
  {
    quote:
      "TallyBridge transformed how we manage accounts on the road. Offline access and instant GST billing saved us hours every week.",
    name: "Rajesh Kumar",
    company: "Kumar Traders, Mumbai",
    portrait: images.portraitRajesh,
  },
  {
    quote:
      "The sync with our Tally desktop is seamless. Our team views real-time reports from anywhere — it's like having Tally in your pocket.",
    name: "Priya Sharma",
    company: "Sharma Electronics, Delhi",
    portrait: images.portraitPriya,
  },
  {
    quote:
      "We switched from spreadsheets to TallyBridge for field sales. Creating and sharing invoices via WhatsApp has been a game-changer.",
    name: "Amit Patel",
    company: "Patel Distributors, Ahmedabad",
    portrait: images.portraitAmit,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section-padding bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our users say"
          subtitle="Trusted by businesses across India"
        />

        <SectionVisualBanner
          src={images.testimonialsBanner}
          alt="Professional business team in corporate environment building trust"
          height="sm"
          overlay="light"
          className="mb-12 max-w-4xl mx-auto"
        />

        <div className="relative mx-auto max-w-4xl">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2.5 text-foreground backdrop-blur-md sm:-left-14"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="card-premium px-6 py-12 sm:px-14 sm:py-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="relative mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border-2 border-[var(--accent)]">
                  <SafeImage
                    src={current.portrait}
                    alt={`${current.name}, ${current.company}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    quality={90}
                  />
                </div>
                <blockquote className="text-lg font-medium italic leading-relaxed text-foreground/95 sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <footer className="mt-8">
                  <cite className="not-italic font-semibold text-foreground">
                    {current.name}
                  </cite>
                  <p className="text-sm text-gray-muted">{current.company}</p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2.5 text-foreground backdrop-blur-md sm:-right-14"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-[var(--accent)]" : "w-2 bg-white/25"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
