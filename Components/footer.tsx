"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import Logo from "@/assets/TribeTek-Primary-Logo.png";

const socials = [
  { href: "https://www.instagram.com/tribe.tek/", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/tribetekinfo", icon: Linkedin, label: "LinkedIn" },
  { href: "https://web.facebook.com/TribeTekPvtLtd", icon: Facebook, label: "Facebook" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "https://calendly.com/tribetek", label: "Contact" },
];

const serviceLinks = [
  { label: "Automation", href: "/services/digital-transformation" },
  { label: "Web Systems", href: "/services/website-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Consulting", href: "/services/consulting" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--c-black)] text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Strip */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 pb-16 border-b border-white/10 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-4">
              Scale without <br /> <span className="text-[var(--c-accent)]">the head count.</span>
            </h2>
            <p className="text-white/60 text-lg font-medium">Ready to build the elite systems your business deserves?</p>
          </div>
          <a href="https://calendly.com/tribetek" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Start Your Audit <ArrowUpRight size={20} />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Image src={Logo} alt="TribeTek" width={140} height={40} className="mb-8 " />
            <p className="text-white/50 text-sm font-medium leading-relaxed mb-8 max-w-xs">
              We design and build elite automation-driven web systems that eliminate manual work and scale operations.
            </p>
            <div className="flex gap-4">
              {socials.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-[var(--c-accent)] hover:border-[var(--c-accent)] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-[var(--c-accent)] uppercase tracking-[0.2em] mb-8">Platform</h4>
            <ul className="space-y-4">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white font-bold text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-[var(--c-accent)] uppercase tracking-[0.2em] mb-8">Capabilities</h4>
            <ul className="space-y-4">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white font-bold text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-[var(--c-accent)] uppercase tracking-[0.2em] mb-8">Connect</h4>
            <p className="text-white/60 text-sm font-bold mb-4">Colombo, Sri Lanka</p>
            <a href="mailto:info.info@tribetek.info" className="text-lg font-black hover:text-[var(--c-accent)] transition-colors">
              info@tribetek.info
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} TribeTek Pvt Ltd.
          </p>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
            Built for Elite Performance.
          </p>
        </div>

      </div>
    </footer>
  );
}
