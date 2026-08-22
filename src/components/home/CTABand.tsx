"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTABand() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--netcb-base)] via-[var(--netcb-surface-1)] to-[var(--netcb-base)]" />
        <div className="absolute inset-0 opacity-15">
          <Image src="/illustrations/hero-pattern.svg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--netcb-accent)] rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--netcb-accent-2)] rounded-full blur-[200px] opacity-8" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
            Let&apos;s build something{" "}
            <span className="text-accent">extraordinary</span> together.
          </h2>

          <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need to harden your security posture, modernise your
            infrastructure, or break free from vendor lock-in — NETCB is the
            partner that gets it done.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
            >
              Book a Technical Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] hover:bg-white/5 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
