"use client";

import {
  FaCode,
  FaCogs,
  FaSyncAlt,
  FaLightbulb,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    title: "AI-Powered Business Solutions",
    description:
      "Leverage intelligent AI tools and automation to optimize operations, drive smarter decisions, and enhance customer engagement.",
    href: "/services/ai-solutions",
    icon: <FaRobot className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Manual Business to AI Automation",
    description:
      "Transform your manual business processes into AI-driven automation, increasing efficiency, scalability, and operational performance.",
    href: "/services/digital-transformation",
    icon: <FaSyncAlt className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Build secure, scalable, and user friendly software solutions ranging from internal tools to enterprise-grade platforms that accelerate growth.",
    href: "/services/software-development",
    icon: <FaCogs className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop high-performance mobile apps that delight users, strengthen your brand, and boost business growth on iOS and Android.",
    href: "/services/mobile-app-development",
    icon: <FaMobileAlt className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "SEO-Optimized & Responsive Websites",
    description:
      "Create visually stunning, lightning-fast websites optimized for SEO, UX, and conversions—perfectly tailored to elevate your online presence.",
    href: "/services/website-development",
    icon: <FaCode className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Tech Strategy & Digital Advisory",
    description:
      "Get expert guidance on technology planning, digital strategy, and innovative solutions to maximize ROI and future-proof your business.",
    href: "/services/consulting",
    icon: <FaLightbulb className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="container rounded-4xl mx-auto py-10 px-4 sm:px-16 bg-white shadow-lg border border-gray-100 transition-all duration-300">
      <div className="mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-left text-gray-900">
          What TribeTek Can Do for Your Business
        </h2>

        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="bg-[#f2f2f2] rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-full max-w-full hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex flex-col gap-4 h-full">
                <div className="flex justify-between items-end">
                  {service.icon}
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
