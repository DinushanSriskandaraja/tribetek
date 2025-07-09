// import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
// import React, { JSX, useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import {
//   FaLaptopCode,
//   FaMobileAlt,
//   FaCloud,
//   FaBullhorn,
//   FaLightbulb,
// } from "react-icons/fa"; // Import icons

// export const HoverImageLinks = () => {
//   return (
//     <section className="w-screen p-4 md:p-8">
//       <div className="mx-auto max-w-5xl">
//         {/* Title for services */}
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//           viewport={{ once: false, amount: 0.25 }}
//           className="text-6xl text-center font-bold text-orange-500 mb-8">
//           Our Services
//         </motion.h2>

//         {/* Services links with icons */}
//         <ServiceLink
//           heading="Web Development"
//           subheading="Crafting responsive and user-friendly websites"
//           icon={<FaLaptopCode className="text-6xl text-orange-500" />}
//         />
//         <ServiceLink
//           heading="Mobile & System Apps"
//           subheading="Building apps for seamless user experiences"
//           icon={<FaMobileAlt className="text-6xl text-orange-500" />}
//         />
//         <ServiceLink
//           heading="SaaS Development"
//           subheading="Improving visibility and rankings on search engines"
//           icon={<FaCloud className="text-6xl text-orange-500" />}
//         />
//         <ServiceLink
//           heading="Brand Strategy"
//           subheading="Helping you define and grow your brand identity"
//           icon={<FaLightbulb className="text-6xl text-orange-500" />}
//         />
//         <ServiceLink
//           heading="Digital Marketing"
//           subheading="Driving growth through targeted marketing strategies"
//           icon={<FaBullhorn className="text-6xl text-orange-500" />}
//         />
//       </div>
//     </section>
//   );
// };

// const ServiceLink = ({
//   heading,
//   subheading,
//   icon,
// }: {
//   heading: string;
//   subheading: string;
//   icon: JSX.Element;
// }) => {
//   const ref = useRef<HTMLAnchorElement | null>(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
//   const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     const rect = ref.current?.getBoundingClientRect();
//     if (rect) {
//       const width = rect.width;
//       const height = rect.height;

//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       const xPct = mouseX / width - 0.5;
//       const yPct = mouseY / height - 0.5;

//       x.set(xPct);
//       y.set(yPct);
//     }
//   };

//   return (
//     <motion.a
//       href="#"
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       initial="initial"
//       whileHover="whileHover"
//       className="group relative flex items-center justify-between border-2 border-white py-4 transition-colors duration-500 hover:border-orange-500 md:py-8 m-8 rounded-br-full rounded-tl-full bg-white/30 backdrop-blur-md shadow-lg">
//       <div>
//         <motion.span
//           variants={{
//             initial: { x: 0 },
//             whileHover: { x: -16 },
//           }}
//           transition={{
//             type: "spring",
//             staggerChildren: 0.075,
//             delayChildren: 0.25,
//           }}
//           className="relative z-10 block text-4xl pl-16 font-bold text-white transition-colors duration-500 group-hover:text-orange-500 md:text-6xl">
//           {heading.split("").map((l, i) => (
//             <motion.span
//               variants={{
//                 initial: { x: 0 },
//                 whileHover: { x: 16 },
//               }}
//               transition={{ type: "spring" }}
//               className="inline-block"
//               key={i}>
//               {l}
//             </motion.span>
//           ))}
//         </motion.span>
//         <h2 className="relative z-10 mt-2 pl-16 block text-base text-gray-200 transition-colors duration-500 group-hover:text-orange-400">
//           {subheading}
//         </h2>
//       </div>

//       {/* Icon replacing image */}
//       <motion.div
//         style={{
//           top,
//           left,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         variants={{
//           initial: { scale: 0, rotate: "-12.5deg" },
//           whileHover: { scale: 1, rotate: "12.5deg" },
//         }}
//         transition={{ type: "spring" }}
//         className="absolute z-0">
//         {icon}
//       </motion.div>

//       <motion.div
//         variants={{
//           initial: {
//             x: "25%",
//             opacity: 0,
//           },
//           whileHover: {
//             x: "0%",
//             opacity: 1,
//           },
//         }}
//         transition={{ type: "spring" }}
//         className="relative z-10 p-4">
//         <FiArrowRight className="text-5xl mr-16 text-orange-500" />
//       </motion.div>
//     </motion.a>
//   );
// };
