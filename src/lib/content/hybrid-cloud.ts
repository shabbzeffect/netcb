import {
  Cloud, ArrowUpRight, Server, LayoutGrid, Activity, Shield, FileCheck,
} from "lucide-react";
import type { ComponentType } from "react";

export interface CloudElement {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

export const elements: CloudElement[] = [
  {
    icon: ArrowUpRight,
    title: "Cloud Strategy & Migration",
    description: "Migrating workloads to public or private cloud platforms while maintaining a cohesive hybrid environment across on-premise and cloud resources.",
    details: [
      "Systems, identities, policies, and processes remain aligned across environments",
      "Structured assessment and phased migration planning",
      "Controlled cutovers to minimize disruption",
      "Right-sizing workloads and tuning connectivity for performance",
      "Rigorous validation, backup, and rollback strategies",
      "Continuous monitoring for safe and reliable transitions",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure as a Service",
    description: "Scalable compute, storage, and networking resources delivered in a controlled private, public, or hybrid cloud model.",
    details: [
      "Security, segmentation, automation, and monitoring built in",
      "Rapid infrastructure provisioning",
      "Cost optimization through right-sizing",
      "Maintained data sovereignty and operational control",
      "Accelerated digital service delivery",
      "Consistent governance across workloads",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Virtual Data Centres",
    description: "Cloud-like flexibility and scalability within your own infrastructure or private cloud footprint.",
    details: [
      "Full stack — compute, storage, networking, virtualization, security",
      "Multi-tenancy, automation, and policy-driven operations",
      "Resilient, high-performance foundation for business-critical workloads",
      "Strong governance and predictable costs",
      "Full control over data sovereignty and operational security",
      "Backup and management integrated into cohesive platform",
    ],
  },
  {
    icon: Activity,
    title: "Systems Monitoring",
    description: "Real-time visibility into the health, performance, and availability of critical infrastructure across on-premise, private cloud, and hybrid environments.",
    details: [
      "Centralized monitoring, alerting, and reporting",
      "Early issue detection to reduce downtime",
      "Proactive capacity planning with tailored dashboards",
      "Correlation of metrics, logs, and service dependencies",
      "Improved incident response and SLA delivery",
      "Systems remain stable, secure, and optimized",
    ],
  },
  {
    icon: Shield,
    title: "Disaster Recovery & Data Protection",
    description: "Ensuring critical systems remain recoverable and business operations can continue through outages, cyber incidents, or infrastructure failures.",
    details: [
      "Resilient backup architectures across hybrid environments",
      "Clearly defined RPO/RTO targets with regular recovery testing",
      "Secure storage with immutability options",
      "Documented runbooks for rapid response",
      "Protection of data integrity and reduced downtime",
      "Compliance support and strengthened operational resilience",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance Reporting",
    description: "Demonstrating adherence to regulatory, contractual, and internal governance requirements across ICT environments.",
    details: [
      "Structured evidence collection and audit-ready reporting",
      "Automated controls monitoring for access, retention, and backup integrity",
      "Clear, defensible reports from technical data",
      "Reduced audit effort with early gap identification",
      "Continuous compliance across on-premise, cloud, and hybrid deployments",
      "Support for regulatory and contractual requirements",
    ],
  },
];
