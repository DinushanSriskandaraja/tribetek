"use client";

import { motion } from "framer-motion";
import { XCircle, ArrowRight } from "lucide-react";

interface PromoProblemProps {
  problems: {
    title: string;
    description: string;
  }[];
}

export default function PromoProblem({ problems }: PromoProblemProps) {
  return (
    <section className="py-40 px-6 bg-[#FAFAFA] border-y border-[var(--c-border)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--c-accent)]/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--c-accent)]/5 blur-[120px] rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-end">
          <div className="lg:w-2/3">
            <div className="mb-8">
              <span className="badge-elite !bg-white">The Cost of Inaction</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[var(--c-black)] leading-[0.95] tracking-[-0.04em]">
              The hidden tax on your <br /> <span className="text-[var(--c-accent)]">growth & freedom.</span>
            </h2>
          </div>
          <p className="lg:w-1/3 text-[var(--c-muted)] text-xl font-medium leading-relaxed">
            Every hour spent on manual work is an hour stolen from strategy, innovation, and scaling. We help you take it back.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-elite group relative overflow-hidden !p-10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-accent)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 bg-[var(--c-black)] text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[var(--c-accent)] group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-[var(--c-accent)]/20">
                <XCircle size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black text-[var(--c-black)] mb-6 tracking-tight group-hover:text-[var(--c-accent)] transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed">{problem.description}</p>
              
              <div className="mt-10 flex items-center gap-2 text-[var(--c-accent)] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>The Fix is Coming</span>
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


