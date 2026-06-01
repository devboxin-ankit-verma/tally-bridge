/** Site-wide links, contact, and navigation helpers */

export const site = {
  name: "TallyBridge",
  tagline: "by Developerbox Ai Factory",
  developerUrl: "https://developerbox.co.in",
  copyrightYear: 2026,
} as const;

export const contact = {
  email: "info@developerbox.co.in",
  phone: "+919111333253",
  phoneDisplay: "+91 9111333253",
  address: {
    line1: "4th Floor SK-Height",
    line2: "Near Narayana Hospital, Devendra Nagar",
    city: "Raipur 492001",
    full: "4th Floor SK-Height, Near Narayana Hospital, Devendra Nagar, Raipur 492001",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=4th+Floor+SK-Height+Near+Narayana+Hospital+Devendra+Nagar+Raipur+492001",
} as const;

export const social = {
  facebook: "https://www.facebook.com/devboxin",
  instagram: "https://www.instagram.com/devboxin/",
} as const;

export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms",
  refund: "/refund-policy",
  cookies: "/cookie-policy",
} as const;

/** Home page section anchors */
export const homeSections = {
  features: "#features",
  benefits: "#benefits",
  howItWorks: "#how-it-works",
  pricing: "#pricing",
  testimonials: "#testimonials",
  faq: "#faq",
  cta: "#cta-final",
} as const;

export function homeAnchor(hash: string) {
  return `/${hash}`;
}

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: homeSections.features, label: "Features" },
  { href: homeSections.benefits, label: "Benefits" },
  { href: homeSections.howItWorks, label: "How It Works" },
  { href: homeSections.pricing, label: "Pricing" },
  { href: homeSections.testimonials, label: "Reviews" },
  { href: homeSections.faq, label: "FAQ" },
];

export const companyNav: NavItem[] = [
  { href: routes.about, label: "About Us" },
  { href: routes.contact, label: "Contact" },
  { href: routes.privacy, label: "Privacy Policy" },
  { href: routes.terms, label: "Terms & Conditions" },
  { href: routes.refund, label: "Refund Policy" },
  { href: routes.cookies, label: "Cookie Policy" },
];
