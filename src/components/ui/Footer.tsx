"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { company } from "@/lib/content/company";

const footerLinks = {
  Solutions: [
    { name: "Cybersecurity", href: "/solutions/cybersecurity" },
    { name: "Hybrid Cloud", href: "/solutions/hybrid-cloud" },
    { name: "Digital Workspaces", href: "/solutions/digital-workspaces" },
    { name: "Open Source", href: "/solutions/open-source" },
  ],
  Services: [
    { name: "Support Services", href: "/services/support" },
    { name: "Legal Compliance", href: "/services/legal" },
    { name: "Documentation", href: "/services/documentation" },
    { name: "All Services", href: "/services" },
  ],
  Products: [
    { name: "Wazuh", href: "/products#wazuh" },
    { name: "Backup Eagle", href: "/products#backup-eagle" },
    { name: "SEP sesam", href: "/products#sep-sesam" },
    { name: "DeskAlerts", href: "/products#deskalerts" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Distribution", href: "/distribution" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Terms & Conditions", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Cookie Policy", href: "/legal/cookies" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: company.social.facebook, path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "X", href: company.social.twitter, path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { name: "YouTube", href: company.social.youtube, path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "LinkedIn", href: company.social.linkedin, path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--netcb-border)]" role="contentinfo">
      <div className="glow-line" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="NETCB Home">
              <Image
                src="/netcb-logo-white.png"
                alt="NETCB"
                width={164}
                height={45}
                className="h-9 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed max-w-sm mb-6">
              African technology partner built for the demands of large enterprises.
              Enterprise-grade infrastructure, cybersecurity, and digital transformation
              across the continent.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-2 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {company.contact.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-[var(--netcb-text-muted)]">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {company.headquarters.address}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--netcb-text)] mb-4 font-[var(--font-display)]">
                {category}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--netcb-text-muted)] font-[var(--font-mono)]">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:bg-white/5 transition-all"
                aria-label={`Follow NETCB on ${social.name}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-lg text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:bg-white/5 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
