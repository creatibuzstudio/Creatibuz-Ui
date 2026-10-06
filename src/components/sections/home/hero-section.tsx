"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { bannerService } from "@/services/banner.service";
import {
  defaultHeroMockupsRow1,
  defaultHeroMockupsRow2,
} from "@/data/projects.data";
import { HeroMarquee } from "./hero/hero-marquee";

export function HeroSection() {
  const [row1, setRow1] = useState<string[]>(defaultHeroMockupsRow1);
  const [row2, setRow2] = useState<string[]>(defaultHeroMockupsRow2);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const banners = await bannerService.getAllBanners();
        if (banners && banners.length > 0) {
          const sorted = [...banners].sort((a, b) => (a.order || 0) - (b.order || 0));
          const active = sorted.filter((b) => b.isActive !== false);
          const urls = active.map((b) => b.photoUrl).filter(Boolean);

          if (urls.length > 0) {
            const half = Math.ceil(urls.length / 2);
            setRow1(urls.slice(0, half));
            setRow2(urls.slice(half));
          }
        }
      } catch {
        // Silently preserve default mockups
      }
    };
    fetchBanners();
  }, []);

  return (
    <div className="w-full flex flex-col bg-background">
      <div className="relative w-full overflow-hidden bg-background">
        {/* Figma Grid Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/grid-bg.png"
            alt="Hero Grid Background"
            fill
            priority
            className="object-cover object-top -translate-y-3"
          />
        </div>

        {/* Center ambient radial light for depth */}
        <div className="absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(ellipse_950px_500px_at_50%_40%,rgba(255,255,255,0.025)_0%,rgba(8,8,8,0)_80%)] pointer-events-none z-0" />

        {/* Main Hero Content */}
        <section className="relative z-10 w-full">
          <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-37.5 pb-16 md:pb-20 lg:pb-24 w-full max-w-6xl mx-auto">
            {/* Spinning Brand Border Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="relative p-[1px] inline-flex items-center justify-center overflow-hidden rounded-full mb-8 sm:mb-10 group transition-all duration-300 bg-white/10 shadow-[0_0_15px_rgba(254,90,0,0.05)]"
            >
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, transparent 75%, #FE5A00 95%, transparent 100%)",
                  }}
                  className="w-[500px] h-[500px] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 bg-[#141414] px-2.5 pr-4 py-2 rounded-full transition-colors duration-300">
                <Image
                  src="/hero1.png"
                  alt="SaaS Tool Stack"
                  width={470}
                  height={118}
                  unoptimized
                  className="h-4 sm:h-[25px] w-auto object-contain shrink-0 brightness-110"
                />
                <span className="text-[12px] sm:text-[13px] font-medium text-gray-200 tracking-tight font-sans">
                  Helped 50+ SaaS founders & startups
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal md:font-medium font-sans text-white text-center leading-[1.12] sm:leading-[1.14] tracking-[-0.03em] max-w-5xl mx-auto"
            >
              We Are UI/UX Design{" "}
              <span className="font-serif italic font-normal text-white">&amp;</span>
              <br />
              Development Partner For SaaS
              <br />
              Founders{" "}
              <span className="font-serif italic font-normal text-white">&amp;</span> Startups
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 text-zinc-400 text-center font-normal text-base sm:text-lg md:text-[18px] lg:text-[19px] leading-[1.6] max-w-2xl mx-auto font-sans"
            >
              A full-service UI/UX and development agency helping startups and
              businesses create fast, scalable, and user-focused digital products.
            </motion.p>

            {/* Primary CTA Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-12 sm:mt-16 flex justify-center w-full"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative group inline-flex items-center justify-center"
              >
                <div className="absolute -inset-3 sm:-inset-4 bg-primary/50 rounded-full blur-2xl group-hover:bg-primary/75 group-hover:blur-3xl transition-all duration-500 pointer-events-none" />

                <Link
                  href="https://calendly.com/jevxo-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-5 bg-primary hover:bg-[#ff6814] text-white pl-6 sm:pl-8 pr-2 sm:pr-2.5 py-2 sm:py-2 rounded-full font-medium text-[15px] sm:text-[20px] shadow-[0_0_30px_rgba(248,88,0,0.35)] transition-all duration-300 font-display"
                >
                  <span className="tracking-tight">Schedule a Meeting</span>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4 sm:w-8 sm:h-8 stroke-2" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </main>
        </section>

        {/* Hero Showcase Marquee */}
        <HeroMarquee row1={row1} row2={row2} />
      </div>
    </div>
  );
}

export default HeroSection;
