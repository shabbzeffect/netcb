import type { Metadata } from "next";
import { OpenSourceClient } from "./OpenSourceClient";

export const metadata: Metadata = {
  title: "Open Source — Unleash Independence",
  description:
    "NETCB's open source portfolio: virtualisation, e-mail, databases, CRM, ERP, DevOps, security, file sharing, LMS, and more — reduce vendor lock-in and build local capability.",
  openGraph: {
    title: "Open Source Solutions | NETCB Limited",
    description:
      "Open source portfolio — XCP-ng, Kolab, MariaDB, SuiteCRM, Dolibarr, GitLab, Nextcloud, Wazuh, pfSense, LibreOffice, and more.",
    url: "https://www.netcb.com/solutions/open-source",
  },
};

export default function OpenSourcePage() {
  return <OpenSourceClient />;
}
