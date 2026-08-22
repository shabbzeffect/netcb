export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export const solutions: Solution[] = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Holistic security posture management",
    description:
      "At NETCB, we champion a holistic approach to cybersecurity, addressing every facet to safeguard your digital landscape — from threat detection and SIEM to identity governance and compliance alignment.",
    capabilities: [
      "SIEM & XDR with Wazuh — centralised threat detection",
      "Identity & Access Management and privileged access governance",
      "Backup compliance and audit-ready evidence with Backup Eagle",
      "Secrets management with SecureAnyBox5",
      "Security awareness training and phishing simulations",
      "24/7 SOC monitoring and incident response",
    ],
    icon: "Shield",
  },
  {
    slug: "hybrid-cloud",
    title: "Hybrid Cloud",
    subtitle: "Flexible, scalable infrastructure",
    description:
      "We deliver hybrid-cloud solutions that integrate on-premises infrastructure with cloud platforms, enabling seamless operations across diverse environments with the flexibility and security modern businesses demand.",
    capabilities: [
      "Hybrid and multi-cloud architecture design and implementation",
      "Cloud migration strategy and execution",
      "Infrastructure-as-Code (IaC) and automation",
      "Disaster recovery and business continuity planning",
      "Performance optimisation and cost governance",
      "Ongoing managed cloud operations",
    ],
    icon: "Cloud",
  },
  {
    slug: "digital-workspaces",
    title: "Digital Workspaces",
    subtitle: "Unified modern workplace enablement",
    description:
      "NETCB has been a trusted provider of solutions for building Secure Digital Workspaces. We integrate our own innovations with technology from leading partners to deliver tailored solutions for modern organisations.",
    capabilities: [
      "Recast Application Workspace — deploy and manage applications at scale",
      "DeskAlerts enterprise notification and internal communications",
      "GroupWise video conferencing and collaboration tools",
      "Migration tools for seamless platform transitions",
      "Unified endpoint management across Windows, macOS, and VDI",
      "Zero-trust network access and remote workforce enablement",
    ],
    icon: "Monitor",
  },
  {
    slug: "open-source",
    title: "Open Source",
    subtitle: "Freedom from vendor lock-in",
    description:
      "NETCB helps organisations across Africa adopt open source confidently by delivering enterprise-grade implementation, integration, and ongoing support — reducing vendor lock-in while aligning with real operational requirements.",
    capabilities: [
      "Wazuh XDR/SIEM — open-source threat detection at enterprise scale",
      "Linux server administration and hardening",
      "Open-source database migration and management",
      "Container orchestration and DevOps toolchains",
      "Training and knowledge transfer for internal teams",
      "Long-term support and maintenance contracts",
    ],
    icon: "Terminal",
  },
];
