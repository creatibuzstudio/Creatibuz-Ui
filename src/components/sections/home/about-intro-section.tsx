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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 20, filter: "blur(3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 95%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    const updateProgress = () => {
      if (mediaQuery.matches) {
        setScrollProgress(1);
        return;
      }

      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-background flex justify-center">
      <div className="w-full lg:px-16 flex flex-col items-start">
        <h2 className="text-primary text-2xl mb-8 font-sans">[ About Us ]</h2>

        <p
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-[32px] tracking-[-1px] text-primary-text text-justify hyphens-auto"
        >
          {characters.map((character, i) => {
            const targetProgress = (i + 1) / characters.length;
            const isRevealed = scrollProgress >= targetProgress;
            return (
              <span
                key={i}
                className={`transition-[color,opacity,filter] duration-150 ease-out ${
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

        {/* Dynamic Stats Row */}
        <AboutStats statsRef={statsRef} initialStats={initialStats} />
      </div>
    </div>
  );
}

export default AboutIntroSection;
