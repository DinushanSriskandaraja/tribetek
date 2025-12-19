"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Layers, Rocket } from "lucide-react";
import { GlassGlowCard } from "@/Components/GlobalCard";

const steps = [
  {
    icon: <Search className="w-10 h-10 text-[#ED4716]" />,
    title: "Understand Your Process",
    description:
      "We analyze your workflows, pain points, and goals to identify what should be automated.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[#ED4716]" />,
    title: "Design Automation Strategy",
    description:
      "We map automation flows, integrations, and outcomes aligned with your business.",
  },
  {
    icon: <Layers className="w-10 h-10 text-[#ED4716]" />,
    title: "Build & Integrate",
    description:
      "We develop systems, connect tools, and test workflows for stability and scale.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-[#ED4716]" />,
    title: "Optimize & Scale",
    description:
      "Post-launch, we refine performance and scale automation as operations grow.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
          Our <span className="text-[#ED4716]">Process</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <GlassGlowCard {...step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
