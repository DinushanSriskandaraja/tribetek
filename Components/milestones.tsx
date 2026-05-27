"use client";

import { motion } from "framer-motion";

const milestones = [
  { number: 10, suffix: "+", label: "Elite Systems Built", description: "Automation-first architecture" },
  { number: 2400, suffix: "+", label: "Hours Recovered", description: "Manual work eliminated" },
  { number: 50, suffix: "+", label: "Businesses Scaled", description: "Measurable operational ROI" },
  { number: 100, suffix: "%", label: "Automation Focus", description: "Zero-friction operations" },
];

export default function MilestonesSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden border-b border-[var(--c-border)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="text-[10px] font-black text-[var(--c-accent)] uppercase tracking-[0.3em] mb-4">
                Metric.0{i + 1}
              </div>
              <div className="text-4xl md:text-5xl font-black text-[var(--c-black)] tracking-tighter mb-4 flex items-baseline">
                {item.number.toLocaleString()}
                <span className="text-[var(--c-accent)] ml-1">{item.suffix}</span>
              </div>
              <h3 className="text-[var(--c-black)] font-extrabold text-sm uppercase tracking-wider mb-2">
                {item.label}
              </h3>
              <p className="text-[var(--c-muted)] text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
