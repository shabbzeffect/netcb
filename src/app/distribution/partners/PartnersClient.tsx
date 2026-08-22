"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Users, ArrowRight, ChevronDown, Phone, Mail, Globe, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const partnerData = [
  {
    name: "AKB Technology",
    logo: "/partners/akb-technology.jpg",
    website: "https://www.akbtechnology.co.za",
    phone: "+27 10 493 7493",
    email: "info@akbtechnology.co.za",
    address: "55 Kyalami Boulevard, Midrand, South Africa",
    country: "South Africa",
  },
  {
    name: "Arkna Analytics",
    logo: "/partners/arkna-analytics.webp",
    website: "https://arkna-analyticsafrica.odoo.com/",
    phone: "+254 789 992819",
    email: "info@arkna-analytics.africa",
    address: "Nairobi, Kenya",
    country: "Kenya",
  },
  {
    name: "Cyberguard Africa",
    logo: "/partners/cyberguard-africa.png",
    website: "https://cyberguardafrica.com/",
    phone: "+254 114 450707",
    email: "info@cyberguardafrica.com",
    address: "Nairobi, Kenya",
    country: "Kenya",
  },
  {
    name: "Finsys Group",
    logo: "/partners/finsys-group.webp",
    website: "https://finsys-group.com",
    phone: "+254 111 133 800",
    email: "info@finsys-group.com",
    address: "5th Floor, Applewood Adams, Ngong Road, Nairobi, Kenya",
    country: "Kenya",
  },
  {
    name: "Finsys Group",
    logo: "/partners/finsys-group.webp",
    website: "https://finsys-group.com",
    phone: "+255 757 405 944",
    email: "info-tz@finsys-group.com",
    address: "459 Haile Selassie Rd, Oysterbay, Dar es Salaam, Tanzania",
    country: "Tanzania",
  },
  {
    name: "Infocentury Solutions",
    logo: "/partners/infocentury.jpeg",
    website: "https://infocenturysolutions.com/",
    phone: "+260 979 968680",
    email: "info@infocenturysolutions.com",
    address: "337A Main Street Ibex, Lusaka, Zambia",
    country: "Zambia",
  },
  {
    name: "Infocentury Solutions",
    logo: "/partners/infocentury.jpeg",
    website: "https://infocenturysolutions.com/",
    phone: "+254 722 848060",
    email: "info@infocenturysolutions.com",
    address: "3rd Floor Wing B Police Sacco Plaza, Ngara, Nairobi, Kenya",
    country: "Kenya",
  },
  {
    name: "Learn it By Tests (LBT)",
    logo: "/partners/learnbytests.png",
    website: "https://learnitbytests.inspcorp.com/",
    phone: "+254-776-250-620",
    email: "learnitbytests@inspcorp.com",
    address: "Mombasa, Kenya",
    country: "Kenya",
  },
  {
    name: "Ndende Technologies",
    logo: "/partners/ndende.jpg",
    website: "https://www.ndende.co.za",
    phone: "+27 10 312 5085",
    email: "sales@ndende.co.za",
    address: "Block 2, Ground Floor, Pinewood Office Park, 33 Riley Road, Woodmead, Sandton, South Africa",
    country: "South Africa",
  },
  {
    name: "PC Net (Pty) Ltd",
    logo: "/partners/pc-net.png",
    website: "https://www.pcnet.co.bw",
    phone: "+267 3180548",
    email: "info@pcnet.co.bw",
    address: "Plot 99, Unit 4, International Commerce Park, Gaborone, Botswana",
    country: "Botswana",
  },
  {
    name: "Quantum Solutions",
    logo: "/partners/quantum-solutions.png",
    website: "https://www.quantum-fze.com/",
    phone: "+971 (0) 4 457 2688",
    email: "sales@quantum-fze.com",
    address: "68 Hegaz St., Heliopolis, Cairo, Egypt",
    country: "Egypt",
  },
  {
    name: "Quantum Solutions",
    logo: "/partners/quantum-solutions.png",
    website: "https://www.quantum-fze.com/",
    phone: "+971 (0) 4 457 2688",
    email: "sales@quantum-fze.com",
    address: "Jumeirah Lakes Towers, Cluster W JBC 5 - Office 607, Dubai, United Arab Emirates",
    country: "UAE",
  },
  {
    name: "Quantum Solutions",
    logo: "/partners/quantum-solutions.png",
    website: "https://www.quantum-fze.com/",
    phone: "+971 (0) 4 457 2688",
    email: "sales@quantum-fze.com",
    address: "Jumeirah Lakes Towers, Cluster W JBC 5 - Office 607, Dubai, United Arab Emirates",
    country: "Saudi Arabia",
  },
  {
    name: "Vessel Systems",
    logo: "/partners/vessel.png",
    website: "https://www.vesselsystems.co.ke/",
    phone: "+ 254 731 318 075",
    email: "info@vesselsystems.co.ke",
    address: "P.O Box 603-00208, Ngong Hills, Nairobi, Kenya",
    country: "Kenya",
  },
  {
    name: "Vuxeni Information Technologies",
    logo: "/partners/vuxeni.png",
    website: "https://vuxeniit.com/",
    phone: "+27 84 980 2060",
    email: "info@vuxeniit.co.za",
    address: "Liza's Courts No 3, 64 Van Rensburg Street, Nelspruit, South Africa",
    country: "South Africa",
  },
];

const countries = ["All", ...new Set(partnerData.map((p) => p.country))];

function PartnerCard({ partner, index }: { partner: (typeof partnerData)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={Math.min(index * 30, 400)}>
      <div className="glass rounded-xl overflow-hidden hover:glass-elevated transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-5 text-left"
          aria-expanded={open}
        >
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-[var(--netcb-text)]">
              {partner.name}
            </h3>
            <p className="text-xs text-[var(--netcb-text-muted)] mt-0.5">
              {partner.country}
            </p>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[var(--netcb-accent)] flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-400 ${
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0">
            <div className="border-t border-[var(--netcb-border)] pt-4 space-y-3">
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors"
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{partner.website}</span>
              </a>
              <a
                href={`tel:${partner.phone}`}
                className="flex items-center gap-3 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {partner.phone}
              </a>
              <a
                href={`mailto:${partner.email}`}
                className="flex items-center gap-3 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {partner.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-[var(--netcb-text-muted)]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {partner.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PartnersClient() {
  const [activeCountry, setActiveCountry] = useState("All");

  const filtered =
    activeCountry === "All"
      ? partnerData
      : partnerData.filter((p) => p.country === activeCountry);

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
              NETCB Distribution
              <br />
              <span className="text-accent">Authorised Partners</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-8">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setActiveCountry(country)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCountry === country
                      ? "bg-[var(--netcb-accent)] text-[var(--netcb-base)]"
                      : "glass text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)]"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={40}>
            <p className="text-sm text-[var(--netcb-text-muted)] mb-8">
              Showing {filtered.length} partner{filtered.length !== 1 ? "s" : ""}
              {activeCountry !== "All" && ` in ${activeCountry}`}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((partner, i) => (
              <PartnerCard key={`${partner.name}-${partner.country}`} partner={partner} index={i} />
            ))}
          </div>
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
              Contact us today and
            </h2>
            <p className="text-[var(--netcb-accent)] font-medium text-lg mb-8">
              Become a Partner
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/distribution/become-a-partner"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Apply Now
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
