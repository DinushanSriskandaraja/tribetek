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
    { number: 9, label: "Projects Delivered" },
    { number: 5, label: "Industries Served" },
    { number: 3, label: "Years in Tech" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden h-screen  flex items-center"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-16 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Our <span className="text-[#ED4716]">Milestones</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#b3b3b3] max-w-2xl mx-auto text-lg leading-relaxed mb-16"
        >
          Every achievement is a reflection of our passion, innovation, and
          commitment to building next-generation digital solutions.
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
              className="relative flex flex-col items-center justify-center"
            >
              {/* Count */}
              <h3 className="text-6xl md:text-7xl font-extrabold text-[#ED4716] mb-4">
                {inView ? <CountUp end={item.number} duration={2} /> : 0}+
              </h3>
              <p className="text-[#d1d1d1] text-lg font-medium tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
