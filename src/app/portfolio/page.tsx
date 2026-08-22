import { PortfolioPageClient } from "./PortfolioClient";

export const metadata = {
  title: "Portfolio",
  description: "Explore NETCB Limited's portfolio of enterprise IT projects across Africa - hybrid cloud migrations, cybersecurity overhauls, and digital transformations.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
