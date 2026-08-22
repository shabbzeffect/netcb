"use client";

import { useEffect, useState } from "react";
import { Shield, Activity, Wifi, Clock } from "lucide-react";

const metrics = [
  { label: "Uptime SLA", value: "99.97%", icon: Activity, color: "text-[var(--netcb-success)]" },
  { label: "Support Tickets Resolved", value: "14,820+", icon: Shield, color: "text-[var(--netcb-accent)]" },
  { label: "Avg Response Time", value: "< 15 min", icon: Clock, color: "text-[var(--netcb-warning)]" },
  { label: "Network Latency", value: "12ms", icon: Wifi, color: "text-[var(--netcb-accent)]" },
];

export function TelemetryStrip() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[var(--netcb-surface-1)] border-b border-[var(--netcb-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--netcb-success)] animate-pulse" />
            <span className="text-[10px] font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">
              Systems Operational
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center gap-1.5"
                aria-label={`${metric.label}: ${metric.value}`}
              >
                <metric.icon className={`w-3 h-3 ${metric.color}`} />
                <span className="text-[10px] font-[var(--font-mono)] text-[var(--netcb-text-muted)]">
                  {metric.label}:
                </span>
                <span className={`text-[10px] font-[var(--font-mono)] font-semibold ${metric.color}`}>
                  {mounted ? metric.value : "---"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
