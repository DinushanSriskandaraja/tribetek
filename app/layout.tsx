import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Icon from "@/assets/TribeTek-Icon.png"; //updated
//updated
import Navbar from "../Components/nav";
//updated
import Footer from "../Components/footer";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f2f2f2] antialiased`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
