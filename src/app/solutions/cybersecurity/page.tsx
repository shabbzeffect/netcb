import type { Metadata } from "next";
import { CybersecurityClient } from "./CybersecurityClient";

export const metadata: Metadata = {
  title: "Cybersecurity — Holistic Security Posture Management",
  description:
    "NETCB champions a holistic approach to cybersecurity — from identity governance and perimeter security to SIEM, XDR, data protection, and compliance across Africa.",
  openGraph: {
    title: "Cybersecurity Solutions | NETCB Limited",
    description:
      "Holistic cybersecurity — IAM, PAM, SIEM, XDR, endpoint security, email security, and data protection for enterprise environments.",
    url: "https://www.netcb.com/solutions/cybersecurity",
  },
};

export default function CybersecurityPage() {
  return <CybersecurityClient />;
}
