"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries does NETCB serve?",
    answer: "NETCB serves a wide range of industries including mining, financial services, healthcare, legal, government, manufacturing, and telecommunications across Africa. Our solutions are tailored to meet the specific regulatory and operational requirements of each sector.",
  },
  {
    question: "How long has NETCB been in operation?",
    answer: "NETCB was founded in 2003 in Pretoria, South Africa. With over 23 years of experience, we have established ourselves as a trusted enterprise IT partner across the African continent.",
  },
  {
    question: "What regions do you operate in?",
    answer: "We have a strong presence across Africa, with headquarters in Pretoria, South Africa and regional offices in East Africa (Nairobi). We serve clients in South Africa, Nigeria, Kenya, Ghana, Tanzania, Uganda, and other African markets.",
  },
  {
    question: "Do you offer managed services?",
    answer: "Yes, we offer comprehensive managed services including 24/7 monitoring, incident response, patch management, backup and disaster recovery, and ongoing optimization. Our managed services are designed to reduce operational burden while ensuring maximum uptime.",
  },
  {
    question: "What makes NETCB different from other IT providers?",
    answer: "Our difference lies in our deep technical expertise, African market understanding, and commitment to outcomes over promises. We maintain a small, highly skilled team that delivers enterprise-grade solutions without the complexity and inflated costs of larger consultancies.",
  },
  {
    question: "How do you approach cybersecurity?",
    answer: "We take a layered approach to cybersecurity, combining prevention, detection, and response. Our services include security assessments, vulnerability management, endpoint protection, email security, security awareness training, and incident response planning.",
  },
  {
    question: "Can you support open-source solutions?",
    answer: "Absolutely. We are authorised SUSE training partners and have extensive experience with enterprise Linux, OpenXchange, and other open-source platforms. We help organisations reduce licensing costs while maintaining enterprise-grade reliability.",
  },
  {
    question: "What is your approach to cloud migration?",
    answer: "We follow a structured methodology: assessment, planning, migration, and optimisation. We work with hybrid, multi-cloud, and on-premises environments to design solutions that meet your performance, compliance, and budget requirements.",
  },
  {
    question: "Do you provide training and support?",
    answer: "Yes, we offer comprehensive training programmes including SUSE certifications, security awareness training, and custom technical training. Our support team provides 24/7 assistance with guaranteed SLAs.",
  },
  {
    question: "How can I get started with NETCB?",
    answer: "Contact us for a free consultation. We will assess your current infrastructure, understand your challenges, and propose a tailored solution. You can reach us via our contact page, email, or phone.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 border-t border-[var(--netcb-border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] uppercase tracking-widest mb-4">
              Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div className="glass-elevated rounded-xl overflow-hidden border border-[var(--netcb-border-bright)]">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-[var(--netcb-text)]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--netcb-accent)] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-[var(--netcb-text-muted)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
