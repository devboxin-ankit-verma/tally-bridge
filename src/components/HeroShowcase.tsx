"use client";

import { images } from "@/lib/images";
import AnimatedImage from "./ui/AnimatedImage";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function HeroShowcase() {
  return (
    <section
      className="section-padding bg-surface"
      aria-label="Product preview"
    >
      <Container>
        <SectionHeading
          eyebrow="Mobile-first"
          title="Business data on mobile, on the go"
          subtitle="View ledgers, dashboards, and daily workflows from a polished app experience built for Tally users."
        />
        <div className="gsap-reveal relative mx-auto max-w-5xl">
          <div className="gsap-parallax">
            <AnimatedImage
              src={images.heroShowcase}
              alt="Business leader reviewing live Tally data and financial dashboards on smartphone"
              priority
              aspect="video"
              reveal="scale"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
