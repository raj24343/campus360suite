"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "campus360 has revolutionized how we manage our institution. The seamless integration of all modules has reduced our administrative workload by 60% while improving student satisfaction dramatically.",
    author: "Dr. Sarah Mitchell",
    role: "Dean of Academic Affairs",
    institution: "Oxford International College",
    initial: "D"
  },
  {
    quote: "The analytics and monitoring capabilities are outstanding. We can now make data-driven decisions instantly. The platform's reliability and security features are top-notch.",
    author: "Prof. James Chen",
    role: "IT Director",
    institution: "Singapore Tech University",
    initial: "P"
  },
  {
    quote: "Implementation was smooth, and the support team was exceptional. Our staff adapted quickly, and we saw immediate improvements in communication and efficiency across departments.",
    author: "Emily Rodriguez",
    role: "Operations Manager",
    institution: "Boston College of Arts",
    initial: "E"
  }
];

const Clients = () => {
  return (
    <section className="bg-black text-white px-6  relative overflow-hidden">
      {/* Background Ambient Glow - Widened radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full" />

      {/* Header Container - Increased Width */}
      <div className="max-w-7xl mx-auto text-center mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-300 text-ms "
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]"></span>
          Trusted by Institutions Worldwide
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 pt-10 tracking-tighter leading-none">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 text-xl md:text-1xl font-medium max-w-3xl mx-auto">
          Join 500+ institutions that have transformed their operations with campus360.
        </p>
      </div>

      {/* Testimonials List - Increased to max-w-6xl for a wider spread */}
      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start group"
          >
            {/* Left Decor: Larger Quote Icon & Stars */}
            <div className="flex flex-col items-center gap-6 min-w-[80px]">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-900/20">
                <Quote size={28} fill="currentColor" />
              </div>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-emerald-400 text-emerald-400" />
                ))}
              </div>
            </div>

            {/* Right Side: Larger Quote Text & Author details */}
            <div className="flex-1 space-y-10">
              <p className=" text-lg md:text-xl text-gray-200 leading-[1.3] font-medium tracking-tight">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-6">
                {/* Custom Avatar with Initial */}
                <div className="w-16 h-16 rounded-full border-2 border-blue-500/35 bg-black flex items-center justify-center text-blue-400 font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.2)] group-hover:border-emerald-400 group-hover:shadow-emerald-500/15 transition-all duration-500">
                  {t.initial}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-1xl ">{t.author}</span>
                  <span className="text-gray-500 text-ms ">{t.role}</span>
                  <span className="text-gray-500 text-[12px]   ">
                    {t.institution}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;