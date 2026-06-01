import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import MagneticCTA from "@/components/ui/MagneticCTA";
import { images } from "@/lib/images";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | TallyBridge",
  description:
    "Learn about TallyBridge — mobile Tally accounting, cloud sync, and digital transformation for Indian businesses.",
};

const whyItems = [
  {
    title: "Built for Tally users",
    text: "Purpose-designed for vouchers, GST, stock, and reports you already trust in Tally.",
  },
  {
    title: "Secure by design",
    text: "Encrypted sync, responsible data practices, and infrastructure aligned with modern compliance expectations.",
  },
  {
    title: "Always improving",
    text: "Regular updates driven by feedback from owners, accountants, and field teams across India.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About TallyBridge"
        title="Powering mobile Tally for modern business"
        subtitle="We help businesses access accounting data anywhere — with clarity, security, and speed."
        image={images.pageAboutHero}
        imageAlt="Business leader using mobile Tally dashboards"
      />

      <section className="section-padding bg-surface">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Overview"
                title="Company overview"
                subtitle="TallyBridge connects desktop Tally with a premium mobile experience — so decisions are never delayed by desk-bound data."
                className="!mb-6"
              />
              <p className="text-[var(--gray-muted)] leading-relaxed">
                From invoicing and GST to stock, parties, and dashboards, teams get one coherent
                view on phone and tablet. Developerbox Ai Factory builds and supports TallyBridge
                for growing Indian enterprises.
              </p>
            </div>
            <div className="premium-visual-frame relative aspect-[16/10] min-h-[200px] overflow-hidden rounded-3xl">
              <SafeImage
                src={images.pageAboutMission}
                alt="Cloud synchronization between desktop and mobile accounting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface-muted">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <article className="card-premium p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Our mission</h2>
              <p className="mt-4 text-[var(--gray-muted)] leading-relaxed">
                Make Tally data as mobile as your business — secure, offline-capable, and simple
                for every stakeholder who needs answers on the go.
              </p>
              <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl">
                <SafeImage
                  src={images.pageAboutMission}
                  alt="Real-time Tally sync mission"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </article>
            <article className="card-premium p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Our vision</h2>
              <p className="mt-4 text-[var(--gray-muted)] leading-relaxed">
                Every Indian business operating on Tally should have instant, trustworthy mobile
                intelligence — without compromising compliance or control.
              </p>
              <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl">
                <SafeImage
                  src={images.pageAboutVision}
                  alt="Analytics and digital transformation vision"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Why us"
            title="Why choose TallyBridge"
            subtitle="A premium mobile layer for the accounting system you already rely on."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="card-premium p-6">
                <h3 className="text-lg font-bold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gray-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface-muted">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="premium-visual-frame relative aspect-[16/10] min-h-[200px] overflow-hidden rounded-3xl">
              <SafeImage
                src={images.pageAboutCommitment}
                alt="Modern business operations and growth"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="heading-section text-[var(--foreground)]">Our commitment</h2>
              <p className="mt-4 text-[var(--gray-muted)] leading-relaxed">
                We commit to reliable sync, readable reports, responsive support, and respectful
                handling of your business data. Your trust is the foundation of everything we ship.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticCTA href={routes.contact}>Contact us</MagneticCTA>
                <Link
                  href={routes.home + "#pricing"}
                  className="inline-flex min-h-[48px] items-center rounded-xl border border-[var(--border-subtle)] px-6 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
