"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TribeTek from "../assets/TribeTek-Primary-Logo.png";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLeadGen } from "../hooks/useLeadGen";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setShowPopup } = useLeadGen();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-[var(--c-border)] shadow-sm" : "py-8 bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-10">
            <Image src={TribeTek} alt="TribeTek" height={32} className="w-auto h-8" priority />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`text-sm font-bold tracking-tight transition-all duration-300 ${isActive(item.path) ? "text-[var(--c-accent)]" : "text-[var(--c-black)] hover:text-[var(--c-accent)]"
                  }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setShowPopup(true)}
              className="btn btn-primary btn-sm px-6"
            >
              Get Free Audit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-[var(--c-black)]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-[90] bg-white flex flex-col p-8 pt-32"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black mb-8 text-[var(--c-black)]"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-auto">
              <button
                onClick={() => { setIsOpen(false); setShowPopup(true); }}
                className="btn btn-primary btn-lg w-full"
              >
                Get Free Audit <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
