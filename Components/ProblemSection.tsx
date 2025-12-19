"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, RotateCw, Database, Eye } from "lucide-react";

const problems = [
  {
    icon: <Cpu className="w-10 h-10 text-[#ED4716]" />,
    title: "Manual Data Entry",
    description:
      "Re-entering the same information across systems wastes time and increases errors. We help replace repetitive data entry with automated workflows that move data where it’s needed—accurately and instantly.",
  },
  {
    icon: <RotateCw className="w-10 h-10 text-[#ED4716]" />,
    title: "Disconnected Tools",
    description:
      "When tools don’t talk to each other, teams lose time switching systems and fixing mistakes. We integrate and connect your platforms into a single, streamlined workflow.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#ED4716]" />,
    title: "Operational Bottlenecks",
    description:
      "Approval delays, slow processes, and dependency on individuals can hold your business back. We design automation systems that keep operations moving without unnecessary friction.",
  },
  {
    icon: <Database className="w-10 h-10 text-[#ED4716]" />,
    title: "Repetitive Admin Work",
    description:
      "Routine tasks drain productivity and distract teams from meaningful work. We automate recurring administrative processes so your team can focus on higher-value activities.",
  },
  {
    icon: <Eye className="w-10 h-10 text-[#ED4716]" />,
    title: "Lack of Visibility & Control",
    description:
      "Without clear insights, it’s hard to track progress or make informed decisions. We build dashboards and systems that give you real-time visibility and operational control.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative container mx-auto px-14 py-28 overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10  mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center">
          Problems We <span className="text-[#ED4716]">Help You Eliminate</span>
        </h2>

        {/* First three problems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {problems.slice(0, 3).map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <div className="group relative p-8 rounded-2xl bg-[#161616]/70 backdrop-blur-xl border border-[#2b2b2b] overflow-hidden transition-all duration-700 min-h-[320px] flex flex-col">
                {/* Glow background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-[#ED4716] blur-[100px] opacity-30" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 items-start">
                  <div className="p-4 rounded-xl mb-4 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {problem.description}
                  </p>
                </div>

                {/* Border shimmer */}
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last two problems sharing equal width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
          {problems.slice(3).map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <div className="group relative p-8 rounded-2xl bg-[#161616]/70 backdrop-blur-xl border border-[#2b2b2b] overflow-hidden transition-all duration-700 flex flex-col">
                {/* Glow background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-[#ED4716] blur-[100px] opacity-30" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 items-start">
                  <div className="p-4 rounded-xl mb-4 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {problem.description}
                  </p>
                </div>

                {/* Border shimmer */}
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto text-center">
          TribeTek replaces these challenges with{" "}
          <span className="text-[#ED4716] font-semibold">
            structured, automation-driven web systems designed to simplify
            operations and support scalable growth
          </span>
          .
        </motion.p>
      </motion.div>
    </section>
  );
}
