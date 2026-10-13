"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FooterSocial } from "@/components/layout/footer/footer-social";

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
          className="relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/10 min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex items-center"
        >
          {/* Background Graphic with Founders */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
            <Image
              src="/Team/Newsletter Section.png"
              alt="Want to be a Creatibuz Studio Team like us?"
              fill
              priority
              className="object-cover object-right sm:object-right-top"
            />
            {/* Left dark-orange gradient to ensure text contrast on smaller screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6e2200]/95 via-[#a53600]/80 to-transparent sm:via-transparent pointer-events-none" />
          </div>

          {/* Left Text & Call to Action Container */}
          <div className="relative z-10 p-7 sm:p-12 md:p-16 max-w-2xl flex flex-col items-start justify-center">
            {/* Career Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA4C00] border border-white/20 text-white text-[12px] font-semibold mb-5 sm:mb-6 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-white fill-white" />
              <span>Career</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-5 font-sans">
              Want to be a Creatibuz <br />
              Studio Team like us?
            </h2>

            {/* Description Paragraph */}
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
              Are you a talented and self-motivated person with a positive vibe?
              If yes, you can be the next member of our Monks family.
            </p>

            {/* Join Our Team Button */}
            <Link
              href="mailto:Info@creatibuzstudio.com?subject=Job%20Application%20at%20Creatibuz%20Studio"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-black pl-6 sm:pl-7 pr-2 py-2 rounded-full font-semibold text-sm sm:text-base shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer"
            >
              <span>Join Our Team</span>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </Link>
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
