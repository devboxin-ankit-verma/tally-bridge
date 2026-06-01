import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";
import ContactInfo from "@/components/ui/ContactInfo";
import MagneticCTA from "@/components/ui/MagneticCTA";
import { images } from "@/lib/images";
import { contact, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | TallyBridge",
  description: "Get in touch with TallyBridge — email, phone, and office in Raipur.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="We are here to help"
        subtitle="Reach our team for product questions, partnerships, or support."
        image={images.pageContactHero}
        imageAlt="Professional support and business communication"
      />

      <section className="section-padding bg-surface">
        <Container>
          <ContactInfo />
        </Container>
      </section>

      <section className="section-padding bg-surface-muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="heading-section text-[var(--foreground)]">Send a message</h2>
              <p className="mt-4 text-[var(--gray-muted)]">
                Fill out the form and we will respond as soon as possible. Required fields are
                marked with an asterisk.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="heading-section text-[var(--foreground)]">Visit our office</h2>
              <p className="mt-4 text-sm text-[var(--gray-muted)]">{contact.address.full}</p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
                <iframe
                  title="Developerbox office location on Google Maps"
                  src="https://maps.google.com/maps?q=4th+Floor+SK-Height+Near+Narayana+Hospital+Devendra+Nagar+Raipur+492001&z=15&output=embed"
                  className="h-[min(320px,50vh)] w-full min-h-[280px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="gradient-cta section-padding">
        <Container className="text-center">
          <h2 className="heading-section text-on-gradient">Ready to go mobile?</h2>
          <p className="mx-auto mt-4 max-w-lg text-on-gradient-muted">
            Start your free trial or explore plans on our homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticCTA href={routes.home + "#cta-final"}>Get Started</MagneticCTA>
            <MagneticCTA href={routes.home + "#pricing"} variant="outline">
              View Pricing
            </MagneticCTA>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
