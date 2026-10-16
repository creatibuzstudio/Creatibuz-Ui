"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FooterSocial } from "@/components/layout/footer/footer-social";
import { AvatarStack } from "./avatar-stack";

export function BlogsBrandCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0E12] py-12 sm:py-16 md:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/10 min-h-[460px] sm:min-h-[500px] md:min-h-[520px] flex items-center bg-[#ea4c00]"
        >
          {/* Background Graphic with Founders */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
            <Image
              src="/Team/Newsletter Section.png"
              alt="Creatibuz Studio Founders"
              fill
              priority
              className="object-cover object-[75%_center] sm:object-right-top md:object-right"
            />
            {/* Responsive gradient overlay ensuring razor-sharp text readability on mobile and desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ea4c00] via-[#ea4c00]/95 via-45% to-transparent sm:via-40% pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden pointer-events-none" />
          </div>

          {/* Left Text & Call to Action Container */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-xl lg:max-w-2xl flex flex-col items-start justify-center">
            {/* Powerful Features Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[12px] font-semibold mb-4 sm:mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-white fill-white" />
              <span>Powerful Features</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 font-sans">
              Your Brand Deserves
              <br />
              the Next Level!
            </h2>

            {/* Description Paragraph */}
            <p className="text-white/95 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-lg font-normal">
              Creatibuz Studio is your trusted technology partner - A full-service
              UI/UX and development agency helping startups and businesses
              create fast, scalable, and user-focused digital products.
            </p>

            {/* CTA Button & Avatar Stack Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="mailto:Info@creatibuzstudio.com?subject=Project%20Inquiry%20from%20Blog"
                className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-black pl-5 sm:pl-6 pr-2 py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer shrink-0"
              >
                <span>Join Our Team</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </Link>

              {/* Overlapping Circle Avatars Stack */}
              <AvatarStack />
            </div>
          </div>
        </motion.div>

        {/* Mission Statement Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mt-12 sm:mt-16 mb-8 font-normal px-4"
        >
          Say goodbye to outdated enterprise software and welcome the smoother
          one. We lead you from design to product innovation to shape your path
          from idea to success
        </motion.p>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center pb-4"
        >
          <FooterSocial />
        </motion.div>
      </div>
    </section>
  );
}

export default BlogsBrandCtaSection;
