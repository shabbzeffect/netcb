"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Wrench, GraduationCap, Scale, Code } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Support Services",
    description:
      "NETCB provides reliable, expert support services to keep critical platforms stable, secure, and performing optimally. Through structured Service Level Agreements (SLAs), we offer predictable response times, clear escalation paths, and proactive guidance tailored to each environment. For customers without an SLA, we still deliver professional assistance on a post-billing basis, ensuring access to specialist support whenever it's needed.",
    highlights: ["Structured SLAs", "Predictable Response Times", "Proactive Guidance", "Post-Billing Support"],
  },
  {
    icon: GraduationCap,
    title: "Training Services",
    description:
      "NETCB's training services empower teams with the skills to deploy, manage, and support enterprise technologies with confidence. As an authorised SUSE training partner, we deliver official, high-quality SUSE courses aligned to best practices and real-world operational needs. We also develop and present custom training programmes tailored to your environment—covering specific platforms, integrations, and workflows—so knowledge transfer is practical, relevant, and immediately applicable in production.",
    highlights: ["Authorised SUSE Partner", "Official Courses", "Custom Programmes", "Real-World Focus"],
  },
  {
    icon: Scale,
    title: "Legal Advisory Services",
    description:
      "NETCB's legal advisory services help organizations navigate the legal and compliance requirements that shape ICT strategy and operations. We provide practical guidance on areas such as data protection and information governance, licensing and vendor agreements, and risk management—ensuring technology decisions align with regulatory obligations and business objectives. Our approach focuses on clear, implementable advice that supports secure, accountable, and defensible ICT outcomes.",
    highlights: ["Data Protection Guidance", "Licensing & Vendor Agreements", "Risk Management", "Defensible ICT Outcomes"],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "NETCB provides customer-focused software development services that deliver practical solutions aligned to real operational requirements, from integrations and automation to custom business applications. In parallel, we invest in our own technology development and ongoing research to build reusable tools, improve platform capabilities, and stay ahead of emerging ICT trends. This combination of hands-on delivery and continuous innovation enables us to solve complex problems efficiently and provide customers with modern, future-ready solutions.",
    highlights: ["Integrations & Automation", "Custom Business Applications", "In-House R&D", "Future-Ready Solutions"],
  },
];

export function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services/services-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Managed Implementation,
              <br />
              <span className="text-accent">Training &amp; Advisory Services</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Our Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 80}>
                <div className="glass rounded-2xl p-8 h-full hover:glass-elevated transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--netcb-accent-dim)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[var(--netcb-accent)]" />
                  </div>
                  <h3 className="text-xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)] border border-[var(--netcb-accent)]/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
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
              Contact us today and let&apos;s explore
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              How we can assist with your service requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Book a Consultation
              </a>
              <div className="text-sm text-[var(--netcb-text-muted)]">
                Call us{" "}
                <a href="tel:+27128804040" className="text-[var(--netcb-accent)] hover:underline">
                  +27 12 880 4040
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
