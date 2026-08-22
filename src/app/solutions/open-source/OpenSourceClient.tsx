"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Terminal, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { elements } from "@/lib/content/open-source";

function ElementCard({ element, index }: { element: (typeof elements)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={Math.min(index * 40, 400)}>
      <div className="glass rounded-2xl overflow-hidden hover:glass-elevated transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-5 text-left"
          aria-expanded={open}
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
            <element.icon className="w-5 h-5 text-[var(--netcb-accent)]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold font-[var(--font-display)] text-[var(--netcb-text)]">
              {element.title}
            </h3>
            <p className="text-xs text-[var(--netcb-text-muted)] mt-0.5 line-clamp-1">
              {element.description}
            </p>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[var(--netcb-accent)] flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-400 ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0">
            <div className="border-t border-[var(--netcb-border)] pt-3">
              <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-3">
                {element.description}
              </p>
              <ul className="space-y-1.5">
                {element.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--netcb-accent)] mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--netcb-text-muted)]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function OpenSourceClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/solutions/open-source-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Open Source
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Open Source Portfolio
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20 mb-6">
                <Terminal className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  Unleash Independence
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Open source is more than a licensing model — it is a strategic lever for national capability building.
              </h2>
              <div className="space-y-4 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  When governments and enterprises adopt open technologies, they do not merely
                  procure a product; they invest in a knowledge base that can be studied,
                  improved, secured, and adapted locally. This directly accelerates skills
                  development because engineers learn how systems truly work — networks,
                  identity, security, storage, automation, and applications — rather than
                  only how to operate a closed platform.
                </p>
                <p>
                  Heavy dependence on a handful of global vendors often creates a one-way
                  economic flow: budgets move outward, while local ICT sectors are reshaped
                  into resellers and pundits who promote roadmaps they do not control.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                  Open source breaks this cycle by reducing vendor lock-in and enabling interoperability.
                </h3>
                <div className="space-y-4 text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                  <p>
                    It keeps governments free to negotiate, migrate, and modernize on their
                    own terms, without being trapped by proprietary formats, punitive licensing,
                    or forced upgrades.
                  </p>
                  <p>
                    Most importantly, it unlocks local ICT development as a long-term investment:
                    local companies can build services, integrations, security hardening, and
                    support industries around shared platforms — creating jobs, retaining talent,
                    and developing intellectual property within the country.
                  </p>
                  <p>
                    Open source turns ICT spending from recurring rent into a catalyst for
                    sovereignty, sustainability, and homegrown innovation.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
                >
                  Explore Our Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Elements */}
      <section className="relative pb-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Full Open Source Portfolio
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                Click any solution to explore our full capabilities. {elements.length} solutions available.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-2">
            {elements.map((element, i) => (
              <ElementCard key={element.title} element={element} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-[var(--netcb-border)]">
        <div className="absolute inset-0">
          <img src="/cta-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/85 to-[var(--netcb-base)]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
              Contact us today and let&apos;s explore
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              How we can assist with your open source journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Book a Consultation
              </Link>
              <div className="text-sm text-[var(--netcb-text-muted)]">
                Call us <a href="tel:+27128804040" className="text-[var(--netcb-accent)] hover:underline">+27 12 880 4040</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
