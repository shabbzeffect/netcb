import type { Metadata } from "next";
import { GwvcClient } from "./GwvcClient";

export const metadata: Metadata = {
  title: "GroupWise Video Conferencing Add-On",
  description:
    "Integrate video conferencing directly into GroupWise with support for Zoom, Microsoft Teams, Jitsi, GoToMeeting, Cisco WebEx, and Google Meet.",
  openGraph: {
    title: "GroupWise Video Conferencing Add-On | NETCB Limited",
    description:
      "Schedule and manage video conferencing meetings directly from GroupWise.",
    url: "https://www.netcb.com/products/groupwise-video-conferencing",
  },
};

export default function GwvcPage() {
  return <GwvcClient />;
}
