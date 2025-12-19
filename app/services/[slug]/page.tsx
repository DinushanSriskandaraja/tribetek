"use client"; // Only needed if you use client hooks like useState, motion, etc.

import { notFound } from "next/navigation";
import { services, iconMap, techIconMap } from "@/data/servicesData";
import HeroSection from "@/Components/serviceHero";
import BenefitsSection from "@/Components/serviceBenifits";
import SolutionsSection from "@/Components/SolutionsSection";
import TechStackSection from "@/Components/TechStackSection";

type ServiceDetailPageProps = {
  params:
    | { slug: keyof typeof services }
    | Promise<{ slug: keyof typeof services }>;
};

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  // Await params if it's a Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const service = services[slug];
  if (!service) return notFound();

  const IconComponent = iconMap[slug];

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-20 flex flex-col space-y-32">
        <HeroSection icon={<IconComponent />} service={service} />
        <BenefitsSection benefits={service.benefits} />
        <SolutionsSection whatWeDo={service.whatWeDo} />
        <TechStackSection
          techStack={service.techStack}
          techIconMap={techIconMap}
        />
      </div>
    </main>
  );
}
