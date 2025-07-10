"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TribeTek from "../assets/TribeTek.png";

const MotionImage = motion(Image);

const NavBar = () => {
  return (
    <div className="relative flex z-20 justify-center bg-gray-100">
      <motion.nav
        className="absolute top-4 bg-white/30 backdrop-blur-md border border-white/60 shadow-lg rounded-tl-full rounded-br-full px-6 py-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="flex items-center px-6 space-x-6">
          {/* Logo */}
          <MotionImage
            src={TribeTek}
            alt="TribeTek Logo"
            // width={40}
            height={20}
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />

          {/* Navigation Links */}
          <div className="flex space-x-4">
            {[
              { name: "Home", path: "/" },
              { name: "About us", path: "/about" },
              { name: "Blogs", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-gray-900 font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default NavBar;
