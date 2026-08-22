import { Metadata } from "next";
import { UpcomingEventsClient } from "./UpcomingEventsClient";

export const metadata: Metadata = {
  title: "Upcoming Events | NETCB",
  description:
    "Join NETCB at conferences, training sessions, webinars, and partner events across Africa.",
};

export default function UpcomingEventsPage() {
  return <UpcomingEventsClient />;
}
