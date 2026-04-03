"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How long does it take to implement campus360?",
    answer: "Implementation typically takes between 4-8 weeks depending on the size of your institution and the modules selected. Our dedicated success team guides you through data migration, staff training, and system configuration to ensure a seamless transition."
  },
  {
    question: "Is my data secure with campus360?",
    answer: "Absolutely. We use bank-level encryption (AES-256) for data at rest and in transit. Our infrastructure is ISO 27001 certified, GDPR compliant, and undergoes regular third-party security audits. We also provide daily automated backups and disaster recovery options."
  },
  {
    question: "Can campus360 integrate with our existing accounting software?",
    answer: "Yes, campus360 features a robust API and built-in connectors for popular accounting tools like Tally, QuickBooks, and SAP. This ensures your financial data stays synchronized across all platforms."
  },
  {
    question: "Do you offer on-site training for our staff?",
    answer: "We provide a hybrid training model including comprehensive on-site workshops, live webinars, and a 24/7 digital knowledge base. We ensure your team is fully confident in using every feature of the platform."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); 

  return (
    <section className="bg-black text-white py-40  px-10 relative overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-300 text-ms mb-8 ">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"></span>
          Got Questions?
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-6 ">
          Frequently Asked <span className="text-gray-400">Questions</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl ">
          Everything you need to know about campus360
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-[1000px] mx-auto text-white space-y-4 relative z-10">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          
          return (
            <motion.div
              key={index}
              initial={false}
              className={`relative transition-all duration-500 rounded-2xl ${
                isOpen ? 'bg-white/[0.02]' : 'bg-transparent'
              }`}
            >
              {isOpen && (
                <div className="absolute left-0 top-0 bottom-0 flex gap-1 items-stretch py-4">
                    <div className="w-[3px] bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                    <div className="w-[3px] bg-emerald-500 rounded-full"></div>
                </div>
              )}

              <button
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                className={`w-full flex items-center justify-between p-8 text-left transition-all ${
                  isOpen ? 'pl-12' : 'pl-8'
                }`}
              >
                <span className={`text-xl md:text-ms ${
                    isOpen ? 'text-white' : 'text-gray-300'
                }`}>
                  {item.question}
                </span>

                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                    ? 'bg-blue-950/50 border border-blue-500/50 text-blue-400' 
                    : 'bg-white/5 border border-white/10 text-gray-500'
                }`}>
                  {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="pl-12 pr-12 pb-8">
                      <p className="text-gray-400 text-ms md:text-ms">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* --- ADDED SCREENSHOT DETAILS: STILL HAVE QUESTIONS --- */}
      <div className="mt-24 text-center relative z-10">
        <p className="text-gray-300 text-ms md:text-xl mb-8">
          Still have questions? Our team is here to help.
        </p>
        <a 
  href="mailto:rajnaidu24343@gmail.com" 
  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-[0_10px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_15px_28px_rgba(37,99,235,0.45)] hover:-translate-y-1 active:scale-95 text-center"
>
  Contact Support
</a>
      </div>
    </section>
  );
};

export default FAQ;