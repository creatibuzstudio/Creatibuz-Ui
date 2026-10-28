"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutStats } from "./about/about-stats";
import { type StatsData } from "@/services/stats.service";

gsap.registerPlugin(ScrollTrigger);

const fullText =
  "Creatibuz Studio helps founders turn ideas into products people love to use. From strategy and UX to design and development, we work as an extension of your team to launch faster, reduce costly iterations, and create products built for growth. Trusted by SaaS, Fintech, B2B & Healthcare companies worldwide, we deliver experiences that attract users, increase conversions, & scale with your business from day one.";

const characters = Array.from(fullText);

interface AboutIntroSectionProps {
  initialStats?: StatsData | null;
}

export function AboutIntroSection({ initialStats }: AboutIntroSectionProps = {}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const maxProgressRef = useRef(0);
  const [revealedProgress, setRevealedProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      maxProgressRef.current = 1;
      setRevealedProgress(1);
      return;
    }

    // If page is loaded/refreshed while already at or past the about section,
    // don't pin at all—show full text immediately and allow normal scroll.
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= 150 && window.scrollY > 300) {
        maxProgressRef.current = 1;
        setRevealedProgress(1);
        return;
      }
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Smooth pinned reading experience with natural scroll continuation
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 150px",
          end: "+=550",
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          once: true,
          onUpdate: (self) => {
            // Forward-only reading progress: smoothly illuminates text letter by letter
            // Once revealed, text permanently stays visible without reversing
            if (self.progress > maxProgressRef.current) {
              maxProgressRef.current = self.progress;
              setRevealedProgress(self.progress);
            }
          },
        });
      });

      // Mobile: Shorter pinned reading distance adapted for touch screens
      mm.add("(max-width: 767px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 100px",
          end: "+=400",
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          once: true,
          onUpdate: (self) => {
            if (self.progress > maxProgressRef.current) {
              maxProgressRef.current = self.progress;
              setRevealedProgress(self.progress);
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-background flex justify-center">
      <div className="w-full lg:px-16 flex flex-col items-center md:items-start">
        <h2 className="text-primary text-2xl mb-8 font-sans">[ About Us ]</h2>

        <p
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-[32px] tracking-[-1px] text-primary-text text-center md:text-start hyphens-auto leading-relaxed select-none"
        >
          {characters.map((character, i) => {
            // Full text illuminates across the pinned scroll,
            // once revealed, it permanently stays visible without reversing.
            const targetProgress = (i + 1) / characters.length;
            const isRevealed = revealedProgress >= targetProgress;
            return (
              <span
                key={i}
                className={`transition-[color,opacity,filter] duration-150 ease-out font-light ${
                  isRevealed
                    ? "text-primary-text opacity-100 blur-none"
                    : "text-gray-400 opacity-40 blur-[1px]"
                }`}
              >
                {character}
              </span>
            );
          })}
        </p>

        {/* Dynamic Stats Row - always 100% visible, independent static component */}
        <AboutStats statsRef={statsRef} initialStats={initialStats} />
      </div>
    </div>
  );
}

export default AboutIntroSection;
