"use client";
import { motion } from "framer-motion";

export default function SolutionsSection({ whatWeDo }: { whatWeDo: string[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Solutions We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {whatWeDo.map((solution, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative bg-gradient-to-br from-[#1a1a1a]/80 to-[#121212]/80 backdrop-blur-md border border-[#2a2a2a] rounded-3xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#ED4716]/20">
            <h3 className="text-2xl md:text-3xl text-[#ED4716] font-bold mb-4">
              {solution}
            </h3>
            <p className="text-gray-300">
              Our approach ensures performance, scalability and user experience.
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
