import {
  HeadphonesIcon, BookOpen, Scale, Code, Shield, Server, GraduationCap,
  FileCheck, Lightbulb, Wrench, Users, Clock,
} from "lucide-react";
import type { ComponentType } from "react";

export interface ServiceElement {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

export const elements: ServiceElement[] = [
  {
    icon: HeadphonesIcon,
    title: "Support Services",
    description: "Reliable, expert support to keep critical platforms stable, secure, and performing optimally through structured SLAs and proactive guidance.",
    details: [
      "Structured Service Level Agreements (SLAs) with predictable response times",
      "Clear escalation paths tailored to each environment",
      "Proactive guidance and monitoring for platform stability",
      "Professional assistance on a post-billing basis for non-SLA customers",
      "Specialist support across all NETCB platforms and solutions",
      "Access to expert engineers whenever needed",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training Services",
    description: "Empowering teams with the skills to deploy, manage, and support enterprise technologies through official SUSE training and custom programmes.",
    details: [
      "Authorised SUSE training partner delivering official courses",
      "High-quality training aligned to best practices",
      "Custom training programmes tailored to your environment",
      "Coverage of specific platforms, integrations, and workflows",
      "Practical, relevant, and immediately applicable knowledge transfer",
      "Real-world operational focus for production readiness",
    ],
  },
  {
    icon: Scale,
    title: "Legal Advisory Services",
    description: "Practical guidance on data protection, licensing, vendor agreements, and risk management to ensure technology decisions align with regulatory obligations.",
    details: [
      "Data protection and information governance guidance",
      "Licensing and vendor agreement review and advice",
      "Risk management aligned with regulatory requirements",
      "Clear, implementable advice for technology decisions",
      "Secure, accountable, and defensible ICT outcomes",
      "Support for compliance across on-premise and cloud deployments",
    ],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Customer-focused software development from integrations and automation to custom business applications, combined with in-house R&D for future-ready solutions.",
    details: [
      "Integrations and automation for operational efficiency",
      "Custom business applications aligned to real requirements",
      "In-house technology development and ongoing research",
      "Reusable tools and improved platform capabilities",
      "Stay ahead of emerging ICT trends",
      "Modern, future-ready solutions for complex problems",
    ],
  },
];

export const services = elements;
