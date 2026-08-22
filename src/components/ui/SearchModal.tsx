"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "page" | "blog" | "product" | "service";
}

const searchData: SearchResult[] = [
  // Pages
  { title: "Home", description: "NETCB Limited - Enterprise IT Infrastructure & Cybersecurity", href: "/", type: "page" },
  { title: "About Us", description: "Learn about NETCB's 23 years of enterprise IT excellence across Africa", href: "/about", type: "page" },
  { title: "Contact", description: "Get in touch with NETCB for enterprise IT solutions", href: "/contact", type: "page" },
  { title: "Solutions", description: "Enterprise IT solutions for African organisations", href: "/solutions", type: "page" },
  { title: "Services", description: "Enterprise support, legal compliance, and documentation services", href: "/services", type: "page" },
  { title: "Products", description: "Enterprise software products and solutions", href: "/products", type: "page" },
  { title: "Distribution", description: "NETCB Distribution - Authorised reseller programmes", href: "/distribution", type: "page" },
  
  // Solutions
  { title: "Cybersecurity", description: "Enterprise threat protection and security solutions", href: "/solutions/cybersecurity", type: "page" },
  { title: "Hybrid Cloud", description: "Scalable cloud infrastructure solutions", href: "/solutions/hybrid-cloud", type: "page" },
  { title: "Digital Workspaces", description: "Modern workplace solutions for enterprises", href: "/solutions/digital-workspaces", type: "page" },
  { title: "Open Source", description: "Vendor-independent open source solutions", href: "/solutions/open-source", type: "page" },
  
  // Products
  { title: "GroupWise Video Conferencing", description: "Secure video collaboration platform", href: "/products/groupwise-video-conferencing", type: "product" },
  { title: "HybridRMS", description: "Remote management solution for enterprises", href: "/products/hybridrms", type: "product" },
  { title: "Migration Tools", description: "Enterprise migration and data transfer tools", href: "/products/migration-tools", type: "product" },
  
  // Services
  { title: "Support Services", description: "24/7 expert technical support", href: "/services/support", type: "service" },
  { title: "Legal Compliance", description: "Regulatory compliance services", href: "/services/legal", type: "service" },
  { title: "Documentation", description: "Technical documentation services", href: "/services/documentation", type: "service" },
  
  // Blog
  { title: "Email Security Assessment", description: "DMARC, SPF, DKIM, MTA-STS, DNSSEC & Microsoft 365 security", href: "/about/blog/email-security-assessment-services", type: "blog" },
  { title: "Hybrid Cloud Best Practices", description: "Best practices for African enterprise cloud deployment", href: "/about/blog/hybrid-cloud-best-practices", type: "blog" },
  { title: "Zero Trust Security", description: "Implementing Zero Trust in African organisations", href: "/about/blog/zero-trust-security-model", type: "blog" },
  { title: "Open Source Cost Savings", description: "How open-source solutions reduce IT costs by 40%", href: "/about/blog/open-source-cost-savings", type: "blog" },
];

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const typeColors = {
    page: "bg-[var(--netcb-accent)]/10 text-[var(--netcb-accent)]",
    blog: "bg-purple-500/10 text-purple-400",
    product: "bg-green-500/10 text-green-400",
    service: "bg-orange-500/10 text-orange-400",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl mx-4 bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] rounded-2xl shadow-2xl overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--netcb-border)]">
          <Search className="w-5 h-5 text-[var(--netcb-text-muted)]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, products, services..."
            className="flex-1 bg-transparent text-[var(--netcb-text)] placeholder-[var(--netcb-text-muted)] focus:outline-none"
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/5 transition-colors">
            <X className="w-5 h-5 text-[var(--netcb-text-muted)]" />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto p-2">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.href}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeColors[result.type]}`}>
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[var(--netcb-text)] group-hover:text-[var(--netcb-accent)] transition-colors truncate">
                    {result.title}
                  </p>
                  <p className="text-sm text-[var(--netcb-text-muted)] truncate">
                    {result.description}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${typeColors[result.type]}`}>
                  {result.type}
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--netcb-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-[var(--netcb-text-muted)]">No results found for &ldquo;{query}&rdquo;</p>
          </div>
        )}

        {/* Footer hint */}
        <div className="px-6 py-3 border-t border-[var(--netcb-border)] text-xs text-[var(--netcb-text-muted)]">
          Press <kbd className="px-2 py-1 rounded bg-white/5 font-mono">ESC</kbd> to close
        </div>
      </div>
    </div>
  );
}

export function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 transition-all"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline px-2 py-0.5 rounded bg-white/5 text-xs font-mono">⌘K</kbd>
      </button>
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
