"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card3D } from "@/components/ui/Card3D";
import { MapPin, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Mining Corporation Hybrid Cloud Migration",
    client: "African Mining Corp",
    industry: "Mining & Resources",
    location: "South Africa",
    duration: "6 months",
    team: "8 engineers",
    image: "/solutions/hybrid-cloud-hero.jpg",
    challenge: "Legacy infrastructure causing frequent downtime, impacting production monitoring across 12 mine sites. The client needed a reliable, scalable solution that could operate in remote locations with limited connectivity.",
    solution: "Migrated critical workloads to hybrid cloud, implemented redundant connectivity, and deployed real-time monitoring dashboards. Implemented edge computing at remote sites with satellite connectivity backup.",
    results: [
      "99.99% uptime achieved across all sites",
      "60% reduction in IT infrastructure costs",
      "Real-time visibility into production metrics",
      "40% faster decision-making with live dashboards",
    ],
    technologies: ["SUSE Linux Enterprise", "OpenStack", "VMware", "Custom Monitoring"],
  },
  {
    title: "Financial Services Cybersecurity Overhaul",
    client: "Lagos Financial Services",
    industry: "Financial Services",
    location: "Nigeria",
    duration: "4 months",
    team: "6 specialists",
    image: "/solutions/cybersecurity-hero.jpg",
    challenge: "Increasing sophisticated phishing attacks targeting customer data and financial transactions. The client needed comprehensive protection without disrupting operations.",
    solution: "Deployed multi-layered security stack including email gateway, endpoint protection, security awareness training, and 24/7 SOC monitoring. Implemented zero-trust architecture for critical systems.",
    results: [
      "Zero successful breaches in 18 months",
      "95% reduction in phishing attempts",
      "Full PCI DSS compliance achieved",
      "30% reduction in security incidents",
    ],
    technologies: ["SecureAnyBox", "Email Security Gateway", "SIEM", "EDR"],
  },
  {
    title: "Healthcare Network Digital Transformation",
    client: "East Africa Healthcare Network",
    industry: "Healthcare",
    location: "Kenya",
    duration: "12 months",
    team: "12 consultants",
    image: "/solutions/digital-workspaces-hero.jpg",
    challenge: "Paper-based systems across 15 clinics causing delays in patient care and data silos. The client needed a unified digital platform that could work offline and sync when connected.",
    solution: "Implemented secure digital workspace with centralized patient records, telemedicine capabilities, and mobile access for field staff. Deployed offline-first architecture with automatic synchronization.",
    results: [
      "70% faster patient processing",
      "Unified records across all clinics",
      "Telemedicine enabled for rural areas",
      "90% reduction in paper usage",
    ],
    technologies: ["Digital Workspaces", "Custom EMR", "Telemedicine Platform", "Mobile Apps"],
  },
  {
    title: "Government Open Source Migration",
    client: "Johannesburg Municipality",
    industry: "Government",
    location: "South Africa",
    duration: "8 months",
    team: "10 engineers",
    image: "/solutions/open-source-hero.jpg",
    challenge: "High licensing costs and vendor lock-in limiting IT budget flexibility. The client needed to reduce costs while maintaining enterprise-grade reliability and security.",
    solution: "Migrated desktops to Linux, implemented OpenXchange for collaboration, and deployed SUSE servers for critical workloads. Provided comprehensive training and change management support.",
    results: [
      "40% reduction in IT licensing costs",
      "Full compatibility with existing systems",
      "Improved security with open-source tools",
      "Staff productivity maintained during transition",
    ],
    technologies: ["SUSE Linux Enterprise", "OpenXchange", "LibreOffice", "Nextcloud"],
  },
];

export function PortfolioPageClient() {
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
              Our Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 sm:mb-6 leading-tight">
              Proven Results.
            </h1>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Explore how we&apos;ve helped enterprises across Africa transform their IT infrastructure,
              strengthen security, and achieve measurable business outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card3D>
                  <div className="glass-elevated rounded-2xl overflow-hidden border border-[var(--netcb-border-bright)] group">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto overflow-hidden">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/80 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--netcb-accent)] text-[var(--netcb-base)]">
                            {study.industry}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-[var(--netcb-text)] mb-4 group-hover:text-[var(--netcb-accent)] transition-colors">{study.title}</h2>
                        
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm mb-5 sm:mb-6">
                          <span className="flex items-center gap-1.5 text-[var(--netcb-text-muted)]">
                            <MapPin className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                            {study.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-[var(--netcb-text-muted)]">
                            <Clock className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                            {study.duration}
                          </span>
                          <span className="flex items-center gap-1.5 text-[var(--netcb-text-muted)]">
                            <Users className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                            {study.team}
                          </span>
                        </div>

                        <div className="space-y-4 text-sm">
                          <div>
                            <p className="text-[var(--netcb-accent)] font-semibold mb-1 text-xs uppercase tracking-wider">Challenge</p>
                            <p className="text-[var(--netcb-text-muted)] leading-relaxed">{study.challenge}</p>
                          </div>
                          <div>
                            <p className="text-[var(--netcb-accent)] font-semibold mb-1 text-xs uppercase tracking-wider">Solution</p>
                            <p className="text-[var(--netcb-text-muted)] leading-relaxed">{study.solution}</p>
                          </div>
                          <div>
                            <p className="text-[var(--netcb-accent)] font-semibold mb-2 text-xs uppercase tracking-wider">Results</p>
                            <ul className="space-y-2">
                              {study.results.map((result, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-4 h-4 rounded-full bg-[var(--netcb-success)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle className="w-3 h-3 text-[var(--netcb-success)]" />
                                  </div>
                                  <span className="text-[var(--netcb-text)]">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[var(--netcb-accent)] font-semibold mb-2 text-xs uppercase tracking-wider">Technologies</p>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-lg text-xs bg-[var(--netcb-accent)]/10 text-[var(--netcb-accent)] border border-[var(--netcb-accent)]/20">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-[var(--netcb-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 sm:mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results. Contact us for a free consultation.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] font-semibold hover:bg-[var(--netcb-accent-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
