/**
 * Section-dedicated visuals — Cursor-generated assets in /public/images/generated/.
 * Hero section uses Three.js only; heroShowcase is the post-hero product preview.
 */

const local = (filename: string) => `/images/generated/${filename}`;

export const imageFallback = local("sync.png");

/** Every key = unique local asset. */
export const images = {
  // —— Post-hero showcase (not the 3D hero) ——
  heroShowcase: local("hero-showcase.png"),

  /** Features section intro */
  featuresIntro: local("features-intro.png"),

  // —— Feature blocks ——
  sync: local("sync.png"),
  sales: local("sales.png"),
  billing: local("billing.png"),
  reports: local("reports.png"),
  payments: local("payments.png"),
  offline: local("offline.png"),

  // —— Benefits ——
  benefitsBanner: local("benefits-banner.png"),
  benefitAccess: local("benefit-access.png"),
  benefitEase: local("benefit-ease.png"),
  benefitSecurity: local("benefit-security.png"),
  benefitWorkflow: local("benefit-workflow.png"),

  // —— Trust ——
  trustBanner: local("trust-banner.png"),
  trustSecurity: local("trust-security.png"),
  trustNetwork: local("trust-network.png"),
  trustAmbient: local("trust-ambient.png"),

  // —— How it works ——
  stepConnect: local("step-connect.png"),
  stepSync: local("step-sync.png"),
  stepAccess: local("step-access.png"),

  // —— CTAs ——
  ctaMid: local("cta-mid.png"),
  ctaFinal: local("cta-final.png"),

  // —— Pricing ——
  pricingHero: local("pricing-hero.png"),

  // —— Testimonials ——
  testimonialsBanner: local("testimonials-banner.png"),
  portraitRajesh: local("portrait-rajesh.png"),
  portraitPriya: local("portrait-priya.png"),
  portraitAmit: local("portrait-amit.png"),

  // —— FAQ ——
  faqVisual: local("faq-visual.png"),

  // —— Standalone pages (unique mapping) ——
  pageAboutHero: local("hero-showcase.png"),
  pageAboutMission: local("sync.png"),
  pageAboutVision: local("features-intro.png"),
  pageAboutCommitment: local("benefits-banner.png"),
  pageContactHero: local("cta-mid.png"),
} as const;

export type ImageKey = keyof typeof images;

/** Dev helper: ensure no duplicate paths */
export function assertUniqueImages() {
  if (process.env.NODE_ENV !== "development") return;
  const entries = Object.entries(images);
  const seen = new Map<string, string>();
  for (const [key, url] of entries) {
    if (seen.has(url)) {
      console.warn(
        `[images] Duplicate asset: "${key}" shares path with "${seen.get(url)}"`
      );
    }
    seen.set(url, key);
  }
}
