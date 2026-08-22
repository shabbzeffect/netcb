import type { Metadata } from "next";
import { SupportClient } from "./SupportClient";

export const metadata: Metadata = {
  title: "Support Services — World-Class Support and Consulting",
  description:
    "NETCB provides world-class support services across Africa — remote and on-site consulting, SLA-based support, bug identification, and multi-vendor expertise.",
  openGraph: {
    title: "Support Services | NETCB Limited",
    description:
      "World-class support and consulting — remote management, SLAs, infrastructure modernisation, cybersecurity, backup, and disaster recovery.",
    url: "https://www.netcb.com/services/support",
  },
};

export default function SupportPage() {
  return <SupportClient />;
}
