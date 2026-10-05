import React from "react";
import Image from "next/image";

export function FlexiblePlansCard() {
  return (
    <div className="md:col-span-3 relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
      <div className="w-full h-full rounded-2xl overflow-hidden p-6 sm:p-7 relative flex flex-col justify-start min-h-[380px] md:min-h-[400px] bg-gradient-to-br from-[#191919] via-[#090909] to-[#252525]">
        {/* Ambient warm glow at bottom right */}
        <div className="absolute -bottom-14 -right-14 w-72 h-72 rounded-full bg-[#FE5A00]/25 blur-[75px] pointer-events-none" />

        {/* Top Content */}
        <div className="relative z-10">
          <h3 className="text-primary-text text-xl sm:text-2xl font-bold font-sans tracking-tight">
            Flexible Payment Plans
          </h3>
          <p className="text-primary-text text-xs sm:text-sm font-sans mt-1 mb-4">
            Pay your way
          </p>

          {/* Switcher pills */}
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-card text-primary-text rounded-sm py-1.5 px-3 text-xs">
              Monthly
            </div>
            <div className="bg-card text-primary-text rounded-sm py-1.5 px-3.5 text-xs">
              Quarterly
            </div>
            <div className="bg-card text-primary-text rounded-sm py-1.5 px-3.5 text-xs">
              Annually
            </div>
          </div>

          {/* Bullet points */}
          <div className="space-y-1.5 text-xs sm:text-sm text-primary-text font-sans">
            <p>• No commitment</p>
            <p>• Cancel anytime</p>
            <p>• No Extra Fees</p>
          </div>
        </div>

        {/* Payment Cards visual */}
        <div className="absolute -bottom-12 -right-28 sm:-right-24 md:-right-36 w-[340px] sm:w-[380px] md:w-[450px] h-[240px] sm:h-[300px] md:h-[400px] pointer-events-none z-10">
          <Image
            src="/whyChooseUs/Card Image.png"
            alt="Payment Cards"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default FlexiblePlansCard;
