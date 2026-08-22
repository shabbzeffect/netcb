"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Simple analytics tracking
// Replace with your analytics provider (Google Analytics, Plausible, etc.)

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number>;
  timestamp: number;
}

class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];

  static getInstance() {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  track(name: string, properties?: Record<string, string | number>) {
    const event: AnalyticsEvent = {
      name,
      properties,
      timestamp: Date.now(),
    };
    this.events.push(event);
    
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Analytics]", event);
    }

    // Send to your analytics provider here
    // Example: gtag('event', name, properties);
    // Example: plausible.track(name, properties);
  }

  page(path: string, title?: string) {
    this.track("page_view", { path, title: title || document.title });
  }

  getEvents() {
    return this.events;
  }
}

export const analytics = Analytics.getInstance();

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    analytics.page(pathname);
  }, [pathname]);

  return <>{children}</>;
}

// Track custom events
export function trackEvent(name: string, properties?: Record<string, string | number>) {
  analytics.track(name, properties);
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean) {
  analytics.track("form_submission", { form_name: formName, success: success ? 1 : 0 });
}

// Track button clicks
export function trackButtonClick(buttonName: string, location?: string) {
  analytics.track("button_click", { button_name: buttonName, location: location || "unknown" });
}

// Track downloads
export function trackDownload(fileName: string) {
  analytics.track("download", { file_name: fileName });
}

// Track external links
export function trackExternalLink(url: string) {
  analytics.track("external_link", { url });
}

// Track search
export function trackSearch(query: string, resultsCount: number) {
  analytics.track("search", { query, results_count: resultsCount });
}
