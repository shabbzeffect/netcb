export const company = {
  name: "NETCB Limited",
  tagline: "Discover your Alternative",
  founded: 2003,
  yearsInBusiness: 23,
  headquarters: {
    city: "Pretoria",
    province: "Gauteng",
    country: "South Africa",
    address: "Pretoria, Gauteng, South Africa",
  },
  contact: {
    phone: "+27 12 880 4040",
    email: "info@netcb.com",
  },
  social: {
    facebook: "https://facebook.com/netcb",
    twitter: "https://x.com/netcb",
    youtube: "https://youtube.com/netcb",
    linkedin: "https://linkedin.com/company/netcb",
  },
  founder: {
    name: "Cobus Burgers",
    title: "Founder & Managing Director",
  },
  description:
    "NETCB Limited is a South African enterprise IT company specialising in cybersecurity, hybrid cloud infrastructure, digital workspaces, and open source solutions. For over two decades, we have delivered trusted infrastructure services to enterprises across Africa.",
  metrics: [
    { value: "23+", label: "Years in Business" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "SLA Uptime" },
    { value: "24/7", label: "Support Coverage" },
  ],
  values: [
    {
      title: "Security First",
      description: "Every solution we deliver is hardened, monitored, and compliant from day one.",
    },
    {
      title: "Open Source Commitment",
      description: "We believe in vendor-neutral, transparent technology that puts you in control.",
    },
    {
      title: "African Excellence",
      description: "World-class infrastructure services delivered with local expertise and support.",
    },
    {
      title: "Partnership",
      description: "We don't just sell products — we build long-term technology partnerships.",
    },
  ],
} as const;
