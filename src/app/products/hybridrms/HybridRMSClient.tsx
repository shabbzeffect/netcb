"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Server, CheckCircle, ArrowRight, Shield, Clock, Globe } from "lucide-react";
import Link from "next/link";

const features = [
  "Resilient messaging architecture with high availability",
  "Hybrid deployment across on-premise and cloud",
  "Enterprise e-mail, calendaring, and collaboration",
  "Data sovereignty with on-premise control",
  "Scalable to meet growing organisational demands",
  "Integrated security and compliance capabilities",
];

const capabilities = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security controls, encryption, and compliance capabilities for regulated environments.",
  },
  {
    icon: Clock,
    title: "High Availability",
    description: "Resilient architecture with replication, failover, and disaster recovery for continuous operations.",
  },
  {
    icon: Globe,
    title: "Hybrid Deployment",
    description: "Deploy across on-premise, private cloud, or hybrid environments while maintaining full control.",
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    description: "Scale messaging infrastructure to meet growing organisational demands without vendor lock-in.",
  },
];

export function HybridRMSClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/products/hybridrms-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Product
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              HybridRMS
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl">
              Resilient, hybrid messaging infrastructure for enterprise e-mail,
              calendaring, and collaboration across on-premise and cloud environments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20 mb-6">
                <Server className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  Resilient Messaging
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Enterprise messaging that stays resilient under pressure.
              </h2>
              <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8">
                HybridRMS delivers a robust messaging platform designed for organisations
                that need high availability, data sovereignty, and hybrid deployment
                flexibility. It combines the reliability of on-premise infrastructure with
                the scalability of cloud environments.
              </p>
              <div className="space-y-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--netcb-accent)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--netcb-text-muted)]">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((c) => (
                  <div key={c.title} className="glass rounded-xl p-5 hover:glass-elevated transition-all duration-300">
                    <c.icon className="w-8 h-8 text-[var(--netcb-accent)] mb-3" />
                    <h3 className="text-base font-semibold text-[var(--netcb-text)] mb-1">{c.title}</h3>
                    <p className="text-xs text-[var(--netcb-text-muted)] leading-relaxed">{c.description}</p>
                  </div>
                ))}
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
              Ready to deploy HybridRMS?
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              Contact us for a consultation and deployment plan tailored to your environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Request Consultation
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
