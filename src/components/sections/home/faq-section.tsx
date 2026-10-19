"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DEFAULT_FAQS, FaqItem } from "@/data/faq.data";
import { FaqAccordionItem } from "./faq/faq-accordion-item";
import PrimaryButton from "@/components/ui/primary-button";
import { CAL_CONFIG } from "@/config/cal.config";

interface FaqSectionProps {
  items?: FaqItem[];
  limit?: number;
  showViewAll?: boolean;
}

export function FaqSection({
  items = DEFAULT_FAQS,
  limit = 5,
  showViewAll = true,
}: FaqSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = limit ? items.slice(0, limit) : items;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full lg:px-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Column: Titles & CTA */}
        <div className="w-full lg:w-4/12 flex flex-col items-start pt-2">
          <span className="text-primary text-sm md:text-[20px] mb-6 font-sans">
            [ Ask Anything ]
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-[46px] font-semibold text-header-text tracking-tight leading-[1.1] mb-6">
            Frequently <br />
            <span className="font-serif italic font-medium text-header-text">
              Asked Question
            </span>
          </h2>

          <p className="text-primary-text text-[15px] mb-8">
            Before You Ask — Here&apos;s the Answer
          </p>

          <PrimaryButton
            text="Request Free Audit"
            dataCalLink={CAL_CONFIG.calLink}
            size="md"
            glow="md"
          />

          {/* {showViewAll && items.length > displayedFaqs.length && (
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm md:text-[15px] font-medium text-primary-text hover:text-primary transition-colors group"
            >
              <span>Explore all {items.length} questions & answers</span>
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )} */}
        </div>

        {/* Right Column: FAQ Accordions */}
        <div className="w-full lg:w-8/12 flex flex-col space-y-4">
          {displayedFaqs.map((faq, index) => (
            <FaqAccordionItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
              indexNumber={index + 1}
            />
          ))}

          {showViewAll && items.length > displayedFaqs.length && (
            <div className="pt-2 flex justify-start sm:justify-end">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-primary hover:text-white transition-colors group"
              >
                <span>Have more questions? View more FAQs</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
