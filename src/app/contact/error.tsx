"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function ContactError({
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
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="glass rounded-2xl p-12">
          <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-6" />
          <h2 className="text-xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-3">
            Failed to load Contact page
          </h2>
          <p className="text-sm text-[var(--netcb-text-muted)] mb-8">
            {error.message || "An unexpected error occurred."}
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-[var(--netcb-border)] text-[var(--netcb-text)] hover:border-[var(--netcb-accent)] transition-all"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
