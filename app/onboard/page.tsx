import SecondaryHero from "@/Components/SecondaryHero";
import OnboardingForm from "@/Components/OnboardingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Onboarding | TribeTek Elite Automation",
  description:
    "Begin your journey with TribeTek. Provide your project brief to initiate our elite automation and web systems onboarding process.",
  openGraph: {
    title: "Client Onboarding | TribeTek Elite Automation",
    description: "Provide your project brief to initiate our elite automation and web systems onboarding process.",
    url: "https://tribetek.info/onboard",
    siteName: "TribeTek",
    type: "website",
  },
};

export default function OnboardPage() {
  return (
    <main className="bg-white min-h-screen w-full text-[var(--c-text)] overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-24">
        <SecondaryHero
          title="Onboarding &"
          highlight="System Initialization."
          subtitle="Precision begins with clarity. Tell us about your operational landscape and the friction points you need to eliminate."
        />

        <OnboardingForm />
      </div>
    </main>
  );
}
