"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Cpu, ShieldCheck } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Rocket className="w-10 h-10 text-[#ED4716]" />,
      title: "Fast Execution",
      desc: "We turn ideas into working digital products with unmatched speed — without compromising quality.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#ED4716]" />,
      title: "AI-Driven Engineering",
      desc: "We integrate AI deeply into product workflows, ensuring smarter, scalable and future-focused systems.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#ED4716]" />,
      title: "Solid Reliability",
      desc: "Every system is engineered with performance, security and long-term stability as core foundations.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#ED4716]" />,
      title: "Creative Innovation",
      desc: "We design bold digital experiences that stand out — visually and technically.",
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
          Why Choose <span className="text-[#ED4716]">TribeTek</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg md:text-xl leading-relaxed">
          We combine engineering precision with modern AI-powered creativity to
          build solutions that give your business a clear competitive edge.
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
