import Link from "next/link";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0c0f0d] text-gray-400">
      <div className="gradient-cta px-4 py-12 sm:px-6">
        <Container className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-center text-base font-semibold text-on-gradient sm:text-left">
            Stay updated with TallyBridge news
          </p>
          <form className="flex w-full max-w-md gap-2 sm:w-auto">
            <label htmlFor="footer-email" className="sr-only">
              Email for newsletter
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="min-h-[48px] flex-1 rounded-xl border-0 bg-white/95 px-4 text-foreground outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="min-h-[48px] shrink-0 rounded-xl bg-[#0f172a] px-6 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
            >
              Subscribe
            </button>
          </form>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ background: "var(--accent)" }}
              >
                TB
              </span>
              <span className="text-lg font-bold text-white">TallyBridge</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Tally on your phone. Offline access, GST billing, smart reports, and secure
              sync for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="#features" className="transition hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="transition hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="transition hover:text-white">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="#" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="mailto:support@tallybridge.com" className="transition hover:text-white">
                  support@tallybridge.com
                </a>
              </li>
              <li>+91 1800-XXX-XXXX</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} TallyBridge. All rights reserved.
          </p>
          <div className="flex gap-2" role="list" aria-label="Social links">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[var(--accent)] hover:text-white"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
