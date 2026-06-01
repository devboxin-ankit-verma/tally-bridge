import Link from "next/link";

type Props = {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "auto";
  href?: string;
  className?: string;
};

const sizes = {
  sm: { icon: 32, title: "text-base", tag: "text-[0.625rem]" },
  md: { icon: 40, title: "text-lg", tag: "text-[0.6875rem]" },
  lg: { icon: 48, title: "text-xl", tag: "text-xs" },
};

function LogoMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id="tb-grad" x1="8" y1="6" x2="40" y2="42">
          <stop stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-dark)" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#tb-grad)" />
      <path
        d="M10 28c6-10 22-10 28 0"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="22" r="3" fill="white" fillOpacity="0.95" />
      <circle cx="34" cy="22" r="3" fill="white" fillOpacity="0.95" />
      <rect x="20" y="14" width="8" height="14" rx="2" fill="white" fillOpacity="0.9" />
      <path
        d="M22 18h4M22 22h4"
        stroke="var(--accent-dark)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BrandLogo({
  showTagline = false,
  size = "md",
  variant = "auto",
  href = "#",
  className = "",
}: Props) {
  const s = sizes[size];
  const titleClass =
    variant === "light"
      ? "text-white"
      : variant === "dark"
        ? "text-[#0f172a]"
        : "text-foreground";
  const tagClass =
    variant === "light"
      ? "text-white/75"
      : variant === "dark"
        ? "text-slate-600"
        : "text-gray-muted";

  const content = (
    <div className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <LogoMark size={s.icon} />
      <div className="min-w-0 leading-tight">
        <span className={`block truncate font-bold tracking-tight ${s.title} ${titleClass}`}>
          TallyBridge
        </span>
        {showTagline && (
          <span
            className={`hidden truncate font-medium sm:block ${s.tag} ${tagClass}`}
          >
            by Developerbox Ai Factory
          </span>
        )}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="shrink-0 transition-opacity hover:opacity-90">
      {content}
    </Link>
  );
}
