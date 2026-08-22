"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Check, X } from "lucide-react";

const solutions = [
  {
    category: "Cybersecurity",
    features: [
      { name: "Email Security", standard: true, professional: true, enterprise: true },
      { name: "Endpoint Protection", standard: true, professional: true, enterprise: true },
      { name: "Vulnerability Assessment", standard: false, professional: true, enterprise: true },
      { name: "Penetration Testing", standard: false, professional: false, enterprise: true },
      { name: "Security Awareness Training", standard: true, professional: true, enterprise: true },
      { name: "Incident Response", standard: false, professional: true, enterprise: true },
      { name: "24/7 SOC Monitoring", standard: false, professional: false, enterprise: true },
      { name: "Compliance Reporting", standard: false, professional: true, enterprise: true },
    ],
  },
  {
    category: "Cloud Solutions",
    features: [
      { name: "Cloud Assessment", standard: true, professional: true, enterprise: true },
      { name: "Migration Planning", standard: true, professional: true, enterprise: true },
      { name: "Hybrid Cloud Setup", standard: false, professional: true, enterprise: true },
      { name: "Multi-Cloud Management", standard: false, professional: false, enterprise: true },
      { name: "Cloud Security", standard: true, professional: true, enterprise: true },
      { name: "Cost Optimisation", standard: false, professional: true, enterprise: true },
      { name: "Disaster Recovery", standard: false, professional: true, enterprise: true },
      { name: "24/7 Support", standard: false, professional: false, enterprise: true },
    ],
  },
];

const tiers = [
  {
    name: "Standard",
    description: "Essential protection for small to medium businesses",
    price: "From $500",
    period: "/month",
    highlight: false,
  },
  {
    name: "Professional",
    description: "Advanced security for growing enterprises",
    price: "From $2,000",
    period: "/month",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for large organisations",
    price: "Custom",
    period: "pricing",
    highlight: false,
  },
];

export function ComparisonTable() {
  return (
    <section className="relative py-24 border-t border-[var(--netcb-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
              Compare Our Solutions
            </h2>
            <p className="text-[var(--netcb-text-muted)] max-w-2xl mx-auto">
              Choose the right tier for your organisation. All plans include our core features with scalable options as you grow.
            </p>
          </div>
        </AnimatedSection>

        {/* Tier headers */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="hidden sm:block" /> {/* Empty space for feature column */}
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 text-center ${
                  tier.highlight
                    ? "glass-elevated border-2 border-[var(--netcb-accent)]"
                    : "glass border border-[var(--netcb-border-bright)]"
                }`}
              >
                <h3 className="text-xl font-bold text-[var(--netcb-text)] mb-2">{tier.name}</h3>
                <p className="text-sm text-[var(--netcb-text-muted)] mb-4">{tier.description}</p>
                <div className="text-2xl font-bold text-[var(--netcb-accent)]">
                  {tier.price}
                  <span className="text-sm font-normal text-[var(--netcb-text-muted)]">{tier.period}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Feature comparison */}
        {solutions.map((solution, solutionIndex) => (
          <AnimatedSection key={solutionIndex} delay={(solutionIndex + 1) * 100}>
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[var(--netcb-text)] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--netcb-accent)]" />
                {solution.category}
              </h3>
              <div className="glass-elevated rounded-2xl overflow-hidden border border-[var(--netcb-border-bright)]">
                {solution.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`grid grid-cols-4 gap-4 items-center px-6 py-4 ${
                      featureIndex !== solution.features.length - 1
                        ? "border-b border-[var(--netcb-border)]"
                        : ""
                    }`}
                  >
                    <div className="text-sm text-[var(--netcb-text)]">{feature.name}</div>
                    {[feature.standard, feature.professional, feature.enterprise].map(
                      (included, tierIndex) => (
                        <div key={tierIndex} className="flex justify-center">
                          {included ? (
                            <div className="w-6 h-6 rounded-full bg-[var(--netcb-success)]/20 flex items-center justify-center">
                              <Check className="w-4 h-4 text-[var(--netcb-success)]" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-[var(--netcb-text-muted)]/10 flex items-center justify-center">
                              <X className="w-4 h-4 text-[var(--netcb-text-muted)]" />
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* CTA */}
        <AnimatedSection delay={300}>
          <div className="text-center">
            <p className="text-[var(--netcb-text-muted)] mb-6">
              Need a custom solution? Contact us for tailored enterprise packages.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] font-semibold hover:bg-[var(--netcb-accent-hover)] transition-all"
            >
              Contact Sales
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
