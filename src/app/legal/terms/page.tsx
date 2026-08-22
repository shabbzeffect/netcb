import type { Metadata } from "next";
import { TermsClient } from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of NETCB Limited's website and services.",
};

export default function TermsPage() {
  return <TermsClient />;
}
