"use client";

import { images } from "@/lib/images";
import AnimatedCounter from "./ui/AnimatedCounter";
import Container from "./ui/Container";
import SafeImage from "./ui/SafeImage";

const metrics = [
  {
    type: "counter" as const,
    end: 5000,
    suffix: "+",
    label: "Active businesses",
    decimals: 0,
  },
  {
    type: "counter" as const,
    end: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    decimals: 1,
  },
  {
    type: "static" as const,
    display: "ISO",
    label: "27001 certified",
  },
];

export default function TrustBar() {
  return (
    <div
      className="relative min-h-[108px] overflow-hidden border-y border-white/10"
      role="region"
      aria-label="Trust metrics"
    >
      <SafeImage
        src={images.trustAmbient}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        quality={85}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(90deg, var(--accent-dark), var(--accent))`,
          opacity: 0.78,
        }}
        aria-hidden
      />
      <Container className="relative z-[2] py-5">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:divide-x sm:divide-white/25">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center px-6 text-center sm:px-10"
            >
              <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {m.type === "counter" ? (
                  <AnimatedCounter
                    end={m.end}
                    suffix={m.suffix}
                    decimals={m.decimals}
                    duration={2.2}
                  />
                ) : (
                  m.display
                )}
              </span>
              <span className="mt-0.5 text-sm font-medium text-white/90">{m.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
