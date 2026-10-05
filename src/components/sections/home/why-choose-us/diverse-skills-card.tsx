import React from "react";
import Image from "next/image";
import { diverseTeamMembers, aiLogosGrid } from "@/data/team.data";

export function DiverseSkillsCard() {
  return (
    <div className="md:col-span-5 relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
      <div className="w-full h-full rounded-2xl overflow-hidden relative min-h-[380px] md:min-h-[400px] bg-gradient-to-br from-[#191919] via-[#090909] to-[#252525]">
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#252525] blur-[85px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#252525] blur-[70px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 p-5 sm:p-6 relative z-10 h-full items-stretch">
          {/* Left Pane: Diverse Skill Set */}
          <div className="lg:col-span-6 relative p-[0.5px] bg-gradient-to-br from-white/10 to-white/25 rounded-xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-[#171717] rounded-xl flex flex-col justify-center">
              <div className="px-4 md:px-6 pt-7 pb-2">
                <h4 className="text-primary-text text-xl sm:text-2xl font-semibold tracking-tight">
                  Diverse Skill Set
                </h4>
              </div>

              <div className="font-sans flex flex-col">
                {diverseTeamMembers.map((member, i) => (
                  <div
                    key={`${member.name}-${i}`}
                    className={`px-4 py-2 flex items-center justify-between gap-4 ${
                      i > 0 ? "border-t border-white/[0.08]" : ""
                    } ${i === diverseTeamMembers.length - 1 ? "pb-4" : ""}`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative shrink-0 w-10 h-10 rounded-full p-0.5 border border-white/20">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={36}
                          height={36}
                          className="w-full h-full rounded-full shrink-0 object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm sm:text-base font-semibold text-primary-text truncate">
                          {member.name}
                        </p>
                        <p className="text-xs text-primary-text/60 truncate mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end shrink-0 gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] sm:text-[10px] px-1.5 py-1 rounded-xs bg-[#2E2E2E] text-foreground whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Pane: AI-Assisted Launches */}
          <div className="lg:col-span-6 flex flex-col justify-center py-1">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold font-sans tracking-tight">
                AI-Assisted Launches
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans mt-2 leading-relaxed">
                Product launches with AI-assisted workflows that Reduce repetitive
                tasks and launch digital products more efficiently with faster
                execution.
              </p>
            </div>

            {/* 8 AI Logos Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mt-4 sm:mt-8">
              {aiLogosGrid.map((logoSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={logoSrc}
                    alt={`AI Tool Logo ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiverseSkillsCard;
