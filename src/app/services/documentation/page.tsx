import type { Metadata } from "next";
import { DocumentationClient } from "./DocumentationClient";

export const metadata: Metadata = {
  title: "Documentation — Product Guides and References",
  description:
    "NETCB documentation centre — GroupWise Video Conferencing Add-On guides for administrators and end-users, with step-by-step configuration and deployment.",
  openGraph: {
    title: "Documentation | NETCB Limited",
    description:
      "Product guides — GroupWise Video Conferencing Add-On administration and end-user documentation.",
    url: "https://www.netcb.com/services/documentation",
  },
};

export default function DocumentationPage() {
  return <DocumentationClient />;
}
