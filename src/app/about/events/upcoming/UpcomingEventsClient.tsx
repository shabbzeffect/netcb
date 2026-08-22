"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Calendar, MapPin, ArrowLeft, ExternalLink, Users, GraduationCap, Handshake, Video } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Conferences",
    description: "Thought leadership conferences and industry events across Africa.",
    icon: Users,
    url: "https://events.netcb.com/category/6/",
  },
  {
    title: "Training",
    description: "Expert-led training courses from OpenText, Rocket Software, and SUSE.",
    icon: GraduationCap,
    url: "https://events.netcb.com/category/4/",
  },
  {
    title: "Partner Events",
    description: "Events hosted by NETCB Distribution for our partners.",
    icon: Handshake,
    url: "https://events.netcb.com/category/5/",
  },
  {
    title: "Webinars",
    description: "Online sessions and virtual workshops.",
    icon: Video,
    url: "https://events.netcb.com/category/3/",
  },
];

export function UpcomingEventsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about/about-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
              Upcoming Events
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Join us at conferences, training sessions, webinars, and partner events
              across Africa. Register through our events platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Categories */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Browse by category
              </span>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Event Categories
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((category, i) => (
              <AnimatedSection key={category.title} delay={i * 100}>
                <a
                  href={category.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 h-full text-center hover:glass-elevated transition-all duration-300 group block"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--netcb-accent)]/20 transition-colors">
                    <category.icon className="w-7 h-7 text-[var(--netcb-accent)]" />
                  </div>
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] group-hover:gap-2.5 transition-all">
                    View Events
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-[var(--netcb-border)]">
        <div className="absolute inset-0">
          <img src="/cta-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/85 to-[var(--netcb-base)]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
              Want to meet us at an event?
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              Check our past events or get in touch to schedule a meeting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/about/events/past"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl glass text-[var(--netcb-text)] hover:glass-elevated transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Past Events
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
