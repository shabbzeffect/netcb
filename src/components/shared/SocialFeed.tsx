"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ExternalLink } from "lucide-react";

const socialPosts = [
  {
    platform: "LinkedIn",
    content: "Excited to announce our partnership with SecureAnyBox for privileged access management across Africa. Together, we're strengthening cybersecurity resilience for enterprises.",
    date: "2 days ago",
    likes: 142,
    comments: 23,
    link: "https://www.linkedin.com/company/netcb",
  },
  {
    platform: "Twitter",
    content: "Cybersecurity is not just about technology—it's about people and processes. Our latest blog explores why security awareness training is your best defence. #CyberSecurity #NETCB",
    date: "5 days ago",
    likes: 89,
    comments: 12,
    link: "https://x.com/netcb",
  },
  {
    platform: "LinkedIn",
    content: "Hybrid cloud adoption is accelerating across Africa. Check out our latest blog for best practices on successful deployment. #HybridCloud #EnterpriseIT",
    date: "1 week ago",
    likes: 234,
    comments: 45,
    link: "https://www.linkedin.com/company/netcb",
  },
  {
    platform: "YouTube",
    content: "New video: See NETCB in action! Watch how we deliver enterprise IT solutions from cybersecurity to digital workspaces across Africa.",
    date: "2 weeks ago",
    likes: 178,
    comments: 31,
    link: "https://www.youtube.com/@netcb",
  },
];

const platformIcons = {
  LinkedIn: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  YouTube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
};

export function SocialFeed() {
  return (
    <section className="relative py-24 border-t border-[var(--netcb-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Follow Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Stay Connected
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-elevated rounded-2xl p-6 h-full border border-[var(--netcb-border-bright)] hover:border-[var(--netcb-accent)]/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--netcb-accent)]/10 flex items-center justify-center text-[var(--netcb-accent)]">
                    {platformIcons[post.platform as keyof typeof platformIcons]}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--netcb-text)] text-sm">{post.platform}</p>
                    <p className="text-xs text-[var(--netcb-text-muted)]">{post.date}</p>
                  </div>
                </div>
                <p className="text-[var(--netcb-text-muted)] text-sm leading-relaxed mb-4">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-[var(--netcb-text-muted)]">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[var(--netcb-accent)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View post</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Social links */}
        <AnimatedSection delay={400}>
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://www.facebook.com/netcb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)]/30 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://x.com/netcb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)]/30 transition-all"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/netcb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)]/30 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@netcb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] hover:border-[var(--netcb-accent)]/30 transition-all"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
