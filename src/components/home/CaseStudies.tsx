"use client";

import { Building2, Shield, Cloud, Server } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const caseStudies = [
  {
    icon: Shield,
    sector: "Banking",
    title: "Enterprise-wide SIEM deployment for a tier-1 bank",
    description:
      "Deployed a full SIEM stack across 12 regional branches, integrating 200+ log sources with custom correlation rules and compliance dashboards.",
    results: ["99.99% detection rate", "60% faster response", "SARB audit passed"],
    color: "var(--netcb-accent)",
  },
  {
    icon: Cloud,
    sector: "Telecommunications",
    title: "Hybrid cloud migration for a pan-African telco",
    description:
      "Migrated 400+ workloads from legacy data centres to a hybrid cloud architecture, reducing costs while maintaining data sovereignty.",
    results: ["40% cost reduction", "Zero sovereignty breach", "3x deploy speed"],
    color: "var(--netcb-accent-2)",
  },
  {
    icon: Server,
    sector: "Energy",
    title: "Open source ERP rollout for a mining enterprise",
    description:
      "Implemented an enterprise open source ERP platform, replacing legacy proprietary systems with full SCADA integration.",
    results: ["R2.4M annual savings", "Full SCADA integration", "98.5% uptime"],
    color: "var(--netcb-accent)",
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-[var(--netcb-border)]" aria-labelledby="cases-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <h2 id="cases-heading" className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 leading-tight">
              Proven delivery{" "}
              <span className="text-accent">across industries.</span>
            </h2>
            <p className="text-lg text-[var(--netcb-text-muted)] leading-relaxed">
              Real results from real engagements. Here is how we have helped
              enterprise clients solve complex IT challenges.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.title} delay={i * 100}>
              <div className="group glass rounded-2xl p-8 h-full hover:glass-elevated transition-all duration-300 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: study.color }}
                />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-surface-2)] border border-[var(--netcb-border)] mb-6">
                    <Building2 className="w-3 h-3 text-[var(--netcb-accent)]" />
                    <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">
                      {study.sector}
                    </span>
                  </div>
                  <study.icon className="w-8 h-8 mb-4" style={{ color: study.color }} />
                  <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-3 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="text-xs font-[var(--font-mono)] px-3 py-1.5 rounded-full bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)]"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
