import type { Metadata } from "next";
import { DigitalWorkspacesClient } from "./DigitalWorkspacesClient";

export const metadata: Metadata = {
  title: "Digital Workspaces — Secure Modern Workplace Solutions",
  description:
    "NETCB builds secure digital workspaces — document management, e-signatures, secure file sharing, enterprise email, video conferencing, and office productivity across Africa.",
  openGraph: {
    title: "Digital Workspaces | NETCB Limited",
    description:
      "Secure digital workspaces — document management, e-signatures, enterprise email, video conferencing, and office productivity solutions.",
    url: "https://www.netcb.com/solutions/digital-workspaces",
  },
};

export default function DigitalWorkspacesPage() {
  return <DigitalWorkspacesClient />;
}
