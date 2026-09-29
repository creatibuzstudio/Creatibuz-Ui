"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { navLinks } from "@/data/navigation.data";
import { handleSectionScroll } from "@/lib/scroll-utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden pointer-events-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 inset-x-4 z-50 lg:hidden pointer-events-auto bg-[#121214]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_24px_70px_rgba(0,0,0,0.8)] flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F85800] flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.5 7.5C16.1 5.4 13.7 4 11 4C6.58172 4 3 7.58172 3 12C3 16.4183 6.58172 20 11 20C14.2 20 17 18.1 18.2 15.5"
                      stroke="white"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-semibold text-sm">Creatibuz Studio</span>
                  <span className="text-[8px] tracking-[0.16em] text-gray-400">
                    DESIGN, DEVELOP, TRANSFORM
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 py-1">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleSectionScroll(e, link.href, onClose)}
                      className="group flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/15 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-[#F85800] transition-colors shrink-0">
                          <Icon className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-medium text-white group-hover:text-[#F85800] transition-colors leading-tight">
                            {link.name}
                          </span>
                          <span className="text-[11px] text-gray-400 font-normal mt-0.5">
                            {link.desc}
                          </span>
                        </div>
                      </div>

                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="https://calendly.com/jevxo-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-between bg-[#F85800] hover:bg-[#ff6914] text-white p-2.5 pl-4 rounded-2xl shadow-[0_0_20px_rgba(248,88,0,0.35)] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="font-semibold text-sm tracking-wide">Free UI/UX Audit</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#F85800]">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>

              <div className="flex items-center justify-between px-2 text-[11px] text-gray-400 font-normal">
                <span>⚡ 20-Min Build Scope Call</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Engineers Online
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
