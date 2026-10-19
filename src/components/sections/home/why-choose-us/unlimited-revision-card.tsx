import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { feedbackChatMessages } from "@/data/team.data";
import StackAvatar from "@/components/ui/stack-avatar";

export function UnlimitedRevisionCard() {
  return (
    <div className="md:col-span-3 relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
      <div className="w-full h-full rounded-2xl overflow-hidden p-6 sm:p-8 relative flex flex-col justify-between min-h-[380px] md:min-h-[400px] bg-[#0F1013]">
        <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />

        {/* Content Top */}
        <div className="relative z-10 mb-3.5">
          <h3 className="text-primary-text text-xl sm:text-2xl font-bold font-sans tracking-tight">
            Unlimited revision
          </h3>
          <p className="text-primary-text text-xs sm:text-sm font-sans mt-1 leading-relaxed">
            Enjoy unlimited revisions and lifetime support, ensuring your satisfaction at every stage.
          </p>
        </div>

        {/* Chat Box Widget */}
        <div className="mt-4 -mr-6 sm:-mr-8 -mb-6 sm:-mb-8 bg-[#161618] border-t border-l border-white/10 rounded-tl-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#0F1013] border-b border-white/[0.08] px-4 py-3 sm:px-5 sm:py-3.5">
            <span className="text-xs sm:text-sm font-medium text-white/90 font-sans tracking-tight">
              # Landing Animation Feedback
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center">
                <StackAvatar
                  size="md"
                  className="-my-5 sm:-my-6 md:-my-7 -mr-5 sm:-mr-6 pointer-events-none"
                />
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  5+
                </span>
              </div>
              <MoreVertical className="w-4 h-4 text-white/60 cursor-pointer hover:text-white transition-colors ml-0.5" />
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-3.5 font-sans p-4 sm:p-5">
            {feedbackChatMessages.map((msg, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-3.5">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/15 shrink-0 bg-[#222]">
                  <Image
                    src={msg.avatar}
                    alt={msg.name}
                    fill
                    sizes="36px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs sm:text-[13px] font-semibold text-white">
                      {msg.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-white/50">
                      — {msg.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[12.5px] text-white/80 mt-0.5 leading-snug">
                    {msg.text}
                    {msg.mention && (
                      <span className="text-[#3B82F6] font-medium ml-1">
                        {msg.mention}
                      </span>
                    )}
                  </p>
                </div>
                <MoreVertical className="w-4 h-4 text-white/40 hover:text-white/80 transition-colors shrink-0 mt-1 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlimitedRevisionCard;
