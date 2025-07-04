'use client'; // Marks the component as a Client Component

import { motion, useScroll, useTransform } from "framer-motion";
import { HoverImageLinks } from '../Components/services';
import AnimatedText from "@/Components/animatedText";
import AboutUs from "@/Components/aboutus";
import { FaRocket, FaShieldAlt, FaCode, FaCloud } from "react-icons/fa";

export default function Index() {
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "-50%"]);
  const yTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"]); 
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{ x: xTransform, opacity: opacityTransform, y: yTransform }}
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <motion.h1
          className="text-6xl sm:text-8xl font-extrabold text-orange-500 drop-shadow-glow"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          TribeTek
        </motion.h1>
        <motion.p
          className="text-xl sm:text-3xl mt-6 text-orange-400 drop-shadow-glow"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          Transform, Thrive, Triumph
        </motion.p>
      </motion.section>

      {/* Animated Text Section */}
      <section className="py-12">
        <AnimatedText />
      </section>

      {/* Features Section */}
      <motion.section className="py-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "High Performance", description: "Optimized solutions for speed and efficiency.", icon: <FaRocket className="text-orange-500 text-5xl drop-shadow-neon" /> },
              { title: "Secure & Reliable", description: "Top-tier security for all operations.", icon: <FaShieldAlt className="text-orange-500 text-5xl drop-shadow-neon" /> },
              { title: "Custom Development", description: "Tailored solutions for every need.", icon: <FaCode className="text-orange-500 text-5xl drop-shadow-neon" /> },
              { title: "Cloud Integration", description: "Seamless connectivity to cloud platforms.", icon: <FaCloud className="text-orange-500 text-5xl drop-shadow-neon" /> },
            ].map((feature, index) => (
              <motion.div key={index} className="bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-orange-500/40 shadow-md text-center transform transition duration-300 hover:scale-105 hover:border-orange-500 hover:shadow-orange-500/40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Call to Action */}
      <motion.section className="py-20 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-orange-500 mb-6">Ready to Innovate?</h2>
        <p className="text-lg text-gray-300 mb-8">Join TribeTek and take your ideas to the next level.</p>
        <motion.button className="px-6 py-3 text-lg font-bold text-black bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Placeholder Section */}
      <section className="min-h-screen flex items-center justify-center">
        <HoverImageLinks />
      </section>
    </main>
  );
}