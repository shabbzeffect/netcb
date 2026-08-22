"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const testimonials = [
  {
    quote:
      "NETCB helped us migrate our entire on-premises infrastructure to a hybrid cloud model with zero downtime. Their technical depth and responsiveness are unmatched.",
    author: "Head of IT Infrastructure",
    sector: "Banking",
    initials: "TM",
  },
  {
    quote:
      "We needed a partner who understood both the technology and the regulatory landscape. NETCB delivered a cybersecurity posture that passed our audit with flying colours.",
    author: "Chief Information Security Officer",
    sector: "Financial Services",
    initials: "KR",
  },
  {
    quote:
      "Their open source strategy saved us millions in licensing costs while giving us full control over our stack. NETCB truly understands enterprise-grade OSS.",
    author: "VP of Engineering",
    sector: "Telecommunications",
    initials: "LN",
  },
  {
    quote:
      "From initial assessment to full deployment, NETCB's team operated with the discipline and transparency we expect from a strategic technology partner.",
    author: "Director of Digital Transformation",
    sector: "Energy",
    initials: "AP",
  },
  {
    quote:
      "NETCB's support team resolves issues faster than any vendor we've worked with. Their SLA-based approach gives us genuine peace of mind.",
    author: "IT Operations Manager",
    sector: "Healthcare",
    initials: "SD",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[activeIndex];

  return (
    <section className="relative py-24 sm:py-32 border-t border-[var(--netcb-border)]" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Trusted by enterprise leaders
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative glass rounded-2xl p-8 sm:p-12 lg:p-16 min-h-[280px] flex flex-col justify-center">
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-[var(--netcb-accent)] opacity-30 mb-6" />

            {/* Quote text */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-[var(--font-display)] text-[var(--netcb-text)] leading-relaxed mb-8 min-h-[6rem]">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--netcb-accent)] to-[var(--netcb-accent-2)] flex items-center justify-center text-[var(--netcb-base)] font-bold text-sm shadow-lg shadow-[var(--netcb-accent)]/20">
                {current.initials}
              </div>
              <div>
                <div className="font-semibold text-[var(--netcb-text)]">
                  {current.author}
                </div>
                <div className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)]">
                  {current.sector}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-3">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-[var(--netcb-border)] text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)] transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 bg-[var(--netcb-accent)]"
                        : "w-1.5 bg-[var(--netcb-surface-3)] hover:bg-[var(--netcb-text-muted)]"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-lg border border-[var(--netcb-border)] text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)] transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
