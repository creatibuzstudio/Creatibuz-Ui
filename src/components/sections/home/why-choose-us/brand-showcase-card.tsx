import React from "react";
import Image from "next/image";

export function BrandShowcaseCard() {
  return (
    <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-sm flex flex-col min-h-[380px] md:min-h-[400px]">
      <div className="w-full h-full rounded-2xl overflow-hidden relative group bg-[#0B0B0B]">
        <Image
          src="/whyChooseUs/Card 02.png"
          alt="Creatibuz Studio Cap"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}

export default BrandShowcaseCard;
