import type { Metadata } from "next";
import { CookiesClient } from "./CookiesClient";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How NETCB Limited uses cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return <CookiesClient />;
}
