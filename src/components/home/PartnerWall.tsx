"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { partners } from "@/lib/content/partners";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={`${name} logo`}
      className="h-8 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
    />
  );
}

export function PartnerWall() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-[var(--netcb-border)]" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 id="partners-heading" className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Powered by industry leaders
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div
            className="relative overflow-hidden"
            role="region"
            aria-label="Partner logos carousel"
            tabIndex={0}
          >
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--netcb-base)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--netcb-base)] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee" style={{ width: "max-content" }}>
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 mx-4 px-6 py-5 glass rounded-xl min-w-[200px] hover:glass-elevated transition-all duration-300 group cursor-default flex items-center justify-center"
                >
                  <PartnerLogo name={partner.name} logo={partner.logo} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
