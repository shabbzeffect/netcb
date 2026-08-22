"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Monitor, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { elements } from "@/lib/content/digital-workspaces";

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

export function DigitalWorkspacesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/solutions/digital-workspaces-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Digital Workspaces
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Digital Workspaces
              <br />
              <span className="text-accent">Portfolio</span>
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
                <Monitor className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  The way we work
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                NETCB has been a trusted provider of solutions for building Secure Digital Workspaces.
              </h2>
              <div className="space-y-4 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  We offer clients comprehensive capabilities to establish and enhance their
                  digital environments. Over the years, NETCB has integrated its own innovations
                  with technology from leading partners, delivering tailored solutions that meet
                  the evolving needs of modern organisations.
                </p>
                <p>
                  Our approach minimizes the complexity often associated with implementing Secure
                  Digital Workspaces. By avoiding single-vendor dominance and lock-in, NETCB
                  ensures clients maintain the flexibility to adapt and transform their digital
                  frameworks as requirements change.
                </p>
                <p>
                  Simplicity is at the core of our philosophy. NETCB designs system architectures
                  and integration practices that streamline the user experience, enabling rapid
                  and secure digital transformation for the future.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                  Key Elements of NETCB&apos;s Digital Workspaces
                </h3>
                <div className="space-y-2">
                  {elements.map((el) => (
                    <div
                      key={el.title}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--netcb-surface-2)] border border-[var(--netcb-border)]"
                    >
                      <el.icon className="w-4 h-4 text-[var(--netcb-accent)] flex-shrink-0" />
                      <span className="text-sm font-medium text-[var(--netcb-text)]">
                        {el.title}
                      </span>
                    </div>
                  ))}
                </div>
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
                Explore Each Element
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                Click any element to learn more about our digital workspace capabilities.
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
              How we can assist with your digital workspace requirements.
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
