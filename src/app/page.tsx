import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HeroShowcase from "@/components/HeroShowcase";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="site-main relative w-full max-w-[100vw] overflow-x-clip pt-[72px] sm:pt-[76px]">
        <Hero />
        <TrustBar />
        <HeroShowcase />
        <Features />
        <Benefits />
        <TrustSection />
        <HowItWorks />
        <CTABanner id="cta-mid" />
        <Pricing />
        <Testimonials />
        <CTABanner
          id="cta-final"
          title="Start your free trial today"
          subtitle="No credit card required. Set up in minutes with the desktop connector."
          primaryLabel="Get Started Free"
          secondaryLabel="Talk to Sales"
          visual="ctaFinal"
        />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
