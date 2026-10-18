"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Briefcase, Mail } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CAREER_OPENINGS } from "@/data/career.data";

export function CareerCtaSection() {
  return (
    <section className="w-full pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action Container */}
        <div
          className="w-full rounded-[24px] p-8 sm:p-12 md:p-16 relative overflow-hidden bg-[#14161C] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]"
          style={{
            background:
              "linear-gradient(var(--card, #14161C), var(--card, #14161C)) padding-box, linear-gradient(135deg, rgba(254, 90, 0, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(254, 90, 0, 0.2) 100%) border-box",
            border: "1px solid transparent",
          }}
        >
          {/* Subtle Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm sm:text-base font-semibold tracking-wider uppercase mb-3 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Join Our Creative Force
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Do You Want to Join the{" "}
              <span className="text-primary italic font-serif">Creatibuz Family?</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              We are constantly seeking ambitious designers, developers, and strategists
              who take craft seriously and love crafting world-class digital experiences.
            </p>

            {/* Open Positions List */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
              {CAREER_OPENINGS.map((opening) => (
                <div
                  key={opening.id}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-primary/15 text-primary mb-3">
                      {opening.department}
                    </span>
                    <h4 className="text-white font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                      {opening.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-y-1 gap-x-3 text-xs text-zinc-400 mt-4 pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {opening.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                      {opening.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <PrimaryButton
                text="Send Your Resume"
                icon={<Mail className="w-4 h-4" />}
                href="mailto:Info@creatibuzstudio.com?subject=Job%20Application%20at%20Creatibuz%20Studio"
                size="md"
              />

              <Link
                href="https://wa.me/+8801968657353"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-sm sm:text-base transition-all duration-300"
              >
                <span>Direct Contact on WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerCtaSection;
