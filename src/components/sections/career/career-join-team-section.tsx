"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartIcon } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { FooterSocial } from "@/components/layout/footer/footer-social";
import StackAvatar from "@/components/ui/stack-avatar";

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
          className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col md:flex-row md:items-end justify-between bg-[#ea4c00] min-h-[auto] md:min-h-[480px] lg:min-h-[520px]"
        >
          {/* Background Graphic: /Newsletter-bg-gradient.png */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
            <Image
              src="/Newsletter-bg-gradient.png"
              alt="Creatibuz Newsletter Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Left Text & Call to Action Container (Top on Mobile, Left on Desktop) */}
          <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-16 w-full md:w-[54%] lg:w-[56%] flex flex-col items-start justify-center self-center">
            {/* Career Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[12px] font-semibold mb-4 sm:mb-5 shadow-sm">
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
              If yes, you can be the next member of our Creatibuz Studio family.
            </p>

            {/* Join Our Team Button & Avatar Stack */}
            <div className="flex items-center gap-3 sm:gap-6">
              <PrimaryButton
                text="Join Our Team"
                href="mailto:Info@creatibuzstudio.com?subject=Job%20Application%20at%20Creatibuz%20Studio"
                variant="white"
                size="md"
              />

              {/* Overlapping Circle Avatars */}
              <StackAvatar
                size="lg"
                className="shrink-0 -my-4 sm:-my-6 pointer-events-none"
              />
            </div>
          </div>

          {/* Right Branding Image (Bottom on Mobile, Right on Desktop) */}
          <div className="relative z-10 w-full md:w-[46%] lg:w-[44%] flex items-end justify-center md:justify-end self-end px-4 sm:px-6 md:px-0 md:pr-4 lg:pr-8 pt-4 md:pt-0">
            <div className="relative w-[300px] sm:w-[360px] md:w-[440px] lg:w-[540px] xl:w-[580px] aspect-[532/434] shrink-0 self-end">
              <Image
                src="/branding.png"
                alt="Creatibuz Studio Founders"
                fill
                priority
                className="object-contain object-bottom"
              />
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
