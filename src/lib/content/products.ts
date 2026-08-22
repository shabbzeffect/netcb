export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  partner: string;
  logo?: string;
  href?: string;
}

export const products: Product[] = [
  // NETCB Products
  {
    slug: "groupwise-video-conferencing",
    name: "GroupWise Video Conferencing Add-On",
    category: "NETCB Products",
    description:
      "Integrate video conferencing directly into GroupWise with support for Zoom, Microsoft Teams, Jitsi, GoToMeeting, Cisco WebEx, and Google Meet.",
    features: [
      "Schedule meetings from GroupWise calendar",
      "Supports six video platforms",
      "Management portal for administration",
      "Busy search across platforms",
      "On-premise deployment",
      "End-user and admin documentation",
    ],
    partner: "NETCB",
    logo: "/platforms/zoom.svg",
    href: "/products/groupwise-video-conferencing",
  },
  {
    slug: "hybridrms",
    name: "HybridRMS",
    category: "NETCB Products",
    description:
      "Resilient, hybrid messaging infrastructure for enterprise e-mail, calendaring, and collaboration across on-premise and cloud environments.",
    features: [
      "High availability messaging architecture",
      "Hybrid on-premise and cloud deployment",
      "Enterprise e-mail, calendaring, collaboration",
      "Data sovereignty with on-premise control",
      "Scalable infrastructure",
      "Integrated security and compliance",
    ],
    partner: "NETCB",
    logo: "/platforms/teams.svg",
    href: "/products/hybridrms",
  },
  {
    slug: "migration-tools",
    name: "Migration Tools",
    category: "NETCB Products",
    description:
      "Seamless platform migration between enterprise messaging and collaboration systems — preserving data, workflows, and user access.",
    features: [
      "GroupWise to GroupWise upgrades",
      "GroupWise to Kolab migration",
      "GroupWise to OX migration",
      "Minimal downtime with staged cutovers",
      "Pre-migration assessment and planning",
      "Post-migration validation",
    ],
    partner: "NETCB",
    logo: "/platforms/webex.svg",
    href: "/products/migration-tools",
  },

  // Cybersecurity
  {
    slug: "wazuh",
    name: "Wazuh",
    category: "Cybersecurity",
    description:
      "Open-source XDR and SIEM security platform providing centralised threat detection, log analysis, integrity monitoring, vulnerability detection, and compliance reporting.",
    features: [
      "Centralised threat detection and log analysis",
      "File integrity monitoring and vulnerability detection",
      "MITRE ATT&CK mapped detections",
      "Compliance reporting (PCI DSS, HIPAA, GDPR)",
      "Lightweight endpoint agents",
      "Threat intelligence integrations",
    ],
    partner: "Wazuh",
    logo: "/partners/wazuh.svg",
  },
  {
    slug: "pfsense",
    name: "pfSense",
    category: "Cybersecurity",
    description:
      "Open-source firewall and routing platform consolidating Firewall, VPN, IDS/IPS, and Reverse Proxy on commodity hardware.",
    features: [
      "Stateful firewalling, NAT, multi-WAN",
      "IPsec, OpenVPN, WireGuard VPN",
      "IDS/IPS via Snort or Suricata",
      "HAProxy and Squid reverse proxy",
      "Centralised web management",
      "Enterprise-grade without per-user licensing",
    ],
    partner: "pfSense",
    logo: "/partners/pfsense.svg",
  },
  {
    slug: "secureanybox5",
    name: "SecureAnyBox5",
    category: "Cybersecurity",
    description:
      "Enterprise secrets and sensitive-data management platform for securely storing, encrypting, sharing, and auditing access to passwords, certificates, and confidential records.",
    features: [
      "Encrypted Safe Boxes for secrets storage",
      "Granular permissions and activity logging",
      "LDAP/Active Directory integration",
      "Policy-driven security controls",
      "Agent and API automation support",
      "Compliance and audit trail",
    ],
    partner: "SecureAnyBox5",
    logo: "/partners/secureanybox5.svg",
  },

  // Backup & DR
  {
    slug: "backup-eagle",
    name: "Backup Eagle",
    category: "Backup & DR",
    description:
      "Vendor-agnostic backup monitoring and reporting platform giving a single, centralised view of backup jobs across on-prem and cloud environments.",
    features: [
      "Single pane of glass for all backup environments",
      "Automated daily backup health checks",
      "Missing and empty backup detection",
      "Retention misconfiguration alerts",
      "Audit and compliance-ready report templates",
      "Supports major backup vendors",
    ],
    partner: "Backup Eagle",
    logo: "/partners/backup-eagle.svg",
  },
  {
    slug: "sep-sesam",
    name: "SEP sesam",
    category: "Backup & DR",
    description:
      "Hybrid backup and disaster recovery solution for heterogeneous IT environments, protecting data across physical servers, virtual machines, and cloud-connected infrastructure.",
    features: [
      "Multi-streaming parallel backup",
      "Flexible backup targets (disk, tape, cloud)",
      "Si3 deduplication and replication",
      "Cross-platform support (Windows, Linux, VMware, Hyper-V)",
      "Automated disaster recovery",
      "Centralised management console",
    ],
    partner: "SEP sesam",
    logo: "/partners/sep-sesam.svg",
  },

  // Data Centre Virtualisation
  {
    slug: "xcp-ng",
    name: "XCP-ng",
    category: "Data Centre",
    description:
      "Open-source Type-1 bare-metal virtualization platform replacing VMware ESXi/vSphere with full enterprise capabilities.",
    features: [
      "Xen Project hypervisor with centralized management",
      "Clustering, live migration, snapshots",
      "Storage and network virtualization",
      "Xen Orchestra web-based management",
      "VMware-to-XCP-ng migration workflows",
      "Optional professional support from Vates",
    ],
    partner: "XCP-ng",
    logo: "/platforms/jitsi.svg",
  },

  // Databases
  {
    slug: "mariadb",
    name: "MariaDB",
    category: "Databases",
    description:
      "Mature enterprise-grade open-source relational database as a strategic alternative to Oracle and proprietary databases.",
    features: [
      "Fork of MySQL with independent evolution",
      "Advanced replication, clustering, encryption",
      "Improved optimizer and storage engines",
      "Drop-in replacement for Oracle in many cases",
      "Lower total cost of ownership",
      "High availability and performance",
    ],
    partner: "MariaDB",
    logo: "/partners/mariadb.svg",
  },

  // Communications
  {
    slug: "kolab",
    name: "Kolab",
    category: "Communications",
    description:
      "Free open-source enterprise e-mail and groupware platform as a self-hosted alternative to Microsoft Exchange.",
    features: [
      "E-mail, calendars, contacts, tasks, notes",
      "IMAP/SMTP, CalDAV/CardDAV, ActiveSync",
      "Outlook, Thunderbird, mobile app support",
      "Roundcube web client",
      "Shared folders with granular access control",
      "Integrated anti-spam/anti-virus",
    ],
    partner: "Kolab",
    logo: "/platforms/teams.svg",
  },
  {
    slug: "deskalerts",
    name: "DeskAlerts",
    category: "Communications",
    description:
      "Enterprise corporate notification and internal communications platform for sending high-visibility messages via desktop pop-ups, mobile push, email, SMS, Teams, and digital signage.",
    features: [
      "Desktop pop-up and banner notifications",
      "Multi-channel delivery (push, email, SMS, Teams)",
      "Targeted messaging by group or location",
      "Acknowledgement tracking for compliance",
      "Detailed read and delivery reporting",
      "Emergency and IT communications support",
    ],
    partner: "DeskAlerts",
    logo: "/partners/deskalerts.svg",
  },

  // Digital Workspaces
  {
    slug: "nextcloud",
    name: "Nextcloud",
    category: "Digital Workspaces",
    description:
      "Self-hosted file management and secure sharing platform as an alternative to OneDrive, Google Drive, and Dropbox.",
    features: [
      "Secure sync and share with granular permissions",
      "Expiring links, end-to-end encryption",
      "File versioning, recovery, auditing",
      "Online editing via Collabora/OnlyOffice",
      "Calendaring, contacts, chat, workflow automation",
      "Enterprise-grade with full data sovereignty",
    ],
    partner: "Nextcloud",
    logo: "/platforms/googlemeet.svg",
  },
  {
    slug: "recast-workspace",
    name: "Recast Application Workspace",
    category: "Digital Workspaces",
    description:
      "User-centric application delivery and management platform for centrally deploying, updating, and providing access to applications at scale.",
    features: [
      "Unified application workspace for end users",
      "Cross-platform (Windows, macOS, VDI)",
      "Automated application lifecycle management",
      "Policy enforcement and access control",
      "Integration with existing IT infrastructure",
      "Reduced complexity in app delivery",
    ],
    partner: "Recast Software",
    logo: "/partners/recast.svg",
  },
  {
    slug: "libreoffice",
    name: "LibreOffice",
    category: "Digital Workspaces",
    description:
      "Full-featured open-source office suite as a direct replacement for Microsoft Office.",
    features: [
      "Writer, Calc, Impress, Draw, Base, Math",
      "Strong DOCX/XLSX/PPTX compatibility",
      "ODF native format for portability",
      "No per-user subscription licensing",
      "Professional templates and macros",
      "Digital sovereignty through open standards",
    ],
    partner: "LibreOffice",
    logo: "/partners/opentext.svg",
  },

  // DevOps
  {
    slug: "gitlab",
    name: "GitLab",
    category: "DevOps",
    description:
      "Comprehensive DevOps platform managing the full software lifecycle from planning through deployment.",
    features: [
      "Git repository management with merge requests",
      "Built-in CI/CD pipelines",
      "RBAC, audit logs, governance",
      "SAST/DAST and vulnerability management",
      "Self-hosted for data sovereignty",
      "Cloud or self-hosted deployment",
    ],
    partner: "GitLab",
    logo: "/partners/gitlab.svg",
  },

  // Support & Ticketing
  {
    slug: "zammad",
    name: "Zammad",
    category: "Support",
    description:
      "Modern open-source helpdesk and ticketing platform comparable to Zendesk with self-hosted sovereignty.",
    features: [
      "Multi-channel intake (email, web, chat, phone, social)",
      "Automation rules, triggers, macros",
      "Full-text search, tagging, SLA handling",
      "REST API for ITSM/CRM integration",
      "Branded and customisable",
      "Enterprise-grade without vendor lock-in",
    ],
    partner: "Zammad",
    logo: "/platforms/gotomeeting.svg",
  },

  // Time & Project Management
  {
    slug: "kimai",
    name: "Kimai",
    category: "Time & Project",
    description:
      "Professional open-source web-based time tracking and timesheet system for teams and organisations.",
    features: [
      "Multi-user time entry with project structures",
      "Timers and punch-in/punch-out",
      "Flexible rates and budgeting",
      "Built-in invoicing and JSON API",
      "LDAP/SAML and 2FA support",
      "No per-user subscription",
    ],
    partner: "Kimai",
    logo: "/platforms/gotomeeting.svg",
  },

  // CRM & ERP
  {
    slug: "suitecrm",
    name: "SuiteCRM",
    category: "CRM & ERP",
    description:
      "Enterprise-ready open-source CRM covering the full customer lifecycle from leads to invoicing.",
    features: [
      "Leads, accounts, opportunities, campaigns",
      "Quotes, invoices, workflows, reporting",
      "Self-hosted for data ownership",
      "Dashboards and automation",
      "AGPL licensed with ongoing maintenance",
      "Integration capabilities",
    ],
    partner: "SuiteCRM",
    logo: "/platforms/gotomeeting.svg",
  },
  {
    slug: "dolibarr",
    name: "Dolibarr",
    category: "CRM & ERP",
    description:
      "Modular open-source ERP and CRM for managing core business operations without heavyweight complexity.",
    features: [
      "Customer and supplier management",
      "Invoicing, payments, product catalogs",
      "Stock/warehouse and purchasing",
      "Accounting/finance modules",
      "Highly configurable for SMEs",
      "Single platform for operational workflows",
    ],
    partner: "Dolibarr",
    logo: "/platforms/gotomeeting.svg",
  },

  // Event Management
  {
    slug: "indico",
    name: "Indico",
    category: "Events",
    description:
      "Open-source event management platform from CERN for planning and running events of any size.",
    features: [
      "Event websites, registration, attendance",
      "Abstract/paper submission and reviewing",
      "Agenda, session scheduling, room booking",
      "Email notifications and post-event publishing",
      "LDAP/SSO integration",
      "Full control over participant data",
    ],
    partner: "Indico",
    logo: "/platforms/gotomeeting.svg",
  },

  // Password Management
  {
    slug: "pwm",
    name: "PWM",
    category: "Identity",
    description:
      "Powerful open-source self-service password reset for LDAP directories, reducing helpdesk calls.",
    features: [
      "Supports eDirectory and Active Directory",
      "Challenge/response verification",
      "Policy enforcement and auditing",
      "On-premise hosting",
      "No per-user licensing",
      "Codebase for OpenText SSPR",
    ],
    partner: "PWM",
    logo: "/partners/opentext.svg",
  },

  // E-Mail Security
  {
    slug: "assp",
    name: "ASSP",
    category: "E-Mail Security",
    description:
      "Free open-source SMTP proxy for spam and malicious e-mail filtering before it reaches users.",
    features: [
      "Bayesian and Hidden Markov Model analysis",
      "Auto-whitelisting and greylisting",
      "DNSBL/DNSWL and URIBL lookups",
      "SPF and authentication controls",
      "Virus scanning and attachment blocking",
      "No per-user subscription costs",
    ],
    partner: "ASSP",
    logo: "/partners/cyberguard-africa.svg",
  },

  // Video Conferencing
  {
    slug: "bigbluebutton",
    name: "BigBlueButton",
    category: "Video Conferencing",
    description:
      "Open-source virtual classroom and video conferencing platform designed for teaching and collaboration.",
    features: [
      "Real-time audio/video and screen sharing",
      "Whiteboard annotation and polling",
      "Breakout rooms and shared notes",
      "Recording and learning analytics",
      "Moodle and Canvas LMS integration",
      "Self-hosted for data sovereignty",
    ],
    partner: "BigBlueButton",
    logo: "/platforms/googlemeet.svg",
  },

  // CMS
  {
    slug: "joomla",
    name: "Joomla",
    category: "CMS",
    description:
      "Mature open-source content management system for building websites, intranets, and web applications.",
    features: [
      "Templates, extensions, modules",
      "User management and multilingual sites",
      "Access control (ACL) and workflows",
      "Balance of ease and customisation",
      "Large ecosystem with standards support",
      "Scalable without vendor lock-in",
    ],
    partner: "Joomla",
    logo: "/platforms/gotomeeting.svg",
  },

  // LMS
  {
    slug: "canvas",
    name: "Canvas",
    category: "LMS",
    description:
      "Modern Learning Management System used by universities, schools, and training organisations.",
    features: [
      "Course and content management",
      "Assignments, quizzes, grading with rubrics",
      "Discussion forums and analytics",
      "Mobile access with intuitive UX",
      "LTI, SCORM, SIS connectivity",
      "Third-party tool plug-in support",
    ],
    partner: "Canvas",
    logo: "/platforms/gotomeeting.svg",
  },

  // Operating Systems
  {
    slug: "linux-freebsd",
    name: "Linux & FreeBSD",
    category: "Operating Systems",
    description:
      "UNIX-like operating systems providing stability, security, and multi-user capabilities for server and cloud infrastructure.",
    features: [
      "SUSE, Debian, Ubuntu, FreeBSD",
      "UNIX/POSIX toolset and permissions",
      "Web servers, databases, firewalls, storage",
      "Open standards with strong automation",
      "Freedom from vendor lock-in",
      "Broad hardware support",
    ],
    partner: "Multi-vendor",
    logo: "/partners/suse.svg",
  },

  // PDF
  {
    slug: "pdf24",
    name: "PDF24",
    category: "Productivity",
    description:
      "Free Windows-focused PDF creation and editing platform for common PDF workflows without Adobe Acrobat costs.",
    features: [
      "PDF creation via virtual printer",
      "Merge, split, compress, convert",
      "Signing, encryption, OCR",
      "Free for companies",
      "Local/offline processing",
      "Leverages open-source components",
    ],
    partner: "PDF24",
    logo: "/platforms/gotomeeting.svg",
  },

  // SSL/TLS
  {
    slug: "lets-encrypt",
    name: "Let's Encrypt",
    category: "Security",
    description:
      "Free, automated certificate authority delivering browser-trusted certificates through the ACME protocol.",
    features: [
      "Zero certificate cost",
      "Broad automation support",
      "90-day certificate lifetimes",
      "ACME protocol for issuance and renewal",
      "Browser-trusted certificates",
      "Portability and operational simplicity",
    ],
    partner: "Let's Encrypt",
    logo: "/partners/secureanybox5.svg",
  },
];
