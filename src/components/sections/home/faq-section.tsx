"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DEFAULT_FAQS } from "@/data/faq.data";
import { FaqAccordionItem } from "./faq/faq-accordion-item";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full">
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Titles & CTA */}
          <div className="w-full lg:w-4/12 flex flex-col items-start pt-2">
            <span className="text-primary text-sm md:text-[20px] mb-6">
              [ Ask Anything ]
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-semibold text-header-text tracking-tight leading-[1.1] mb-6">
              Frequently <br />
              <span className="font-serif italic font-medium text-header-text">
                Asked Question
              </span>
            </h2>

            <p className="text-primary-text text-[15px] mb-10">
              Before You Ask — Here&apos;s the Answer
            </p>

            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary text-white rounded-full pl-6 pr-1.5 py-1.5 text-[15px] transition-all cursor-pointer shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)]"
            >
              <span>Request Free Audit</span>
              <div className="w-8 h-8 rounded-full bg-foreground text-primary flex items-center justify-center font-bold group-hover:-rotate-12 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </div>
            </Link>
          </div>

          {/* Right Column: FAQ Accordions */}
          <div className="w-full lg:w-8/12 flex flex-col space-y-4">
            {DEFAULT_FAQS.map((faq, index) => (
              <FaqAccordionItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
