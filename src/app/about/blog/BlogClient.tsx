"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Calendar, ArrowRight, Phone, Mail, ChevronRight } from "lucide-react";
import { blogPosts } from "./blogData";

export function BlogClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about/about-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src="/illustrations/hero-pattern.svg" alt="" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm font-[var(--font-mono)] text-[var(--netcb-text-muted)] mb-6">
              <Link href="/about" className="hover:text-[var(--netcb-accent)] transition-colors">
                About
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[var(--netcb-accent)]">Blog Articles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Blog <span className="text-accent">Articles</span>
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Insights on cybersecurity, hybrid cloud, open source, and enterprise
              IT infrastructure from the NETCB team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 100}>
                <Link href={`/about/blog/${post.slug}`} className="block group">
                  <div className="glass rounded-2xl overflow-hidden hover:glass-elevated transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-[var(--netcb-surface-2)] to-[var(--netcb-surface-1)] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--netcb-surface-1)] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] border border-[var(--netcb-accent)]/20">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                        {post.date}
                      </div>
                      <h2 className="text-lg font-[var(--font-display)] font-bold text-[var(--netcb-text)] mb-3 group-hover:text-[var(--netcb-accent)] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--netcb-accent)] group-hover:gap-3 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
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
              Contact us today and let&apos;s explore
            </h2>
            <p className="text-[var(--netcb-text-muted)] mb-8">
              How we can assist your organisation with enterprise IT infrastructure,
              cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+27128804040"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl glass text-[var(--netcb-text)] hover:bg-white/5 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[var(--netcb-accent)]" />
                +27 12 880 4040
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--netcb-text-muted)]">
              <a href="mailto:info@netcb.com" className="flex items-center gap-2 hover:text-[var(--netcb-accent)] transition-colors">
                <Mail className="w-4 h-4" />
                info@netcb.com
              </a>
              <a href="mailto:partners@netcb.com" className="flex items-center gap-2 hover:text-[var(--netcb-accent)] transition-colors">
                <Mail className="w-4 h-4" />
                partners@netcb.com
              </a>
              <a href="mailto:support@netcb.com" className="flex items-center gap-2 hover:text-[var(--netcb-accent)] transition-colors">
                <Mail className="w-4 h-4" />
                support@netcb.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
