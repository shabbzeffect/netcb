import type { Metadata } from "next";
import { PartnersClient } from "./PartnersClient";

export const metadata: Metadata = {
  title: "Partners — Our Distribution Network",
  description:
    "NETCB partners with leading technology vendors to deliver enterprise IT solutions across Africa. View our distribution network and vendor relationships.",
  openGraph: {
    title: "Partners | NETCB Limited",
    description:
      "Our distribution network and vendor partnerships across Africa.",
    url: "https://www.netcb.com/distribution/partners",
  },
};

export default function PartnersPage() {
  return <PartnersClient />;
}
