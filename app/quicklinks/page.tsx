"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Facebook, Globe, Mail, MessageCircle, Map, Heart, Activity } from "lucide-react";
import Logo from "@/assets/TribeTek-Primary-Logo.png";

const links = [
  { href: "/", label: "Visit Our Website", icon: Globe, highlight: true },
  { href: "https://api.whatsapp.com/send/?phone=94763308199&text=Hi+TribeTek%2C+I+would+like+to+book+a+free+consultation.&type=phone_number&app_absent=0", label: "Chat on WhatsApp", icon: MessageCircle },
  { href: "mailto:info@tribetek.info", label: "Email Us", icon: Mail },
  {
    href: "https://tip2trips.tribetek.info/",
    label: "Tip2Trips",
    icon: Map,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop"
  },
  {
    href: "https://esyevent.tribetek.info/",
    label: "EsyEvent",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop"
  },
  {
    href: "https://Bookindoor.tribetek.info/",
    label: "Bookindoor",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600&auto=format&fit=crop"
  },
];

const socials = [
  { href: "https://www.instagram.com/tribe.tek/", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/tribetekinfo", icon: Linkedin, label: "LinkedIn" },
  { href: "https://web.facebook.com/TribeTekPvtLtd", icon: Facebook, label: "Facebook" },
];

export default function QuickLinksPage() {
  useEffect(() => {
    // Prevent scrolling on the body so the underlying layout stays put
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-[#FAFAFA] overflow-y-auto flex flex-col items-center py-16 px-6 sm:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[var(--c-accent)]/5 to-transparent pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">

        {/* Premium Logo Presentation */}
        <div className="relative flex justify-center mb-6 mt-4">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-[var(--c-accent)] opacity-20 blur-[30px] rounded-full pointer-events-none" />

          <div className="relative z-10 bg-white/50 backdrop-blur-sm border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-8 py-5">
            <Image
              src={Logo}
              alt="TribeTek Logo"
              width={160}
              height={45}
              className="w-auto h-9 object-contain"
              priority
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-[var(--c-muted)] text-[15px] font-medium mb-10 px-4 leading-relaxed">
          Automation-Driven Web Systems for Growing Businesses
        </p>

        {/* Links Array */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  animationDelay: `${idx * 100}ms`,
                  ...(link.image ? { backgroundImage: `url(${link.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {})
                }}
                className={`group relative flex items-center w-full p-[18px] rounded-2xl transition-opacity duration-300 ease-out animate-in fade-in slide-in-from-bottom-4 fill-mode-both overflow-hidden hover:opacity-90 ${link.image
                  ? "text-white border-0 shadow-md"
                  : link.highlight
                    ? "bg-[var(--c-accent)] text-white shadow-md"
                    : "bg-white border border-[var(--c-border)] text-[var(--c-black)] shadow-sm"
                  }`}
              >
                {/* Dark overlay for image backgrounds */}
                {link.image && <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />}

                <div className={`relative z-10 flex items-center justify-center w-[42px] h-[42px] rounded-xl mr-4 transition-colors ${link.image || link.highlight ? "bg-white/20" : "bg-[#FAFAFA]"}`}>
                  <Icon size={20} className={link.image || link.highlight ? "text-white" : "text-[var(--c-accent)]"} />
                </div>
                <span className="relative z-10 font-bold text-[15.5px] flex-1">{link.label}</span>
                <ArrowRight
                  size={18}
                  className={`relative z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300 ${link.image || link.highlight ? "text-white" : "text-[var(--c-black)]"}`}
                />
              </a>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-16">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${(links.length * 100) + (idx * 100)}ms` }}
                className="w-[52px] h-[52px] rounded-full bg-white border border-[var(--c-border)] flex items-center justify-center text-[var(--c-black)] transition-opacity duration-300 hover:opacity-70 shadow-sm animate-in fade-in zoom-in-95 fill-mode-both"
                aria-label={social.label}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-auto pb-4 text-center">
          <p className="text-[10px] font-black text-[var(--c-muted)] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} TribeTek Pvt Ltd.
          </p>
        </div>

      </div>
    </div>
  );
}
