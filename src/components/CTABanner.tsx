"use client";

import { images } from "@/lib/images";
import { routes } from "@/lib/site";
import Container from "./ui/Container";
import MagneticCTA from "./ui/MagneticCTA";
import SafeImage from "./ui/SafeImage";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  visual?: keyof typeof images;
};

export default function CTABanner({
  id = "cta-mid",
  title = "Ready to take Tally mobile?",
  subtitle = "Join thousands of businesses syncing, billing, and reporting from their phones.",
  primaryLabel = "Try Now — Free",
  secondaryLabel = "View Pricing",
  primaryHref = "#cta-final",
  secondaryHref = "#pricing",
  visual = "ctaMid",
}: Props) {
  const bgImage = images[visual];
  const visualAlt =
    visual === "ctaFinal"
      ? "Premium SaaS subscription ecosystem with modern fintech workspace"
      : "Business team celebrating growth with mobile Tally access on the go";

  const resolvedSecondary =
    secondaryLabel === "Talk to Sales" || secondaryLabel === "Contact Sales"
      ? `${routes.contact}#contact-form`
      : secondaryHref;

  return (
    <section
      id={id}
      className="relative overflow-hidden section-padding"
      aria-labelledby={`${id}-title`}
    >
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={bgImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
          aria-hidden
        />
        <div className="gradient-cta absolute inset-0 opacity-80" aria-hidden />
      </div>

      <Container className="relative z-[1]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h2 id={`${id}-title`} className="heading-section text-on-gradient">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-on-gradient-muted lg:mx-0">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <MagneticCTA href={primaryHref}>{primaryLabel}</MagneticCTA>
              <MagneticCTA href={resolvedSecondary} variant="outline">
                {secondaryLabel}
              </MagneticCTA>
            </div>
          </div>

          <div className="relative hidden aspect-[16/10] min-h-[240px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl lg:block">
            <SafeImage
              src={bgImage}
              alt={visualAlt}
              fill
              className="object-cover"
              sizes="600px"
              quality={90}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
