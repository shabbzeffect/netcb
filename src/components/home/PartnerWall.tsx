"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { partners } from "@/lib/content/partners";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={`${name} logo`}
      className="h-6 sm:h-8 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
      loading="lazy"
    />
  );
}

export function PartnerWall() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const animRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5;

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused && el) {
        el.scrollLeft += speed * (delta / 16);
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = window.innerWidth < 640 ? 180 : 300;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const touchStart = useRef(0);
  const touchScrollStart = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchScrollStart.current = scrollRef.current?.scrollLeft ?? 0;
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const delta = touchStart.current - e.touches[0].clientX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = touchScrollStart.current + delta;
    }
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    checkScroll();
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 border-t border-[var(--netcb-border)] overflow-hidden" aria-labelledby="partners-heading">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-[var(--netcb-accent)]/5 blur-[80px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-3 sm:mb-4">
              Our Partners
            </span>
            <h2 id="partners-heading" className="text-xl sm:text-2xl lg:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Powered by industry leaders
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div
            className="relative group/carousel"
            role="region"
            aria-label="Partner logos carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Nav arrows - desktop only */}
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full glass-elevated border border-[var(--netcb-border-bright)] text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)] hover:text-[var(--netcb-base)] transition-all duration-300 -ml-3 sm:-ml-4 hidden sm:flex opacity-0 group-hover/carousel:opacity-100 ${
                canScrollLeft ? "cursor-pointer" : "pointer-events-none opacity-0"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full glass-elevated border border-[var(--netcb-border-bright)] text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)] hover:text-[var(--netcb-base)] transition-all duration-300 -mr-3 sm:-mr-4 hidden sm:flex opacity-0 group-hover/carousel:opacity-100 ${
                canScrollRight ? "cursor-pointer" : "pointer-events-none opacity-0"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[var(--netcb-base)] via-[var(--netcb-base)]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[var(--netcb-base)] via-[var(--netcb-base)]/80 to-transparent z-10 pointer-events-none" />

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-3 sm:py-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 snap-start px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 glass rounded-xl sm:rounded-2xl min-w-[140px] sm:min-w-[180px] lg:min-w-[220px] hover:glass-elevated transition-all duration-500 group cursor-default flex items-center justify-center border border-transparent hover:border-[var(--netcb-accent)]/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                >
                  <PartnerLogo name={partner.name} logo={partner.logo} />
                </div>
              ))}
            </div>

            {/* Scroll indicator dots - mobile only */}
            <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
              {partners.slice(0, 5).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[var(--netcb-text-muted)]/30"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
