"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Award, Coins, GraduationCap, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "23 Years of Experience",
    description:
      "With a solid presence spanning 23 years, NETCB has dynamically sustained and prospered in the IT industry.",
    highlights: ["Pan-African presence", "Enterprise-grade delivery"],
  },
  {
    icon: Coins,
    title: "Cost Effective Solutions",
    description:
      "We devise solutions that are not only efficient and innovative but also minimise expenses, optimising cost-effectiveness.",
    highlights: ["Reduced TCO", "Open source options"],
  },
  {
    icon: GraduationCap,
    title: "Industry Experts",
    description:
      "Our deep knowledge stems from extensive experience, innovative research, and a passion for continuous learning across many fields.",
    highlights: ["Certified engineers", "Vendor partnerships"],
  },
  {
    icon: Heart,
    title: "Customer First Approach",
    description:
      "Our customer-first approach is vital, as satisfied customers drive growth, success, and positive word-of-mouth.",
    highlights: ["24/7 support", "Dedicated account managers"],
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 border-t border-[var(--netcb-border)]" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Why NETCB
            </span>
            <h2 id="why-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 leading-tight">
              Why choose{" "}
              <span className="text-accent">NETCB.</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] leading-relaxed">
              NETCB delivers cutting-edge, tailored business solutions that accelerate
              efficiency, boost productivity, and simplify complex operations. Backed by
              responsive expert support and relentless innovation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 100}>
              <div className="group glass rounded-2xl p-5 sm:p-6 h-full hover:glass-elevated transition-all duration-500 border border-transparent hover:border-[var(--netcb-accent)]/20 relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[var(--netcb-accent)] rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <reason.icon className="w-6 h-6 text-[var(--netcb-accent)]" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2 group-hover:text-[var(--netcb-accent)] transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-4">
                    {reason.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {reason.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                        <span className="text-xs text-[var(--netcb-text-muted)]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={400}>
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--netcb-accent)] hover:text-[var(--netcb-accent-hover)] transition-colors group"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
