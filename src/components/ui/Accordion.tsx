"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-[var(--netcb-border-bright)] rounded-lg overflow-hidden">
          <button
            className="w-full px-4 py-3 text-left bg-[var(--netcb-surface)] hover:bg-[var(--netcb-surface-hover)] transition-colors flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-[var(--netcb-surface)] border-t border-[var(--netcb-border-bright)]">
              <p className="text-[var(--netcb-text-muted)]">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
