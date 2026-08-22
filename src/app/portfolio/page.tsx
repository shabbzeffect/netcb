import type { Metadata } from "next";
import { PortfolioPageClient } from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Enterprise IT Projects Across Africa",
  description: "Explore NETCB Limited's portfolio of enterprise IT projects across Africa - hybrid cloud migrations, cybersecurity overhauls, and digital transformations.",
  openGraph: {
    title: "Portfolio | NETCB Limited",
    description: "Case studies of enterprise IT projects across Africa - hybrid cloud migrations, cybersecurity overhauls, and digital transformations.",
    url: "https://www.netcb.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
