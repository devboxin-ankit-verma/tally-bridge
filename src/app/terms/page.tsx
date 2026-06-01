import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | TallyBridge",
  description: "Terms governing use of TallyBridge websites and services.",
};

const sections = [
  {
    title: "Website usage",
    content: (
      <p>
        By accessing TallyBridge you agree to these terms. You must use the service lawfully and
        not attempt to disrupt, reverse engineer, or misuse our systems.
      </p>
    ),
  },
  {
    title: "User responsibilities",
    content: (
      <ul>
        <li>Maintain accurate account and business information</li>
        <li>Protect login credentials and connector access</li>
        <li>Ensure Tally data you sync complies with applicable laws</li>
        <li>Use reminders and communications responsibly (e.g. WhatsApp, SMS where enabled)</li>
      </ul>
    ),
  },
  {
    title: "Intellectual property",
    content: (
      <p>
        TallyBridge software, branding, and content are owned by Developerbox Ai Factory or
        licensors. Tally® is a trademark of its respective owner; TallyBridge is an independent
        product and is not affiliated with or endorsed by Tally Solutions.
      </p>
    ),
  },
  {
    title: "Payments",
    content: (
      <p>
        Paid plans are billed per selected subscription. Fees, taxes, and renewal terms are shown
        at checkout. Failure to pay may result in suspension of paid features.
      </p>
    ),
  },
  {
    title: "Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by law, TallyBridge is provided &quot;as is.&quot; We are
        not liable for indirect, incidental, or consequential damages arising from use of the
        service. Our total liability is limited to fees paid in the twelve months preceding the
        claim.
      </p>
    ),
  },
  {
    title: "Termination",
    content: (
      <p>
        You may stop using the service at any time. We may suspend or terminate access for breach
        of these terms or legal requirements. Upon termination, data handling follows our Privacy
        Policy.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalPageLayout
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using TallyBridge."
        sections={sections}
      />
    </SiteShell>
  );
}
