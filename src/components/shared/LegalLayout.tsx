"use client";

import { ReactNode } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  heroImage?: string;
  children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, heroImage, children }: LegalLayoutProps) {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        {heroImage ? (
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
          </div>
        ) : (
          <div className="absolute inset-0 mesh-gradient" />
        )}
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
              {title}
            </h1>
            <p className="text-sm text-[var(--netcb-text-muted)] font-[var(--font-mono)]">
              Last updated: {lastUpdated}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={100}>
            <div className="prose-netcb">
              {children}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
