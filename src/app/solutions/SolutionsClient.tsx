"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Shield, Cloud, Monitor, Terminal, Check, ChevronDown } from "lucide-react";
import { solutions } from "@/lib/content/solutions";

const faqs = [
  {
    question: "How do you determine which solution is right for our environment?",
    answer: "We start with a free technical consultation to assess your current infrastructure, business goals, and constraints. Our team then recommends a tailored approach — no cookie-cutter proposals.",
  },
  {
    question: "Do you support hybrid environments with existing vendor lock-in?",
    answer: "Absolutely. Many of our clients come to us specifically to reduce vendor lock-in. We specialise in integrating open source and multi-cloud solutions with existing proprietary systems.",
  },
  {
    question: "What does your SLA-based support include?",
    answer: "Our support SLAs include defined response times, clear escalation paths, proactive monitoring, and regular health checks. We offer tiered support packages to match your operational needs.",
  },
  {
    question: "Can you work with our existing security team?",
    answer: "Yes. We often embed alongside internal IT and security teams, providing specialist expertise and capacity without replacing your in-house capabilities.",
  },
  {
    question: "How do you ensure data sovereignty compliance?",
    answer: "We design all solutions with data sovereignty in mind. Our cloud and infrastructure deployments keep your data within the required jurisdictions while maintaining performance and availability.",
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Cloud,
  Monitor,
  Terminal,
};

const illustrationMap: Record<string, string> = {
  cybersecurity: "/illustrations/solution-cybersecurity.svg",
  "hybrid-cloud": "/illustrations/solution-cloud.svg",
  "digital-workspaces": "/illustrations/solution-workspace.svg",
  "open-source": "/illustrations/solution-opensource.svg",
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold font-[var(--font-display)] text-[var(--netcb-text)] text-sm">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--netcb-accent)] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-sm text-[var(--netcb-text-muted)] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function SolutionsPageClient() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].slug);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const registerRef = useCallback((slug: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(slug, el);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const slug = entry.target.getAttribute("data-solution-slug");
            if (slug) setActiveSolution(slug);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/solutions/solutions-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Robust, enterprise-grade
              <br />
              <span className="text-accent">capabilities.</span>
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              From cybersecurity and hybrid cloud to digital workspaces and open
              source — NETCB delivers comprehensive, efficient, high-quality
              IT solutions for businesses across the African continent.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Detail with Sidebar */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sticky Sidebar */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-sm font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-4">
                    Solutions
                  </h2>
                  <nav aria-label="Solution navigation">
                    <ul className="space-y-1" role="list">
                      {solutions.map((solution) => {
                        const Icon = iconMap[solution.icon];
                        return (
                          <li key={solution.slug}>
                            <a
                              href={`#${solution.slug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                sectionRefs.current.get(solution.slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
                              }}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                                activeSolution === solution.slug
                                  ? "bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)]"
                                  : "text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5"
                              }`}
                            >
                              {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                              <span>{solution.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </AnimatedSection>
            </div>

            {/* Solution Cards */}
            <div className="lg:col-span-9 space-y-24">
              {solutions.map((solution, index) => {
                const Icon = iconMap[solution.icon];
                return (
                  <div key={solution.slug} ref={(el) => registerRef(solution.slug, el)} data-solution-slug={solution.slug}>
                  <AnimatedSection
                    id={solution.slug}
                    delay={100}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
                      {/* Info */}
                      <div>
                        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-[var(--netcb-surface-2)]">
                          <Image
                            src={illustrationMap[solution.slug]}
                            alt={`${solution.title} illustration`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-2">
                          {solution.title}
                        </h2>
                        <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider mb-4">
                          {solution.subtitle}
                        </p>
                        <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8">
                          {solution.description}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
                        >
                          Discuss Your Requirements
                        </Link>
                      </div>

                      {/* Capabilities List */}
                      <div className="glass rounded-2xl p-6 sm:p-8">
                        <h3 className="text-sm font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-6">
                          Key Capabilities
                        </h3>
                        <ul className="space-y-4" role="list">
                          {solution.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-[var(--netcb-accent)] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                                {cap}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Frequently asked questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 60}>
                <FAQItem question={faq.question} answer={faq.answer} />
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
              Not sure which solution fits?
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              Our technical team will assess your environment and recommend the
              right approach. No obligation, no sales pressure — just expert guidance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
            >
              Book a Technical Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
