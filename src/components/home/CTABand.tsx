"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTABand() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--netcb-base)] via-[var(--netcb-surface-1)] to-[var(--netcb-base)]" />
        <div className="absolute inset-0 opacity-10">
          <Image src="/illustrations/hero-pattern.svg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--netcb-accent)] rounded-full blur-[250px] opacity-[0.07]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--netcb-accent-2)] rounded-full blur-[200px] opacity-[0.05]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-[var(--netcb-accent)]" />
            <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]">
              Ready to transform your IT?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 sm:mb-6 leading-tight">
            Let&apos;s build something{" "}
            <span className="text-accent">extraordinary</span> together.
          </h2>

          <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Whether you need to harden your security posture, modernise your
            infrastructure, or break free from vendor lock-in — NETCB is the
            partner that gets it done.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              Book a Technical Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] hover:bg-white/5 hover:border-[var(--netcb-accent)]/30 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[var(--netcb-text-muted)]">
            {[
              "23+ years in business",
              "15+ countries served",
              "99.97% uptime SLA",
            ].map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--netcb-accent)]" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
