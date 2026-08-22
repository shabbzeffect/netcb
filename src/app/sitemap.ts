import { MetadataRoute } from "next";

const BASE_URL = "https://www.netcb.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const solutionPages = [
    { url: `${BASE_URL}/solutions`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/solutions/cybersecurity`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/solutions/hybrid-cloud`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/solutions/digital-workspaces`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/solutions/open-source`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const servicePages = [
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/support`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/legal`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/documentation`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const productPages = [
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/products/groupwise-video-conferencing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/products/hybridrms`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/products/migration-tools`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const distributionPages = [
    { url: `${BASE_URL}/distribution`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/distribution/partners`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/distribution/become-a-partner`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/distribution/vendor-updates`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const aboutPages = [
    { url: `${BASE_URL}/about/events/upcoming`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/events/past`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  const legalPages = [
    { url: `${BASE_URL}/legal/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${BASE_URL}/legal/cookies`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${BASE_URL}/legal/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  const blogPages = [
    { url: `${BASE_URL}/about/blog/email-security-assessment-services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/secureanybox-kenya-visit`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/secureanybox-botswana`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/secureanybox-south-africa`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/navigating-vendor-lock-in`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/hybrid-cloud-best-practices`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/zero-trust-security-model`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/open-source-cost-savings`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/cybersecurity-awareness-training`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/blog/disaster-recovery-planning`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return [
    ...staticPages,
    ...solutionPages,
    ...servicePages,
    ...productPages,
    ...distributionPages,
    ...aboutPages,
    ...legalPages,
    ...blogPages,
  ];
}
