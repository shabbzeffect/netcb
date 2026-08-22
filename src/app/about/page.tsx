import type { Metadata } from "next";
import { AboutPageClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — 23 Years of Enterprise IT Excellence Across Africa",
  description:
    "NETCB is a South African technology partner founded in 2003. We deliver enterprise infrastructure, cybersecurity, and digital transformation solutions across Southern and East Africa.",
  openGraph: {
    title: "About NETCB Limited | Enterprise IT Partner",
    description:
      "Founded in 2003 in Pretoria. 23 years of enterprise IT infrastructure, cybersecurity, and digital transformation across Africa.",
    url: "https://www.netcb.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
