"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchButton } from "@/components/ui/SearchModal";
import {
  Menu,
  X,
  Shield,
  Cloud,
  Monitor,
  Terminal,
  Headphones,
  Scale,
  FileText,
  Video,
  RefreshCw,
  Server,
  Users,
  UserPlus,
  Newspaper,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";

type DropdownItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
};

const solutions: DropdownItem[] = [
  { name: "Cybersecurity", href: "/solutions/cybersecurity", icon: Shield, desc: "Enterprise threat protection" },
  { name: "Hybrid Cloud", href: "/solutions/hybrid-cloud", icon: Cloud, desc: "Scalable cloud infrastructure" },
  { name: "Digital Workspaces", href: "/solutions/digital-workspaces", icon: Monitor, desc: "Modern workspace solutions" },
  { name: "Open Source", href: "/solutions/open-source", icon: Terminal, desc: "Open source integration" },
];

const servicesDropdown: DropdownItem[] = [
  { name: "Support Services", href: "/services/support", icon: Headphones, desc: "24/7 expert assistance" },
  { name: "Legal Compliance", href: "/services/legal", icon: Scale, desc: "Regulatory compliance" },
  { name: "Documentation", href: "/services/documentation", icon: FileText, desc: "Technical documentation" },
];

const productsDropdown: DropdownItem[] = [
  { name: "GroupWise Video Conferencing", href: "/products/groupwise-video-conferencing", icon: Video, desc: "Secure video meetings" },
  { name: "Migration Tools", href: "/products/migration-tools", icon: RefreshCw, desc: "Seamless data migration" },
  { name: "HybridRMS", href: "/products/hybridrms", icon: Server, desc: "Resource management system" },
];

const distributionDropdown: DropdownItem[] = [
  { name: "Partners", href: "/distribution/partners", icon: Users, desc: "Partner network" },
  { name: "Become a Partner", href: "/distribution/become-a-partner", icon: UserPlus, desc: "Join our ecosystem" },
  { name: "Vendor Updates and News", href: "/distribution/vendor-updates", icon: Newspaper, desc: "Latest vendor news" },
];

const navLinks = [
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Distribution", href: "/distribution", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function DropdownPanel({ items }: { items: DropdownItem[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80">
      <div className="glass-elevated rounded-2xl p-2 shadow-2xl shadow-black/40 animate-dropdown border border-[var(--netcb-border-bright)]">
        <div className="rounded-xl overflow-hidden">
          {items.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl text-sm transition-all duration-200 group",
                "text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)]",
                "hover:bg-[var(--netcb-accent-dim)]",
                i === 0 && "mt-0.5"
              )}
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center transition-all duration-200 group-hover:bg-[var(--netcb-accent)] group-hover:shadow-[0_0_12px_var(--netcb-accent-glow)]">
                <item.icon className="w-4 h-4 text-[var(--netcb-accent)] group-hover:text-[var(--netcb-base)] transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-[var(--netcb-text)] group-hover:text-[var(--netcb-accent)] transition-colors">
                  {item.name}
                </div>
                <div className="text-xs text-[var(--netcb-text-muted)] opacity-70 truncate">
                  {item.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;
    const menu = mobileMenuRef.current;
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMobileOpen(false); triggerRef.current?.focus(); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last?.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first?.focus(); } }
    };
    first?.focus();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    triggerRef.current?.focus();
  }, []);

  const handleDropdownEnter = useCallback((name: string) => {
    if (dropdownTimers.current[name]) clearTimeout(dropdownTimers.current[name]);
    setActiveDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback((name: string) => {
    dropdownTimers.current[name] = setTimeout(() => {
      setActiveDropdown((prev) => (prev === name ? null : prev));
    }, 120);
  }, []);

  const getDropdownItems = (name: string): DropdownItem[] => {
    switch (name) {
      case "Solutions": return solutions;
      case "Services": return servicesDropdown;
      case "Products": return productsDropdown;
      case "Distribution": return distributionDropdown;
      default: return [];
    }
  };

  return (
    <header
      className={cn(
        "fixed top-8 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-4"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          scrolled
            ? "bg-[var(--netcb-surface-1)]/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[var(--netcb-border)]"
            : "bg-transparent"
        )}
      />

      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--netcb-accent)]/30 to-transparent animate-glow-pulse" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-3 group relative z-10" aria-label="NETCB Home">
            <Image
              src="/netcb-logo-white.png"
              alt="NETCB"
              width={164}
              height={45}
              className="h-9 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--netcb-accent-glow)]"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 relative z-10">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.name)}
                  onMouseLeave={() => handleDropdownLeave(link.name)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                      activeDropdown === link.name
                        ? "text-[var(--netcb-accent)] bg-[var(--netcb-accent-dim)]"
                        : "text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === link.name && "rotate-180"
                      )}
                    />
                  </Link>
                  {activeDropdown === link.name && (
                    <DropdownPanel items={getDropdownItems(link.name)} />
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium rounded-xl text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3 relative z-10">
            <SearchButton />
            <ThemeToggle />
            <a
              href="tel:+27128804040"
              className="flex items-center gap-2 text-xs text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors font-[var(--font-mono)]"
            >
              <Phone className="w-3.5 h-3.5" />
              +27 12 880 4040
            </a>
            <Link
              href="/contact"
              className="relative group px-5 py-2.5 text-sm font-semibold rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] transition-all duration-300 hover:shadow-[0_0_20px_var(--netcb-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>

          <button
            ref={triggerRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl transition-all duration-200 relative z-10",
              mobileOpen
                ? "text-[var(--netcb-accent)] bg-[var(--netcb-accent-dim)]"
                : "text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-5 h-5">
              <Menu
                className={cn(
                  "absolute inset-0 transition-all duration-200",
                  mobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-all duration-200",
                  mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                )}
              />
            </div>
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-0 top-20 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={closeMobile}
          />
          <div className="relative glass-elevated mx-4 mt-2 rounded-2xl overflow-hidden animate-mobile-menu border border-[var(--netcb-border-bright)]">
            <div className="p-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link, i) =>
                  link.hasDropdown ? (
                    <div
                      key={link.name}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 transition-colors"
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                      <div className="ml-4 space-y-0.5">
                        {getDropdownItems(link.name).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMobile}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-[var(--netcb-accent-dim)] transition-all group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center transition-all group-hover:bg-[var(--netcb-accent)]">
                              <item.icon className="w-3.5 h-3.5 text-[var(--netcb-accent)] group-hover:text-[var(--netcb-base)] transition-colors" />
                            </div>
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMobile}
                      className="block px-4 py-3 text-sm font-medium rounded-xl text-[var(--netcb-text-muted)] hover:text-[var(--netcb-text)] hover:bg-white/5 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--netcb-border)]">
                <div className="space-y-1">
                  <a
                    href="tel:+27128804040"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors rounded-xl hover:bg-white/5"
                  >
                    <Phone className="w-4 h-4" />
                    +27 12 880 4040
                  </a>
                  <a
                    href="mailto:info@netcb.com"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors rounded-xl hover:bg-white/5"
                  >
                    <Mail className="w-4 h-4" />
                    info@netcb.com
                  </a>
                </div>
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="block mt-3 px-4 py-3 text-sm font-semibold text-center rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] active:bg-[var(--netcb-accent-active)] transition-all hover:shadow-[0_0_20px_var(--netcb-accent-glow)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
