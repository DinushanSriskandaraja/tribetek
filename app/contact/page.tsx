import Newsletter from "@/Components/Newsletter";
import SecondaryHero from "@/Components/SecondaryHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TribeTek | Automation & Web Systems Consultation",
  description:
    "Discuss your business workflow with TribeTek. We help startups and growing businesses reduce manual work through automation-driven web systems.",

  openGraph: {
    title: "Let’s Understand Your Workflow | TribeTek",
    description:
      "Tell us about your current process and challenges. TribeTek helps businesses replace manual work with structured, automation-driven web systems.",
    url: "https://tribetek.info/contact",
    siteName: "TribeTek",
    type: "website",
    images: [
      {
        url: "/TribeTek-Icon.png", // create this image if not already
        width: 1200,
        height: 630,
        alt: "TribeTek Workflow Automation Consultation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Let’s Understand Your Workflow | TribeTek",
    description:
      "Tell us about your current process and challenges. TribeTek helps businesses replace manual work with structured, automation-driven web systems.",
    images: ["/TribeTek-Icon.png"],
  },

  alternates: {
    canonical: "https://tribetek.info/contact",
  },
};

export default function ContactSection() {
  return (
    <main className="bg-white min-h-screen w-full text-[var(--c-text)] overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24">
        {/* Contact / Newsletter Section */}
        <SecondaryHero
          title="Let’s Understand "
          highlight="Your Workflow."
          subtitle="Share a few details about your current process, and we’ll help you identify where automation can reduce manual work and improve efficiency."
        />
        <Newsletter />
      </div>
    </main>
  );
}
