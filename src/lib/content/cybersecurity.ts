import {
  Shield, Key, Lock, AlertTriangle, Users, Mail, Monitor, Radar, Activity, Database,
} from "lucide-react";
import type { ComponentType } from "react";

export interface CyberPillar {
  icon: ComponentType<{ className?: string }>;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
}

export const pillars: CyberPillar[] = [
  {
    icon: Users,
    title: "Identity & Access Management",
    shortTitle: "IAM",
    description: "A framework of policies, technologies, and processes that ensure the right individuals have appropriate access to resources within an organisation's digital environment.",
    details: [
      "Managing user identities, authentication, and authorization",
      "Protection against unauthorized access and insider threats",
      "Efficient enforcement of security policies",
      "Simplified access management to enhance productivity",
      "Safeguarding sensitive information across applications, systems, and data",
    ],
  },
  {
    icon: Key,
    title: "Privileged Password Management",
    shortTitle: "PPM",
    description: "Securely storing, managing, and controlling access to privileged account passwords within an organisation.",
    details: [
      "Enforce strong password policies",
      "Automate password rotation",
      "Secure access to privileged credentials on a need-to-know basis",
      "Reduce risk of unauthorized access to critical systems",
      "Enhance accountability by auditing privileged access activities",
      "Mitigate impact of credential-related breaches or insider threats",
    ],
  },
  {
    icon: Shield,
    title: "Perimeter Security",
    shortTitle: "Perimeter",
    description: "Practices and technologies implemented to protect the external boundary of a network from unauthorized access and threats — the first line of defense.",
    details: [
      "Firewalls and Intrusion Detection/Prevention Systems (IDPS)",
      "Virtual Private Networks (VPNs)",
      "Network Segmentation and Access Control",
      "Web Application Firewalls (WAFs)",
      "Email Security Gateways",
      "Denial-of-Service (DoS) Mitigation",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Risk & Governance",
    shortTitle: "Risk",
    description: "Managing and overseeing the organisation's overall cybersecurity strategy, policies, and practices to mitigate risks and ensure compliance.",
    details: [
      "Risk Management and Compliance Management",
      "Governance Framework implementation",
      "Incident Response Planning",
      "Vendor Risk Management",
      "Security Awareness and Training",
      "Continuous Monitoring and Improvement",
    ],
  },
  {
    icon: Lock,
    title: "Privileged Access Management",
    shortTitle: "PAM",
    description: "A cybersecurity strategy designed to secure, control, and monitor access to critical systems, applications, and data — focusing on privileged accounts.",
    details: [
      "Strict access controls for privileged accounts",
      "Session monitoring and recording",
      "Just-in-time access provisioning",
      "Secure storage of privileged credentials",
      "Detection of suspicious activities involving privileged accounts",
      "Mitigation of insider threats and external cyberattacks",
    ],
  },
  {
    icon: Mail,
    title: "E-Mail Security",
    shortTitle: "Email",
    description: "Protecting email communication from threats and unauthorized access through technologies, processes, and policies.",
    details: [
      "Protection Against Malware and Spam Filtering",
      "Encryption of email content",
      "Authentication and Access Control",
      "Data Loss Prevention (DLP)",
      "User Awareness and Training",
      "Secure and reliable communication across digital channels",
    ],
  },
  {
    icon: Monitor,
    title: "Endpoint Security",
    shortTitle: "Endpoint",
    description: "Protection of individual devices — desktops, laptops, smartphones, and tablets — from cybersecurity threats.",
    details: [
      "Antivirus and Anti-malware protection",
      "Host-based Firewalls",
      "Endpoint Detection and Response (EDR)",
      "Device Encryption and Patch Management",
      "Application Control and Device Control",
      "User Authentication enforcement",
    ],
  },
  {
    icon: Radar,
    title: "Threat Discovery & Remediation",
    shortTitle: "XDR",
    description: "Extended Detection and Response — integrating multiple security data sources to detect, investigate, and respond to advanced threats across the digital environment.",
    details: [
      "Correlation of security events from endpoints, networks, and cloud",
      "Threat intelligence and analytics integration",
      "Automated investigation and response",
      "Comprehensive remediation actions",
      "Accelerated incident response times",
      "Strengthened overall cybersecurity posture",
    ],
  },
  {
    icon: Activity,
    title: "Security Information & Event Management",
    shortTitle: "SIEM",
    description: "Collecting, analysing, and correlating security event data from across the IT infrastructure for real-time visibility.",
    details: [
      "Event Collection from multiple sources",
      "Normalization and Correlation of events",
      "Alerting and automated Response",
      "Analytics and Threat Detection",
      "Compliance and Reporting",
      "Central hub for security monitoring and auditing",
    ],
  },
  {
    icon: Database,
    title: "Data Security & Protection",
    shortTitle: "Data",
    description: "Practices, technologies, and policies to safeguard sensitive data from unauthorized access, disclosure, modification, or destruction throughout its lifecycle.",
    details: [
      "Encryption at rest and in transit",
      "Access Controls and Data Masking",
      "Data Loss Prevention (DLP)",
      "Backup and Recovery strategies",
      "Data Classification and Auditing",
      "Compliance and Governance alignment",
    ],
  },
];
