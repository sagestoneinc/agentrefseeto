import type { Metadata } from "next";
import { Search } from "lucide-react";

import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata: Metadata = {
  title: "Buyers",
  description:
    "Seeto Realty helps buyers in Plano, DFW, Houston, and Greater Houston find the right home with local guidance and clear next steps.",
};

export default function BuyersPage() {
  return (
    <ServiceLandingPage
      eyebrow="Buyer services"
      title="Find the right home in Plano, DFW, or Houston with local guidance."
      description="Seeto Realty gives buyers a practical path through neighborhoods, offer strategy, and tour coordination so the process feels clear and local from the first conversation."
      imageSrc="/images/hero-property.svg"
      imageAlt="Texas home buying guidance"
      overview="A buyer-focused experience that keeps the search local, organized, and easy to act on."
      bullets={[
        "Neighborhood fit and school-area context",
        "Offer strategy that matches the market",
        "Tour coordination and follow-up that keeps momentum",
        "Clear communication from search to closing",
      ]}
      proof={[
        "Plano, DFW, and Houston buyer support",
        "Boutique service with founder-level accountability",
        "Consultation-first process with fast follow-up",
      ]}
      localAreas={[
        "Plano / Collin County",
        "Dallas-Fort Worth",
        "Houston / Greater Houston",
      ]}
      faqItems={[
        {
          question: "Can Seeto Realty help first-time buyers?",
          answer:
            "Yes. The process should be simple, local, and focused on helping buyers understand their options quickly.",
        },
        {
          question: "Do you help with neighborhood selection?",
          answer:
            "Yes. Local context matters, so the search should account for commute, lifestyle, and long-term fit.",
        },
        {
          question: "Can I schedule a consultation before touring homes?",
          answer:
            "Absolutely. Starting with a consult helps define the right areas, timeline, and search strategy.",
        },
        {
          question: "Do you work in both Plano and Houston?",
          answer:
            "Yes. Seeto Realty serves both markets and nearby Texas areas as part of the same boutique service model.",
        },
      ]}
      relatedLinks={[
        { label: "Seller services", href: "/sellers" },
        { label: "Investor services", href: "/investors" },
      ]}
      icon={Search}
    />
  );
}
