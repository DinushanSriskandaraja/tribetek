"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX } from "react";
import {
  services,
  ServiceSlug,
  ServiceData,
  iconMap,
} from "@/data/servicesData";

import { Icon, LucideIcon } from "lucide-react";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const serviceCards: ServiceCard[] = (
  Object.entries(services) as [ServiceSlug, ServiceData][]
)
  .filter(([slug]) => slug !== "digital-marketing")
  .map(([slug, service]) => ({
    title: service.title,
    description: service.description,
    href: `/services/${slug}`,
    icon: iconMap[slug],
  }));

export default function ServicesSection() {
  return (
    <section className="relative py-28 overflow-hidden text-white">
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6">
          What We <span className="text-[#ED4716]">Automate</span> for Your
          Business
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg">
          We design automation-focused systems that eliminate manual work and
          scale your operations.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Link
                href={service.href}
                className="group relative block p-8 rounded-2xl 
  bg-[#161616]/70  
  backdrop-blur-xl overflow-hidden min-h-80
  transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
  ">
                {/* Glow background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -bottom-[70px] -right-[70px] w-[220px] h-[220px] bg-[#ED4716] blur-[110px] opacity-30" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-start">
                    <div
                      className="p-4 rounded-xl text-[#ED4716]
    transition-all duration-700
    ">
                      {service.icon && (
                        <service.icon size={64} strokeWidth={1.8} />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 tracking-wide transition-colors duration-500 ">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
                    {service.description}
                  </p>
                </div>

                {/* Border shimmer */}
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
