import type { Metadata } from "next";
import { HybridRMSClient } from "./HybridRMSClient";

export const metadata: Metadata = {
  title: "HybridRMS — Resilient Messaging Platform",
  description:
    "HybridRMS delivers resilient, hybrid messaging infrastructure for enterprise e-mail, calendaring, and collaboration across on-premise and cloud environments.",
  openGraph: {
    title: "HybridRMS | NETCB Limited",
    description:
      "Resilient hybrid messaging platform for enterprise e-mail, calendaring, and collaboration.",
    url: "https://www.netcb.com/products/hybridrms",
  },
};

export default function HybridRMSPage() {
  return <HybridRMSClient />;
}
