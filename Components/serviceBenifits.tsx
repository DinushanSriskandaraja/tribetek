"use client";
import { motion } from "framer-motion";

export default function BenefitsSection({ benefits }: { benefits: string[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
        Key Benefits
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#ED4716] to-orange-500 mt-2" />
            <p className="text-gray-300 text-lg font-medium leading-relaxed mb-12">
              {b}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
