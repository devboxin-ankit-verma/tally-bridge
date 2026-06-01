"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site";

const items = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${contact.email}`,
    text: contact.email,
  },
  {
    icon: Phone,
    label: "Phone",
    href: `tel:${contact.phone}`,
    text: contact.phoneDisplay,
  },
  {
    icon: MapPin,
    label: "Office",
    href: contact.mapsUrl,
    text: contact.address.full,
    external: true,
  },
] as const;

type Props = {
  variant?: "list" | "cards";
};

export default function ContactInfo({ variant = "cards" }: Props) {
  if (variant === "list") {
    return (
      <ul className="space-y-4">
        {items.map(({ icon: Icon, label, href, text, ...rest }) => (
          <li key={label}>
            <a
              href={href}
              {...("external" in rest && rest.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex gap-3 text-sm transition hover:text-[var(--accent)]"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--gray-muted)]">
                  {label}
                </span>
                <span className="text-[var(--foreground)]">{text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, label, href, text, ...rest }, i) => (
        <motion.a
          key={label}
          href={href}
          {...("external" in rest && rest.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="card-premium group flex min-w-0 gap-4 p-5 transition hover:border-[var(--accent)]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)] transition group-hover:shadow-[0_0_20px_var(--glow)]">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--gray-muted)]">
              {label}
            </span>
            <span className="mt-1 block text-sm font-medium leading-snug text-[var(--foreground)]">
              {text}
            </span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
