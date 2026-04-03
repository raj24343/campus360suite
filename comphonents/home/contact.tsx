"use client";
import React, { useState } from 'react'; // Added useState
import { Send, Phone, CheckCircle } from 'lucide-react';
import { openCampus360InquiryMail } from '@/lib/contact-mailto';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const phoneNumber = "+919908864288";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    openCampus360InquiryMail({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      topic: String(fd.get("course") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
    form.reset();
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Contact Form */}
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-10">
              <p className="text-blue-400 font-medium mb-2 text-sm">For faster response, please call us directly.</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Send us a Message</h2>
              <p className="text-gray-500">Fill out the form below and we&apos;ll get back to you shortly.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={64} className="text-emerald-400 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold">Check your email app</h3>
                <p className="text-gray-400">Send the pre-filled message to finish — it’s addressed to us.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300">Full Name *</label>
                    <input name="name" required type="text" placeholder="Enter your full name" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300">Email Address *</label>
                    <input name="email" required type="email" placeholder="Enter your email" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-gray-600" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300">Phone Number *</label>
                    <input name="phone" required type="tel" placeholder="Enter your phone number" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300">Interested Course</label>
                    <select name="course" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-gray-400 appearance-none">
                      <option>Select a course</option>
                      <option>Web Development</option>
                      <option>Data Science</option>
                      <option>Cloud Computing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300">Message *</label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your requirements" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-gray-600 resize-none"></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:bg-gray-700 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_24px_rgba(37,99,235,0.35)]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* GOOGLE MAP VISIBLE */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-[280px] relative">
              <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.109121964177!2d78.3888360752538!3d17.521324398115663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f776a1cb395%3A0x08131fc454ca51d9!2sSvadha%20Suja%20Elysian!5e0!3m2!1sen!2sin!4v1715850000000!5m2!1sen!2sin" 
  className="w-full h-full border-none contrast-125 opacity-70"
  allowFullScreen={true}     
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
            </div>

            <div className="bg-blue-950/25 border border-blue-500/15 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Quick Response</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">For urgent inquiries, please call us directly.</p>
              <button onClick={handleCall} className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/25">
                <Phone size={18} /> Call Now
              </button>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Office Hours</h3>
              <div className="space-y-4 font-medium text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Mon - Fri</span><span className="text-gray-200">9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Sat</span><span className="text-gray-200">10:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-500">Sun</span><span className="bg-blue-950/40 text-blue-400 px-3 py-1 rounded-lg text-xs font-bold">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;