"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Newspaper, ArrowRight, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const updates = [
  {
    vendor: "Wazuh",
    logo: "/partners/wazuh.svg",
    date: "2026",
    title: "Wazuh 5.0 Release",
    description: "Major release with enhanced XDR capabilities, improved SIEM performance, and new compliance frameworks.",
    category: "Security",
  },
  {
    vendor: "XCP-ng",
    logo: "/platforms/jitsi.svg",
    date: "2026",
    title: "XCP-ng 8.3 Released",
    description: "New features including improved live migration, enhanced GPU passthrough, and better performance monitoring.",
    category: "Virtualisation",
  },
  {
    vendor: "MariaDB",
    logo: "/partners/mariadb.svg",
    date: "2026",
    title: "MariaDB 11.4 LTS",
    description: "Long-term support release with improved performance, security enhancements, and new SQL features.",
    category: "Database",
  },
  {
    vendor: "GitLab",
    logo: "/partners/gitlab.svg",
    date: "2026",
    title: "GitLab 17.0",
    description: "AI-powered DevSecOps features, improved CI/CD pipelines, and enhanced security scanning capabilities.",
    category: "DevOps",
  },
  {
    vendor: "Nextcloud",
    logo: "/platforms/googlemeet.svg",
    date: "2026",
    title: "Nextcloud Hub 9",
    description: "Enhanced collaboration features, improved performance, and new security capabilities for enterprise deployments.",
    category: "Digital Workspaces",
  },
  {
    vendor: "pfSense",
    logo: "/partners/pfsense.svg",
    date: "2026",
    title: "pfSense Plus 24.08",
    description: "New firewall features, improved VPN performance, and enhanced high availability capabilities.",
    category: "Security",
  },
];

const categories = ["All", ...new Set(updates.map((u) => u.category))];

export function VendorUpdatesClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/distribution/distribution-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute inset-0 opacity-20">
          <img src="/illustrations/hero-pattern.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Distribution
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Vendor Updates
              <br />
              <span className="text-accent">and News</span>
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl">
              Stay up to date with the latest news, updates, and announcements
              from NETCB&apos;s technology partners and vendors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {updates.map((update, i) => (
              <AnimatedSection key={update.title} delay={Math.min(i * 60, 300)}>
                <div className="glass rounded-2xl p-6 h-full hover:glass-elevated transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2">
                      <Image
                        src={update.logo}
                        alt={update.vendor}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--netcb-accent-dim)] text-[var(--netcb-accent)] border border-[var(--netcb-accent)]/20">
                          {update.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-[var(--netcb-text-muted)]">
                          <Calendar className="w-3.5 h-3.5" />
                          {update.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                      {update.vendor}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)] mb-2">
                    {update.title}
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <div className="mt-12 text-center">
              <p className="text-[var(--netcb-text-muted)] mb-6">
                Want to stay updated on all vendor news?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Subscribe to Updates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 border-t border-[var(--netcb-border)]">
        <div className="absolute inset-0">
          <img src="/cta-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/85 to-[var(--netcb-base)]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
              Contact us today
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              Learn more about our vendor partnerships and solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Get in Touch
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
