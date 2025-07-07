"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { HoverImageLinks } from "../../Components/services";
import AnimatedText from "@/Components/animatedText";
// import AboutUs from "@/Components/aboutus";
import { FaRocket, FaShieldAlt, FaCode, FaCloud } from "react-icons/fa";

export default function Home() {
  // Capture the scroll progress
  const { scrollYProgress } = useScroll();

  // Map the scroll progress to transformations for `x`, `y`, and `opacity`
  const xTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const yTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <motion.section
        style={{ x: xTransform, opacity: opacityTransform, y: yTransform }}
        className="flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1
          className="text-6xl sm:text-8xl font-extrabold text-orange-500"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}>
          TribeTek
        </motion.h1>
        <motion.p
          className="text-xl sm:text-3xl mt-6 text-orange-500"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}>
          Transform, Thrive, Triumph
        </motion.p>
      </motion.section>

      {/* Animated Text Section */}
      <section>
        <AnimatedText />
      </section>
      {/* Features Section */}
      <motion.section
        className="py-20  bg-[#FFFFFF]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <div className="container mx-auto px-6 text-center bg-[#FFFFFF]">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Our Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "High Performance",
                description: "Optimized solutions for speed and efficiency.",
                icon: <FaRocket className="text-orange-500 text-5xl" />,
              },
              {
                title: "Secure & Reliable",
                description: "Top-tier security for all operations.",
                icon: <FaShieldAlt className="text-orange-500 text-5xl" />,
              },
              {
                title: "Custom Development",
                description: "Tailored solutions for every need.",
                icon: <FaCode className="text-orange-500 text-5xl" />,
              },
              {
                title: "Cloud Integration",
                description: "Seamless connectivity to cloud platforms.",
                icon: <FaCloud className="text-orange-500 text-5xl" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Placeholder Section */}
      <section className="min-h-screen flex items-center justify-center">
        <HoverImageLinks />
      </section>
    </main>
  );
}
