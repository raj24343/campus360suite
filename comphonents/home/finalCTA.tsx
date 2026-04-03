"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import ContactModal from '../common/ContactModal';

const stats = [
  { value: "500+", label: "Trusted Institutions" },
  { value: "1M+", label: "Active Students" },
  { value: "24/7", label: "Expert Support" }
];

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-black text-white py-32 px-6 relative overflow-hidden text-center">

      {/* Background Grid/Glow Decor */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: `radial-gradient(rgba(59,130,246,0.35) 0.5px, transparent 0.5px)`, strokeDasharray: '20 20', backgroundSize: '30px 30px' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Rocket Icon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 shadow-[0_0_30px_rgba(37,99,235,0.45)] mb-10"
        >
          <Rocket className="w-8 h-8 text-white" fill="white" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight"
        >
          Upgrade Your Campus <br />
          with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">campus360</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium"
        >
          A smarter, faster, and more efficient way to manage your institution
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <button onClick={() => setIsModalOpen(true)} type="button" className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 shadow-[0_10px_28px_rgba(37,99,235,0.35)]">
            Book a Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#campus-needs"
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-6 px-10 rounded-2xl transition-all duration-300 text-center active:scale-95 decoration-none"
          >
            Explore Platform
          </a>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3  pt-4 ">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className={`flex flex-col items-center ${index !== 2 ? 'md:border-r border-white/20' : ''}`}
            >
              <span className="text-2xl md:text-4xl  font-bold text-white mb-2 ">
                {stat.value}
              </span>
              <span className="text-gray-500  text-sm ">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default FinalCTA;