"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const services = [
  {
    illustration: "/illustrations/cybersecurity.svg",
    title: "Cybersecurity",
    description:
      "Holistic security posture management — from threat detection and SIEM to identity governance and compliance alignment.",
    href: "/solutions/cybersecurity",
    accent: true,
  },
  {
    illustration: "/illustrations/hybrid-cloud.svg",
    title: "Hybrid Cloud",
    description:
      "Seamless integration of on-premises infrastructure with cloud platforms. Flexibility, scalability, and security across diverse environments.",
    href: "/solutions/hybrid-cloud",
    accent: false,
  },
  {
    illustration: "/illustrations/digital-workspaces.svg",
    title: "Digital Workspaces",
    description:
      "Secure, unified digital workspace environments with tailored solutions for modern workplace enablement and productivity.",
    href: "/solutions/digital-workspaces",
    accent: false,
  },
  {
    illustration: "/illustrations/open-source.svg",
    title: "Open Source",
    description:
      "Enterprise-grade open source implementation, integration, and support — reducing vendor lock-in while aligning with operational requirements.",
    href: "/solutions/open-source",
    accent: false,
  },
  {
    illustration: "/illustrations/support.svg",
    title: "Support Services",
    description:
      "Structured SLA-based support with predictable response times, clear escalation paths, and proactive guidance tailored to each environment.",
    href: "/services",
    accent: false,
  },
  {
    illustration: "/illustrations/legal.svg",
    title: "Legal Compliance",
    description:
      "Expert guidance on data protection, licensing, vendor agreements, and risk management — ensuring technology decisions align with regulatory obligations.",
    href: "/services",
    accent: false,
  },
];

export function CapabilityGrid() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <h2
              id="capabilities-heading"
              className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 leading-tight"
            >
              End-to-end IT services{" "}
              <span className="text-accent">built for enterprise.</span>
            </h2>
            <p className="text-lg text-[var(--netcb-text-muted)] leading-relaxed max-w-[68ch]">
              From infrastructure and platforms to tailored software and support —
              we deliver reliability you can trust across the African continent.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 80}>
              <Link
                href={service.href}
                className="group block h-full p-6 sm:p-8 rounded-2xl glass hover:glass-elevated transition-all duration-500 hover:shadow-lg hover:shadow-black/20 hover:border-[var(--netcb-border-bright)] relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[var(--netcb-accent)] rounded-full blur-[100px] opacity-10" />
                </div>

                <div className="relative">
                  <div className="relative w-full h-32 mb-5 rounded-xl overflow-hidden bg-[var(--netcb-surface-2)]">
                    <Image
                      src={service.illustration}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-3 group-hover:text-[var(--netcb-accent)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--netcb-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
