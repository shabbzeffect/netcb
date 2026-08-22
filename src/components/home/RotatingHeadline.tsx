"use client";

import { useState, useEffect, useCallback } from "react";

const headlines = [
  {
    word: "cybersecurity",
    tagline: "Threat detection, SIEM, and compliance",
    description:
      "Holistic security posture management — from threat detection and identity governance to compliance alignment across your entire infrastructure.",
  },
  {
    word: "hybrid cloud",
    tagline: "On-premises meets cloud agility",
    description:
      "Seamless integration of on-premises infrastructure with cloud platforms. Flexibility, scalability, and security across diverse environments.",
  },
  {
    word: "digital workspaces",
    tagline: "Modern workplace enablement",
    description:
      "Secure, unified digital workspace environments tailored for modern workplace productivity and collaboration across the African continent.",
  },
  {
    word: "open source",
    tagline: "Enterprise-grade, vendor-free",
    description:
      "Enterprise-grade open source implementation, integration, and support — reducing vendor lock-in while aligning with operational requirements.",
  },
];

export function RotatingHeadline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [activeIndex, isAnimating]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((activeIndex + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, goTo]);

  const current = headlines[activeIndex];

  return (
    <div className="mb-8">
      {/* Rotating headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 leading-[1.05]">
        Enterprise-grade{" "}
        <span className="relative inline-block">
          <span className="text-accent transition-all duration-500">{current.word}</span>
          {/* Underline glow */}
          <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--netcb-accent)] to-transparent opacity-60" />
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-6 h-5">
        {current.tagline}
      </p>

      {/* Description */}
      <p className="text-lg sm:text-xl text-[var(--netcb-text-muted)] max-w-xl mb-12 leading-relaxed min-h-[4.5rem]">
        {current.description}
      </p>

      {/* Dots indicator */}
      <div className="flex items-center gap-3 mb-8">
        {headlines.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`group relative h-1 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "w-10 bg-[var(--netcb-accent)]"
                : "w-4 bg-[var(--netcb-surface-3)] hover:bg-[var(--netcb-text-muted)]"
            }`}
            aria-label={`Show ${headlines[i].word} headline`}
          >
            {/* Progress bar for active dot */}
            {i === activeIndex && (
              <span
                className="absolute inset-0 rounded-full bg-[var(--netcb-accent-glow)] origin-left"
                style={{
                  animation: "headlineProgress 4s linear forwards",
                }}
              />
            )}
          </button>
        ))}
        <span className="ml-2 text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]/40">
          {String(activeIndex + 1).padStart(2, "0")} / {String(headlines.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
