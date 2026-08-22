import { solutions } from "@/lib/content/solutions";
import { services } from "@/lib/content/services";

export function getSolutionsJsonLd() {
  return solutions.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `NETCB ${s.title}`,
    description: s.description,
    provider: {
      "@type": "Organization",
      name: "NETCB Limited",
      url: "https://www.netcb.com",
    },
    areaServed: {
      "@type": "Continent",
      name: "Africa",
    },
    serviceType: s.title,
    url: `https://www.netcb.com/solutions#${s.slug}`,
  }));
}

export function getServicesJsonLd() {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `NETCB ${s.title}`,
    description: s.description,
    provider: {
      "@type": "Organization",
      name: "NETCB Limited",
      url: "https://www.netcb.com",
    },
    areaServed: {
      "@type": "Continent",
      name: "Africa",
    },
    serviceType: s.title,
    url: "https://www.netcb.com/services",
  }));
}
