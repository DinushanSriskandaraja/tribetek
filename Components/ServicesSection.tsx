"use client";

import { motion } from "framer-motion";
import {
  Bot,
  RefreshCcw,
  Settings,
  Smartphone,
  Code2,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "AI-Powered Business Solutions",
    description:
      "Leverage intelligent AI tools and automation to optimize operations, drive smarter decisions, and enhance customer engagement.",
    href: "/services/ai-solutions",
    icon: <Bot className="w-10 h-10 text-[#ED4716]" />,
  },
  {
    title: "Manual Business to AI Automation",
    description:
      "Transform your manual business processes into AI-driven automation, increasing efficiency, scalability, and operational performance.",
    href: "/services/digital-transformation",
    icon: <RefreshCcw className="w-10 h-10 text-[#ED4716]" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Build secure, scalable, and user friendly software solutions ranging from internal tools to enterprise-grade platforms that accelerate growth.",
    href: "/services/software-development",
    icon: <Settings className="w-10 h-10 text-[#ED4716]" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop high-performance mobile apps that delight users, strengthen your brand, and boost business growth on iOS and Android.",
    href: "/services/mobile-app-development",
    icon: <Smartphone className="w-10 h-10 text-[#ED4716]" />,
  },
  {
    title: "SEO-Optimized & Responsive Websites",
    description:
      "Create visually stunning, lightning-fast websites optimized for SEO, UX, and conversions.",
    href: "/services/website-development",
    icon: <Code2 className="w-10 h-10 text-[#ED4716]" />,
  },
  {
    title: "Tech Strategy & Digital Advisory",
    description:
      "Get expert guidance on technology planning, digital strategy, and innovative solutions to future-proof your business.",
    href: "/services/consulting",
    icon: <Lightbulb className="w-10 h-10 text-[#ED4716]" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-28 overflow-hidden text-white">
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_0_20px_rgba(255,107,44,0.4)]">
          What <span className="text-[#ED4716]">TribeTek</span> Can Do for You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg md:text-xl leading-relaxed">
          Next-gen development and AI-driven systems to scale your business
          faster.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.a
              href={service.href}
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

              {/* Card Content */}
              <div className="relative z-10 mb-5">{service.icon}</div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
