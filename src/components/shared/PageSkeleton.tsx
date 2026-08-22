export function PageSkeleton() {
  return (
    <div className="animate-pulse" role="status" aria-label="Loading">
      {/* Hero skeleton */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="h-12 w-3/4 rounded-lg bg-[var(--netcb-surface-2)]" />
          <div className="h-12 w-1/2 rounded-lg bg-[var(--netcb-surface-2)]" />
          <div className="h-5 w-2/3 rounded bg-[var(--netcb-surface-2)] mt-4" />
          <div className="h-5 w-1/2 rounded bg-[var(--netcb-surface-2)]" />
        </div>
      </section>

      {/* Content skeleton */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-2xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--netcb-surface-2)]" />
                <div className="h-6 w-2/3 rounded bg-[var(--netcb-surface-2)]" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-[var(--netcb-surface-2)]" />
                  <div className="h-4 w-4/5 rounded bg-[var(--netcb-surface-2)]" />
                  <div className="h-4 w-3/5 rounded bg-[var(--netcb-surface-2)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <span className="sr-only">Loading page content...</span>
    </div>
  );
}
