"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";
import Link from 'next/link';
export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // New State for the Popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { label: "Features", id: "campus-needs" },
    { label: "How It Works", id: "working" },
    { label: "Contact", id: "contact" }
  ];
  // Helper to open modal and close mobile menu if it's open
  const handleGetStarted = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  // Trigger visibility after 100px of scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setMobileMenuOpen(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between bg-slate-950/55 backdrop-blur-xl border-b border-white/5"
      >
        {/* LOGO SECTION */}
        <Link href="/" className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
          <div className="flex items-center gap-3">
            <div className="p-1 flex items-center justify-center">
              <img
                src="/rs-solutions-logo.png"
                alt="RS Solutions"
                style={{ width: "120px", height: "auto" }}
                className="object-contain"
              />
            </div>
            {/* If you have text next to it, it goes here */}
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>



        {/* DESKTOP ACTION BUTTON */}
        <div className="hidden md:block">
          <button onClick={handleGetStarted} className="bg-gradient-to-b from-blue-500 to-blue-700 border border-blue-400/30 text-white hover:from-blue-400 hover:to-blue-600 px-6 py-2.5 rounded-2xl text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_5px_20px_rgba(37,99,235,0.35)]">
            Get Started
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <motion.div
          initial={false}
          animate={{ x: mobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 top-[72px] bg-black/95 backdrop-blur-2xl z-[-1] flex flex-col p-8 gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-white text-sm font-bold pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg mt-4 shadow-[0_8px_24px_rgba(37,99,235,0.35)]">
            Get Started
          </button>
        </motion.div>
      </motion.nav>
      {/* THE POPUP COMPONENT */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}