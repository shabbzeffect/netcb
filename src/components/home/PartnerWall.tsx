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
      className="h-8 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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

  // Auto-scroll animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5; // px per frame

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused && el) {
        el.scrollLeft += speed * (delta / 16);
        // Reset scroll when reaching end
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
    const amount = 300;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Touch/swipe support
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
    <section className="relative py-24 sm:py-32 border-t border-[var(--netcb-border)]" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 id="partners-heading" className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Powered by industry leaders
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div
            className="relative"
            role="region"
            aria-label="Partner logos carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation arrows */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-elevated border border-[var(--netcb-border-bright)] text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)] hover:text-[var(--netcb-base)] transition-all -ml-4 hidden sm:flex"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-elevated border border-[var(--netcb-border-bright)] text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)] hover:text-[var(--netcb-base)] transition-all -mr-4 hidden sm:flex"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--netcb-base)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--netcb-base)] to-transparent z-10 pointer-events-none" />

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 snap-start px-6 py-5 glass rounded-xl min-w-[200px] hover:glass-elevated transition-all duration-300 group cursor-default flex items-center justify-center"
                >
                  <PartnerLogo name={partner.name} logo={partner.logo} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
