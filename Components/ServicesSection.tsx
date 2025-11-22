"use client";

import {
  FaCode,
  FaCogs,
  FaSyncAlt,
  FaLightbulb,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI-Powered Business Solutions",
    description:
      "Leverage intelligent AI tools and automation to optimize operations, drive smarter decisions, and enhance customer engagement.",
    href: "/services/ai-solutions",
    icon: FaRobot,
  },
  {
    title: "Manual Business to AI Automation",
    description:
      "Transform your manual business processes into AI-driven automation, increasing efficiency, scalability, and operational performance.",
    href: "/services/digital-transformation",
    icon: FaSyncAlt,
  },
  {
    title: "Custom Software Development",
    description:
      "Build secure, scalable, and user friendly software solutions ranging from internal tools to enterprise-grade platforms that accelerate growth.",
    href: "/services/software-development",
    icon: FaCogs,
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop high-performance mobile apps that delight users, strengthen your brand, and boost business growth on iOS and Android.",
    href: "/services/mobile-app-development",
    icon: FaMobileAlt,
  },
  {
    title: "SEO-Optimized & Responsive Websites",
    description:
      "Create visually stunning, lightning-fast websites optimized for SEO, UX, and conversions—perfectly tailored to elevate your online presence.",
    href: "/services/website-development",
    icon: FaCode,
  },
  {
    title: "Tech Strategy & Digital Advisory",
    description:
      "Get expert guidance on technology planning, digital strategy, and innovative solutions to maximize ROI and future-proof your business.",
    href: "/services/consulting",
    icon: FaLightbulb,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden w-full py-20 md:py-28">
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            What <span className="text-[#ED4716]">TribeTek</span> Can Do for
            Your Business
          </motion.h2>
          <p className="text-[#b3b3b3] max-w-2xl mx-auto text-lg">
            Empowering innovation through next-gen digital and AI-powered
            solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={index}
                href={service.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#131315]/30 backdrop-blur-xl rounded-3xl p-8
             transition-all duration-500 ease-in-out
             shadow-inner border border-[#1f1f1f] overflow-hidden
             ">
                {/* Large icon as background */}
                <Icon
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
               text-[#ED4716]/60 text-[10rem] pointer-events-none
               transition-all duration-500 ease-in-out
               group-hover:blur-sm group-hover:text-[#ED4716]/80"
                />

                {/* Mild shiny top gradient line on hover */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 rounded-full
               bg-gradient-to-r from-transparent via-[#ED4716] to-transparent blur-sm
               opacity-0 group-hover:opacity-100
               scale-x-0 group-hover:scale-x-100
               origin-center transition-all duration-500 ease-in-out"></div>

                {/* Text container with extra top spacing */}
                <div className="flex flex-col justify-end relative z-10 mt-36">
                  <h3 className="text-2xl font-semibold text-white mb-4 transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#b3b3b3] text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
