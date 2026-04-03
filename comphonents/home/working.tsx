"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { LogIn, UserPlus, Zap, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "Secure Authentication",
    description: "Experience a fortified entry point. Our multi-tenant architecture ensures that administrators, faculty, and students access a personalized workspace with bank-grade security.",
    icon: <LogIn className="w-6 h-6 text-blue-400" />,
    img: "/step1.jpg",
    step: "01",
    bgColor: "#0A0A0A"
  },
  {
    title: "Onboard Users & Data",
    description: "Seamlessly transition your entire institution. Bulk-import thousands of records in seconds while our AI engine categorizes and links students to their respective courses and fees.",
    icon: <UserPlus className="w-6 h-6 text-blue-400" />,
    img: "/step2.jpg",
    step: "02",
    bgColor: "#111111"
  },
  {
    title: "Scale Success & Growth",
    description: "Unleash the power of automation. From real-time attendance tracking to automated fee reminders, campus360 reduces administrative overhead so you can focus on academic excellence.",
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    img: "/step3.jpg",
    step: "03",
    bgColor: "#1A1A1A"
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="h-[400vh] bg-black" id="working">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* SECTION HEADER */}
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]),
            y: useTransform(smoothProgress, [0, 0.1], [-30, 0])
          }}
          className="absolute top-12 md:top-10 text-center z-50"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-300 text-ms mb-8 ">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.65)]"></span>
          How It Works
        </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-white">
            How campus360 Operates
          </h2>
        </motion.div>

        {/* STACKING CARDS CONTAINER */}
        <div className="relative w-full max-w-6xl h-[75vh] md:h-[60vh] mt-20">
          {steps.map((step, index) => {
            const start = index / steps.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(smoothProgress, [start - 0.1, start], ["100vh", "0vh"]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(smoothProgress, [start, start + 0.1], [1, 0.95]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const brightness = useTransform(smoothProgress, [start, start + 0.1], ["brightness(1)", "brightness(0.5)"]);

            // Alternating logic: Even index = Text Left, Odd index = Text Right
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                style={{ 
                  y, 
                  scale,
                  filter: brightness,
                  zIndex: index + 10,
                  backgroundColor: step.bgColor
                }}
                className={`absolute inset-0 rounded-[2rem] md:rounded-[3.5rem] border border-white/10 p-8 md:p-16 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 shadow-[0_-20px_60px_rgba(0,0,0,0.8)]`}
              >
                {/* Content Section */}
                <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                  <div className={`flex items-center justify-center ${isReversed ? 'md:justify-end' : 'md:justify-start'} md:justify-start gap-4`}>
                    <div className="p-3 bg-black/50 rounded-2xl border border-blue-500/25 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      {step.icon}
                    </div>
                    <span className="text-blue-400 font-mono text-sm font-bold tracking-widest uppercase">
                      Phase {step.step}
                    </span>
                  </div>
                  
                  <h3 className={`text-white text-3xl md:text-5xl font-bold leading-tight ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-gray-400 text-sm md:text-lg leading-relaxed max-w-md ${isReversed ? 'md:ml-auto md:text-right' : ''}`}>
                    {step.description}
                  </p>
                </div>

                {/* Visual Section */}
                <div className="flex-1 w-full h-[250px] md:h-full">
                  <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-blue-500/15 z-10" />
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER SCROLL GUIDE */}
        <motion.div 
           style={{ opacity: useTransform(smoothProgress, [0.9, 1], [1, 0]) }}
           className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30"
        >
           <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
           <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Keep Scrolling</span>
        </motion.div>
      </div>
    </div>
  );
}