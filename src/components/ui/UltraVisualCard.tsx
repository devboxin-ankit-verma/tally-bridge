"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SafeImage from "./SafeImage";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function UltraVisualCard({ src, alt, title, description, icon }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="card-premium group overflow-hidden p-0"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      whileHover={reduced ? undefined : { y: -6 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        <SafeImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          quality={90}
        />
        <div className="visual-shine pointer-events-none absolute inset-0 z-[1]" aria-hidden />
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-t from-[var(--bg-deep)]/75 via-[var(--bg-deep)]/15 to-transparent"
          aria-hidden
        />
        {icon && (
          <div
            className="absolute left-4 top-4 z-[3] flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg"
            style={{
              background: `linear-gradient(145deg, var(--accent), var(--accent-dark))`,
            }}
          >
            {icon}
          </div>
        )}
      </div>
      <div className="relative z-[3] bg-[var(--surface-elevated)] p-6">
        <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-muted">{description}</p>
      </div>
    </motion.article>
  );
}
