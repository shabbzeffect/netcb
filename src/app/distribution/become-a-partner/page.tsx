import type { Metadata } from "next";
import { BecomePartnerClient } from "./BecomePartnerClient";

export const metadata: Metadata = {
  title: "Become a Partner — Join Our Distribution Network",
  description:
    "Become a NETCB partner and gain access to enterprise-grade technology platforms, training, support, and joint business development opportunities across Africa.",
  openGraph: {
    title: "Become a Partner | NETCB Limited",
    description:
      "Join our distribution network and partner with leading technology vendors.",
    url: "https://www.netcb.com/distribution/become-a-partner",
  },
};

export default function BecomePartnerPage() {
  return <BecomePartnerClient />;
}
