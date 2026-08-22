"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { MetricCounter } from "./MetricCounter";
import { Landmark, Building2, Zap, HeartPulse, Radio } from "lucide-react";

const metrics = [
  { end: 23, suffix: "+", label: "Years in Business" },
  { end: 14820, suffix: "+", label: "Support Tickets Resolved" },
  { end: 99, suffix: ".97%", label: "Uptime SLA" },
  { end: 15, suffix: "+", label: "Enterprise Clients" },
];

const sectors = [
  { name: "Banking", icon: Landmark },
  { name: "Government", icon: Building2 },
  { name: "Energy", icon: Zap },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Telco", icon: Radio },
];

export function ProofSection() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="proof-heading">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              id="proof-heading"
              className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] leading-tight mb-4"
            >
              Numbers that speak{" "}
              <span className="text-accent">for themselves.</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, i) => (
            <AnimatedSection key={metric.label} delay={i * 100}>
              <MetricCounter
                end={metric.end}
                suffix={metric.suffix}
                label={metric.label}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Bar */}
        <AnimatedSection delay={400}>
          <div className="mt-20 glass rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2">
                  Trusted by enterprises across Africa
                </h3>
                <p className="text-sm text-[var(--netcb-text-muted)]">
                  From banking and government to energy and healthcare — our clients
                  depend on us for mission-critical infrastructure.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {sectors.map((sector) => (
                    <div
                      key={sector.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--netcb-border)] bg-[var(--netcb-surface-2)] hover:border-[var(--netcb-accent)] hover:bg-[var(--netcb-accent-dim)] transition-all duration-300 group"
                    >
                      <sector.icon className="w-3.5 h-3.5 text-[var(--netcb-text-muted)] group-hover:text-[var(--netcb-accent)] transition-colors" />
                      <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] group-hover:text-[var(--netcb-text)] transition-colors">
                        {sector.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-[var(--netcb-text-muted)]">
                  Serving enterprise clients across{" "}
                  <span className="text-[var(--netcb-accent)] font-semibold">
                    Southern and East Africa
                  </span>{" "}
                  with agile, accountable delivery.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
