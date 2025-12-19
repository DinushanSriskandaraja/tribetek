"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import Logo from "@/assets/TribeTek-Primary-Logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#151515] text-gray-300 pt-20 pb-10">
      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ED4716]/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF6B2C]/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* Branding Section */}
        <div className="flex flex-col gap-4">
          <Image
            src={Logo}
            alt="TribeTek Logo"
            width={160}
            height={60}
            className="drop-shadow-[0_0_15px_rgba(237,71,22,0.3)]"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering digital transformation — from <span className="text-white font-medium">strategy</span> to
            <span className="text-white font-medium"> scalable software</span> solutions that drive measurable impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5 relative">
            Quick Links
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#ED4716]" />
          </h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            {[
              { href: "/services", label: "Services" },
              { href: "/products", label: "Products" },
              { href: "/blogs", label: "Blog" },
              { href: "/contact", label: "Contact Us" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-[#FF6B2C] transition-all duration-300 hover:pl-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5 relative">
            Contact
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#ED4716]" />
          </h4>
          <p className="text-sm text-gray-400 mb-1">Colombo, Sri Lanka</p>
          <p className="text-sm text-gray-400 mb-1">info.tribetek@gmail.com</p>
          {/* <p className="text-sm text-gray-400 mb-3">+94 77 123 4567</p> */}

          <div className="flex gap-5 mt-4">
            {[
              {
                href: "https://instagram.com/tribetek",
                icon: Instagram,
                label: "Instagram",
              },
              {
                href: "https://linkedin.com/company/tribetek",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://twitter.com/tribetek",
                icon: Twitter,
                label: "Twitter",
              },
              {
                href: "https://facebook.com/tribetek",
                icon: Facebook,
                label: "Facebook",
              },
            ].map(({ href, icon: Icon, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full border border-gray-700 hover:border-[#ED4716] hover:bg-[#ED4716]/10 text-gray-400 hover:text-[#FF6B2C] transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5 relative">
            Newsletter
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#ED4716]" />
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest news and insights from our innovation desk.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2.5 rounded-full bg-[#1a1a1a] border border-gray-700 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED4716]/60"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ED4716] to-[#FF6B2C] hover:shadow-[0_0_20px_rgba(237,71,22,0.5)] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#1f1f1f] mt-16 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4 px-6 md:px-16">
        <span>© {new Date().getFullYear()} TribeTek. All rights reserved.</span>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="hover:text-[#FF6B2C] transition duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#FF6B2C] transition duration-300"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
