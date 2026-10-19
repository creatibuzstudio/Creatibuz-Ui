"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { getCalApi } from "@calcom/embed-react";
import { X } from "lucide-react";
import { CAL_CONFIG } from "@/config/cal.config";
import { cn } from "@/lib/utils";

// Dynamically import Cal to ensure zero SSR mismatch
const Cal = dynamic(() => import("@calcom/embed-react"), {
  ssr: false,
});

// Event names for opening/closing the Cal modal
const OPEN_CAL_EVENT = "open-cal-modal";
const CLOSE_CAL_EVENT = "close-cal-modal";

/**
 * Open Cal.com modal popup directly without leaving the website.
 */
export function openCalModal(calLink: string = CAL_CONFIG.calLink) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(OPEN_CAL_EVENT, { detail: { calLink } })
    );
  }
}

/**
 * Close Cal.com modal popup.
 */
export function closeCalModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CLOSE_CAL_EVENT));
  }
}

export function CalProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCalLink, setActiveCalLink] = useState(CAL_CONFIG.calLink);

  const handleOpen = useCallback((event: Event) => {
    const customEvent = event as CustomEvent<{ calLink?: string }>;
    if (customEvent.detail?.calLink) {
      setActiveCalLink(customEvent.detail.calLink);
    }
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: CAL_CONFIG.theme,
          styles: {
            branding: {
              brandColor: CAL_CONFIG.brandColor,
            },
          },
          hideEventTypeDetails: false,
          layout: CAL_CONFIG.layout,
        });
      } catch (err) {
        console.error("Cal.com init error:", err);
      }
    })();
  }, []);

  useEffect(() => {
    window.addEventListener(OPEN_CAL_EVENT, handleOpen);
    window.addEventListener(CLOSE_CAL_EVENT, handleClose);
    return () => {
      window.removeEventListener(OPEN_CAL_EVENT, handleOpen);
      window.removeEventListener(CLOSE_CAL_EVENT, handleClose);
    };
  }, [handleOpen, handleClose]);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cal-modal-title"
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 transition-all duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      )}
    >
      {/* 
        Glass-like Blurred Backdrop:
        Occupies remaining ~20% of the screen around the modal, allowing
        the website behind to be faintly visible. Clicking here closes in 1 click!
      */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* 
        Modal Box:
        Occupies ~80-85% of screen viewport, perfectly centered with rounded corners,
        subtle border, and deep ambient shadow.
      */}
      <div
        className={cn(
          "relative z-10 w-[92vw] max-w-5xl h-[86vh] max-h-[820px]",
          "bg-[#0E0F12] border border-white/10 rounded-2xl md:rounded-3xl",
          "shadow-[0_25px_80px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden",
          "transition-transform duration-300",
          isOpen ? "scale-100" : "scale-95"
        )}
      >
        {/* Top Header: Branding, Description & 1-Click Close Button */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10 bg-[#121316]/95 backdrop-blur-sm shrink-0">
          <div className="flex flex-col pr-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FE5A00] animate-pulse shrink-0" />
              <h3
                id="cal-modal-title"
                className="text-white text-sm sm:text-base font-semibold tracking-tight"
              >
                {CAL_CONFIG.title}
              </h3>
            </div>
            {CAL_CONFIG.description && (
              <p className="text-zinc-400 text-xs sm:text-[13px] line-clamp-1 mt-0.5 font-normal">
                {CAL_CONFIG.description}
              </p>
            )}
          </div>

          {/* 1-Click Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer shrink-0"
            aria-label="Close scheduling modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Calendar Body: Official Cal.com React Embed with Handshake */}
        <div className="relative flex-1 w-full h-full min-h-0 bg-[#0E0F12] overflow-y-auto">
          <Cal
            calLink={activeCalLink}
            style={{
              width: "100%",
              height: "100%",
              minHeight: "600px",
              overflow: "auto",
            }}
            config={{
              layout: CAL_CONFIG.layout,
              theme: CAL_CONFIG.theme,
            }}
          />
        </div>
      </div>
    </div>
  );
}
