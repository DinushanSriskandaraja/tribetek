"use client";

import SecondaryHero from "@/Components/SecondaryHero";
import OurStoryCard from "@/Components/OurStoryCard";
import CoreValues from "@/Components/CoreValues";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* 🔥 Background Glows */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-[#ED4716]/30 via-[#FF6B2C]/20 to-transparent blur-[240px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-tr from-[#FF6B2C]/25 via-[#ED4716]/15 to-transparent blur-[200px] rounded-full" />
      </div> */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-28">
        {/* --- Secondary Hero Section --- */}
        <SecondaryHero
          title="About Us"
          // highlight="TribeTek"
          subtitle="Bootstrap-born, innovation-powered, and driven by results — building intelligent digital products for modern businesses."
        />

        {/* --- Our Story Section --- */}
        <OurStoryCard
          title="Our Journey"
          description={`TribeTek started as a bootstrap-powered vision — building reliable digital products while crafting homegrown innovations.  

Without external funding, just pure passion, grit, and collaboration, we transformed our ideas into tangible solutions for businesses.  

Today, TribeTek stands as a trusted partner and creator of tech solutions redefining possibilities for modern businesses.`}
        />

        {/* --- Core Values Section --- */}
        <CoreValues />
      </div>
    </div>
  );
}
