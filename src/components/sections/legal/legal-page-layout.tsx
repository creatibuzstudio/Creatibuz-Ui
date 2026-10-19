"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ShieldCheck, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPageLayout({
  badge,
  title,
  titleAccent,
  subtitle,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  const [activeSectionId, setActiveSectionId] = React.useState<string>(
    sections[0]?.id || ""
  );

  React.useEffect(() => {
    if (!sections || sections.length === 0) return;

    const handleScroll = () => {
      // 1. If at the top of the page (hero area), keep section 1 active
      if (window.scrollY < 280) {
        setActiveSectionId(sections[0].id);
        return;
      }

      // 2. If at the very bottom of the page, keep the last section active
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSectionId(sections[sections.length - 1].id);
        return;
      }

      const centerY = window.innerHeight / 2;
      // 500px - 550px detection area centered on the viewport:
      // ~260px above center and ~260px below center (covers user's specified 250-300px window)
      const zoneAbove = 260; // 250-300px above center
      const zoneBelow = 260; // 250-300px below center
      const zoneTop = centerY - zoneAbove;
      const zoneBottom = centerY + zoneBelow;

      let bestSectionId = "";
      let highestScore = -1;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // Calculate overlap within the 500px center zone [zoneTop, zoneBottom]
        const overlapTop = Math.max(rect.top, zoneTop);
        const overlapBottom = Math.min(rect.bottom, zoneBottom);
        const overlap = Math.max(0, overlapBottom - overlapTop);

        if (overlap <= 0) continue;

        // Check if section spans across the center line
        const coversCenter = rect.top <= centerY && rect.bottom >= centerY;

        // Weighted presence score inside the 500px center band
        const score = overlap + (coversCenter ? 150 : 0);

        if (score > highestScore) {
          highestScore = score;
          bestSectionId = section.id;
        }
      }

      if (bestSectionId) {
        setActiveSectionId(bestSectionId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleSectionClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSectionId(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="relative w-full">
      {/* 1. Hero Section with Ambient Glow Backdrop (Preserved from original FAQ header design) */}
      <section className="relative w-full pt-36 sm:pt-40 md:pt-44 pb-20 md:pb-32 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 inset-x-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden select-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 inset-0 bg-gradient-to-b from-[#0C0E12]/40 via-[#0C0E12]/80 to-[#0C0E12]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-zinc-300">Legal</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-primary font-medium">{title} {titleAccent}</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-primary text-xs sm:text-sm font-medium mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>{badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-header-text tracking-tight leading-[1.12] mb-6 font-sans"
          >
            {title}{" "}
            <span className="font-serif italic font-medium text-primary">
              {titleAccent}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-text text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6 font-normal"
          >
            {subtitle}
          </motion.p>

          {/* Last Updated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-400 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full"
          >
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>Last Updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Legal Content wrapped in SectionContainer with Top Border & Cross Sparks */}
      <SectionContainer
        extendTopBorder={false}
        showTopBorder={true}
        crossMarkers={true}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Quick Navigation / Table of Contents (Sticky on Desktop) */}
            <aside className="lg:col-span-4 flex flex-col space-y-4 lg:sticky lg:top-28 self-start">
              <div className="p-6 rounded-2xl bg-[#14161C] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Document Outline</span>
                </div>
                <nav className="flex flex-col space-y-1.5">
                  {sections.map((section, idx) => {
                    const isActive = activeSectionId === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => handleSectionClick(section.id, e)}
                        className={`text-xs sm:text-sm py-2 px-3 rounded-lg flex items-center justify-between transition-all duration-200 group ${
                          isActive
                            ? "text-primary bg-primary/10 border-l-2 border-primary font-semibold pl-2.5 shadow-sm"
                            : "text-zinc-400 hover:text-white hover:bg-white/[0.04] font-normal"
                        }`}
                      >
                        <span className="truncate">
                          <span
                            className={`mr-1.5 ${
                              isActive
                                ? "text-primary font-bold"
                                : "text-zinc-500 group-hover:text-zinc-300"
                            }`}
                          >
                            {idx + 1}.
                          </span>
                          {section.title}
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform shrink-0 ${
                            isActive
                              ? "text-primary translate-x-0.5"
                              : "text-zinc-600 group-hover:text-zinc-400"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Need Clarification Support Box */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-zinc-400 flex flex-col space-y-2">
                <span className="text-white font-medium">Questions about these terms?</span>
                <p className="leading-relaxed">
                  Our legal and operations team is here to assist. Email us at{" "}
                  <a
                    href="mailto:Info@creatibuzstudio.com"
                    className="text-primary hover:underline font-medium"
                  >
                    Info@creatibuzstudio.com
                  </a>
                </p>
              </div>
            </aside>

            {/* Document Body (Detailed reading view) */}
            <article className="lg:col-span-8 flex flex-col space-y-12 text-zinc-300 leading-relaxed text-sm sm:text-base">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 p-7 sm:p-9 rounded-2xl bg-[#14161C]/80 border border-white/10 shadow-lg"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </h2>
                  <div className="text-zinc-300/90 space-y-4 font-normal text-[15px] sm:text-base leading-relaxed">
                    {section.content}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
