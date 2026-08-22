import type { Metadata } from "next";
import { SolutionsPageClient } from "./SolutionsClient";
import { getSolutionsJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Enterprise Solutions — Cybersecurity, Cloud, Workspaces & Open Source",
  description:
    "NETCB delivers enterprise-grade cybersecurity, hybrid cloud, digital workspace, and open-source solutions. 23 years of trusted IT infrastructure delivery across Africa.",
  openGraph: {
    title: "Enterprise Solutions | NETCB Limited",
    description:
      "Cybersecurity, hybrid cloud, digital workspaces, and open source — enterprise IT solutions built for African businesses.",
    url: "https://www.netcb.com/solutions",
  },
};

export default function SolutionsPage() {
  const jsonLd = getSolutionsJsonLd();

  return (
    <>
      {jsonLd.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <SolutionsPageClient />
    </>
  );
}
