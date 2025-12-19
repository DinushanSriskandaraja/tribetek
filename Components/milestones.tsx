"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function MilestonesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      number: 1,
      label: "End-to-End Automation System Delivered",
      description:
        "Designed to replace manual workflows and improve operational efficiency",
    },
    {
      number: 9,
      label: "Web & System Projects Delivered",
      description: "Web applications built with automation-ready architecture",
    },
    {
      number: 3,
      label: "Years Building Web & Automation Solutions",
      description:
        "Experience across web development, systems, and process automation",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden my-16 flex items-center">
      <div className="relative z-10 container mx-auto px-6 md:px-16 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Our <span className="text-[#ED4716]"> Impact </span>So Far
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#b3b3b3] max-w-2xl mx-auto text-lg leading-relaxed mb-16">
          We focus on building systems that deliver real operational value — not
          vanity metrics.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center justify-center text-center">
              {/* Count */}
              <h3 className="text-6xl md:text-7xl font-extrabold text-[#ED4716] mb-4">
                {inView ? <CountUp end={item.number} duration={2} /> : 0}+
              </h3>

              {/* Title */}
              <p className="text-[#d1d1d1] text-lg font-semibold tracking-wide mb-2">
                {item.label}
              </p>

              {/* Description */}
              <p className="text-[#9e9e9e] text-sm max-w-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
