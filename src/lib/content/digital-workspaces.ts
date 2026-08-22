import {
  FileText, PenTool, Share2, Mail, Archive, GitBranch, CheckSquare, Video, Layout, Calendar,
} from "lucide-react";
import type { ComponentType } from "react";

export interface WorkspaceElement {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

export const elements: WorkspaceElement[] = [
  {
    icon: FileText,
    title: "Document Management",
    description: "An enterprise discipline and set of systems for capturing, organizing, securing, versioning, and governing documents throughout their lifecycle.",
    details: [
      "Metadata and full-text search capabilities",
      "Check-in/check-out and version history",
      "Access permissions and workflow/approvals",
      "Retention policies and audit trails",
      "Reduces duplication and prevents use of outdated documents",
      "Improves operational efficiency, collaboration, and compliance",
    ],
  },
  {
    icon: PenTool,
    title: "Digital Signatures",
    description: "Cryptographic methods used to verify the authenticity and integrity of digital documents — from simple e-signatures to high-security digital signatures.",
    details: [
      "Electronic signatures for consent and approval on documents",
      "Digital signatures using encryption for authenticity and data integrity",
      "Unique code generation using signer's private key",
      "Non-repudiation — signer cannot deny their signature",
      "Commonly used in legal, financial, and high-security contexts",
      "Streamlines processes and ensures legal compliance",
    ],
  },
  {
    icon: Share2,
    title: "Secure File Sharing",
    description: "Enterprise capability for storing, synchronizing, and collaborating on files while protecting sensitive information through encryption and access controls.",
    details: [
      "Encryption, access permissions, and expiring links",
      "Audit trails, versioning, and data-loss prevention",
      "On-premise hosting for full data sovereignty",
      "Compliance with industry or government regulations",
      "Tighter integration with internal identity systems (AD/LDAP)",
      "Granular network controls and predictable governance",
    ],
  },
  {
    icon: Mail,
    title: "Enterprise E-Mail",
    description: "Core business messaging and collaboration service with secure, centralized handling of mailboxes, calendars, contacts, and policy-based retention.",
    details: [
      "Secure, centralized handling of mailboxes and calendars",
      "Integrated with organization's identity and governance controls",
      "On-premise option for data sovereignty and compliance",
      "Keeps message content and encryption keys within security boundary",
      "Limits third-party administrator access",
      "Critical for government, critical infrastructure, and regulated sectors",
    ],
  },
  {
    icon: Archive,
    title: "Records Management",
    description: "The disciplined practice of creating, classifying, storing, retaining, and securely disposing of organizational information throughout its lifecycle.",
    details: [
      "Supports regulatory compliance and audit readiness",
      "Efficient retrieval of evidence for litigation and investigations",
      "Enforces retention schedules, privacy controls, and secure destruction",
      "Reduces risk of over-retention, data leaks, and unnecessary storage costs",
      "Preserves institutional knowledge",
      "Ensures sensitive information is protected and accessible to the right people",
    ],
  },
  {
    icon: GitBranch,
    title: "Workflow Management",
    description: "The structured approach to designing, automating, executing, and improving the sequence of tasks, approvals, and handoffs that drive business processes.",
    details: [
      "Increases consistency, speed, and accountability",
      "Reduces manual errors and bottlenecks",
      "Built-in controls, audit trails, and escalation paths",
      "Real-time status tracking and reporting",
      "Better collaboration across teams and systems",
      "Scalable foundation for process standardization and digital transformation",
    ],
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Structured way to plan, assign, prioritize, and track work using tasks, boards, timelines, dependencies, and progress reporting.",
    details: [
      "Clear ownership and accountability for delivery",
      "Integration with enterprise e-mail for actionable work",
      "Create tasks from emails and link conversations to projects",
      "Status updates and approvals via email",
      "Calendar synchronization for milestones and meetings",
      "Automation across workflows, CRM/ITSM tools, and collaboration platforms",
    ],
  },
  {
    icon: Archive,
    title: "E-Mail Archiving",
    description: "Centralized, long-term preservation and indexing of inbound and outbound messages to support search, retention, eDiscovery, and compliance.",
    details: [
      "Captures messages, attachments, metadata, and journal copies",
      "On-premise hosting for continued access during cloud outages",
      "Vendor-neutral archiving reduces lock-in",
      "Easy migration between e-mail platforms without losing history",
      "Tighter governance over data sovereignty and encryption key control",
      "Supports legal hold capabilities and auditing",
    ],
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description: "Real-time communication capability for live video, audio, screen sharing, chat, recording, and meetings integration across devices.",
    details: [
      "Live video, audio, screen sharing, and chat",
      "Self-hosted on-premise option for data sovereignty",
      "Meeting content and recordings within security boundary",
      "Reduced exposure to third-party access or cross-border risks",
      "Deeper control over identity integration",
      "LAN-optimized performance for regulated or high-security environments",
    ],
  },
  {
    icon: Layout,
    title: "Office Productivity",
    description: "Everyday applications for creating and managing documents, spreadsheets, presentations, and collaborative content — the backbone of knowledge work.",
    details: [
      "Open-source suites like LibreOffice for core functionality",
      "Compatible with common file formats",
      "Lower total cost of ownership — no per-user licensing fees",
      "Reduced vendor lock-in, especially impactful at scale",
      "Standardized templates, training, and centralized deployment",
      "Long-term flexibility through open standards",
    ],
  },
];
