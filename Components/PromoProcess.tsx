"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PromoProcessProps {
  process: {
    title: string;
    description: string;
  }[];
}

export default function PromoProcess({ process }: PromoProcessProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      {/* Connector Line (Desktop) */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--c-border)] to-transparent -translate-y-1/2 z-0" />
      
      {process.map((step, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-elite group flex flex-col justify-between min-h-[360px] relative z-10 !bg-white/80 backdrop-blur-sm"
        >
          <div>
            <div className="flex items-center justify-between mb-10">
              <div className="text-6xl font-black text-[var(--c-accent)] opacity-10 italic tracking-tighter group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                0{i+1}
              </div>
              <div className="w-12 h-12 rounded-full border border-[var(--c-border)] flex items-center justify-center group-hover:border-[var(--c-accent)] transition-colors duration-500">
                <div className="w-2 h-2 rounded-full bg-[var(--c-accent)] group-hover:scale-150 transition-transform" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-[var(--c-black)] mb-5 tracking-tight group-hover:text-[var(--c-accent)] transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed">{step.description}</p>
          </div>
          
          <div className="mt-10 pt-8 border-t border-[var(--c-border)] flex items-center justify-between">
            <span className="text-[11px] font-black text-[var(--c-muted)] uppercase tracking-[0.3em]">Step {i+1} of 4</span>
            <div className="w-8 h-8 rounded-lg bg-[var(--c-black)]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowRight size={16} className="text-[var(--c-accent)]" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}


