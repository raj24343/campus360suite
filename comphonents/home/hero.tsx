"use client";

import React, { useRef, useEffect, useState } from "react";
import { CollageBuildings } from "./CollageBuildings";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * 1. THE PHYSICS: Increased Stiffness & Damping
   * Stiffness 200 + Damping 30 creates a very "high-end" responsive feel.
   * It eliminates the "lag" behind the scroll wheel while keeping it buttery.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /**
   * 2. THE TIMING: Fast & Focused
   * We finish the core transition within the first 30% of the scroll.
   */

  // Circle zooms out extremely fast to clear the screen
  const circleScale = useTransform(smoothProgress, [0, 0.25], [1, 30]);
  const circleOpacity = useTransform(smoothProgress, [0, 0.2, 0.3], [1, 1, 0]);

  // Text shifts to brand blue (RS SOLUTIONS primary)
  const textColor = useTransform(smoothProgress, [0, 0.25], ["#FFFFFF", "#3b82f6"]);
  const textScale = useTransform(smoothProgress, [0, 0.3], [0.85, 1]);

  const poweredByOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  // Horizontal movement (campus360 sliding into place)
  const campus360X = useTransform(
    smoothProgress,
    [0, 0.25],
    isMobile ? [0, 0] : [-270, 0]
  );

  // Main Headline appearance - starts showing as the circle begins its final scale
  const headlineOpacity = useTransform(smoothProgress, [0.15, 0.3], [0, 1]);
  const headlineScale = useTransform(smoothProgress, [0.15, 0.3], [0.95, 1]);

  // Collage fades out instantly to prevent visual clutter during the fast zoom
  const collageOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="h-[250vh] bg-slate-950 font-sans">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* COLLAGE BUILDINGS */}
        <motion.div style={{ opacity: collageOpacity }} className="absolute inset-0 z-20 pointer-events-none">
          <CollageBuildings />
        </motion.div>

        {/* THE ROTATING PORTAL */}
        <motion.div
          style={{ scale: circleScale, opacity: circleOpacity }}
          className="absolute z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-full opacity-60"
          />
          <div className="w-[80%] h-[80%] bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 rounded-full blur-[60px] opacity-25" />
        </motion.div>

        {/* MAIN UI LAYER */}
        <div className="relative z-20 w-full flex flex-col items-center">

          <motion.div
            style={{ scale: headlineScale }}
            className="flex flex-col items-center justify-center text-center px-6"
          >
            <motion.span
              style={{ opacity: headlineOpacity }}
              className="text-white text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight mb-2"
            >
              Run Your Entire
            </motion.span>

            <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 md:gap-x-5 whitespace-nowrap flex-wrap md:flex-nowrap">
              <motion.span
                style={{ opacity: headlineOpacity }}
                className="text-white text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight"
              >
                Institution with
              </motion.span>

              <div className="relative flex flex-col items-center">
                <motion.span
                  style={{
                    color: textColor,
                    scale: textScale,
                    x: campus360X,
                  }}
                  className="text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-[0_0_24px_rgba(59,130,246,0.45)] leading-none"
                >
                  campus360
                </motion.span>

                {/* POWERED BY TEXT - Absolute position so it doesn't push "ERP Suite" down */}
                <motion.span
                  style={{
                    opacity: poweredByOpacity,
                    x: campus360X,
                    scale: textScale,
                  }}
                  className="absolute top-full mt-1 md:mt-2 text-white/50 text-[8px] md:text-[12px] font-bold tracking-[0.4em] uppercase whitespace-nowrap"
                >
                  Powered by RS SOLUTIONS
                </motion.span>
              </div>
            </div>

            <motion.span
              style={{ opacity: headlineOpacity }}
              className="text-white text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight mt-2"
            >
              ERP Suite
            </motion.span>
          </motion.div>
        </div>


      </div>
    </div>
  );
}