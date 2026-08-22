import type { Metadata } from "next";
import { HybridCloudClient } from "./HybridCloudClient";

export const metadata: Metadata = {
  title: "Hybrid Cloud — Cloud Services Without Compromising Sovereignty",
  description:
    "NETCB delivers hybrid-cloud solutions with flexibility, scalability, and security — cloud strategy, IaaS, virtual data centres, monitoring, disaster recovery, and compliance across Africa.",
  openGraph: {
    title: "Hybrid Cloud Solutions | NETCB Limited",
    description:
      "Hybrid cloud — strategy, migration, IaaS, virtual data centres, monitoring, DR, and compliance. Data sovereignty guaranteed.",
    url: "https://www.netcb.com/solutions/hybrid-cloud",
  },
};

export default function HybridCloudPage() {
  return <HybridCloudClient />;
}
