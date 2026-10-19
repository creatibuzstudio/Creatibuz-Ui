import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import StackAvatar from "@/components/ui/stack-avatar";

export function LifetimeSupportCard() {
  const supportFeatures = [
    "Ongoing updates",
    "Priority Response Handing",
    "24/7 expert assistance",
  ];

  return (
    <div className="md:col-span-3 relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
      <div className="w-full h-full rounded-2xl overflow-hidden p-6 sm:p-7 relative flex flex-col justify-start min-h-[380px] md:min-h-[400px] bg-[#191919]">
        {/* Content Top */}
        <div className="mb-4">
          <h3 className="text-primary-text text-xl sm:text-2xl font-bold font-sans tracking-tight">
            Lifetime Support
          </h3>
          <p className="text-primary-text text-xs sm:text-sm mt-1.5 leading-relaxed">
            Enjoy unlimited revisions and lifetime support, ensuring your satisfaction at every stage.
          </p>
        </div>

        {/* List Container with Avatar Stack Header */}
        <div className="relative">
          <div className="absolute -top-1 right-0 left-0 bg-[#191919] border-2 border-white/15 rounded-2xl flex flex-col gap-2.5 shadow-xl">
            {/* Header Avatar Stack */}
            <div className="flex items-center bg-[#0F1013] px-8 py-4 rounded-t-2xl gap-1.5 mb-0.5">
              <div className="flex items-center">
                <StackAvatar
                  size="md"
                  className="-my-5 sm:-my-6 md:-my-7 -mr-5 sm:-mr-6 pointer-events-none"
                />
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  5+
                </span>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4 px-8 py-2 pb-5">
              {supportFeatures.map((feat) => (
                <div
                  key={feat}
                  className="bg-[#0F1013] rounded-lg px-6 py-4 flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-[5px] bg-[#00E676]/15 border border-[#00E676]/60 flex items-center justify-center text-[#00E676] shrink-0 shadow-[0_0_8px_rgba(0,230,118,0.25)]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary-text font-sans">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifetimeSupportCard;
