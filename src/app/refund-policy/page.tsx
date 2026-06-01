import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy | TallyBridge",
  description: "Refund eligibility and process for TallyBridge subscriptions.",
};

const sections = [
  {
    title: "Eligibility",
    content: (
      <p>
        Refund requests for paid subscriptions may be considered within 7 days of the initial
        charge if the service was materially unavailable or not as described. Free-tier users are
        not charged and are not eligible for monetary refunds.
      </p>
    ),
  },
  {
    title: "Refund process",
    content: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>Email {contact.email} with your registered email and payment reference</li>
        <li>Our team will review usage and billing within 5–7 business days</li>
        <li>Approved refunds are processed to the original payment method</li>
      </ol>
    ),
  },
  {
    title: "Exceptions",
    content: (
      <ul>
        <li>Renewal charges after the refund window unless required by law</li>
        <li>Third-party fees (payment gateway, SMS, or messaging costs)</li>
        <li>Accounts terminated for terms violations</li>
      </ul>
    ),
  },
  {
    title: "Cancellation policy",
    content: (
      <p>
        You may cancel a subscription before the next billing cycle from your account or by
        contacting support. Cancellation stops future charges; access continues until the end of the
        paid period unless otherwise stated.
      </p>
    ),
  },
  {
    title: "Support contact",
    content: (
      <p>
        Refund and billing support:{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> ·{" "}
        <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <SiteShell>
      <LegalPageLayout
        title="Refund Policy"
        subtitle="Clear guidelines for refunds and subscription cancellations."
        sections={sections}
      />
    </SiteShell>
  );
}
