"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Script from "next/script";

const faqs = [
  { question: "What kind of businesses does TribeTek work with?", answer: "We primarily work with startups and growing SMEs across e-commerce, SaaS, logistics, and professional services. If your business relies on manual workflows or disconnected tools — we can help." },
  { question: "How is TribeTek different from a typical web agency?", answer: "Most agencies build websites that look good but don't improve operations. We build automation-driven systems — solutions that connect your tools and eliminate manual workload from day one." },
  { question: "What does 'automation-driven web systems' actually mean?", answer: "It means automation is core. Automated data entry, workflow triggers, and real-time dashboards are baked into your system, reducing the need for manual intervention." },
  { question: "Do I need technical knowledge to work with you?", answer: "Not at all. You just need to share your business processes, and we identify where automation can save you time. We handle all technical aspects end-to-end." },
  { question: "How long does a typical project take?", answer: "Most projects are delivered in 4–8 weeks. Simple automation systems can launch in 2 weeks, while comprehensive platforms typically need 8–12 weeks." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Header */}
            <div className="lg:w-1/3">
              <div className="mb-6">
                <span className="badge-elite">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[var(--c-black)] leading-[1.1] tracking-tight mb-8">
                Got Questions? <br /> We Have <span className="text-[var(--c-accent)]">Answers.</span>
              </h2>
              <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed mb-10">
                Everything you need to know about working with TribeTek to scale your business operations.
              </p>
              <a href="https://calendly.com/tribetek" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book a Free Call
              </a>
            </div>

            {/* FAQs */}
            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div 
                    key={i}
                    className={`card-elite !p-6 transition-all duration-300 ${isOpen ? 'border-[var(--c-accent)] ring-1 ring-[var(--c-accent)]' : ''}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between text-left py-2"
                    >
                      <span className="text-lg font-bold text-[var(--c-black)] tracking-tight">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[var(--c-accent)] text-white' : 'bg-[var(--c-black)]/5 text-[var(--c-black)]'}`}
                      >
                        <Plus size={20} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 pb-4">
                            <p className="text-[var(--c-muted)] font-medium leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
