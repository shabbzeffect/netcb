"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Package, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolio = [
  { name: "SEP sesam", category: "Backup & DR" },
  { name: "Backup Eagle", category: "Backup Monitoring" },
  { name: "SecureAnyBox5", category: "Secrets Management" },
  { name: "Wazuh", category: "XDR / SIEM" },
  { name: "Recast Application Workspace", category: "Digital Workspaces" },
];

const benefits = [
  {
    icon: Package,
    title: "Curated Portfolio",
    description: "A focused selection of enterprise-grade products that solve real IT challenges — no bloat, no filler.",
  },
  {
    icon: Users,
    title: "Partner Enablement",
    description: "Technical training, sales support, and go-to-market guidance to help resellers succeed with every product.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "We help partners grow by providing dependable logistics, marketing support, and lead sharing.",
  },
  {
    icon: CheckCircle,
    title: "Technical Expertise",
    description: "Pre-sales consulting, proof-of-concept support, and ongoing technical assistance for complex deployments.",
  },
];

export function DistributionClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/distribution/distribution-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Distribution
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 sm:mb-6 leading-tight">
              NETCB
              <br />
              <span className="text-accent">Distribution.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Delivering enterprise IT solutions across Southern Africa through a
              strong reseller network. We provide enablement, technical expertise,
              and dependable logistics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Distribution */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                About NETCB Distribution
              </h2>
              <div className="space-y-4 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  NETCB Distribution is a division of NETCB Limited, focused on
                  bringing best-of-breed enterprise IT products to the Southern
                  African market through a network of qualified resellers.
                </p>
                <p>
                  Our portfolio includes SEP sesam, Backup Eagle, SecureAnyBox5,
                  Wazuh, and Recast Software&apos;s Application Workspace — each
                  selected for its enterprise maturity, technical excellence, and
                  real-world value.
                </p>
                <p>
                  We provide partners with everything they need to succeed:
                  technical training, sales enablement, pre-sales consulting, and
                  dependable logistics and supply chain support.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-6 sm:p-8 border border-[var(--netcb-border)]">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                  Distribution Portfolio
                </h3>
                <div className="space-y-3">
                  {portfolio.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-[var(--netcb-surface-2)] border border-[var(--netcb-border)] hover:border-[var(--netcb-accent)]/30 transition-all duration-300 group"
                    >
                      <span className="text-sm font-semibold text-[var(--netcb-text)] group-hover:text-[var(--netcb-accent)] transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] sm:text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] px-2 py-1 rounded bg-[var(--netcb-accent)]/10">
                        {item.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Partner Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Why partner with us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 100}>
                <div className="group glass rounded-2xl p-5 sm:p-6 h-full hover:glass-elevated transition-all duration-500 border border-transparent hover:border-[var(--netcb-accent)]/20 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-[var(--netcb-accent)] rounded-full blur-[60px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="w-6 h-6 text-[var(--netcb-accent)]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2 group-hover:text-[var(--netcb-accent)] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 border-t border-[var(--netcb-border)] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/cta-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/85 to-[var(--netcb-base)]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
              Become a reseller partner
            </h2>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] mb-8">
              Join our growing network of reseller partners across Southern Africa.
              We provide the products, training, and support — you deliver the value.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              Contact Our Distribution Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
