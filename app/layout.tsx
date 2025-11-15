import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/nav";
import Footer from "../Components/footer";
import CTASection from "@/Components/cta";
import FloatingGradient from "@/Components/bgEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TribeTek | Custom Software, AI & Digital Transformation Sri Lanka",
  description:
    "TribeTek delivers custom software development, AI solutions, digital marketing, and business automation to help Sri Lankan businesses grow and digitize efficiently.",
  icons: {
    icon: "/TribeTek-Icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0B0B0B] text-[#e5e5e5]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative  text-[#e5e5e5] antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <FloatingGradient />
        
        {/* Navbar */}
        <div className="sticky top-0 z-50 bg-[#121212] border-b border-[#1f1f1f]">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="flex-grow relative z-10">{children}</main>

        {/* CTA */}
        <CTASection />

        {/* Footer */}
        <Footer />

        {/* Optional: Subtle glowing gradient background
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#FF6B2C]/20 blur-[180px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ED4716]/15 blur-[150px] rounded-full animate-pulse-slow" />
        </div> */}
      </body>
    </html>
  );
}
