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
    linkedin: "https://www.linkedin.com/in/cobus-burgers/",
  },
  {
    name: "Jan du Toit",
    image: "/team/jan.png",
    role: "Chief Financial Officer",
    linkedin: "https://www.linkedin.com/in/jan-du-toit/",
  },
  {
    name: "Keith Chatsauka",
    image: "/team/keith.png",
    role: "Director: Cyberlaw, Compliance & Cybersecurity",
    linkedin: "https://www.linkedin.com/in/keith-chatsauka/",
  },
  {
    name: "Lumko Ndzala",
    image: "/team/lumko.png",
    role: "Head of Marketing & Account Executive",
    linkedin: "https://www.linkedin.com/in/lumko-ndzala/",
  },
  {
    name: "Marlene van Zyl",
    image: "/team/marlene.png",
    role: "Sales Business Unit Manager",
    linkedin: "https://www.linkedin.com/in/marlene-van-zyl/",
  },
  {
    name: "Matthew Garzancich",
    image: "/team/matthew.png",
    role: "Partner Manager & Account Executive",
    linkedin: "https://www.linkedin.com/in/matthew-garzancich/",
  },
  {
    name: "Kleins Agwanda",
    image: "/team/kleins.png",
    role: "Regional Manager: East Africa",
    linkedin: "https://www.linkedin.com/in/kleins-agwanda/",
  },
  {
    name: "Kobus Bennemeer",
    image: "/team/kobus.png",
    role: "Team Leader: System Engineers",
    linkedin: "https://www.linkedin.com/in/kobus-bennemeer/",
  },
  {
    name: "Siphephelo Buthelezi",
    image: "/team/siphephelo.png",
    role: "Team Leader: Software Developers",
    linkedin: "https://www.linkedin.com/in/siphephelo-buthelezi/",
  },
  {
    name: "Christopher Katranas",
    image: "/team/christopher.png",
    role: "Software Developer",
    linkedin: "https://www.linkedin.com/in/christopher-katranas/",
  },
  {
    name: "JP Breugem",
    image: "/team/jp.png",
    role: "Systems Specialist",
    linkedin: "https://www.linkedin.com/in/jp-breugem/",
  },
  {
    name: "Koketso Mathole",
    image: "/team/koketso.png",
    role: "Software Developer",
    linkedin: "https://www.linkedin.com/in/koketso-mathole/",
  },
  {
    name: "Lesego Molete",
    image: "/team/lesego.png",
    role: "Software Developer",
    linkedin: "https://www.linkedin.com/in/lesego-molete/",
  },
  {
    name: "Mickey Mseleko",
    image: "/team/mickey.png",
    role: "Systems Specialist",
    linkedin: "https://www.linkedin.com/in/mickey-mseleko/",
  },
  {
    name: "Paul Laubscher",
    image: "/team/paul.png",
    role: "Systems Engineer",
    linkedin: "https://www.linkedin.com/in/paul-laubscher/",
  },
  {
    name: "Trabelsie Taunyane",
    image: "/team/trabelsie.png",
    role: "Personal Assistant to the MD & Legal Advisor",
    linkedin: "https://www.linkedin.com/in/trabelsie-taunyane/",
  },
  {
    name: "Wellington Nadisa",
    image: "/team/wellington.png",
    role: "Service Desk Manager & Business Consultant",
    linkedin: "https://www.linkedin.com/in/wellington-nadisa/",
  },
  {
    name: "Shabir Wangara",
    image: "/team/shabir.jpg",
    role: "Systems Engineer",
    linkedin: "https://www.linkedin.com/in/shabir-wangara/",
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
      <section className="relative py-20 sm:py-28 border-t border-[var(--netcb-border)] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[var(--netcb-accent)]/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[var(--netcb-accent-2)]/5 blur-[100px] rounded-full" />
          <img src="/about/team-section.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/90 to-[var(--netcb-base)]/95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Our Team
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                The people behind the platform
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-4 max-w-2xl mx-auto">
                A specialist team with deep enterprise experience across infrastructure, security, and cloud.
              </p>
            </div>
          </AnimatedSection>

          {/* Leadership row */}
          <AnimatedSection delay={100}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--netcb-border)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">Leadership</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--netcb-border)]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {team.slice(0, 3).map((member, i) => (
                  <div
                    key={member.name}
                    className="glass rounded-2xl p-6 hover:glass-elevated transition-all duration-500 group border border-transparent hover:border-[var(--netcb-accent)]/20 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      {member.image ? (
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-[var(--netcb-accent)]/20 group-hover:shadow-[var(--netcb-accent)]/40 transition-all duration-500 group-hover:scale-105">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[var(--netcb-success)] border-2 border-[var(--netcb-base)]" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--netcb-accent)] to-[var(--netcb-accent-2)] flex items-center justify-center text-[var(--netcb-base)] font-bold text-lg shadow-lg shadow-[var(--netcb-accent)]/20 group-hover:scale-105 transition-transform">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-1 truncate">
                          {member.name}
                        </h3>
                        <p className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider leading-snug truncate">
                          {member.role}
                        </p>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-2 text-xs text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Team grid */}
          <AnimatedSection delay={200}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--netcb-border)]" />
              <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">Team</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--netcb-border)]" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {team.slice(3).map((member, i) => (
                <div
                  key={member.name}
                  className="glass rounded-xl p-4 h-full text-center hover:glass-elevated transition-all duration-500 group border border-transparent hover:border-[var(--netcb-accent)]/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.08)]"
                  style={{ animationDelay: `${(i + 3) * 60}ms` }}
                >
                  {member.image ? (
                    <div className="relative mx-auto mb-3">
                      <div className="w-16 h-16 rounded-xl overflow-hidden mx-auto shadow-lg shadow-[var(--netcb-accent)]/10 group-hover:shadow-[var(--netcb-accent)]/30 transition-all duration-500 group-hover:scale-105">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--netcb-success)] border-2 border-[var(--netcb-base)]" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--netcb-accent)] to-[var(--netcb-accent-2)] flex items-center justify-center text-[var(--netcb-base)] font-bold text-base mx-auto mb-3 shadow-lg shadow-[var(--netcb-accent)]/10 group-hover:scale-105 transition-transform">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  )}
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)] mb-1 text-sm truncate">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider leading-snug truncate">
                    {member.role}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center mt-2 p-1.5 rounded-lg text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:bg-[var(--netcb-accent)]/10 transition-all"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Team count */}
          <AnimatedSection delay={300}>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 glass rounded-full">
                <div className="w-2 h-2 rounded-full bg-[var(--netcb-success)] animate-pulse" />
                <span className="text-sm text-[var(--netcb-text-muted)]">
                  <span className="text-[var(--netcb-accent)] font-semibold">{team.length}</span> team members strong
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 sm:py-28 border-t border-[var(--netcb-border)] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--netcb-accent)]/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                23 years of building trust
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-4 max-w-xl mx-auto">
                From a small startup in Pretoria to a pan-African enterprise IT leader.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line with glow */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--netcb-accent)] via-[var(--netcb-border)] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--netcb-accent)] via-[var(--netcb-border)] to-transparent blur-sm opacity-50" />
            </div>

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection
                  key={item.year}
                  delay={i * 80}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-4 sm:gap-8 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Dot with pulse */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-[var(--netcb-accent)] border-2 border-[var(--netcb-base)] shadow-[0_0_12px_var(--netcb-accent-glow)]" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-[var(--netcb-accent)] animate-ping opacity-20" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                      }`}
                    >
                      <div className={`glass rounded-xl p-5 sm:p-6 hover:glass-elevated transition-all duration-500 border border-transparent hover:border-[var(--netcb-accent)]/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.08)] ${
                        i % 2 === 0 ? "sm:ml-auto" : ""
                      }`}>
                        {/* Year badge */}
                        <div className={`inline-flex items-center gap-2 mb-3 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                          <div className="w-8 h-8 rounded-lg bg-[var(--netcb-accent)]/10 flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-[var(--netcb-accent)]" />
                          </div>
                          <span className="text-lg sm:text-xl font-bold font-[var(--font-mono)] text-[var(--netcb-accent)]">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-[var(--netcb-text-muted)] leading-relaxed">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* End dot */}
            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 bottom-0 z-10">
              <div className="w-3 h-3 rounded-full bg-[var(--netcb-surface-3)] border-2 border-[var(--netcb-border)]" />
            </div>
          </div>

          {/* Timeline stats */}
          <AnimatedSection delay={400}>
            <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              {[
                { value: "23+", label: "Years" },
                { value: "15+", label: "Countries" },
                { value: "500+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass rounded-xl p-4">
                  <div className="text-xl sm:text-2xl font-bold font-[var(--font-display)] text-[var(--netcb-accent)]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
