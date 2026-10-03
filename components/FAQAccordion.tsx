'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Technical specifications, dispatch timelines, and trade ordering policies for Delhi NCR.',
}: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqSchemaData = {
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="w-full">
      <JsonLd type="FAQPage" data={faqSchemaData} />

      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support & Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-serif-display">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-[#595754] mt-2.5">{subtitle}</p>}
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={item.question}
              className={`border transition-colors rounded-sm overflow-hidden ${
                isOpen
                  ? 'border-[#B08D57]/60 bg-white shadow-sm'
                  : 'border-[#E5DFD5] bg-[#FBF9F5] hover:border-[#CCC5B8]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-[#1C1C1C] leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#B08D57] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#595754] leading-relaxed border-t border-[#F0ECE4]">
                  <p className="pt-3">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
