import type { Metadata } from "next";
import { MigrationClient } from "./MigrationClient";

export const metadata: Metadata = {
  title: "Migration Tools — Seamless Platform Migration",
  description:
    "NETCB migration tools for seamless transition between platforms — GroupWise, OX, Kolab, and other enterprise messaging and collaboration systems.",
  openGraph: {
    title: "Migration Tools | NETCB Limited",
    description:
      "Seamless platform migration tools for enterprise messaging and collaboration systems.",
    url: "https://www.netcb.com/products/migration-tools",
  },
};

export default function MigrationPage() {
  return <MigrationClient />;
}
