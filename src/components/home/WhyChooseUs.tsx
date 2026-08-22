"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Award, Coins, GraduationCap, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "23 Years of Experience",
    description:
      "With a solid presence spanning 23 years, NETCB has dynamically sustained and prospered in the IT industry.",
  },
  {
    icon: Coins,
    title: "Cost Effective Solutions",
    description:
      "We devise solutions that are not only efficient and innovative but also minimise expenses, optimising cost-effectiveness.",
  },
  {
    icon: GraduationCap,
    title: "Industry Experts",
    description:
      "Our deep knowledge stems from extensive experience, innovative research, and a passion for continuous learning across many fields.",
  },
  {
    icon: Heart,
    title: "Customer First Approach",
    description:
      "Our customer-first approach is vital, as satisfied customers drive growth, success, and positive word-of-mouth.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-[var(--netcb-border)]" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 leading-tight">
              Why choose{" "}
              <span className="text-accent">NETCB.</span>
            </h2>
            <p className="text-lg text-[var(--netcb-text-muted)] leading-relaxed">
              NETCB delivers cutting-edge, tailored business solutions that accelerate
              efficiency, boost productivity, and simplify complex operations. Backed by
              responsive expert support and relentless innovation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 100}>
              <div className="glass rounded-2xl p-6 h-full hover:glass-elevated transition-all duration-300">
                <reason.icon className="w-8 h-8 text-[var(--netcb-accent)] mb-4" />
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
