import Link from "next/link";
import { contact, routes, site } from "@/lib/site";
import BrandLogo from "./ui/BrandLogo";
import ContactInfo from "./ui/ContactInfo";
import Container from "./ui/Container";
import SocialLinks from "./ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="site-footer border-t border-[var(--border-subtle)] bg-[var(--bg-deep)] text-[var(--gray-muted)]">
      <div className="gradient-cta px-4 py-10 sm:px-6 sm:py-12">
        <Container className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-center text-base font-semibold text-on-gradient sm:text-left">
            Stay updated with TallyBridge news
          </p>
          <form className="flex w-full max-w-md min-w-0 gap-2 sm:w-auto">
            <label htmlFor="footer-email" className="sr-only">
              Email for newsletter
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="min-h-[48px] min-w-0 flex-1 rounded-xl border-0 bg-white/95 px-4 text-[#0f172a] outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="min-h-[48px] shrink-0 rounded-xl bg-[#0f172a] px-5 text-sm font-semibold text-white transition hover:bg-[#1e293b] sm:px-6"
            >
              Subscribe
            </button>
          </form>
        </Container>
      </div>

      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <BrandLogo showTagline size="md" variant="auto" href={routes.home} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Tally on your phone. Offline access, GST billing, smart reports, and secure
              sync for modern businesses.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
                Product
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href={routes.home + "#features"} className="transition hover:text-[var(--foreground)]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href={routes.home + "#pricing"} className="transition hover:text-[var(--foreground)]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href={routes.home + "#how-it-works"} className="transition hover:text-[var(--foreground)]">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href={routes.about} className="transition hover:text-[var(--foreground)]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={routes.contact} className="transition hover:text-[var(--foreground)]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={routes.privacy} className="transition hover:text-[var(--foreground)]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={routes.terms} className="transition hover:text-[var(--foreground)]">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href={routes.refund} className="transition hover:text-[var(--foreground)]">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href={routes.cookies} className="transition hover:text-[var(--foreground)]">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition hover:text-[var(--accent)]"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="transition hover:text-[var(--accent)]">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition hover:text-[var(--accent)]"
                >
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.city}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border-subtle)] pt-8 text-center sm:mt-12">
          <p className="text-sm leading-relaxed">
            Copyright © {site.copyrightYear} All rights reserved. {site.name} powered by{" "}
            <a
              href={site.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] underline-offset-2 transition hover:underline"
            >
              Developerbox Ai Factory
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
