"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card3D } from "@/components/ui/Card3D";
import { MapPin, Briefcase, Clock, Users, Heart, Shield, Rocket, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior Cybersecurity Analyst",
    location: "Pretoria, South Africa",
    type: "Full-time",
    department: "Cybersecurity",
    description: "Lead security assessments, penetration testing, and incident response for enterprise clients across Africa.",
    requirements: ["5+ years in cybersecurity", "CISSP or CEH certification", "Experience with African markets"],
  },
  {
    title: "Cloud Solutions Architect",
    location: "Nairobi, Kenya",
    type: "Full-time",
    department: "Cloud Solutions",
    description: "Design and implement hybrid cloud solutions for enterprise clients, with focus on SUSE and open-source technologies.",
    requirements: ["7+ years in cloud architecture", "AWS/Azure certifications", "Hybrid cloud experience"],
  },
  {
    title: "Systems Engineer",
    location: "Pretoria, South Africa",
    type: "Full-time",
    department: "Engineering",
    description: "Deploy, configure, and maintain enterprise Linux systems and infrastructure for key clients.",
    requirements: ["3+ years in systems engineering", "Linux expertise (SUSE, RHEL)", "Scripting skills"],
  },
  {
    title: "Software Developer",
    location: "Remote",
    type: "Full-time",
    department: "Development",
    description: "Build custom software solutions and integrations for enterprise clients using modern frameworks.",
    requirements: ["3+ years in software development", "React/Node.js experience", "API integration skills"],
  },
];

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical aid and wellness programmes" },
  { icon: GraduationCap, title: "Learning & Development", description: "Certification sponsorships and continuous training" },
  { icon: Rocket, title: "Career Growth", description: "Clear career progression paths and mentorship" },
  { icon: Users, title: "Team Culture", description: "Collaborative, inclusive, and supportive environment" },
  { icon: Shield, title: "Job Security", description: "23+ years of stable enterprise IT delivery" },
  { icon: Clock, title: "Work-Life Balance", description: "Flexible working arrangements and generous leave" },
];

export function CareersPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about/about-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Careers
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 sm:mb-6 leading-tight">
              Join Our Team
              <br />
              <span className="text-accent">Shape the Future of IT.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Be part of a dynamic team delivering enterprise IT solutions across Africa.
              We&apos;re looking for passionate individuals who want to make a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Why NETCB
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Why Work With Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card3D>
                  <div className="group glass-elevated rounded-2xl p-5 sm:p-6 h-full border border-[var(--netcb-border-bright)] hover:border-[var(--netcb-accent)]/30 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-[var(--netcb-accent)] rounded-full blur-[60px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <benefit.icon className="w-6 h-6 text-[var(--netcb-accent)]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--netcb-text)] mb-2 group-hover:text-[var(--netcb-accent)] transition-colors">{benefit.title}</h3>
                      <p className="text-sm text-[var(--netcb-text-muted)]">{benefit.description}</p>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Open Positions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Current Opportunities
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4 sm:space-y-5">
            {jobOpenings.map((job, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card3D>
                  <div className="group glass-elevated rounded-2xl p-5 sm:p-6 border border-[var(--netcb-border-bright)] hover:border-[var(--netcb-accent)]/30 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--netcb-accent)] rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500" />
                    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-[var(--netcb-text)] mb-2 group-hover:text-[var(--netcb-accent)] transition-colors">{job.title}</h3>
                        <p className="text-sm text-[var(--netcb-text-muted)] mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                          <span className="flex items-center gap-1.5 text-[var(--netcb-text-muted)]">
                            <MapPin className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-[var(--netcb-text-muted)]">
                            <Briefcase className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5 text-[var(--netcb-text-muted)]">
                            <Clock className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          href="/contact"
                          className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] font-semibold hover:bg-[var(--netcb-accent-hover)] transition-all duration-200 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)]"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-[var(--netcb-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 sm:mb-6">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your CV and tell us how you can contribute to NETCB&apos;s mission.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] font-semibold hover:bg-[var(--netcb-accent-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
