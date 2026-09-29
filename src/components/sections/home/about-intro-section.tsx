"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutStats } from "./about/about-stats";

gsap.registerPlugin(ScrollTrigger);

const fullText =
  "Creatibuz Studio helps founders turn ideas into products people love to use. From strategy and UX to design and development, we work as an extension of your team to launch faster, reduce costly iterations, and create products built for growth. Trusted by SaaS, Fintech, B2B & Healthcare companies worldwide, we deliver experiences that attract users, increase conversions, & scale with your business from day one.";

const words = fullText.split(" ");

export function AboutIntroSection() {
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
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-background flex justify-center">
      <div className="w-full lg:px-16 flex flex-col items-start">
        <h2 className="text-primary text-2xl mb-8 font-sans">[ About Us ]</h2>

        {/* Scroll Reveal Main Paragraph */}
        <p
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-[32px] tracking-[-1px] text-primary-text text-justify hyphens-auto"
        >
          {words.map((word, i) => {
            const targetProgress = (i + 1) / words.length;
            const isRevealed = scrollProgress >= targetProgress;
            return (
              <span
                key={i}
                style={{
                  transitionDelay: `${Math.min(i * 6, 200)}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`inline-block mr-[0.25em] transition-all duration-500 ${
                  isRevealed
                    ? "text-primary-text font-light opacity-100 blur-none translate-y-0"
                    : "text-gray-400 font-light opacity-40 blur-[3px] translate-y-1"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Dynamic Stats Row */}
        <AboutStats statsRef={statsRef} />
      </div>
    </div>
  );
}

export default AboutIntroSection;
