import type { Metadata } from "next";
import { ContactPageClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Book a Technical Consultation",
  description:
    "Get in touch with NETCB Limited. Book a free technical consultation, request a quote, or speak with our enterprise IT specialists in Pretoria, South Africa.",
  openGraph: {
    title: "Contact NETCB Limited | Enterprise IT Consultation",
    description:
      "Book a technical consultation with NETCB. Enterprise IT infrastructure, cybersecurity, and cloud solutions.",
    url: "https://www.netcb.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
