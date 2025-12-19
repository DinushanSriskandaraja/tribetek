"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TribeTek from "../assets/TribeTek-Primary-Logo.png";
import { Menu, X } from "lucide-react"; // Hamburger icons

const MotionImage = motion(Image);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative flex z-50 justify-center">
      <motion.nav
        className="fixed top-2 w-full bg-[[#161616]/60] backdrop-blur-md border border-[#2b2b2b] shadow-lg px-8 py-4 flex items-center justify-between"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Logo */}
        <MotionImage
          src={TribeTek}
          alt="TribeTek Logo"
          height={40}
          className="cursor-pointer"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.path}
              className="text-[#ED4716] hover:text-white font-medium text-lg"
              whileHover={{ scale: 1.05 }}>
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-[#ED4716]" />
            ) : (
              <Menu size={28} className="text-[#ED4716]" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 w-[85%] mx-auto left-0 right-0 bg-[#161616]/90 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-[#ED4716] font-medium text-2xl hover:text-white transition"
              onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
