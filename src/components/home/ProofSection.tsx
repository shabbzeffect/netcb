"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { MetricCounter } from "./MetricCounter";
import { Landmark, Building2, Zap, HeartPulse, Radio, Globe, Users, Shield } from "lucide-react";

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
  { name: "Mining", icon: Globe },
  { name: "Education", icon: Users },
  { name: "Retail", icon: Shield },
];

export function ProofSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden" aria-labelledby="proof-heading">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--netcb-accent)]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Our Track Record
            </span>
            <h2
              id="proof-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] leading-tight mb-4"
            >
              Numbers that speak{" "}
              <span className="text-accent">for themselves.</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] leading-relaxed">
              Two decades of delivering mission-critical IT infrastructure across Africa.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
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
          <div className="glass rounded-2xl p-6 sm:p-8 lg:p-10 border border-[var(--netcb-border)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2 text-lg">
                  Trusted by enterprises across Africa
                </h3>
                <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                  From banking and government to energy and healthcare — our clients
                  depend on us for mission-critical infrastructure.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {sectors.map((sector) => (
                    <div
                      key={sector.name}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[var(--netcb-border)] bg-[var(--netcb-surface-2)] hover:border-[var(--netcb-accent)] hover:bg-[var(--netcb-accent-dim)] transition-all duration-300 group cursor-default"
                    >
                      <sector.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--netcb-text-muted)] group-hover:text-[var(--netcb-accent)] transition-colors" />
                      <span className="text-[10px] sm:text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] group-hover:text-[var(--netcb-text)] transition-colors">
                        {sector.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
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
