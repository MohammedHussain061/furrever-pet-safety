import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { FeatureMarquee } from "@/components/home/FeatureMarquee";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CollarShowcase } from "@/components/home/CollarShowcase";
import { PrivacyBento } from "@/components/home/PrivacyBento";
import { AppShowcase } from "@/components/home/AppShowcase";
import { Comparison } from "@/components/home/Comparison";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Furrever — Smart collars that help lost pets get home" },
      {
        name: "description",
        content:
          "One tap from any phone opens your pet's profile. Furrever smart NFC collars: no app for finders, no battery, full privacy control.",
      },
      { property: "og:title", content: "Furrever — Smart collars that help lost pets get home" },
      {
        property: "og:description",
        content: "One tap from any phone opens your pet's profile. No app, no battery, your privacy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <FeatureMarquee />
      <HowItWorks />
      <CollarShowcase />
      <PrivacyBento />
      <AppShowcase />
      <Comparison />
      <Testimonials />
      <Faq />
      <CtaBand />
    </SiteLayout>
  );
}
