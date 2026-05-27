"use client";
import { motion } from "framer-motion";

export default function SolutionsSection({ whatWeDo }: { whatWeDo: string[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden">
      
      <div className="text-center mb-16">
        <div className="mb-4">
          <span className="badge-elite">Solutions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[var(--c-black)] tracking-tight">
          Elite <span className="text-[var(--c-accent)]">Solutions</span> for Your Business
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {whatWeDo.map((solution, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="card-elite group">
            <div className="mb-6 w-12 h-12 bg-[var(--c-accent)]/10 rounded-xl flex items-center justify-center text-[var(--c-accent)] group-hover:bg-[var(--c-accent)] group-hover:text-white transition-all duration-300">
               <span className="font-black text-lg">0{i+1}</span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--c-black)] mb-4 tracking-tight group-hover:text-[var(--c-accent)] transition-colors duration-300">
              {solution}
            </h3>
            <p className="text-[var(--c-muted)] font-medium leading-relaxed">
              Our approach ensures performance, scalability and user experience tailored to your specific requirements.
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

