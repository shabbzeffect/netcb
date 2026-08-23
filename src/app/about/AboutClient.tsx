"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card3D } from "@/components/ui/Card3D";
import { Target, Heart, Shield, Users, Award, MapPin, Cloud, Monitor, Server, Play, Eye, ChevronDown, Calendar, BookOpen } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const team = [
  {
    name: "Cobus Burgers",
    image: "/team/cobus.png",
    role: "Founder & Managing Director",
  },
  {
    name: "Jan du Toit",
    image: "/team/jan.png",
    role: "Chief Financial Officer",
  },
  {
    name: "Keith Chatsauka",
    image: "/team/keith.png",
    role: "Director: Cyberlaw, Compliance & Cybersecurity",
  },
  {
    name: "Lumko Ndzala",
    image: "/team/lumko.png",
    role: "Head of Marketing & Account Executive",
  },
  {
    name: "Marlene van Zyl",
    image: "/team/marlene.png",
    role: "Sales Business Unit Manager",
  },
  {
    name: "Matthew Garzancich",
    image: "/team/matthew.png",
    role: "Partner Manager & Account Executive",
  },
  {
    name: "Kleins Agwanda",
    image: "/team/kleins.png",
    role: "Regional Manager: East Africa",
  },
  {
    name: "Kobus Bennemeer",
    image: "/team/kobus.png",
    role: "Team Leader: System Engineers",
  },
  {
    name: "Siphephelo Buthelezi",
    image: "/team/siphephelo.png",
    role: "Team Leader: Software Developers",
  },
  {
    name: "Christopher Katranas",
    image: "/team/christopher.png",
    role: "Software Developer",
  },
  {
    name: "JP Breugem",
    image: "/team/jp.png",
    role: "Systems Specialist",
  },
  {
    name: "Koketso Mathole",
    image: "/team/koketso.png",
    role: "Software Developer",
  },
  {
    name: "Lesego Molete",
    image: "/team/lesego.png",
    role: "Software Developer",
  },
  {
    name: "Mickey Mseleko",
    image: "/team/mickey.png",
    role: "Systems Specialist",
  },
  {
    name: "Paul Laubscher",
    image: "/team/paul.png",
    role: "Systems Engineer",
  },
  {
    name: "Trabelsie Taunyane",
    image: "/team/trabelsie.png",
    role: "Personal Assistant to the MD & Legal Advisor",
  },
  {
    name: "Wellington Nadisa",
    image: "/team/wellington.png",
    role: "Service Desk Manager & Business Consultant",
  },
  {
    name: "Shabir Wangara",
    image: "/team/shabir.jpg",
    role: "Systems Engineer",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcomes-Focused",
    description: "We focus on measurable results — stable platforms, secure environments, and solutions that scale.",
  },
  {
    icon: Shield,
    title: "Agility with Accountability",
    description: "We move quickly and adapt to changing requirements while following rigorous enterprise standards.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Every engagement is treated as a long-term relationship, grounded in transparency and responsiveness.",
  },
  {
    icon: Users,
    title: "Technical Depth",
    description: "From complex deployments to integration-heavy environments, we bring the tenacity needed for mission-critical systems.",
  },
];

const timeline = [
  { year: "2003", event: "NETCB founded in Pretoria, South Africa" },
  { year: "2008", event: "Expanded into enterprise infrastructure and support services" },
  { year: "2013", event: "Launched cybersecurity and compliance practice" },
  { year: "2018", event: "Became authorised SUSE training partner" },
  { year: "2020", event: "Expanded into East Africa with regional office" },
  { year: "2022", event: "Launched NETCB Distribution division" },
  { year: "2024", event: "20+ years of enterprise IT delivery across Africa" },
  { year: "2026", event: "Continuing to grow — agile, innovative, leading edge" },
];

export function AboutPageClient() {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [eventsHover, setEventsHover] = useState(false);
  const eventsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (eventsRef.current && !eventsRef.current.contains(e.target as Node)) {
        setEventsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about/about-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Specialist experts serving
              <br />
              <span className="text-accent">enterprise clients across Africa.</span>
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              NETCB is an African technology partner built for the demands of large
              enterprises. We may be a small team, but we deliver with the strength,
              discipline, and reliability that big organisations require. Our clients
              trust us because we focus on outcomes — stable platforms, secure
              environments, and solutions that scale — without the noise, complexity,
              or inflated promises.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events & Blog Dropdown */}
      <section className="relative py-6 border-t border-b border-[var(--netcb-border)] bg-[var(--netcb-surface-1)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Events Dropdown */}
              <div
                ref={eventsRef}
                className="relative"
                onMouseEnter={() => setEventsHover(true)}
                onMouseLeave={() => setEventsHover(false)}
              >
                <button
                  onClick={() => setEventsOpen(!eventsOpen)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm font-medium text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 transition-all duration-200"
                >
                  <Calendar className="w-4 h-4 text-[var(--netcb-accent)]" />
                  Events
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${eventsOpen ? "rotate-180" : ""}`} />
                </button>
                {(eventsOpen || eventsHover) && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass-elevated rounded-xl p-1.5 shadow-2xl shadow-black/40 animate-dropdown border border-[var(--netcb-border-bright)] z-20">
                    <Link
                      href="/about/events/upcoming"
                      onClick={() => setEventsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-[var(--netcb-accent-dim)] transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center group-hover:bg-[var(--netcb-accent)] transition-colors">
                        <Calendar className="w-3.5 h-3.5 text-[var(--netcb-accent)] group-hover:text-[var(--netcb-base)] transition-colors" />
                      </div>
                      Upcoming Events
                    </Link>
                    <Link
                      href="/about/events/past"
                      onClick={() => setEventsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-[var(--netcb-accent-dim)] transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center group-hover:bg-[var(--netcb-accent)] transition-colors">
                        <Calendar className="w-3.5 h-3.5 text-[var(--netcb-accent)] group-hover:text-[var(--netcb-base)] transition-colors" />
                      </div>
                      Past Events
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog Link */}
              <Link
                href="/about/blog"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm font-medium text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-[var(--netcb-accent)]" />
                Blog Articles
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Introduction */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Who we are
              </span>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                See NETCB in action
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <Card3D>
                <div className="glass-elevated rounded-2xl overflow-hidden border border-[var(--netcb-border-bright)]">
                  {/* Video Embed */}
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/PEHs0OhZ8PE?rel=0&modestbranding=1"
                      title="NETCB Enterprise IT Solutions - See us in action"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Caption bar */}
                  <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)]">
                        Enterprise IT. Simplified.
                      </h3>
                      <p className="text-sm text-[var(--netcb-text-muted)] mt-1">
                        Secure infrastructure, hybrid cloud, cybersecurity, and digital workspaces —
                        delivered across Africa.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <a
                        href="https://www.youtube.com/@netcb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] hover:text-[var(--netcb-accent-hover)] transition-colors"
                      >
                        Visit our channel
                      </a>
                    </div>
                  </div>
                </div>
              </Card3D>

              {/* Key capabilities strip */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Cybersecurity", icon: Shield },
                  { label: "Hybrid Cloud", icon: Cloud },
                  { label: "Digital Workspaces", icon: Monitor },
                  { label: "Open Source", icon: Server },
                ].map((cap) => (
                  <div
                    key={cap.label}
                    className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:glass-elevated transition-all duration-300 group"
                  >
                    <cap.icon className="w-5 h-5 text-[var(--netcb-accent)] group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-[var(--netcb-text-muted)] group-hover:text-[var(--netcb-text)] transition-colors">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Built for the demands of
                <br />large enterprises.
              </h2>
              <div className="space-y-4 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  We specialise in enterprise-grade infrastructure, identity and access
                  management, secure collaboration, backup and recovery, and modern
                  workplace enablement. From complex deployments to integration-heavy
                  environments, we bring the tenacity and technical depth needed to
                  tackle mission-critical systems. Our approach is practical and
                  hands-on: we design, implement, and support solutions that work in
                  the real world.
                </p>
                <p>
                  What sets NETCB apart is agility with accountability. We move quickly,
                  respond decisively, and adapt to changing requirements — while still
                  following the rigorous standards enterprises expect. Every engagement
                  is treated as a long-term relationship, grounded in transparency,
                  responsiveness, and a commitment to doing the job properly the first
                  time.
                </p>
                <p>
                  Above all, we believe enterprise technology should be simpler, more
                  secure, and more resilient. NETCB exists to help large organisations
                  modernise with confidence — through trusted expertise, dependable
                  delivery, and a partner who stays engaged long after go-live. When
                  the stakes are high and systems must perform, we are the team that
                  gets it done.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg shadow-[var(--netcb-accent)]/20">
                    <Image
                      src="/team/cobus.png"
                      alt="Cobus Burgers"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)]">
                      Cobus Burgers
                    </div>
                    <div className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)]">
                      Founder & Managing Director
                    </div>
                  </div>
                </div>
                <p className="text-[var(--netcb-text-muted)] leading-relaxed text-sm">
                  23 years building enterprise IT across Africa. Hands-on leadership
                  with deep infrastructure and security expertise.
                </p>
                <div className="mt-6 pt-6 border-t border-[var(--netcb-border)]">
                  <div className="flex items-center gap-2 text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                    Pretoria, Gauteng, South Africa
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Leading edge, agile and innovative
              </span>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Our Vision & Mission
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="glass-elevated rounded-2xl p-8 sm:p-10 h-full relative overflow-hidden group hover:border-[var(--netcb-accent)]/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--netcb-accent)]/8 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-48 group-hover:h-48" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center mb-6 group-hover:bg-[var(--netcb-accent)]/20 transition-colors">
                    <Eye className="w-6 h-6 text-[var(--netcb-accent)]" />
                  </div>
                  <h3 className="text-xl font-[var(--font-display)] font-bold text-[var(--netcb-text)] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-[var(--netcb-text-muted)] leading-relaxed">
                    To lead in delivering innovative digital solutions that transform
                    businesses, empower people, and drive progress across industries.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="glass-elevated rounded-2xl p-8 sm:p-10 h-full relative overflow-hidden group hover:border-[var(--netcb-accent)]/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--netcb-accent-2)]/8 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-48 group-hover:h-48" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--netcb-accent-dim)] flex items-center justify-center mb-6 group-hover:bg-[var(--netcb-accent)]/20 transition-colors">
                    <Target className="w-6 h-6 text-[var(--netcb-accent)]" />
                  </div>
                  <h3 className="text-xl font-[var(--font-display)] font-bold text-[var(--netcb-text)] mb-4">
                    Our Mission
                  </h3>
                  <p className="text-[var(--netcb-text-muted)] leading-relaxed">
                    Our mission is to secure and shape our clients&apos; digital future by
                    delivering innovative solutions that build resilience, accelerate
                    growth, and ensure lasting success in a rapidly changing
                    technology-driven world.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Word from Managing Director */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="absolute inset-0">
          <img src="/about/md-message.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                A word from our Managing Director
              </span>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Leading NETCB into the future
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="glass-elevated rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--netcb-accent)]/10 to-transparent rounded-bl-full" />

              <div className="flex items-center gap-5 mb-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-[var(--netcb-accent)]/20">
                  <Image
                    src="/team/cobus.png"
                    alt="Cobus Burgers"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-[var(--font-display)] font-semibold text-lg text-[var(--netcb-text)]">
                    Cobus Burgers
                  </div>
                  <div className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)]">
                    Founder & Managing Director
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-[var(--netcb-text-muted)] leading-relaxed">
                <p>
                  Since 2020, the way we work has changed a lot. Businesses now have
                  to adjust all the time — to new technology, new security risks, and
                  new ways of working.
                </p>
                <p>
                  NETCB helps organisations deal with these challenges. We help you
                  keep your systems and data secure and to connect older systems with
                  newer platforms. We support staff working from the office, at home,
                  or both.
                </p>
                <p>
                  We provide modern cyber security tools to protect your business,
                  control who can access what, and give you clear visibility across
                  your systems — whether they&apos;re on-site, in the cloud, or a mix
                  of both.
                </p>
                <p>
                  We also help organisations use open-source technology to stay
                  flexible and avoid being locked into one vendor. If you still rely
                  on older &ldquo;core&rdquo; systems (like mainframes), we can connect those
                  smoothly to modern digital services.
                </p>
                <p>
                  On top of that, we build unified Digital Workspace environments and
                  create custom integrations so everything works together properly.
                </p>
                <p className="text-[var(--netcb-text)] font-medium">
                  In short: NETCB helps you build secure, connected, and future-ready
                  systems so your organisation can keep up, grow, and succeed, yet
                  remain free from the shackles of vendor lock-in.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--netcb-border)] flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                  Pretoria, Gauteng, South Africa
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                What drives us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full hover:glass-elevated transition-all duration-300">
                  <value.icon className="w-8 h-8 text-[var(--netcb-accent)] mb-4" />
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="absolute inset-0">
          <img src="/about/team-section.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--netcb-base)]/90 to-[var(--netcb-base)]/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                The people behind the platform
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-4 max-w-2xl mx-auto">
                A specialist team with deep enterprise experience across infrastructure, security, and cloud.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 60}>
                <div className="glass rounded-2xl p-5 h-full text-center hover:glass-elevated transition-all duration-300 group">
                  {member.image ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg shadow-[var(--netcb-accent)]/20 group-hover:scale-105 transition-transform">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--netcb-accent)] to-[var(--netcb-accent-2)] flex items-center justify-center text-[var(--netcb-base)] font-bold text-xl mx-auto mb-3 shadow-lg shadow-[var(--netcb-accent)]/20 group-hover:scale-105 transition-transform">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  )}
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-1 text-sm">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider leading-snug">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                23 years of building trust
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--netcb-accent)] via-[var(--netcb-border)] to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection
                  key={item.year}
                  delay={i * 80}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-6 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--netcb-accent)] border-2 border-[var(--netcb-base)] z-10 mt-1" />

                    {/* Content */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                      }`}
                    >
                      <div className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] font-semibold mb-1">
                        {item.year}
                      </div>
                      <p className="text-[var(--netcb-text-muted)]">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
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
              Ready to work with us?
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              Whether you need to modernise your infrastructure, harden your security
              posture, or break free from vendor lock-in — NETCB is the partner that
              gets it done.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
