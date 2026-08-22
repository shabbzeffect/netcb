"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  id?: string;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate-y-8",
    left: "-translate-x-8",
    right: "translate-x-8",
    fade: "",
  };

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700",
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${transforms[direction]}`,
        className
      )}
      style={{
        transitionTimingFunction: "var(--ease-out-expo)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
