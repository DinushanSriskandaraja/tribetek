import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../Components/nav";
import Footer from "../Components/footer";
import CTASection from "@/Components/cta";
import LeadCaptureModal from "@/Components/LeadCaptureModal";
import StickyCTABar from "@/Components/StickyCTABar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TribeTek | Automation-Driven Web Systems for Growing Businesses",
  description:
    "TribeTek delivers automation-driven web systems that help businesses eliminate manual work, connect their tools, and operate at a higher level.",
  icons: { icon: "/TribeTek-Icon.png" },
  metadataBase: new URL("https://tribetek.info"),
  keywords: [
    "automation agency",
    "web systems",
    "business automation",
    "workflow automation",
    "custom software",
    "AI solutions",
    "web development",
    "system integration",
    "TribeTek",
  ],
  authors: [{ name: "TribeTek", url: "https://tribetek.info" }],
  openGraph: {
    type: "website",
    siteName: "TribeTek",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TribeTek",
  url: "https://tribetek.info",
  logo: "https://tribetek.info/TribeTek-Icon.png",
  description:
    "TribeTek delivers automation-driven web systems that help businesses eliminate manual work, connect tools, and operate at a higher level.",
  foundingDate: "2022",
  sameAs: [
    "https://www.instagram.com/tribe.tek/",
    "https://www.linkedin.com/company/tribetekinfo",
    "https://web.facebook.com/TribeTekPvtLtd",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info.tribetek@gmail.com",
    contactType: "sales",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TribeTek",
  url: "https://tribetek.info",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://tribetek.info/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ED4716" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&display=swap"
          rel="stylesheet"
        />
        {/* Preload critical font */}
        <link
          rel="preload"
          href="/fonts/Astonpoliz.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3Z09L07JZY"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3Z09L07JZY');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>

        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Page Content — hero section has its own padding */}
        <main className="relative z-10">
          {children}
          <CTASection isGlobal={true} />
          <Footer />
        </main>
        <LeadCaptureModal />
        <StickyCTABar />
      </body>
    </html>
  );
}
