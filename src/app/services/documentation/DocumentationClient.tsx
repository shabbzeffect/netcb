"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BookOpen, ChevronDown, ExternalLink, ArrowRight, Video, HelpCircle } from "lucide-react";
import Link from "next/link";
import { guides, docsUrl, helpdeskUrl, supportEmail } from "@/lib/content/documentation";

function StepList({ steps }: { steps: { title: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
      {steps.map((step, i) => (
        <a
          key={step.title}
          href={step.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 transition-colors group"
        >
          <span className="w-5 h-5 rounded bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)] text-xs font-mono flex items-center justify-center flex-shrink-0">
            {i + 1}
          </span>
          <span className="flex-1 truncate">{step.title}</span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </a>
      ))}
    </div>
  );
}

function GuideCard({ guide, index }: { guide: (typeof guides)[0]; index: number }) {
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
            <Video className="w-6 h-6 text-[var(--netcb-accent)]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)]">
              {guide.title}
            </h3>
            <p className="text-sm text-[var(--netcb-text-muted)] mt-1">
              {guide.description}
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
            open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 pt-0">
            <div className="border-t border-[var(--netcb-border)] pt-4 space-y-6">
              {guide.children.map((child) => (
                <div key={child.title}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-semibold text-[var(--netcb-text)]">
                      {child.title}
                    </h4>
                    <a
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--netcb-accent)] hover:underline"
                    >
                      View Full Guide
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-sm text-[var(--netcb-text-muted)] mb-2">
                    {child.description}
                  </p>
                  <StepList steps={child.steps} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function DocumentationClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services/documentation-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Documentation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Product Guides
              <br />
              <span className="text-accent">&amp; References</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Documentation Centre
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                Installation and end-user documentation for our products and solutions.
                Click any guide to explore step-by-step configuration.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {guides.map((guide, i) => (
              <GuideCard key={guide.title} guide={guide} index={i} />
            ))}
          </div>

          <AnimatedSection delay={100}>
            <div className="glass rounded-2xl p-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-[var(--netcb-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-2">
                    Need help?
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-4">
                    If you experience any difficulties during set up, configuration, or
                    deployment, submit a support ticket to NETCB. Include detailed
                    information and screenshots if possible. Do not share password
                    information.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={supportEmail}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)] hover:text-[var(--netcb-base)] transition-all"
                    >
                      E-Mail Support
                    </a>
                    <a
                      href={helpdeskUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)] hover:text-[var(--netcb-base)] transition-all"
                    >
                      Online Support Portal
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)] hover:text-[var(--netcb-base)] transition-all"
                    >
                      Browse All Docs
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
              How we can assist with your documentation and support needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
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
