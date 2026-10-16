"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartIcon } from "lucide-react";
import { FooterSocial } from "@/components/layout/footer/footer-social";
import { AvatarStack } from "@/components/sections/blogs/avatar-stack";

export function CareerJoinTeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0E12]">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[500px] md:min-h-[520px] flex items-center bg-[#ea4c00]"
        >
          {/* Background Graphic with Founders */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
            <Image
              src="/Team/Newsletter Section.png"
              alt="Want to be a Creatibuz Studio Team like us?"
              fill
              priority
              className="object-cover object-[75%_center] sm:object-right-top md:object-right"
            />
          </div>

          {/* Left Text & Call to Action Container */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-xl lg:max-w-2xl flex flex-col items-start justify-center">
            {/* Career Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[12px] font-semibold mb-4 sm:mb-5 shadow-sm">
              <HeartIcon className="w-3.5 h-3.5 text-white fill-white" />
              <span>Career</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 font-sans">
              Want to be a Creatibuz <br />
              Studio Team like us?
            </h2>

            {/* Description Paragraph */}
            <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md font-normal">
              Are you a talented and self-motivated person with a positive vibe?
              If yes, you can be the next member of our Monks family.
            </p>

            {/* Join Our Team Button & Avatar Stack */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="mailto:Info@creatibuzstudio.com?subject=Job%20Application%20at%20Creatibuz%20Studio"
                className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-black pl-5 sm:pl-6 pr-2 py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer shrink-0"
              >
                <span>Join Our Team</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </Link>

              {/* Overlapping Circle Avatars */}
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
          className="text-zinc-400 text-[13.5px] sm:text-base max-w-2xl mx-auto text-center leading-relaxed mt-12 sm:mt-16 mb-8 font-normal"
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

export default CareerJoinTeamSection;
