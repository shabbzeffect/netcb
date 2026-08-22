import { Metadata } from "next";
import { PastEventsClient } from "./PastEventsClient";

export const metadata: Metadata = {
  title: "Past Events | NETCB",
  description:
    "A look back at NETCB's participation in conferences, workshops, and industry events across Africa.",
};

export default function PastEventsPage() {
  return <PastEventsClient />;
}
