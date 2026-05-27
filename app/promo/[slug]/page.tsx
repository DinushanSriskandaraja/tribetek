import { notFound } from "next/navigation";
import { promoData } from "@/data/promoData";
import PromoHero from "@/Components/PromoHero";
import PromoProblem from "@/Components/PromoProblem";
import BenefitsSection from "@/Components/serviceBenifits"; // Reusing existing
import SolutionsSection from "@/Components/SolutionsSection"; // Reusing existing
import ProcessStepsSection from "@/Components/ProcessStepSections"; // Reusing existing
import TestimonialsCarousel from "@/Components/TestimonialsCarousel"; // Reusing existing
import FAQSection from "@/Components/FAQSection"; // Reusing existing
import CTASection from "@/Components/cta";
import PromoProcess from "@/Components/PromoProcess";
import PromoMidCTA from "@/Components/PromoMidCTA";
import { Zap, BarChart3, Target, Shield, Rocket, Cpu, Clock, Users, MessageSquare } from "lucide-react";

// Map icon strings to Lucide components
const iconMap: Record<string, any> = {
  Zap,
  BarChart3,
  Target,
  Shield,
  Rocket,
  Cpu,
  Clock,
  Users,
  MessageSquare,
};

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

import MilestonesSection from "@/Components/milestones";

import PromoBento from "@/Components/PromoBento";

export default async function PromoPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const data = promoData[slug];
  
  if (!data) {
    return notFound();
  }

  return (
    <main className="flex flex-col w-full text-[var(--c-text)] overflow-x-hidden pt-20 bg-[var(--c-white)]">
      {/* 1. Hero — Emotional Hook + Immediate Lead Capture */}
      <PromoHero 
        badge={data.heroBadge}
        title={data.title}
        subtitle={data.subtitle}
        ctaText={data.heroCta}
      />
      
      {/* 2. Social Proof — High-level Trust Metrics */}
      <div className="relative z-20 -mt-12">
        <MilestonesSection />
      </div>

      {/* 3. The Pain — Empathy & Agitation */}
      <PromoProblem problems={data.problems} />
      
      {/* 4. The Transformation — Bento Grid (Benefits & Solutions) */}
      <PromoBento 
        benefits={data.benefits.map(b => b.title)} 
        solutions={data.process.map(p => p.title)} 
      />

      {/* 5. Mid-Page Re-Conversion — Catch those ready to move */}
      <PromoMidCTA />

      {/* 6. The Roadmap — The Transformation Process */}
      <section className="py-40 px-6 relative bg-[#FAFAFA] border-y border-[var(--c-border)]">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-24">
                <div className="mb-6">
                  <span className="badge-elite !bg-white">The Roadmap</span>
                </div>
                <h2 className="text-6xl md:text-[5.5rem] font-black text-[var(--c-black)] tracking-[-0.04em] leading-[0.95]">
                    Our <span className="text-[var(--c-accent)]">Elite</span> Process.
                </h2>
                <p className="mt-8 text-[var(--c-muted)] text-xl font-medium max-w-2xl mx-auto">
                    From audit to automation — we handle the complexity so you can focus on scale.
                </p>
            </div>
            <PromoProcess process={data.process} />
        </div>
      </section>

      {/* 7. Proof & Reliability — Social Proof & Objections */}
      <div className="py-32 bg-white">
        <div className="text-center mb-16">
          <span className="badge-elite mb-4">Success Stories</span>
          <h2 className="text-4xl font-black text-[var(--c-black)] tracking-tight">Trusted by Industry Leaders</h2>
        </div>
        <TestimonialsCarousel />
      </div>
      
      {/* 8. The Friction-Remover — FAQ */}
      <div className="bg-[#FAFAFA] border-y border-[var(--c-border)] py-32">
        <FAQSection />
      </div>

      {/* 9. The Closing — Final Conversion Call */}
      <CTASection 
        title={data.ctaTitle}
        subtitle={data.ctaSubtitle}
        bulletPoints={data.ctaBulletPoints}
      />
    </main>
  );
}



