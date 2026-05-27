"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Layers, Rocket, ArrowRight } from "lucide-react";
import { useLeadGen } from "../hooks/useLeadGen";

const steps = [
  { Icon: Search, num: "01", title: "Discover", description: "We analyze your workflows and goals to identify what should be automated first." },
  { Icon: Lightbulb, num: "02", title: "Strategise", description: "We map automation flows and outcomes aligned with your core business logic." },
  { Icon: Layers, num: "03", title: "Build", description: "We develop elite systems, connect tools, and test workflows for stability." },
  { Icon: Rocket, num: "04", title: "Scale", description: "We refine performance and scale your automation as your operations grow." },
];

export default function ProcessSection() {
  const { setShowPopup } = useLeadGen();

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="badge-elite">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-black)] leading-tight tracking-tighter">
            From Idea to <span className="text-[var(--c-accent)]">Elite Automation.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[var(--c-black)] text-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-[var(--c-accent)] transition-colors duration-300">
                  <step.Icon size={28} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-[var(--c-black)] text-[var(--c-black)] rounded-full flex items-center justify-center text-[10px] font-black">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--c-black)] mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[var(--c-muted)] font-medium leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-[var(--c-border)]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button onClick={() => setShowPopup(true)} className="btn btn-primary btn-lg">
            Start Your Free Audit <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
