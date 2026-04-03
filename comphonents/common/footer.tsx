"use client";
import React from 'react';
import { Mail, Phone, MapPin, Link } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Working', 'Clients', 'FAQ', 'Contact'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Webinars', 'API'],
    Legal: ['Privacy', 'Terms', 'Compliance', 'Cookies', 'Licenses']
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 border-t border-blue-500/10">
      <div className="max-w-[1400px] mx-auto">

        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            
              <div className="flex items-center gap-3">
                <div className="p-1 flex items-center justify-center">
                  <img
                    src="/rs-solutions-logo.png"
                    alt="RS Solutions"
                    style={{ width: "140px", height: "auto" }}
                    className="object-contain"
                  />
                </div>
                {/* If you have text next to it, it goes here */}
              </div>
            

            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
              Transforming college management with intelligent automation and seamless integration. Empowering institutions to deliver exceptional educational experiences.
            </p>

            <div className="space-y-4">
              <a href="mailto:rajnaidu24343@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <Mail size={18} className="text-blue-400" />
                <span>rajnaidu24343@gmail.com</span>
              </a>
              <a href="tel:+919908864288" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <Phone size={18} className="text-blue-400" />
                <span>+91 99088 64288</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                <MapPin size={18} className="text-blue-400" />
                <span>San Francisco, CA 94107</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer group">
                  <Icon size={18} className="text-gray-400 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns (Excluding Legal) */}
          {Object.entries(footerLinks)
            .filter(([title]) => title !== 'Legal') // Filter out Legal from top
            .map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-lg mb-8">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors font-medium">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Newsletter Section: Stay Updated */}
        <div className="border-y border-white/5 py-16 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h4 className="text-2xl font-bold">Stay Updated</h4>
              <p className="text-gray-500">Get the latest updates, features, and educational insights delivered to your inbox.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/[0.03] border border-blue-500/15 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_10px_24px_rgba(37,99,235,0.35)] whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm font-medium">
          <p>© 2026 campus360. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;