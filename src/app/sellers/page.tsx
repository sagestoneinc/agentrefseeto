import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";

import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata: Metadata = {
  title: "Sellers",
  description:
    "Seeto Realty helps sellers in Plano, DFW, Houston, and Greater Houston price, position, and market their homes with a practical local strategy.",
};

export default function SellersPage() {
  return (
    <ServiceLandingPage
      eyebrow="Seller services"
      title="Price and market your home with a clear Texas listing strategy."
      description="Seeto Realty helps sellers position their property with local pricing context, listing preparation, and marketing guidance designed to attract the right buyers faster."
      imageSrc="/images/estate-exterior.svg"
      imageAlt="Texas home selling guidance"
      overview="A seller path built to reduce uncertainty and improve the presentation of the home before launch."
      bullets={[
        "Pricing strategy rooted in local market context",
        "Listing prep guidance that improves first impressions",
        "Marketing support that keeps the listing on message",
        "Responsive communication during the active sale period",
      ]}
      proof={[
        "Seller support in Plano, DFW, and Houston",
        "Practical, founder-led real estate advice",
        "Clear next steps from consultation to list date",
      ]}
      localAreas={[
        "Plano / Collin County",
        "Dallas-Fort Worth",
        "Houston / Greater Houston",
      ]}
      faqItems={[
        {
          question: "How should I prepare my home for market?",
          answer:
            "Start with a pricing and presentation conversation so the listing can launch with the right plan.",
        },
        {
          question: "Can Seeto Realty help me decide when to list?",
          answer:
            "Yes. Timing should reflect local demand, competition, and your personal goals.",
        },
        {
          question: "Do you work with homes in different parts of Texas?",
          answer:
            "Yes. Seeto Realty serves Plano, Houston, and nearby Texas markets with the same boutique approach.",
        },
        {
          question: "Is a valuation available before listing?",
          answer:
            "Yes. A valuation consultation is a good first step before committing to a launch plan.",
        },
      ]}
      relatedLinks={[
        { label: "Buyer services", href: "/buyers" },
        { label: "Property management", href: "/property-management" },
      ]}
      icon={TrendingUp}
    />
  );
}
