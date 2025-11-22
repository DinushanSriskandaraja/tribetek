import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/nav";
import Footer from "../Components/footer";
import CTASection from "@/Components/cta";
import FloatingGradient from "@/Components/bgEffect";
import SmoothScroll from "@/Components/SmoothScroll";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-gradient-to-tr from-[#161616] to-[#0f0f0f] text-[#e5e5e5]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative text-[#e5e5e5] antialiased overflow-x-hidden`}>
        {/* FIXED NAVBAR */}
        <div className="fixed top-0 left-0 w-full z-50 bg-[#121212] border-b border-[#1f1f1f]">
          <Navbar />
        </div>

        {/* SMOOTH SCROLL CONTENT */}
        <main className="relative z-10">
          {/* <SmoothScroll> */}
          <div className="pt-[80px]">
            {children}
            <CTASection />
            <Footer />
          </div>
          {/* </SmoothScroll> */}
        </main>
      </body>
    </html>
  );
}
