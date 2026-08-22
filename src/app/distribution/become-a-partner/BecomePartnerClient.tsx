"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { UserPlus, ArrowRight, CheckCircle, Send } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Submit Application",
    description: "Complete the partner application form with your company details and areas of interest.",
  },
  {
    title: "Review & Approval",
    description: "Our team reviews your application and assesses alignment with our distribution strategy.",
  },
  {
    title: "Onboarding",
    description: "Once approved, we guide you through onboarding including training, access, and support setup.",
  },
  {
    title: "Launch & Grow",
    description: "Start selling and supporting NETCB solutions with our full backing and co-marketing opportunities.",
  },
];

const requirements = [
  "Established IT distribution or reseller business",
  "Technical capability to support enterprise solutions",
  "Alignment with NETCB values and distribution strategy",
  "Commitment to customer success and satisfaction",
  "Willingness to invest in training and certification",
];

export function BecomePartnerClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/distribution/become-partner-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Distribution
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Become a Partner
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl">
              Join our distribution network and gain access to enterprise-grade
              technology platforms, training, support, and joint business
              development opportunities across Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20 mb-6">
                <UserPlus className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  Partner Programme
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                How to become a NETCB partner
              </h2>
              <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8">
                Our partner programme is designed to help you grow your business
                while delivering enterprise-grade IT solutions to your customers.
              </p>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[var(--netcb-accent)] font-[var(--font-mono)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--netcb-text)]">{step.title}</h3>
                      <p className="text-sm text-[var(--netcb-text-muted)] mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                  Partner Requirements
                </h3>
                <div className="space-y-3 mb-8">
                  {requirements.map((r) => (
                    <div key={r} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--netcb-accent)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--netcb-text-muted)]">{r}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </Link>
              </div>
            </AnimatedSection>
          </div>
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
              Questions about our partner programme?
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              Contact us to learn more about partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Contact Us
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
