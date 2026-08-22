import type { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Enterprise IT Software & Platforms",
  description:
    "NETCB distributes enterprise IT products including Wazuh SIEM, Backup Eagle, SecureAnyBox5, SEP sesam, DeskAlerts, and Recast Application Workspace across Africa.",
  openGraph: {
    title: "Products | NETCB Limited",
    description:
      "Enterprise IT products — SIEM, backup monitoring, secrets management, communications, and digital workspace platforms.",
    url: "https://www.netcb.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
