"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { RefreshCw, CheckCircle, ArrowRight, ChevronDown, FileText, Database, Share2 } from "lucide-react";
import Link from "next/link";
import { Lightbox } from "@/components/ui/Lightbox";

const keyFeatures = [
  {
    title: "Multiple Platform Support",
    description: "Seamlessly migrate documents across various document management systems, including Microsoft SharePoint, OpenText GroupWise, OpenText Vibe and OpenText ECM.",
  },
  {
    title: "Comprehensive Data Mapping",
    description: "You do not lose your meta data: mapping of metadata, permissions, and document properties between systems to ensure nothing gets lost in the transfer.",
  },
  {
    title: "High-Speed Migration",
    description: "Optimize transfer speeds to handle large volumes of documents quickly and efficiently, minimizing downtime.",
  },
  {
    title: "Scalability",
    description: "Suitable for businesses of all sizes, our tools can handle migrations for small teams to large enterprises with thousands or millions of documents.",
  },
  {
    title: "Customization Options",
    description: "Tailor the migration process to meet your specific business needs with customizable settings and options.",
  },
  {
    title: "Detailed Reporting and Analytics",
    description: "Track the progress of your migration in real-time with comprehensive reports and analytics to ensure transparency and accountability.",
  },
];

const tools = [
  {
    icon: FileText,
    title: "Export Tools",
    description: "Our export tool for GroupWise Document Management will export all meta data including the documents from GroupWise Libraries. We can also create export tools for any other system where you need to export your documents from.",
  },
  {
    icon: RefreshCw,
    title: "Migration Tools",
    description: "Our tools for migrating between GroupWise, Vibe and SharePoint have already facilitated the preservation of historical documents at numerous clients.",
  },
  {
    icon: Database,
    title: "Ongoing Development",
    description: "We continuously create tools for migrating between document management systems. We soon will release a migration tool for OpenText ECM. Any custom migration tool can also be developed.",
  },
];

const exportFeatures = [
  "Export all versions of GroupWise Library Documents",
  "Export to a designated location on a file system",
  "Export all meta data including document properties",
  "Preserve document extension",
  "Import Ready output format",
];

const vibeFeatures = [
  "Transfer Document Meta Data",
  "All versions are preserved",
  "All versions transferred to single Entry in Vibe",
  "Maintain original ownership",
  "Activity Logs preserved",
  "Date and Time preservation",
  "Batch Migration support",
];

const sharepointFeatures = [
  "Transfer Document Meta Data",
  "All versions are preserved",
  "Maintain original ownership",
  "Original owner becomes SharePoint owner if still exists",
  "Designated new author for document ownership",
  "Activity Logs preserved",
  "Date and Time preservation",
  "Batch Migration support",
];

const migrationDemos = [
  {
    title: "GroupWise Document Exporter",
    image: "/products/migration/gwdms-export-1.jpg",
    imageAlt: "GroupWise Document Exporter - export documents from OpenText GroupWise Libraries",
    features: exportFeatures,
  },
  {
    title: "Migrate to Vibe",
    image: "/products/migration/gwdms-vibe-1.jpg",
    imageAlt: "Migrate OpenText GroupWise Libraries to Vibe",
    features: vibeFeatures,
  },
  {
    title: "Migrate to SharePoint",
    image: "/products/migration/gwdms-vibe-3.jpg",
    imageAlt: "Migrate from OpenText Vibe to Microsoft SharePoint",
    features: sharepointFeatures,
  },
];

function ToolCard({ tool, index }: { tool: (typeof tools)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 60}>
      <div className="glass rounded-xl overflow-hidden hover:glass-elevated transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-5 text-left"
          aria-expanded={open}
        >
          <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
            <tool.icon className="w-5 h-5 text-[var(--netcb-accent)]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-[var(--netcb-text)]">
              {tool.title}
            </h3>
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
            <div className="border-t border-[var(--netcb-border)] pt-3">
              <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function MigrationCard({ title, features, image, imageAlt, icon: Icon, delay, onImageClick }: { title: string; features: string[]; image: string; imageAlt: string; icon: typeof FileText; delay: number; onImageClick: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={delay}>
      <div className="glass rounded-xl overflow-hidden hover:glass-elevated transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-5 text-left"
          aria-expanded={open}
        >
          <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-[var(--netcb-accent)]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-[var(--netcb-text)]">
              {title}
            </h3>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[var(--netcb-accent)] flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-400 ${
            open ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0">
            <div className="border-t border-[var(--netcb-border)] pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[var(--netcb-accent)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--netcb-text-muted)]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <button
                    onClick={onImageClick}
                    className="block w-full rounded-xl overflow-hidden border border-[var(--netcb-border)] bg-[var(--netcb-surface)] cursor-zoom-in group"
                  >
                    <img
                      src={image}
                      alt={imageAlt}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback-placeholder")) {
                          const fallback = document.createElement("div");
                          fallback.className = "fallback-placeholder flex flex-col items-center justify-center p-8 min-h-[200px]";
                          fallback.innerHTML = '<svg class="w-12 h-12 text-[var(--netcb-accent)] opacity-40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span class="text-xs text-[var(--netcb-text-muted)]">' + imageAlt + '</span>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function MigrationClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: "/products/migration/gwdms-export-1.jpg", alt: "GroupWise Document Exporter - Export interface" },
    { src: "/products/migration/gwdms-export-2.jpg", alt: "GroupWise Document Exporter - Export progress" },
    { src: "/products/migration/gwdms-vibe-1.jpg", alt: "Migration to Vibe - Source selection" },
    { src: "/products/migration/gwdms-vibe-2.jpg", alt: "Migration to Vibe - Configuration" },
    { src: "/products/migration/gwdms-vibe-3.jpg", alt: "Migration to Vibe - Mapping" },
    { src: "/products/migration/gwdms-vibe-4.jpg", alt: "Migration to Vibe - Progress" },
    { src: "/products/migration/gwdms-vibe-5.jpg", alt: "Migration to Vibe - Completion" },
  ];

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/products/migration-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Product
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4 leading-tight">
              Flexible Migration Software
            </h1>
            <p className="text-lg text-[var(--netcb-accent)] font-medium mb-6">
              Document Migration Software Tools
            </p>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Streamline the process of migrating documents between different document
              management systems. Our advanced software tools are designed to make
              document migration seamless, efficient, and secure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Key Features
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                Why our migration solutions stand out.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 60}>
                <div className="glass rounded-xl p-6 h-full hover:glass-elevated transition-all duration-300">
                  <h3 className="text-base font-semibold text-[var(--netcb-text)] mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--netcb-text-muted)] leading-relaxed">{f.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience + Tools */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--netcb-accent-dim)] border border-[var(--netcb-accent)]/20 mb-6">
                <RefreshCw className="w-3.5 h-3.5 text-[var(--netcb-accent)]" />
                <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-wider">
                  20+ Years Experience
                </span>
              </div>
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                Preserve your Documents across any system
              </h2>
              <p className="text-[var(--netcb-text-muted)] leading-relaxed mb-8">
                20+ years of experience with Document and Records Management Systems.
                Our tools have facilitated the preservation of historical documents at
                numerous clients across GroupWise, Vibe, and SharePoint environments.
              </p>
              <div className="space-y-4">
                {tools.map((tool, i) => (
                  <ToolCard key={tool.title} tool={tool} index={i} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="space-y-4">
                {migrationDemos.map((demo, i) => (
                  <MigrationCard
                    key={demo.title}
                    title={demo.title}
                    features={demo.features}
                    image={demo.image}
                    imageAlt={demo.imageAlt}
                    icon={i === 0 ? FileText : i === 1 ? Database : Share2}
                    delay={i * 60}
                    onImageClick={() => setLightboxIndex(i === 0 ? 0 : i === 1 ? 2 : 4)}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Migration in Action
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-3 max-w-xl mx-auto">
                See our migration tools at work across different platforms.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 40}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full rounded-xl overflow-hidden border border-[var(--netcb-border)] hover:glass-elevated transition-all duration-300 cursor-zoom-in group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
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
              Contact us today and let&apos;s do
            </h2>
            <p className="text-[var(--netcb-accent)] font-medium text-lg mb-8">
              A Proof of Concept
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
              >
                Request Assessment
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
