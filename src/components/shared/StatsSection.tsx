"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Users, Globe, Shield, Award, Clock, TrendingUp } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Clock,
    value: 23,
    suffix: "+",
    label: "Years in Business",
    description: "Serving enterprise clients since 2003",
  },
  {
    icon: Globe,
    value: 15,
    suffix: "+",
    label: "African Countries",
    description: "Expanding across the continent",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Trusted by leading organisations",
  },
  {
    icon: Shield,
    value: 99,
    suffix: ".99%",
    label: "Uptime Guarantee",
    description: "Industry-leading reliability",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Certified Engineers",
    description: "Expert technical team",
  },
  {
    icon: TrendingUp,
    value: 40,
    suffix: "%",
    label: "Cost Savings",
    description: "Average with open-source solutions",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-24 border-t border-[var(--netcb-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Numbers That Speak
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-elevated rounded-2xl p-6 text-center h-full border border-[var(--netcb-border-bright)] hover:border-[var(--netcb-accent)]/30 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--netcb-accent)]/10 mb-4">
                  <stat.icon className="w-6 h-6 text-[var(--netcb-accent)]" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[var(--netcb-text)] mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-semibold text-[var(--netcb-text)] text-sm mb-1">{stat.label}</p>
                <p className="text-xs text-[var(--netcb-text-muted)]">{stat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
