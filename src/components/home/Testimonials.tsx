"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const testimonials = [
  {
    quote:
      "NETCB helped us migrate our entire on-premises infrastructure to a hybrid cloud model with zero downtime. Their technical depth and responsiveness are unmatched.",
    author: "Head of IT Infrastructure",
    sector: "Banking",
    initials: "TM",
    rating: 5,
  },
  {
    quote:
      "We needed a partner who understood both the technology and the regulatory landscape. NETCB delivered a cybersecurity posture that passed our audit with flying colours.",
    author: "Chief Information Security Officer",
    sector: "Financial Services",
    initials: "KR",
    rating: 5,
  },
  {
    quote:
      "Their open source strategy saved us millions in licensing costs while giving us full control over our stack. NETCB truly understands enterprise-grade OSS.",
    author: "VP of Engineering",
    sector: "Telecommunications",
    initials: "LN",
    rating: 5,
  },
  {
    quote:
      "From initial assessment to full deployment, NETCB's team operated with the discipline and transparency we expect from a strategic technology partner.",
    author: "Director of Digital Transformation",
    sector: "Energy",
    initials: "AP",
    rating: 5,
  },
  {
    quote:
      "NETCB's support team resolves issues faster than any vendor we've worked with. Their SLA-based approach gives us genuine peace of mind.",
    author: "IT Operations Manager",
    sector: "Healthcare",
    initials: "SD",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating || index === activeIndex) return;
      setDirection(dir);
      setIsAnimating(true);
      setActiveIndex(index);
      clearTimeout(timeoutRef.current ?? undefined);
      timeoutRef.current = setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, activeIndex]
  );

  const next = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length, "next");
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length, "prev");
  }, [activeIndex, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[activeIndex];

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 border-t border-[var(--netcb-border)] overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--netcb-accent)]/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--netcb-accent-2)]/5 blur-[100px] rounded-full" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--netcb-accent) 1px, transparent 1px), linear-gradient(90deg, var(--netcb-accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Trusted by enterprise leaders
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative glass rounded-3xl p-8 sm:p-10 lg:p-14 min-h-[320px] sm:min-h-[300px] flex flex-col justify-center border border-[var(--netcb-border-bright)] overflow-hidden">
              {/* Decorative quote background */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-[0.03]">
                <Quote className="w-32 h-32 sm:w-40 sm:h-40 text-[var(--netcb-accent)]" />
              </div>

              {/* Accent line */}
              <div className="absolute top-0 left-8 sm:left-12 right-8 sm:right-12 h-px bg-gradient-to-r from-transparent via-[var(--netcb-accent)]/50 to-transparent" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--netcb-accent)] text-[var(--netcb-accent)]" />
                ))}
              </div>

              {/* Quote text with fade transition */}
              <div className="relative min-h-[8rem] sm:min-h-[6rem]">
                <blockquote
                  className={`text-lg sm:text-xl lg:text-2xl font-[var(--font-display)] text-[var(--netcb-text)] leading-relaxed transition-all duration-500 ${
                    isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[var(--netcb-border)]">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--netcb-accent)] to-[var(--netcb-accent-2)] flex items-center justify-center text-[var(--netcb-base)] font-bold text-base shadow-lg shadow-[var(--netcb-accent)]/20 transition-all duration-500">
                    {current.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[var(--netcb-success)] border-2 border-[var(--netcb-base)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--netcb-text)] text-base">
                    {current.author}
                  </div>
                  <div className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] mt-0.5">
                    {current.sector}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-xl glass border border-[var(--netcb-border)] text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)]/50 hover:bg-[var(--netcb-accent)]/10 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={next}
                  className="p-2.5 rounded-xl glass border border-[var(--netcb-border)] text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)]/50 hover:bg-[var(--netcb-accent)]/10 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dots navigation */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > activeIndex ? "next" : "prev")}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 h-2 bg-[var(--netcb-accent)] shadow-[0_0_12px_var(--netcb-accent-glow)]"
                      : "w-2 h-2 bg-[var(--netcb-surface-3)] hover:bg-[var(--netcb-text-muted)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4">
              <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]">
                <span className="text-[var(--netcb-accent)]">{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="mx-2">/</span>
                <span>{String(testimonials.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
