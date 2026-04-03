"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BarChart2, DollarSign, BookOpen, Home, MessageSquare } from "lucide-react";

// Helper component for floating animation logic
const FloatingNode = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{
      y: [0, -12, 0], // Moves up 12px and back
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export function CollageBuildings() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <FloatingNode className="absolute left-[10%] bottom-[5%] md:left-[30%] md:bottom-[10%]" delay={0}>
        <div className="flex flex-col items-start space-y-1 drop-shadow-2xl">
          {/* Flex column on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-500 to-emerald-400 text-3xl md:text-4xl font-black tracking-tighter leading-none">
              AI-Driven ERP Suite
            </span>
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-emerald-400/80 to-transparent opacity-80 md:hidden" />
            <span className="text-white text-2xl md:text-4xl text-end  font-light tracking-tight opacity-90 leading-none">
              for Your College
            </span>
          </div>

          {/* The underline gradient */}
         <div className="hidden md:block h-[2px] w-full bg-gradient-to-r from-blue-500 via-emerald-400/70 to-transparent opacity-80" />
        </div>
      </FloatingNode>

      {/* Top Left - Library */}
      <FloatingNode className="absolute left-[10%] top-[25%] md:left-[20%] md:top-[15%]" delay={0}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-1 py-1 md:px-4 md:py-3 flex flex-col items-center border border-white/5">
          <BookOpen className="text-blue-400 w-5 h-5 md:w-7 md:h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Faculty</span>
        </div>
      </FloatingNode>


      {/* Top Left - Library */}
      <FloatingNode className="absolute right-[35%] top-[15%] md:right-[30%] md:top-[15%]" delay={0}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-1 py-1 md:px-4 md:py-3 flex flex-col items-center border border-white/5">
          <MessageSquare className="text-blue-400 w-5 h-5 md:w-7 md:h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Communication</span>
        </div>
      </FloatingNode>

      {/* Top Right - Faculty */}
      <FloatingNode className="absolute right-[10%] top-[25%]" delay={0.5}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-1 py-1 md:px-4 md:py-3 flex flex-col items-center border border-white/5">
          <GraduationCap className="text-blue-400 w-5 h-5 md:w-7 md:h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Students</span>
        </div>
      </FloatingNode>

      {/* Center Right - Fees (Highlighted) */}
      <FloatingNode className="absolute left-[78%] top-[70%] md:left-[78%] md:top-[55%]" delay={1.2}>
        <div className="bg-[#181A20] rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.2)] px-1 py-1 md:px-4 md:py-3 flex flex-col items-center border border-emerald-500/50">
          <DollarSign className="text-emerald-400 w-5 h-5 md:w-7 md:h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Fees</span>

        </div>
      </FloatingNode>

      {/* Middle Left - Analytics */}
      <FloatingNode className="absolute left-[35%] top-[73%] md:left-[15%] md:top-[40%]" delay={0.8}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-1 py-1 md:px-4 md:py-3 flex flex-col items-center border border-white/5">
          <BarChart2 className="text-blue-400 w-5 h-5 md:w-7 md:h-7 mb-1" />
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Perfomance</span>
            <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" /> LIVE
            </span>
          </div>
        </div>
      </FloatingNode>

      {/* Bottom Left - Hostel */}
      <FloatingNode className="absolute left-[5%] bottom-[25%] md:left-[25%] md:bottom-[25%]" delay={1.5}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-1 py-1 md:px-4 md:py-3 flex flex-col items-center border border-white/5">
          <Home className="text-blue-400 w-5 h-5 md:w-7 md:h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Parents</span>
        </div>
      </FloatingNode>

    </div>
  );
}