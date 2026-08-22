"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Cloud, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { elements } from "@/lib/content/hybrid-cloud";

function ElementCard({ element, index }: { element: (typeof elements)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 60}>
      <div className="glass rounded-2xl overflow-hidden hover:glass-elevated transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-6 text-left"
          aria-expanded={open}
        >
          <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
            <element.icon className="w-6 h-6 text-[var(--netcb-accent)]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)]">
              {element.title}
            </h3>
            <p className="text-sm text-[var(--netcb-text-muted)] mt-1 line-clamp-1">
              {element.description}
            </p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-[var(--netcb-accent)] flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-400 ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 pt-0">
            <div className="border-t border-[var(--netcb-border)] pt-4">
              <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-4">
                {element.description}
              </p>
              <ul className="space-y-2">
                {element.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--netcb-accent)] mt-2 flex-shrink-0" />
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

export function HybridCloudClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/solutions/hybrid-cloud-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Hybrid Cloud
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Cloud Services without
              <br />
              <span className="text-accent">compromising your Sovereignty</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Data Sovereignty */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20 mb-6">
                <Cloud className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  Data Sovereignty is Key
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                NETCB specialises in delivering hybrid-cloud solutions designed to provide businesses with flexibility, scalability, and security.
              </h2>
              <div className="space-y-4 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  Their portfolio integrates on-premises infrastructure with cloud platforms,
                  enabling seamless operations across diverse environments.
                </p>
                <p>
                  Relying entirely on cloud services introduces strategic risks that many
                  organisations underestimate, including loss of control over data location,
                  exposure to cross-border jurisdiction and foreign legal reach, dependence on
                  a third party&apos;s security posture, and reduced resilience when connectivity
                  or the provider experiences outages.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                  A hybrid approach mitigates these risks by keeping sensitive data on premise or within a locally controlled private cloud.
                </h3>
                <div className="space-y-4 text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                  <p>
                    This is especially important for data sovereignty, because it ensures that
                    data, encryption keys, access logs, and governance controls stay within the
                    organisation&apos;s legal and operational boundary.
                  </p>
                  <p>
                    Supporting compliance, protecting national or organisational interests, and
                    preserving the ability to switch providers or repatriate workloads without
                    being locked into a single vendor ecosystem.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
                >
                  Discuss Your Cloud Strategy
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
                Our Hybrid Cloud Portfolio
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                Click any service to explore our full capabilities.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
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
              How we can assist with your hybrid cloud requirements.
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
