"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { products } from "@/lib/content/products";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/products/products-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Our Products
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 sm:mb-6 leading-tight">
              Enterprise IT
              <br />
              <span className="text-accent">products &amp; platforms.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              We distribute and support best-of-breed technology platforms — from
              cybersecurity and backup to communications and digital workspaces.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Products */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[var(--netcb-accent)] text-[var(--netcb-base)] shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                      : "glass text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 border border-transparent hover:border-[var(--netcb-border)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Product count */}
          <AnimatedSection delay={40}>
            <p className="text-sm text-[var(--netcb-text-muted)] mb-6 sm:mb-8">
              Showing <span className="text-[var(--netcb-accent)] font-semibold">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </AnimatedSection>

          {/* Product grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.slug} delay={Math.min(i * 40, 400)}>
                {product.href ? (
                  <Link
                    href={product.href}
                    className="group block glass rounded-2xl p-5 sm:p-6 lg:p-8 h-full hover:glass-elevated transition-all duration-500 border border-transparent hover:border-[var(--netcb-accent)]/20 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[var(--netcb-accent)] rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
                    <ProductContent product={product} />
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--netcb-accent)] font-medium group-hover:gap-2.5 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ) : (
                  <div className="glass rounded-2xl p-5 sm:p-6 lg:p-8 h-full hover:glass-elevated transition-all duration-500 border border-transparent hover:border-[var(--netcb-accent)]/20 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[var(--netcb-accent)] rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
                    <ProductContent product={product} />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={200}>
            <div className="mt-12 sm:mt-16 text-center">
              <p className="text-base text-[var(--netcb-text-muted)] mb-6">
                Interested in any of these products?
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function ProductContent({ product }: { product: (typeof products)[0] }) {
  return (
    <>
      <div className="flex items-start gap-4 mb-4 relative">
        {product.logo && (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2 group-hover:scale-105 transition-transform duration-500">
            <Image
              src={product.logo}
              alt={product.name}
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] sm:text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mt-1 group-hover:text-[var(--netcb-accent)] transition-colors">
                {product.name}
              </h2>
            </div>
            <span className="text-[10px] sm:text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]/50 px-2 py-1 rounded bg-[var(--netcb-surface-2)] flex-shrink-0">
              {product.partner}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-5">
        {product.description}
      </p>

      <ul className="space-y-2">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2 group/feature">
            <div className="w-4 h-4 rounded-full bg-[var(--netcb-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:bg-[var(--netcb-accent)]/20 transition-colors">
              <Check className="w-2.5 h-2.5 text-[var(--netcb-accent)]" />
            </div>
            <span className="text-sm text-[var(--netcb-text-muted)]">{f}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
