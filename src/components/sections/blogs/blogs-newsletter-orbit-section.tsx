"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

const ORBIT_DASH_SIZE = 12;
const ORBIT_DASH_GAP = 10;

export function BlogsNewsletterOrbitSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
    }, 800);
  };

  return (
    <SectionContainer
      showTopBorder={true}
      showBottomBorder={true}
      showVerticalBorders={false}
      crossMarkers={true}
      noPadding={true}
      containerClassName="bg-black"
      backgroundContent={
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          {/* Background Image direct copy from homepage orbit cta across full screen width */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/cta-bg.png"
              alt="CTA Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Ambient Center Glow across full screen width */}
          <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_700px_450px_at_50%_50%,rgba(254,90,0,0.24)_0%,rgba(254,90,0,0.06)_50%,transparent_80%)]" />

          {/* Concentric Dashed Orbit Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] flex items-center justify-center pointer-events-none z-0 scale-[0.45] sm:scale-[0.68] md:scale-[0.88] lg:scale-100 origin-center transition-transform duration-500">
            {/* Inner Ring (900px) */}
            <svg
              className="absolute pointer-events-none"
              style={{ width: "700px", height: "700px" }}
              viewBox="0 0 900 900"
            >
              <circle
                cx="450"
                cy="450"
                r="449"
                fill="none"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1.5"
                strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
              />
            </svg>
            {/* Middle Ring (1100px) */}
            <svg
              className="absolute pointer-events-none"
              style={{ width: "900px", height: "900px" }}
              viewBox="0 0 1100 1100"
            >
              <circle
                cx="550"
                cy="550"
                r="549"
                fill="none"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="1.5"
                strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
              />
            </svg>
            {/* Outer Ring (1300px) */}
            <svg
              className="absolute pointer-events-none"
              style={{ width: "1100px", height: "1100px" }}
              viewBox="0 0 1300 1300"
            >
              <circle
                cx="650"
                cy="650"
                r="649"
                fill="none"
                stroke="rgba(255, 255, 255, 0.14)"
                strokeWidth="1.5"
                strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
              />
            </svg>
          </div>
        </div>
      }
    >
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] flex items-center justify-center py-20 md:py-32 lg:py-36">
        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[19px] min-[380px]:text-[21px] min-[440px]:text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.25] sm:leading-[1.18] font-display mb-4 sm:mb-5"
          >
            <span className="whitespace-nowrap">Stay In The Loop And Keep Up</span>
            <br />
            With All Our{" "}
            <span className="font-serif italic font-normal text-white">
              News and Updates.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed"
          >
            Be the first to hear about our latest projects, design insights, and
            studio updates.
          </motion.p>

          {/* Newsletter Input Form */}
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full"
          >
            {isSubscribed ? (
              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1 flex items-center">
                  <Mail className="absolute left-4 w-5 h-5 text-zinc-400 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address ..."
                    className="w-full pl-12 pr-4 py-5 bg-white text-zinc-900 placeholder:text-zinc-500 rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary hover:bg-[#ff6a14] active:scale-[0.98] text-white text-[18px] sm:text-[20px] transition-all duration-200 shrink-0 shadow-[0_4px_20px_rgba(254,90,0,0.4)] disabled:opacity-60 cursor-pointer"
                >
                  <span>{isLoading ? "Subscribing..." : "Subscribe"}</span>
                  <ChevronRight className="w-7.5 h-7.5 stroke-2" />
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </SectionContainer>
  );
}

export default BlogsNewsletterOrbitSection;
