"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Server, Users, Lightbulb } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-[#ED4716]" />,
      title: "Automation-First Thinking",
      desc: "We start by understanding your workflows and identifying what should be automated before writing a single line of code.",
    },
    {
      icon: <Layers className="w-10 h-10 text-[#ED4716]" />,
      title: "Business Logic Before Technology",
      desc: "Technology is a tool, not the solution. We focus on your process, goals, and outcomes — then build the right system.",
    },
    {
      icon: <Server className="w-10 h-10 text-[#ED4716]" />,
      title: "Scalable & Maintainable Systems",
      desc: "Our solutions are designed to grow with your operations, not break when your business scales.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#ED4716]" />,
      title: "Long-Term Partnership Mindset",
      desc: "We think beyond delivery, providing guidance, improvements, and support as your systems evolve.",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden text-white">
      {/* Background Grid */}
      {/* <div
        className="absolute inset-0 opacity-[0.04] 
        bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),
        linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] 
        bg-[size:70px_70px]"
      /> */}

      {/* Glow Accent */}
      {/* <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[200px] 
                       blur-[180px] rounded-full"
      /> */}

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_0_20px_rgba(255,107,44,0.4)]">
          Why Businesses Choose <span className="text-[#ED4716]">TribeTek</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg md:text-xl leading-relaxed">
          We don’t just build software — we design automation systems that
          reduce workload, improve efficiency, and scale with your business.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-[#161616]/60 border border-[#2b2b2b]
    backdrop-blur-xl overflow-hidden
    transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]">
              {/* Smooth Glow from Bottom Right */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 
    transition-opacity duration-700 ease-[cubic-bezier(.4,0,.2,1)] pointer-events-none">
                <div
                  className="absolute -bottom-[60px] -right-[60px] w-[180px] h-[180px] 
      bg-[#ED4716] blur-[90px] opacity-30"></div>
              </div>

              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
