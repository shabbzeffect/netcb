import { Metadata } from "next";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog Articles",
  description:
    "Insights on cybersecurity, hybrid cloud, open source, and enterprise IT from NETCB Limited.",
};

export default function BlogPage() {
  return <BlogClient />;
}
