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
    icon: <FaRobot className="text-[#ED4716] w-10 h-10" />,
  },
  {
    title: "Manual Business to AI Automation",
    description:
      "Transform your manual business processes into AI-driven automation, increasing efficiency, scalability, and operational performance.",
    href: "/services/digital-transformation",
    icon: <FaSyncAlt className="text-[#ED4716] w-10 h-10" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Build secure, scalable, and user friendly software solutions ranging from internal tools to enterprise-grade platforms that accelerate growth.",
    href: "/services/software-development",
    icon: <FaCogs className="text-[#ED4716] w-10 h-10" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop high-performance mobile apps that delight users, strengthen your brand, and boost business growth on iOS and Android.",
    href: "/services/mobile-app-development",
    icon: <FaMobileAlt className="text-[#ED4716] w-10 h-10" />,
  },
  {
    title: "SEO-Optimized & Responsive Websites",
    description:
      "Create visually stunning, lightning-fast websites optimized for SEO, UX, and conversions—perfectly tailored to elevate your online presence.",
    href: "/services/website-development",
    icon: <FaCode className="text-[#ED4716] w-10 h-10" />,
  },
  {
    title: "Tech Strategy & Digital Advisory",
    description:
      "Get expert guidance on technology planning, digital strategy, and innovative solutions to maximize ROI and future-proof your business.",
    href: "/services/consulting",
    icon: <FaLightbulb className="text-[#ED4716] w-10 h-10" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden w-full  py-20 md:py-28">
      

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            What <span className="text-[#ED4716]">TribeTek</span> Can Do for Your Business
          </motion.h2>
          <p className="text-[#b3b3b3] max-w-2xl mx-auto text-lg">
            Empowering innovation through next-gen digital and AI-powered solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#141414]/80 backdrop-blur-md border border-[#1f1f1f] hover:border-[#FF6B2C]/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,107,44,0.15)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#1a1a1a] rounded-2xl group-hover:bg-gradient-to-r from-[#ED4716]/20 to-[#FF6B2C]/20 transition duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#ED4716] transition duration-300">
                {service.title}
              </h3>
              <p className="text-[#b3b3b3] text-base leading-relaxed">
                {service.description}
              </p>

              {/* Bottom gradient hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#ED4716] to-[#FF6B2C] rounded-tr-3xl group-hover:w-full transition-all duration-500"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
