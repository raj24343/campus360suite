"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { openCampus360InquiryMail } from '@/lib/contact-mailto';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent background scroll when modal open (mobile optimization)
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
    return;
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    openCampus360InquiryMail({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      topic: String(fd.get("college") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
    form.reset();
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="text-emerald-400 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Opening your email…</h3>
                  <p className="text-gray-400">Send the message from your mail app to complete the inquiry.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Touch</span></h2>
                    <p className="text-gray-400 font-medium">Have questions? Our team is here to help you scale.</p>
                  </div>

                  <form className="space-y-5" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                        <input name="name" required type="text" placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-700" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                        <input name="email" required type="email" placeholder="you@institution.edu" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-700" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Phone Number</label>
                        <input name="phone" required type="tel" placeholder="+91 99088 64288" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-700" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Type of College</label>
                        <input name="college" required type="text" placeholder="e.g. Engineering, Medical" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-700" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                      <textarea name="message" required rows={4} placeholder="How can we assist your institution?" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-700 resize-none"></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:bg-gray-800 text-white font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_24px_rgba(37,99,235,0.3)] active:scale-95"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;