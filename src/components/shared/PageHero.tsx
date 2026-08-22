"use client";

import { TopologyHero } from "@/components/home/TopologyHero";
import { HeroSilhouettes } from "@/components/home/HeroSilhouettes";

interface PageHeroProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHero({ children, className = "" }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background canvas */}
      <TopologyHero />

      {/* Floating tech silhouettes */}
      <HeroSilhouettes />

      {/* Content */}
      {children}
    </section>
  );
}
