"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Calendar, ChevronRight, ArrowLeft, Phone, Mail } from "lucide-react";

interface BlogPost {
  slug: string;
  date: string;
  category: string;
  title: string;
  image: string;
  excerpt: string;
  content: string[];
}

export function BlogPostClient({ post }: { post: BlogPost }) {
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm font-[var(--font-mono)] text-[var(--netcb-text-muted)] mb-6">
              <Link href="/about" className="hover:text-[var(--netcb-accent)] transition-colors">
                About
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/about/blog" className="hover:text-[var(--netcb-accent)] transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[var(--netcb-accent)] truncate max-w-[200px]">{post.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full glass text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] border border-[var(--netcb-accent)]/20">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]">
                <Calendar className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                {post.date}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] leading-tight">
              {post.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={100}>
            <div className="glass-elevated rounded-2xl p-8 sm:p-12 border border-[var(--netcb-border-bright)]">
              {/* Featured image */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-[var(--netcb-surface-2)] to-[var(--netcb-surface-1)] rounded-xl overflow-hidden mb-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--netcb-surface-1)] via-transparent to-transparent" />
              </div>

              {/* Article body */}
              <div className="space-y-6 text-[var(--netcb-text-muted)] leading-relaxed text-base">
                {post.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Back link */}
          <AnimatedSection delay={200}>
            <div className="mt-8">
              <Link
                href="/about/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--netcb-accent)] hover:text-[var(--netcb-accent-hover)] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
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
