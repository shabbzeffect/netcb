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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/products/products-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Enterprise IT
              <br />
              <span className="text-accent">products &amp; platforms.</span>
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              We distribute and support best-of-breed technology platforms — from
              cybersecurity and backup to communications and digital workspaces.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Products */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--netcb-accent)] text-[var(--netcb-base)]"
                      : "glass text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Product count */}
          <AnimatedSection delay={40}>
            <p className="text-sm text-[var(--netcb-text-muted)] mb-8">
              Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </AnimatedSection>

          {/* Product grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.slug} delay={Math.min(i * 40, 400)}>
                {product.href ? (
                  <Link
                    href={product.href}
                    className="block glass rounded-2xl p-8 h-full hover:glass-elevated transition-all duration-300 group"
                  >
                    <ProductContent product={product} />
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--netcb-accent)] font-medium">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ) : (
                  <div className="glass rounded-2xl p-8 h-full hover:glass-elevated transition-all duration-300">
                    <ProductContent product={product} />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={200}>
            <div className="mt-16 text-center">
              <p className="text-[var(--netcb-text-muted)] mb-6">
                Interested in any of these products?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
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
      <div className="flex items-start gap-4 mb-4">
        {product.logo && (
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2">
            <Image
              src={product.logo}
              alt={product.name}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mt-1">
                {product.name}
              </h2>
            </div>
            <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]/50 px-2 py-1 rounded bg-[var(--netcb-surface-2)]">
              {product.partner}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed mb-6">
        {product.description}
      </p>

      <ul className="space-y-2">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[var(--netcb-accent)] mt-0.5 flex-shrink-0" />
            <span className="text-sm text-[var(--netcb-text-muted)]">{f}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
