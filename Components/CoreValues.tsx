"use client";

import { motion } from "framer-motion";
import { Zap, Users, ShieldCheck } from "lucide-react";

type Value = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type CoreValuesProps = {
  values?: Value[];
};

const defaultValues: Value[] = [
  {
    title: "Innovation",
    description: "We think beyond trends to shape what’s next in tech.",
    icon: <Zap className="w-10 h-10 text-white" />,
  },
  {
    title: "Collaboration",
    description: "Powerful ideas come from diverse minds.",
    icon: <Users className="w-10 h-10 text-white" />,
  },
  {
    title: "Integrity",
    description: "We act with honesty, consistency, and transparency.",
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
  },
];

export default function CoreValues({
  values = defaultValues,
}: CoreValuesProps) {
  return (
    <section className="relative py-28 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-[0_0_20px_rgba(255,107,44,0.4)]">
          Our <span className="text-[#ED4716]">Core Values</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-[#161616]/60 border border-[#2b2b2b]
                backdrop-blur-xl overflow-hidden text-left
                transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]">
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div
                  className="absolute -bottom-[60px] -right-[60px] w-[200px] h-[200px]
                    bg-[#ED4716] blur-[100px] opacity-30"
                />
              </div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-[#ED4716] to-[#FF6B2C] flex items-center justify-center mb-5 shadow-md">
                {value.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Gradient underline */}
              {/* <div className="mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-[#ED4716] to-[#FF6B2C]" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
