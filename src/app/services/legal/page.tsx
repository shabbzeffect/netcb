import type { Metadata } from "next";
import { LegalClient } from "./LegalClient";

export const metadata: Metadata = {
  title: "Legal Compliance — Compliance & Legal Assurance",
  description:
    "NETCB's Compliance and Legal Team ensures your organisation operates with confidence — POPIA, GDPR, King IV, SADC, and cross-border regulatory expertise.",
  openGraph: {
    title: "Legal Compliance | NETCB Limited",
    description:
      "Compliance and legal assurance — POPIA, GDPR, King IV, legal advisory, regional expertise, and integrated cyber law services.",
    url: "https://www.netcb.com/services/legal",
  },
};

export default function LegalPage() {
  return <LegalClient />;
}
