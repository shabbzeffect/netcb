"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NETCB transformed our infrastructure with their hybrid cloud solution. The migration was seamless, and their team provided exceptional support throughout the process.",
    author: "Sarah Mitchell",
    role: "CIO, African Mining Corp",
    company: "Mining & Resources",
  },
  {
    quote: "Their cybersecurity team identified vulnerabilities we had missed for years. The remediation plan was comprehensive and implemented without disrupting our operations.",
    author: "James Okonkwo",
    role: "CTO, Lagos Financial Services",
    company: "Financial Services",
  },
  {
    quote: "We needed a partner who understood African markets. NETCB delivered a digital workspace solution that transformed how our 500+ employees collaborate across 6 countries.",
    author: "Dr. Amina Hassan",
    role: "Director of IT, East Africa Healthcare Network",
    company: "Healthcare",
  },
  {
    quote: "The GroupWise Video Conferencing platform they deployed has become our primary communication tool. Crystal-clear quality even on low-bandwidth connections.",
    author: "Michael van der Merwe",
    role: "IT Manager, Cape Town Legal Partners",
    company: "Legal Services",
  },
  {
    quote: "NETCB's open-source solutions saved us over 40% in licensing costs while providing enterprise-grade reliability. Their support team is always响应ive and knowledgeable.",
    author: "Patricia Nkosi",
    role: "Head of IT, Johannesburg Municipality",
    company: "Government",
  },
];

const caseStudies = [
  {
    title: "Mining Corporation Hybrid Cloud Migration",
    client: "African Mining Corp",
    challenge: "Legacy infrastructure causing frequent downtime, impacting production monitoring across 12 mine sites.",
    solution: "Migrated critical workloads to hybrid cloud, implemented redundant connectivity, and deployed real-time monitoring dashboards.",
    results: [
      "99.99% uptime achieved",
      "60% reduction in IT costs",
      "Real-time visibility across all sites",
    ],
    industry: "Mining & Resources",
  },
  {
    title: "Financial Services Cybersecurity Overhaul",
    client: "Lagos Financial Services",
    challenge: "Increasing sophisticated phishing attacks targeting customer data and financial transactions.",
    solution: "Deployed multi-layered security stack including email gateway, endpoint protection, and security awareness training.",
    results: [
      "Zero successful breaches in 18 months",
      "95% reduction in phishing attempts",
      "Full PCI DSS compliance achieved",
    ],
    industry: "Financial Services",
  },
  {
    title: "Healthcare Network Digital Transformation",
    client: "East Africa Healthcare Network",
    challenge: "Paper-based systems across 15 clinics causing delays in patient care and data silos.",
    solution: "Implemented secure digital workspace with centralized patient records, telemedicine capabilities, and mobile access for field staff.",
    results: [
      "70% faster patient processing",
      "Unified records across all clinics",
      "Telemedicine enabled for rural areas",
    ],
    industry: "Healthcare",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 border-t border-[var(--netcb-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Trusted by Enterprise Leaders
            </h2>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-elevated rounded-2xl p-6 h-full border border-[var(--netcb-border-bright)] hover:border-[var(--netcb-accent)]/30 transition-colors">
                <Quote className="w-8 h-8 text-[var(--netcb-accent)] mb-4 opacity-50" />
                <p className="text-[var(--netcb-text)] mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--netcb-accent)]/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-[var(--netcb-accent)]">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--netcb-text)]">{testimonial.author}</p>
                    <p className="text-sm text-[var(--netcb-text-muted)]">{testimonial.role}</p>
                    <p className="text-xs text-[var(--netcb-accent)]">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Case Studies */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Proven Results
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="glass-elevated rounded-2xl overflow-hidden h-full border border-[var(--netcb-border-bright)] hover:border-[var(--netcb-accent)]/30 transition-colors">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-[var(--font-mono)] bg-[var(--netcb-accent)]/10 text-[var(--netcb-accent)] mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--netcb-text)] mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-[var(--netcb-accent)] font-semibold mb-1">Challenge</p>
                      <p className="text-[var(--netcb-text-muted)]">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[var(--netcb-accent)] font-semibold mb-1">Solution</p>
                      <p className="text-[var(--netcb-text-muted)]">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-[var(--netcb-accent)] font-semibold mb-1">Results</p>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--netcb-success)] mt-1">✓</span>
                            <span className="text-[var(--netcb-text)]">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
