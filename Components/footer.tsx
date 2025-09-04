"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import Logo from "@/assets/TribeTek-Primary-Logo.png";

export default function Footer() {
  return (
    <footer className="container bg-white rounded-t-4xl mx-auto py-10 px-6 sm:p-16 text-gray-700 md:px-16 py-10 md:py-20  shadow-md">
      <div className="container mx-auto  px-6 sm:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="flex flex-col gap-3">
          <Image src={Logo} alt="TribeTek Logo" width={150} height={50} />
          <p className="text-sm">
            We build modern digital experiences that drive results  from software systems to strategy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/services" className="hover:text-[#ED4716] transition">Services</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#ED4716] transition">Products</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#ED4716] transition">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ED4716] transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm mb-1">Colombo, Sri Lanka</p>
          <p className="text-sm mb-1">info.tribetek@gmail.com</p>
          {/* <p className="text-sm mb-3">+94 77 123 4567</p> */}

          <div className="flex gap-4 mt-3">
            <a href="https://instagram.com/tribetek" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-[#ED4716] transition" />
            </a>
            <a href="https://linkedin.com/company/tribetek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-[#ED4716] transition" />
            </a>
            <a href="https://twitter.com/tribetek" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-[#ED4716] transition" />
            </a>
            <a href="https://facebook.com/tribetek" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-[#ED4716] transition" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
          <p className="text-sm mb-3">Subscribe for the latest updates and insights.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
            />
            <button className="bg-[#ED4716] hover:bg-[#d63f0f] text-white px-4 py-2 rounded-full font-medium transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2 px-6 sm:px-16">
        <span>© {new Date().getFullYear()} TribeTek. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-[#ED4716] transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#ED4716] transition">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
