import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy | TallyBridge",
  description: "How TallyBridge uses cookies and similar technologies.",
};

const sections = [
  {
    title: "What are cookies",
    content: (
      <p>
        Cookies are small text files stored on your device. They help websites remember preferences,
        keep you signed in, and understand how features are used.
      </p>
    ),
  },
  {
    title: "How we use cookies",
    content: (
      <ul>
        <li>Essential: security, session, and core functionality</li>
        <li>Preferences: theme selection and UI settings</li>
        <li>Analytics: aggregated traffic and performance insights</li>
      </ul>
    ),
  },
  {
    title: "Analytics",
    content: (
      <p>
        We may use privacy-focused analytics to improve the product. Data is aggregated where
        possible and not sold to third parties for advertising.
      </p>
    ),
  },
  {
    title: "Your controls",
    content: (
      <p>
        You can block or delete cookies in your browser settings. Blocking essential cookies may
        affect site functionality (e.g. theme persistence).
      </p>
    ),
  },
  {
    title: "Third-party services",
    content: (
      <p>
        Embedded content (such as maps) may set their own cookies governed by the provider&apos;s
        policy. We recommend reviewing those policies when using embedded features.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        Cookie-related questions:{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <SiteShell>
      <LegalPageLayout
        title="Cookie Policy"
        subtitle="Transparency about cookies and tracking on TallyBridge."
        sections={sections}
      />
    </SiteShell>
  );
}
