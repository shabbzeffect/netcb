"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Calendar, MapPin, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const events = [
  {
    id: "forumx-nairobi-2026",
    title: "ForumX 2026",
    location: "Nairobi, Kenya",
    date: "March 2026",
    description:
      "NETCB showcased enterprise IT solutions at ForumX 2026 in Nairobi, connecting with partners and clients across East Africa.",
    images: [
      "/events/forumx-nairobi-2026/01.jpg",
      "/events/forumx-nairobi-2026/02.jpg",
      "/events/forumx-nairobi-2026/03.jpg",
      "/events/forumx-nairobi-2026/04.jpg",
      "/events/forumx-nairobi-2026/05.jpg",
      "/events/forumx-nairobi-2026/06.jpg",
      "/events/forumx-nairobi-2026/07.jpg",
      "/events/forumx-nairobi-2026/08.jpg",
      "/events/forumx-nairobi-2026/09.jpg",
      "/events/forumx-nairobi-2026/10.jpg",
      "/events/forumx-nairobi-2026/11.jpg",
      "/events/forumx-nairobi-2026/12.jpg",
    ],
  },
];

export function PastEventsClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              Past Events
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              A look back at our participation in conferences, workshops, and
              industry events across Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {events.map((event, eventIndex) => (
            <AnimatedSection key={event.id} delay={eventIndex * 100}>
              <div className="mb-20 last:mb-0">
                {/* Event Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-3">
                      {event.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--netcb-text-muted)]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[var(--netcb-accent)]" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[var(--netcb-accent)]" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8 max-w-3xl">
                  {event.description}
                </p>

                {/* Photo Gallery */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {event.images.map((image, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => setSelectedImage(image)}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer glass hover:glass-elevated transition-all duration-300"
                    >
                      <Image
                        src={image}
                        alt={`${event.title} - Photo ${imageIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {events.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-20">
                <p className="text-[var(--netcb-text-muted)] text-lg">
                  No past events to display yet. Check back soon!
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Event photo"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
              Check our upcoming events or get in touch to schedule a meeting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/about/events/upcoming"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Upcoming Events
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl glass text-[var(--netcb-text)] hover:glass-elevated transition-all duration-200"
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
