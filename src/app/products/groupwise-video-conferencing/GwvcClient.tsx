"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Video, CheckCircle, ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";

const platforms = [
  { name: "Zoom", icon: "/platforms/zoom.svg" },
  { name: "Microsoft Teams", icon: "/platforms/teams.svg" },
  { name: "Jitsi", icon: "/platforms/jitsi.svg" },
  { name: "GoToMeeting", icon: "/platforms/gotomeeting.svg" },
  { name: "Cisco WebEx", icon: "/platforms/webex.svg" },
  { name: "Google Meet", icon: "/platforms/googlemeet.svg" },
];

const steps = [
  {
    title: "The Dashboard",
    description:
      "The Video Conferencing Add-on provides you with a Dashboard from where you can see upcoming or recently scheduled meetings. You can also launch your Video Conferencing Meetings from this dashboard.",
    image: "/products/gwvc/gwvc-dashboard.png",
    imageAlt: "GroupWise Video Conferencing Dashboard showing upcoming meetings",
  },
  {
    title: "Scheduling of a Meeting",
    description:
      "You can schedule a meeting using any of your favourite video conferencing platforms from our Add-on.",
    image: "/products/gwvc/gwvc-scheduling.png",
    imageAlt: "Scheduling a video conferencing meeting from GroupWise",
  },
  {
    title: "Completing Your Scheduled Meeting",
    description:
      "Once the meeting has been created on the Video Conferencing platform, you merely need to add the attendees for the meeting that you select from your GroupWise Address Book or external parties. You can also add attachments to your meeting request that will be created in OpenText GroupWise.",
    image: "/products/gwvc/gwvc-completing.png",
    imageAlt: "Adding attendees to a scheduled video conference meeting",
  },
  {
    title: "Meeting in GroupWise",
    description:
      "Once the meeting has been scheduled the appointment will appear in your GroupWise calendar, including the calendars of the individuals you have invited to the meeting. This appointment in GroupWise can then be used to start a video conferencing meeting from any device or platform by merely clicking on the conferencing links provided within the appointment.",
    image: "/products/gwvc/gwvc-appointment.png",
    imageAlt: "Video conference meeting appointment in GroupWise calendar",
  },
];

const highlights = [
  "Schedule meetings from GroupWise Windows client",
  "Works with GroupWise 2014 and onwards",
  "Recommended: OpenText GroupWise 18.3.1 or later",
  "Supports six video conferencing platforms",
  "More platforms added over time",
  "On-premise deployment for data sovereignty",
];

function StepCard({ step, index, onImageClick }: { step: (typeof steps)[0]; index: number; onImageClick: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 60}>
      <div className="glass rounded-xl overflow-hidden hover:glass-elevated transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-5 text-left"
          aria-expanded={open}
        >
          <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-[var(--netcb-accent)] font-[var(--font-mono)]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-[var(--netcb-text)]">
              {step.title}
            </h3>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[var(--netcb-accent)] flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-400 ${
            open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0">
            <div className="border-t border-[var(--netcb-border)] pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="relative">
                  <button
                    onClick={onImageClick}
                    className="block w-full rounded-xl overflow-hidden border border-[var(--netcb-border)] bg-[var(--netcb-surface)] cursor-zoom-in group"
                  >
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback-placeholder")) {
                          const fallback = document.createElement("div");
                          fallback.className = "fallback-placeholder flex flex-col items-center justify-center p-8 min-h-[200px]";
                          fallback.innerHTML = `
                            <svg class="w-12 h-12 text-[var(--netcb-accent)] opacity-40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span class="text-xs text-[var(--netcb-text-muted)]">${step.imageAlt}</span>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function GwvcClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: "/products/gwvc/gwvc-banner.png", alt: "GroupWise Video Conferencing Add-on supported platforms" },
    { src: "/products/gwvc/gwvc-opening.png", alt: "GroupWise Video Conferencing Add-on opening screen" },
    { src: "/products/gwvc/gwvc-dashboard.png", alt: "GroupWise Video Conferencing Dashboard showing upcoming meetings" },
    { src: "/products/gwvc/gwvc-scheduling.png", alt: "Scheduling a video conferencing meeting from GroupWise" },
    { src: "/products/gwvc/gwvc-completing.png", alt: "Adding attendees to a scheduled video conference meeting" },
    { src: "/products/gwvc/gwvc-appointment.png", alt: "Video conference meeting appointment in GroupWise calendar" },
  ];

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/products/gwvc-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Product
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 leading-tight">
              GroupWise Video Conferencing
              <br />
              <span className="text-accent">Add-On</span>
            </h1>
            <p className="text-lg text-[var(--netcb-accent)] font-medium mb-6">
              Get Many More Features
            </p>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              NETCB&apos;s GroupWise Video Conferencing Add-on for OpenText GroupWise
              allows a user to schedule a Video Conferencing enabled meeting from
              within the GroupWise Windows client.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Banner */}
      <section className="relative py-8 border-b border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <button
              onClick={() => setLightboxIndex(0)}
              className="block w-full rounded-xl overflow-hidden border border-[var(--netcb-border)] cursor-zoom-in group"
            >
              <img
                src="/products/gwvc/gwvc-banner.png"
                alt="GroupWise Video Conferencing Add-on supported platforms"
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
              />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Compatibility */}
      <section className="relative py-16 border-b border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                  This Add-on for GroupWise will work with{" "}
                  <strong className="text-[var(--netcb-text)]">GroupWise version 2014
                  and onwards</strong>, although it is recommended to use{" "}
                  <strong className="text-[var(--netcb-text)]">OpenText
                  GroupWise 18.3.1 or later</strong>.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {highlights.slice(3, 6).map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)] border border-[var(--netcb-accent)]/20"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Opening Screen */}
      <section className="relative py-12 border-b border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Getting Started
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-2 max-w-xl mx-auto">
                The Add-on integrates directly into your GroupWise client for seamless video conferencing scheduling.
              </p>
            </div>
            <button
              onClick={() => setLightboxIndex(1)}
              className="block w-full rounded-xl overflow-hidden border border-[var(--netcb-border)] cursor-zoom-in group"
            >
              <img
                src="/products/gwvc/gwvc-opening.png"
                alt="GroupWise Video Conferencing Add-on opening screen"
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
              />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Supported Platforms
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                The GroupWise Video Conferencing Add-on supports the video conferencing
                platforms below. More platforms will be added over time.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 40}>
                <div className="glass rounded-xl p-4 text-center hover:glass-elevated transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform p-2">
                    <Image
                      src={p.icon}
                      alt={p.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--netcb-text)]">{p.name}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                How It Works
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                Click any step to learn more about the workflow.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} onImageClick={() => setLightboxIndex(i + 2)} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features + Docs */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Key Features
              </h2>
              <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8">
                The Add-on integrates seamlessly with your existing GroupWise
                environment, providing a familiar workflow for scheduling and managing
                video conferencing meetings.
              </p>
              <div className="space-y-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--netcb-accent)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--netcb-text-muted)]">{h}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                  Full Documentation
                </h3>
                <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-6">
                  Access complete installation guides, administrator configuration,
                  and end-user documentation for the GroupWise Video Conferencing Add-on.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://docs.netcb.com/gwvc-admin/introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-4 h-4 text-[var(--netcb-accent)]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--netcb-text)]">Administrator Guide</div>
                      <div className="text-xs text-[var(--netcb-text-muted)]">Installation, configuration, deployment</div>
                    </div>
                  </a>
                  <a
                    href="https://docs.netcb.com/gwvc-user/introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-4 h-4 text-[var(--netcb-accent)]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--netcb-text)]">End-User Guide</div>
                      <div className="text-xs text-[var(--netcb-text-muted)]">Scheduling, dashboard, busy search</div>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>
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
              Contact us today and let&apos;s do
            </h2>
            <p className="text-[var(--netcb-accent)] font-medium text-lg mb-8">
              A Proof of Concept
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-sm text-[var(--netcb-text-muted)]">
                Call us <a href="tel:+27128804040" className="text-[var(--netcb-accent)] hover:underline">+27 12 880 4040</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
