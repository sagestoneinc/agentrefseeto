import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Seeto Realty supports Texas investors with acquisition guidance, cash-flow context, and local market insight in Plano, DFW, Houston, and Greater Houston.",
};

export default function InvestorsPage() {
  return (
    <ServiceLandingPage
      eyebrow="Investor services"
      title="Evaluate Texas investment property with a practical, return-focused lens."
      description="Seeto Realty helps investors move with more confidence by focusing on acquisition fit, cash flow, and the long-term ownership picture across Texas markets."
      imageSrc="/images/hero-property.svg"
      imageAlt="Texas investment property guidance"
      overview="A disciplined path for investors who want local context, not hype."
      bullets={[
        "Acquisition support for buy-and-hold and value-add deals",
        "Cash-flow review and ownership strategy context",
        "Market-area insight across DFW and Greater Houston",
        "Practical guidance for repeat or first-time investors",
      ]}
      proof={[
        "Investor support across Plano, Houston, and nearby markets",
        "Strong local context for rental and resale decisions",
        "Boutique service with one clear point of contact",
      ]}
      localAreas={[
        "Plano / Collin County",
        "Dallas-Fort Worth",
        "Houston / Greater Houston",
      ]}
      faqItems={[
        {
          question: "Can Seeto Realty help compare investment options?",
          answer:
            "Yes. The goal is to clarify return potential, market fit, and next-step risk before you commit.",
        },
        {
          question: "Do you work with rental properties?",
          answer:
            "Yes. Investors and rental owners can use the same consultation-first process to define the right path.",
        },
        {
          question: "Can foreclosures fit into an investor strategy?",
          answer:
            "Yes. Foreclosures can work well when the opportunity and risk are evaluated locally and carefully.",
        },
        {
          question: "What markets do you cover for investors?",
          answer:
            "Plano, DFW, Houston, Greater Houston, and nearby Texas markets depending on the opportunity.",
        },
      ]}
      relatedLinks={[
        { label: "Foreclosure help", href: "/foreclosures" },
        { label: "Property management", href: "/property-management" },
      ]}
      icon={Sparkles}
    />
  );
}
