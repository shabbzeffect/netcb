"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Mail, CheckCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative py-24 border-t border-[var(--netcb-border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass-elevated rounded-2xl p-8 sm:p-12 border border-[var(--netcb-border-bright)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--netcb-accent)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--netcb-accent-2)]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--netcb-accent)]/10 mb-6">
                  <Mail className="w-8 h-8 text-[var(--netcb-accent)]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
                  Stay Updated
                </h2>
                <p className="text-[var(--netcb-text-muted)] max-w-lg mx-auto">
                  Get the latest insights on enterprise IT, cybersecurity, and digital transformation 
                  delivered to your inbox. No spam, just valuable content.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-[var(--netcb-success)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--netcb-text)] mb-2">
                    Thank you for subscribing!
                  </h3>
                  <p className="text-[var(--netcb-text-muted)]">
                    You will receive our next newsletter shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-xl bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] placeholder-[var(--netcb-text-muted)] focus:outline-none focus:border-[var(--netcb-accent)] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-3 rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] font-semibold hover:bg-[var(--netcb-accent-hover)] disabled:opacity-50 transition-all"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                  <p className="text-xs text-[var(--netcb-text-muted)] text-center mt-4">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
