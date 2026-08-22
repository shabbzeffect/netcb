import type { Metadata } from "next";
import { PrivacyClient } from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NETCB Limited collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
