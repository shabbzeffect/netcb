import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { GlassNav } from "@/components/ui/GlassNav";
import { Footer } from "@/components/ui/Footer";
import { TelemetryStrip } from "@/components/ui/TelemetryStrip";
import { BackToTop } from "@/components/ui/BackToTop";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { PageTransition } from "@/components/shared/PageTransition";
import { AnalyticsProvider } from "@/components/shared/Analytics";
import { ChatWidget } from "@/components/ui/ChatWidget";

export const metadata: Metadata = {
  title: {
    default: "NETCB Limited — Enterprise IT Infrastructure & Cybersecurity",
    template: "%s | NETCB Limited",
  },
  description:
    "NETCB is a leading African provider of enterprise IT infrastructure, cybersecurity, hybrid cloud, digital workspace, and open-source solutions. 23 years of trusted delivery across Africa.",
  keywords: [
    "IT infrastructure",
    "cybersecurity",
    "hybrid cloud",
    "digital workspace",
    "open source",
    "enterprise IT",
    "Africa",
    "managed services",
    "backup and disaster recovery",
    "identity and access management",
  ],
  authors: [{ name: "NETCB Limited" }],
  creator: "NETCB Limited",
  publisher: "NETCB Limited",
  metadataBase: new URL("https://www.netcb.com"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.netcb.com",
    siteName: "NETCB Limited",
    title: "NETCB Limited — Enterprise IT Infrastructure & Cybersecurity",
    description:
      "Leading African provider of enterprise IT infrastructure, cybersecurity, hybrid cloud, and open-source solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NETCB Limited — Enterprise IT Infrastructure & Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NETCB Limited — Enterprise IT Infrastructure & Cybersecurity",
    description:
      "Leading African provider of enterprise IT infrastructure, cybersecurity, hybrid cloud, and open-source solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NETCB Limited",
              url: "https://www.netcb.com",
              logo: "https://www.netcb.com/images/netcb_media/logos/netcb-logo---hires---white---transparent-background.png",
              description:
                "NETCB is a leading African provider of enterprise IT infrastructure, cybersecurity, hybrid cloud, digital workspace, and open-source solutions.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
                addressRegion: "Gauteng",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-12-880-4040",
                contactType: "customer service",
                email: "info@netcb.com",
              },
              sameAs: [
                "https://www.facebook.com/netcb",
                "https://x.com/netcb",
                "https://www.youtube.com/netcb",
                "https://www.linkedin.com/company/netcb",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LocaleProvider locale="en">
          <AnalyticsProvider>
            <TelemetryStrip />
            <GlassNav />
            <main id="main-content" className="flex-1 pt-32 lg:pt-28" tabIndex={-1}>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </AnalyticsProvider>
        </LocaleProvider>
        <BackToTop />
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
