"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Server, Users } from "lucide-react";

const features = [
  {
    Icon: Zap,
    title: "Automation-First Thinking",
    desc: "We identify what should be automated before writing a single line of code, ensuring maximum ROI from day one.",
    tag: "Strategy",
  },
  {
    Icon: Layers,
    title: "Business Logic First",
    desc: "Technology is a tool. We focus on your core process and outcomes, then design the right system to drive them.",
    tag: "Process",
  },
  {
    Icon: Server,
    title: "Elite Scalable Architecture",
    desc: "Our solutions grow with your business, built on modern stacks that handle growth without breaking.",
    tag: "Architecture",
  },
  {
    Icon: Users,
    title: "High-Touch Partnership",
    desc: "We think beyond delivery — providing elite guidance and support as your business systems evolve.",
    tag: "Partnership",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20 items-end">
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="badge-elite">Why TribeTek</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--c-black)] leading-[1.1] tracking-tight">
              Elite Systems. <br /> <span className="text-[var(--c-accent)]">Measurable Impact.</span>
            </h2>
          </div>
          <p className="lg:w-1/2 text-[var(--c-muted)] text-lg font-medium leading-relaxed">
            We don't just build software — we design automation systems that reduce workload, remove operational friction, and scale as your business grows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-elite group flex flex-col justify-between min-h-[300px]"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black text-[var(--c-accent)] uppercase tracking-[0.2em] px-4 py-2 bg-[var(--c-accent)]/10 rounded-full">
                  {f.tag}
                </span>
                <div className="w-10 h-10 bg-[var(--c-black)] text-white rounded-lg flex items-center justify-center group-hover:bg-[var(--c-accent)] transition-colors duration-300">
                  <f.Icon size={20} />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[var(--c-black)] mb-4 tracking-tight group-hover:text-[var(--c-accent)] transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-[var(--c-muted)] font-medium leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
