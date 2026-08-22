import type { Metadata } from "next";
import { CareersPageClient } from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers — Join NETCB Limited",
  description: "Join NETCB Limited - Explore career opportunities in enterprise IT infrastructure, cybersecurity, and cloud solutions across Africa.",
  openGraph: {
    title: "Careers at NETCB Limited | Enterprise IT Jobs",
    description: "Join our team delivering enterprise IT solutions across Africa. Explore open positions in cybersecurity, cloud, and systems engineering.",
    url: "https://www.netcb.com/careers",
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
