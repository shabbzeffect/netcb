"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Headphones, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  supportStats,
  consultingAreas,
  accessMethods,
  slaHighlights,
} from "@/lib/content/support";

export function SupportClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services/support-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Support Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              World-class Support
              <br />
              <span className="text-accent">and Consulting</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-b border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 60}>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-accent)]">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-[var(--netcb-text)] mt-2">{stat.label}</div>
                  <div className="text-xs text-[var(--netcb-text-muted)] mt-1">{stat.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20 mb-6">
                <Headphones className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  Technical Expertise
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                In over 90% of problem cases, the vendor had to refer the issue to development.
              </h2>
              <div className="space-y-4 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  NETCB is renowned for its technical expertise — we identified a bug that the
                  vendor themselves had to escalate. NETCB is also a beta-tester for many
                  software vendors, where we use, test, and validate new software or next
                  versions before general release.
                </p>
                <p>
                  We provide world-class support services in the various technologies and
                  solutions we deliver. In most cases, we can resolve issues for customers
                  ranging from a matter of minutes to deploying an entire solution remotely
                  without even setting foot on a client&apos;s site.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                  Remote Management &amp; On-Site Support
                </h3>
                <div className="space-y-4 text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                  <p>
                    We accomplish this by using remote management technologies that allow us
                    to be &quot;present&quot; on-site. Many of our clients use us as an extension of
                    their existing internal support teams.
                  </p>
                  <p>
                    With our global alliances with certain vendors and other experts, we
                    provide second and third-line support as easy as the click of a button.
                    This does not mean we do not offer on-site support — in certain cases,
                    it is required to have a consultant or a team of consultants on-site.
                  </p>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20">
                  <p className="text-sm text-[var(--netcb-text-muted)] italic">
                    &quot;NETCB doesn&apos;t just support these technologies — we use them every day
                    in our own operations. This ensures customers benefit from proven best
                    practices, practical guidance, and solutions validated by daily use.&quot;
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Consulting Services
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-2xl mx-auto">
                Helping organisations plan, design, implement, and support secure and
                resilient ICT environments by combining deep technical expertise with
                practical, delivery-focused engagement.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {consultingAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 60}>
                <div className="glass rounded-2xl p-6 h-full hover:glass-elevated transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-6 h-6 text-[var(--netcb-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Service Level Agreements
              </h2>
              <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8">
                NETCB delivers professional support services through structured SLAs that
                define response times, escalation paths, service hours, and support scope —
                ensuring predictable, accountable assistance for business-critical systems.
              </p>
              <ul className="space-y-3">
                {slaHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--netcb-accent)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--netcb-text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                  Access Support
                </h3>
                <div className="space-y-4">
                  {accessMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <method.icon className="w-5 h-5 text-[var(--netcb-accent)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[var(--netcb-text)]">{method.title}</div>
                        <p className="text-xs text-[var(--netcb-text-muted)] mt-0.5">{method.description}</p>
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--netcb-accent)] mt-1 font-medium">
                          {method.actionLabel}
                          {method.action.startsWith("http") && (
                            <ExternalLink className="w-3 h-3" />
                          )}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
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
              How we can assist with your support requirements.
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
