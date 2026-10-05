import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { feedbackChatMessages } from "@/data/team.data";

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
        <div className="relative">
          <div className="absolute -bottom-9 -right-8 z-10 bg-[#1A1A1A] border border-white/10 rounded-tl-xl scale-x-105 scale-y-105 flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#0F1013] border-b border-white/[0.08] rounded-tl-xl p-4">
              <span className="text-xs sm:text-sm font-semibold text-primary-text font-sans flex items-center gap-1.5">
                # Landing Animation Feedback
              </span>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Avatar 1"
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full border border-[#121212] object-cover"
                  />
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Avatar 2"
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full border border-[#121212] object-cover -ml-1.5"
                  />
                  <Image
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Avatar 3"
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full border border-[#121212] object-cover -ml-1.5"
                  />
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center -ml-1.5 shrink-0 shadow-[0_0_30px_rgba(248,88,0,1)]">
                    <Image
                      src="/creatibuz-symbol.png"
                      alt="Creatibuz"
                      width={15}
                      height={15}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-foreground ml-1.5">
                    5+
                  </span>
                </div>
                <MoreVertical className="w-4 h-4 text-foreground cursor-pointer hover:text-primary-text transition-colors" />
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 font-sans p-4">
              {feedbackChatMessages.map((msg, i) => (
                <div key={i} className="flex items-start gap-6">
                  <Image
                    src={msg.avatar}
                    alt={msg.name}
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 shrink-0 object-cover mt-0.5"
                  />
                  <div className="flex-1 min-w-0 pb-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-semibold text-primary-text">
                        {msg.name}
                      </span>
                      <span className="text-[10px] text-primary-text/60">
                        — {msg.time}
                      </span>
                    </div>
                    <p className="text-xs text-primary-text mt-0.5 leading-snug">
                      {msg.text}
                      {msg.mention && (
                        <span className="text-[#3B82F6] font-medium">
                          {msg.mention}
                        </span>
                      )}
                    </p>
                  </div>
                  <MoreVertical className="w-4 h-4 text-primary-text shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlimitedRevisionCard;
