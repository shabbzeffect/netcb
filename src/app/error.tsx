"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/cta-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/85 to-[var(--netcb-base)]/70" />
      </div>
      <div className="relative max-w-xl mx-auto px-4 text-center">
        <div className="glass rounded-2xl p-12 sm:p-16">
          <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-4">
            Something went wrong
          </h1>

          <p className="text-[var(--netcb-text-muted)] mb-10 leading-relaxed">
            An unexpected error occurred while loading this page.
            Please try again or contact our support team if the problem persists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg border border-[var(--netcb-border)] text-[var(--netcb-text)] hover:border-[var(--netcb-accent)] hover:text-[var(--netcb-accent)] transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {error.digest && (
            <p className="mt-6 text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)]/50">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
