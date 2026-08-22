"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/solutions/cybersecurity-hero.jpg",
    title: "Cybersecurity",
    subtitle: "Protect your digital assets",
  },
  {
    image: "/solutions/hybrid-cloud-hero.jpg",
    title: "Hybrid Cloud",
    subtitle: "Flexible infrastructure solutions",
  },
  {
    image: "/solutions/digital-workspaces-hero.jpg",
    title: "Digital Workspaces",
    subtitle: "Modern workplace solutions",
  },
  {
    image: "/solutions/open-source-hero.jpg",
    title: "Open Source",
    subtitle: "Vendor-independent solutions",
  },
  {
    image: "/services/services-hero.jpg",
    title: "Enterprise Services",
    subtitle: "Expert IT consulting and support",
  },
  {
    image: "/products/products-hero.jpg",
    title: "Enterprise Products",
    subtitle: "Industry-leading software solutions",
  },
  {
    image: "/distribution/distribution-hero.jpg",
    title: "Distribution Partners",
    subtitle: "Authorized reseller programs",
  },
  {
    image: "/about/about-hero.jpg",
    title: "About NETCB",
    subtitle: "23 years of enterprise IT excellence",
  },
  {
    image: "/products/gwvc-hero.jpg",
    title: "GroupWise Video Conferencing",
    subtitle: "Secure video collaboration",
  },
  {
    image: "/products/hybridrms-hero.jpg",
    title: "HybridRMS",
    subtitle: "Remote management solution",
  },
  {
    image: "/services/support-hero.jpg",
    title: "Enterprise Support",
    subtitle: "24/7 expert technical support",
  },
  {
    image: "/contact/contact-hero.jpg",
    title: "Contact Us",
    subtitle: "Get in touch with our team",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden" 
      role="region" 
      aria-label="Hero carousel"
      aria-roledescription="carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
          <div className="absolute bottom-6 right-6 opacity-10">
            <Image src="/netcb-logo-white.png" alt="" width={48} height={48} className="w-auto h-12" />
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Slide indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[var(--netcb-accent)] w-6"
                : "bg-white/30 hover:bg-white/50"
            }`}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
