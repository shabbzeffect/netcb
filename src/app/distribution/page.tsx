import type { Metadata } from "next";
import { DistributionClient } from "./DistributionClient";

export const metadata: Metadata = {
  title: "NETCB Distribution — Enterprise IT Solutions Across Southern Africa",
  description:
    "NETCB Distribution delivers enterprise IT solutions through a strong reseller network. Portfolio includes SEP, BackupEagle, SecureAnyBox5, Wazuh, and Recast Software.",
  openGraph: {
    title: "NETCB Distribution | Enterprise IT Reseller Network",
    description:
      "Enterprise IT distribution across Southern Africa. Enablement, technical expertise, and dependable logistics for partners.",
    url: "https://www.netcb.com/distribution",
  },
};

export default function DistributionPage() {
  return <DistributionClient />;
}
