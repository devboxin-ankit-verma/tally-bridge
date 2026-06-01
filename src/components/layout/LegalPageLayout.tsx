import Container from "@/components/ui/Container";
import PageHero from "./PageHero";

type Section = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  sections: Section[];
};

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated = "June 2026",
  sections,
}: Props) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} eyebrow="Legal" />
      <section className="section-padding bg-surface">
        <Container>
          <p className="mb-10 text-sm text-[var(--gray-muted)]">
            Last updated: {lastUpdated}
          </p>
          <div className="legal-prose mx-auto max-w-3xl space-y-12">
            {sections.map((s) => (
              <article key={s.title} className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                  {s.title}
                </h2>
                <div className="legal-body mt-4 text-[var(--gray-muted)]">{s.content}</div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
