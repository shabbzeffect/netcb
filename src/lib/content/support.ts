import {
  Headphones, Mail, Globe, Shield, Server, Users, Clock,
  CheckCircle, ArrowUpRight, Phone,
} from "lucide-react";

export const supportStats = [
  { label: "Resolution Rate", value: "90%+", sub: "Vendor-referred bugs identified" },
  { label: "Response Time", value: "Minutes", sub: "Remote issue resolution" },
  { label: "Support Model", value: "24/7", sub: "SLA and post-billing" },
  { label: "Expertise", value: "Multi-vendor", sub: "Beta-tester for major vendors" },
];

export const consultingAreas = [
  {
    icon: Server,
    title: "Infrastructure Modernisation",
    description: "Planning, designing, and implementing modern infrastructure with emphasis on on-premise and hybrid architectures.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Deploying robust security frameworks and ensuring compliance with regulatory and governance requirements.",
  },
  {
    icon: Users,
    title: "Identity & Access Management",
    description: "Implementing enterprise identity solutions for secure, auditable access across environments.",
  },
  {
    icon: Clock,
    title: "Backup & Disaster Recovery",
    description: "Designing resilient backup and recovery architectures to protect critical data and ensure business continuity.",
  },
];

export const accessMethods = [
  {
    icon: Mail,
    title: "E-Mail Support",
    description: "Send an e-mail to support@netcb.com and our team will respond promptly.",
    action: "mailto:support@netcb.com",
    actionLabel: "support@netcb.com",
  },
  {
    icon: Globe,
    title: "Online Portal",
    description: "Visit our support portal to open a support ticket and track progress.",
    action: "https://support.netcb.com",
    actionLabel: "support.netcb.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us directly for urgent support queries.",
    action: "tel:+27128804040",
    actionLabel: "+27 12 880 4040",
  },
];

export const slaHighlights = [
  "Structured Service Level Agreements (SLAs) with defined response times",
  "Clear escalation paths and service hours for business-critical systems",
  "Proactive guidance and accountability for predictable support",
  "Post-billing (time-and-materials) support for non-SLA customers",
  "Flexible engagement as requirements arise",
  "Expert help accessible when needed",
];
