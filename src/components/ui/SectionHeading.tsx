type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  return (
    <header
      className={`gsap-reveal mb-12 md:mb-16 ${
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-xl text-left"
      } ${className}`}
    >
      {eyebrow && (
        <p
          className="eyebrow mb-3"
          style={{ color: "var(--accent-dark)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="heading-section text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}
