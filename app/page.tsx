// app/page.tsx
"use client";

import { motion, Variants, Transition } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
// import * as THREE from "three";

type CustomVariants = Variants & {
  visible?: (i: number) => {
    opacity: number;
    y: number;
    transition: Transition;
  };
};

export default function UltraModernLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // Word animation variants
  const wordAnimation: CustomVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    }),
  };

  // 3D sphere component
  const TechSphere = () => (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#ED4716"
          roughness={0.2}
          metalness={0.8}
          emissive="#ED4716"
          emissiveIntensity={0.3}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
    </Canvas>
  );

  // Cursor follower effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Section observer
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3 });
  const [whyRef, whyInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (heroInView) setActiveSection(0);
    if (servicesInView) setActiveSection(1);
    if (whyInView) setActiveSection(2);
    if (aboutInView) setActiveSection(3);
    if (ctaInView) setActiveSection(4);
  }, [heroInView, servicesInView, whyInView, aboutInView, ctaInView]);

  // Text animation variants
  const sectionTitleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // const words = ["Transform", "Thrive", "Triumph"];

  return (
    <div
      ref={containerRef}
      className="relative bg-[#F2F2F2] font-roboto overflow-x-hidden">
      {/* Custom cursor follower */}
      <motion.div
        className="fixed w-6 h-6 bg-[#ED4716] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: activeSection === 4 ? 2 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full mb-4 ${
              activeSection === index ? "bg-[#ED4716]" : "bg-[#242E3D]"
            }`}
            animate={{
              scale: activeSection === index ? 1.5 : 1,
              opacity: activeSection === index ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        ))}
      </div>

      {/* 🚀 Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen bg-[#242E3D] flex items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-[#ED4716]/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                borderRadius: `${Math.random() * 50 + 20}px`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}>
              <motion.h1
                custom={0}
                variants={wordAnimation}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Astonpoliz" }}>
                Digital Evolution{" "}
                <span className="text-[#ED4716]">Redefined</span>
              </motion.h1>

              <motion.p
                custom={1}
                variants={wordAnimation}
                className="text-xl text-white/80 mb-8 max-w-lg">
                We craft immersive digital experiences that transform businesses
                and captivate audiences.
              </motion.p>

              <motion.div
                custom={2}
                variants={wordAnimation}
                className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(237, 71, 22, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ED4716] text-white px-8 py-4 text-lg font-bold relative overflow-hidden group"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}>
                  <span className="relative z-10">Start Your Journey</span>
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 text-lg font-bold relative overflow-hidden group"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}>
                  <span className="relative z-10">Explore Work</span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative h-96 lg:h-[500px]">
              <TechSphere />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#ED4716]/30 pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.4, 0.8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  borderTopRightRadius: "50%",
                  borderBottomLeftRadius: "50%",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white mb-2">
            Scroll
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 💼 Services Section */}
      <section
        ref={servicesRef}
        className="relative py-28 bg-[#F2F2F2] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionTitleVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#242E3D] mb-4">
              Our <span className="text-[#ED4716]">Digital</span> Arsenal
            </h2>
            <p className="text-xl text-[#242E3D]/80 max-w-2xl">
              Cutting-edge solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-12 -mx-6 px-6 hide-scrollbar">
              <div className="flex space-x-8">
                {servicesData.map((service, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -10 }}
                    className="flex-shrink-0 w-80 md:w-96 h-96 bg-white rounded-3xl p-8 flex flex-col relative overflow-hidden group"
                    style={{
                      borderTopRightRadius: "80px",
                      borderBottomLeftRadius: "80px",
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ED4716]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="mb-6">
                      <div
                        className="w-16 h-16 bg-[#ED4716]/10 rounded-2xl flex items-center justify-center mb-4"
                        style={{
                          borderTopRightRadius: "20px",
                          borderBottomLeftRadius: "20px",
                        }}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#242E3D]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[#242E3D]/80 mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-auto">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-[#ED4716] font-bold cursor-pointer">
                        <span>Learn more</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ED4716]/5 rounded-tl-full" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#242E3D]/50 text-sm">
                Scroll horizontally →
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 Why TribeTek Section */}
      <section
        ref={whyRef}
        className="relative py-28 bg-[#242E3D] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionTitleVariants}
            viewport={{ once: true }}
            className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="text-[#ED4716]">TribeTek</span> Stands Out
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We combine innovation with execution to deliver exceptional
              results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsData.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(237, 71, 22, 0.2)",
                }}
                className="bg-[#242E3D] border border-[#ED4716]/20 rounded-3xl p-8 relative overflow-hidden group"
                style={{
                  borderTopRightRadius: "60px",
                  borderBottomLeftRadius: "60px",
                }}>
                <div className="absolute inset-0 bg-[#ED4716]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-[#ED4716] text-5xl font-bold mb-4 opacity-80">
                    {item.stat}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70">{item.description}</p>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#ED4716]/10 rounded-tl-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-40 h-40 bg-[#ED4716]/10 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            borderTopRightRadius: "60%",
            borderBottomLeftRadius: "60%",
          }}
        />
      </section>

      {/* 🌍 About TribeTek Section */}
      <section
        ref={aboutRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#242E3D] opacity-95 z-10" />
          <div className="absolute inset-0  opacity-10 z-0" />
        </div>

        <div className="relative z-20 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative">
              <div
                className="w-full h-96 lg:h-[500px] bg-[#ED4716]/10 rounded-3xl overflow-hidden relative"
                style={{
                  borderTopRightRadius: "80px",
                  borderBottomLeftRadius: "80px",
                }}>
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg">
                  Founder Image/Video
                </div>
              </div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#ED4716]/20 rounded-full mix-blend-overlay"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our <span className="text-[#ED4716]">Story</span>
              </h2>

              <div
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-8"
                style={{
                  borderTopRightRadius: "50px",
                  borderBottomLeftRadius: "50px",
                }}>
                <p className="text-white/80 text-lg mb-6">
                  We bootstrapped TribeTek from a small garage to a global
                  digital agency while secretly building VR technology that will
                  challenge industry giants. Our journey taught us that real
                  innovation happens at the intersection of audacity and
                  execution.
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#ED4716] rounded-full mr-4"></div>
                  <div>
                    <p className="text-white font-bold">Alex Rivera</p>
                    <p className="text-white/60">Founder & CEO</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ED4716] text-white px-8 py-4 text-lg font-bold relative overflow-hidden group"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}>
                  <span className="relative z-10">Our Journey</span>
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 text-lg font-bold relative overflow-hidden group"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}>
                  <span className="relative z-10">Meet the Team</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌟 CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-32 bg-[#F2F2F2] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#242E3D] rounded-4xl p-12 text-center relative overflow-hidden"
            style={{
              borderTopRightRadius: "100px",
              borderBottomLeftRadius: "100px",
            }}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ED4716]/20 rounded-full mix-blend-overlay" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ED4716]/20 rounded-full mix-blend-overlay" />

            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={sectionTitleVariants}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-[#ED4716]">Elevate</span> Your
              Digital Presence?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Let&apos;s create something extraordinary together. Our team is
              ready to bring your vision to life.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative">
                <motion.button
                  className="bg-[#ED4716] text-white px-10 py-5 text-lg font-bold relative overflow-hidden group w-full sm:w-auto"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}>
                  <span className="relative z-10">Schedule a Call</span>
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.div
                  className="absolute -z-10 inset-0 bg-[#ED4716]/40 blur-lg rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#242E3D] px-10 py-5 text-lg font-bold relative overflow-hidden group"
                style={{
                  borderTopRightRadius: "50px",
                  borderBottomLeftRadius: "50px",
                }}>
                <span className="relative z-10">View Case Studies</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Data
const servicesData = [
  {
    title: "Custom Software Development",
    description:
      "Tailored digital solutions engineered to streamline your operations and amplify productivity with cutting-edge technology stacks.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ED4716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: "Brand Strategy & Design",
    description:
      "Comprehensive brand ecosystems that resonate with your audience and dominate your market space through strategic storytelling.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ED4716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    ),
  },
  {
    title: "Digital Transformation",
    description:
      "End-to-end modernization of legacy systems with future-proof architectures that scale with your business ambitions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ED4716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
        <path d="M12 12v9"></path>
        <path d="m8 17 4 4 4-4"></path>
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that learn, adapt, and automate to give you a competitive edge in data-driven decision making.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ED4716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 8V4H8"></path>
        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
        <path d="M2 14h2"></path>
        <path d="M20 14h2"></path>
        <path d="M15 13v2"></path>
        <path d="M9 13v2"></path>
      </svg>
    ),
  },
];

const whyUsData = [
  {
    stat: "100+",
    title: "Projects Delivered",
    description:
      "Successful implementations across multiple industries and business scales",
  },
  {
    stat: "40%",
    title: "Faster Deployment",
    description: "Our proprietary frameworks accelerate development timelines",
  },
  {
    stat: "24/7",
    title: "Dedicated Support",
    description: "Global team ensuring your operations never face downtime",
  },
  {
    stat: "AI-First",
    title: "Approach",
    description: "Every solution incorporates intelligent automation",
  },
  {
    stat: "$10M+",
    title: "Client Revenue Impact",
    description: "Generated through our digital transformation projects",
  },
  {
    stat: "∞",
    title: "Creative Possibilities",
    description: "We don't believe in limits when solving business challenges",
  },
];
