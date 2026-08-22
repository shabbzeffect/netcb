"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Package, Users, TrendingUp, CheckCircle } from "lucide-react";
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/distribution/distribution-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              NETCB
              <br />
              <span className="text-accent">Distribution.</span>
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Delivering enterprise IT solutions across Southern Africa through a
              strong reseller network. We provide enablement, technical expertise,
              and dependable logistics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Distribution */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
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
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                  Distribution Portfolio
                </h3>
                <div className="space-y-3">
                  {portfolio.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-[var(--netcb-surface-2)] border border-[var(--netcb-border)]"
                    >
                      <span className="text-sm font-semibold text-[var(--netcb-text)]">
                        {item.name}
                      </span>
                      <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)]">
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
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Why partner with us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full hover:glass-elevated transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-[var(--netcb-accent)] mb-4" />
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
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
              Become a reseller partner
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              Join our growing network of reseller partners across Southern Africa.
              We provide the products, training, and support — you deliver the value.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
            >
              Contact Our Distribution Team
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
