import type { Metadata } from "next";
import { VendorUpdatesClient } from "./VendorUpdatesClient";

export const metadata: Metadata = {
  title: "Vendor Updates and News — Latest from Our Partners",
  description:
    "Stay up to date with the latest news, updates, and announcements from NETCB's technology partners and vendors.",
  openGraph: {
    title: "Vendor Updates and News | NETCB Limited",
    description:
      "Latest news and updates from our technology partners and vendors.",
    url: "https://www.netcb.com/distribution/vendor-updates",
  },
};

export default function VendorUpdatesPage() {
  return <VendorUpdatesClient />;
}
