import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { RotatingHeadline } from "@/components/home/RotatingHeadline";
import { CapabilityGrid } from "@/components/home/CapabilityCard";
import { ProofSection } from "@/components/home/ProofSection";
import { CaseStudies } from "@/components/home/CaseStudies";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PartnerWall } from "@/components/home/PartnerWall";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <PageHero className="min-h-screen flex items-center">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Hero pattern overlay */}
        <div className="absolute inset-0 opacity-30 z-[1]">
          <Image src="/illustrations/hero-pattern.svg" alt="" fill className="object-cover" priority />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--netcb-base)]/80 via-transparent to-[var(--netcb-base)] z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/60 via-transparent to-transparent z-[2]" />

        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02] z-[3]">
          <div
            className="absolute w-full h-px bg-[var(--netcb-accent)]"
            style={{ animation: "scanline 8s linear infinite" }}
          />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-7xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up opacity-0 stagger-1">
              <span className="w-2 h-2 rounded-full bg-[var(--netcb-success)] animate-pulse" />
              <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">
                23 years of enterprise IT excellence
              </span>
            </div>

            {/* Rotating Headline */}
            <div className="animate-fade-in-up opacity-0 stagger-2">
              <RotatingHeadline />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 stagger-3">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
              >
                Book a Consultation
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] hover:bg-white/5 active:bg-white/8 transition-all duration-200"
              >
                Explore Solutions
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mt-16 animate-fade-in-up opacity-0 stagger-4">
              {[
                { value: "23+", label: "Years" },
                { value: "99.97%", label: "Uptime" },
                { value: "14K+", label: "Tickets" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-[var(--font-display)] text-[var(--netcb-accent)]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 z-10" style={{ animationDelay: "0.35s" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[var(--netcb-accent)] to-transparent" />
          </div>
        </div>
      </PageHero>

      {/* Capabilities */}
      <CapabilityGrid />

      {/* Proof / Metrics */}
      <ProofSection />

      {/* Case Studies */}
      <CaseStudies />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Partners */}
      <PartnerWall />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTABand />
    </>
  );
}
