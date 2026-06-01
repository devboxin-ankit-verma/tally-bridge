import Container from "@/components/ui/Container";
import SafeImage from "@/components/ui/SafeImage";

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt = "",
}: Props) {
  return (
    <section className="gradient-hero relative overflow-x-clip py-16 sm:py-20 lg:py-24">
      <Container>
        <div
          className={
            image
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              : "max-w-3xl"
          }
        >
          <div>
            {eyebrow && (
              <p className="hero-eyebrow eyebrow mb-4 inline-block rounded-full px-4 py-2">
                {eyebrow}
              </p>
            )}
            <h1 className="heading-display text-on-gradient">{title}</h1>
            {subtitle && (
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-gradient-muted sm:text-xl">
                {subtitle}
              </p>
            )}
          </div>
          {image && (
            <div className="premium-visual-frame relative aspect-[16/10] min-h-[200px] overflow-hidden rounded-3xl">
              <SafeImage
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/50 to-transparent"
                aria-hidden
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
