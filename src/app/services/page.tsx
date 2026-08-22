import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Managed Implementation, Training & Advisory",
  description:
    "NETCB provides managed implementation, training, advisory, legal compliance, software development, and support services across Africa.",
  openGraph: {
    title: "Services | NETCB Limited",
    description:
      "Managed implementation, training, advisory, legal compliance, software development, and support services.",
    url: "https://www.netcb.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
