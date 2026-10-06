"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import type { FeaturedProject } from "@/data/featured-projects.data";

interface FeaturedWorkCardProps {
  project: FeaturedProject;
  bgColor: string;
  isFirstCard: boolean;
}

export function FeaturedWorkCard({
  project,
  bgColor,
  isFirstCard,
}: FeaturedWorkCardProps) {
  return (
    <div
      className="w-full relative transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <SectionContainer
        showTopBorder={true}
        showBottomBorder={true}
        crossMarkers={true}
        className="!p-0 !py-0 !px-0"
        containerClassName="w-full overflow-visible"
      >
        <div className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32">
          {/* Header Area ONLY on First Card */}
          {isFirstCard && (
            <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <span className="text-primary text-base md:text-xl font-medium mb-3 font-sans">
                [ Feature Work ]
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.18] max-w-5xl mx-auto">
                Explore my projects to experience innovative{" "}
                <span className="inline md:block">
                  design and uncover creative solution
                </span>
              </h2>
            </div>
          )}

          {/* Stack Image Showcase (Single 3-in-1 composite project set) */}
          <div className="relative w-full overflow-hidden border border-white/[0.08] shadow-2xl group/showcase">
            <Image
              src={project.image || project.images.hero.src}
              alt={project.title}
              width={project.images.hero.width || 3120}
              height={project.images.hero.height || 1560}
              priority={isFirstCard}
              className="w-full h-auto block object-contain select-none transition-transform duration-700 ease-out group-hover/showcase:scale-[1.01]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* 
            PREVIOUS MULTI-COLUMN GRID SYSTEM (Commented out for future use):
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 w-full items-stretch">
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="relative w-full overflow-hidden border border-white/[0.08] shadow-2xl group/hero">
                  <Image
                    src={project.images.hero.src}
                    alt="Main Project Display"
                    width={project.images.hero.width}
                    height={project.images.hero.height}
                    priority={isFirstCard}
                    className="w-full h-auto block object-contain select-none transition-transform duration-700 ease-out group-hover/hero:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 850px"
                  />
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col lg:justify-between gap-4 sm:gap-5 lg:gap-6">
                <div className="relative w-full overflow-hidden border border-white/[0.08] shadow-xl group/top">
                  <Image
                    src={project.images.rightTop.src}
                    alt="Secondary Preview Top"
                    width={project.images.rightTop.width}
                    height={project.images.rightTop.height}
                    className="w-full h-auto block object-contain select-none transition-transform duration-700 ease-out group-hover/top:scale-[1.02]"
                    sizes="(max-width: 1024px) 50vw, 420px"
                  />
                </div>

                <div className="relative w-full overflow-hidden border border-white/[0.08] shadow-xl group/bot">
                  <Image
                    src={project.images.rightBottom.src}
                    alt="Secondary Preview Bottom"
                    width={project.images.rightBottom.width}
                    height={project.images.rightBottom.height}
                    className="w-full h-auto block object-contain select-none transition-transform duration-700 ease-out group-hover/bot:scale-[1.02]"
                    sizes="(max-width: 1024px) 50vw, 420px"
                  />
                </div>
              </div>
            </div>
          */}

          {/* Project Info & CTA Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mt-10 md:mt-14 lg:mt-16 w-full">
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl lg:text-[40px] max-w-3xl font-bold text-[#ADADAD] tracking-tight leading-[1.2] font-sans whitespace-pre-line">
                {project.title}
              </h3>
              <p className="text-base md:text-xl max-w-5xl text-[#ADADAD] leading-relaxed mt-4 md:mt-6">
                {project.description}
              </p>
            </div>

            {/* <div className="shrink-0 pt-1">
              <Link
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-3.5 bg-primary hover:bg-primary/90 text-white font-medium text-sm sm:text-base pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(254,90,0,0.55)] hover:shadow-[0_0_45px_rgba(254,90,0,0.8)] hover:-translate-y-0.5 group/btn"
              >
                <span className="text-sm sm:text-base tracking-wide font-display">
                  View Project
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#FE5A00] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45 shadow-sm">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
              </Link>
            </div> */}
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-10 md:mt-14 lg:mt-16 w-full">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <span className="text-xl md:text-2xl text-[#ADADAD] tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm md:text-base lg:text-lg text-[#ADADAD] font-normal tracking-tight leading-tight mt-1.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default FeaturedWorkCard;
