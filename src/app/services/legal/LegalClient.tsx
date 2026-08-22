import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Scale, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  complianceAreas,
  advisoryServices,
  regions,
  partnerBenefits,
} from "@/lib/content/legal";

export function LegalClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services/legal-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Legal Compliance
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Compliance &amp; Legal
              <br />
              <span className="text-accent">Assurance</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20 mb-6">
                <Scale className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  Regulatory Expertise
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Your organisation operates with confidence in an increasingly complex regulatory landscape.
              </h2>
              <div className="space-y-4 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  At NETCB, our Compliance and Legal Team ensures that your organisation
                  operates with confidence in an increasingly complex regulatory and legal
                  landscape. We provide end-to-end guidance, oversight, and legal consulting
                  support to help you meet both local and international governance, data
                  protection, and regulatory requirements.
                </p>
                <p>
                  We stay ahead of evolving global regulations and legal interpretations,
                  helping you maintain long-term compliance, resilience, and operational
                  integrity while minimising legal exposure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                  Our experts ensure your business aligns with:
                </h3>
                <div className="space-y-4">
                  {complianceAreas.map((area) => (
                    <div key={area.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                      <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-5 h-5 text-[var(--netcb-accent)]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--netcb-text)]">{area.title}</div>
                        <p className="text-xs text-[var(--netcb-text-muted)] mt-1">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Legal Advisory &amp; Consulting Services
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-2xl mx-auto">
                Practical legal consulting to support informed decision-making and risk
                mitigation. Our approach bridges legal theory with operational reality.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 60}>
                <div className="glass rounded-2xl p-6 h-full hover:glass-elevated transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-[var(--netcb-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Regional &amp; Cross-Border Expertise
              </h2>
              <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8">
                NETCB offers deep legislative and regulatory knowledge across multiple
                jurisdictions, enabling us to tailor compliance and legal strategies to
                your specific operating environment while maintaining alignment with
                international best practices.
              </p>
              <div className="space-y-4">
                {regions.map((region) => (
                  <div key={region.title} className="glass rounded-xl p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-2">
                      {region.title}
                    </h3>
                    <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                  Integrated Cyber Law &amp; Governance
                </h3>
                <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-6">
                  At your request, we can incorporate specialised cyber law advisory,
                  regulatory controls, and additional compliance measures directly into
                  your Service Level Agreements (SLAs). This ensures your organisation
                  benefits from a fully aligned, legally sound, and audit-ready service
                  framework that addresses both cyber risk and regulatory accountability.
                </p>
                <div className="p-4 rounded-xl bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20">
                  <p className="text-sm text-[var(--netcb-text-muted)] italic">
                    &quot;Compliance strategies are both enforceable and business-aligned,
                    bridging legal theory with operational reality.&quot;
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Your Trusted Compliance &amp; Legal Partner
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={60}>
            <div className="glass rounded-2xl p-8">
              <div className="space-y-3">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--netcb-accent)] flex-shrink-0" />
                    <span className="text-[var(--netcb-text-muted)]">{benefit}</span>
                  </div>
                ))}
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
              How we can assist with your compliance and legal requirements.
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
