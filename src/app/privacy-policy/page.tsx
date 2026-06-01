import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | TallyBridge",
  description: "How TallyBridge collects, uses, and protects your information.",
};

const sections = [
  {
    title: "Information we collect",
    content: (
      <>
        <p>
          We may collect information you provide directly (name, email, phone, business details),
          usage data (device type, app interactions, logs), and technical data (IP address, browser
          type) when you use TallyBridge websites and services.
        </p>
        <p>
          Accounting data synced from Tally remains yours. We process it only to deliver sync,
          reporting, and related features you authorize.
        </p>
      </>
    ),
  },
  {
    title: "How we use data",
    content: (
      <ul>
        <li>Provide, maintain, and improve TallyBridge products</li>
        <li>Authenticate users and secure accounts</li>
        <li>Send service-related communications</li>
        <li>Comply with legal obligations and prevent fraud</li>
        <li>Analyze aggregated usage to improve performance and UX</li>
      </ul>
    ),
  },
  {
    title: "Cookies & tracking",
    content: (
      <p>
        We use cookies and similar technologies for session management, preferences, and analytics.
        See our{" "}
        <a href="/cookie-policy">Cookie Policy</a> for details and control options.
      </p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>
        We apply encryption in transit, access controls, and industry-aligned practices to protect
        your data. No method of transmission over the Internet is 100% secure; we continuously work
        to reduce risk.
      </p>
    ),
  },
  {
    title: "Your rights",
    content: (
      <ul>
        <li>Request access, correction, or deletion of personal data where applicable</li>
        <li>Withdraw consent for optional marketing communications</li>
        <li>Object to certain processing as permitted by law</li>
      </ul>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        For privacy questions contact{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> or write to our office at{" "}
        {contact.address.full}.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <LegalPageLayout
        title="Privacy Policy"
        subtitle="Your privacy matters. This policy explains what we collect and how we use it."
        sections={sections}
      />
    </SiteShell>
  );
}
