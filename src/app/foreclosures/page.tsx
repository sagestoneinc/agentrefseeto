import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata: Metadata = {
  title: "Foreclosures",
  description:
    "Seeto Realty helps foreclosure clients in Plano, DFW, Houston, and Greater Houston navigate distressed and bank-owned properties with local context.",
};

export default function ForeclosuresPage() {
  return (
    <ServiceLandingPage
      eyebrow="Foreclosure services"
      title="Navigate distressed and bank-owned properties with local context."
      description="Seeto Realty gives foreclosure clients a clear path through opportunity screening, due diligence, and next-step planning across Texas markets."
      imageSrc="/images/estate-exterior.svg"
      imageAlt="Texas foreclosure property guidance"
      overview="A careful, local approach to a category that needs more context than a generic real estate search."
      bullets={[
        "Opportunity screening before you make a move",
        "Due diligence that respects the risk profile of the property",
        "Local market context to support better decisions",
        "Guidance for both end-users and investors",
      ]}
      proof={[
        "Foreclosure support in Plano, DFW, and Houston",
        "Clear, practical next steps after the first consult",
        "Service that stays grounded in local market reality",
      ]}
      localAreas={[
        "Plano / Collin County",
        "Dallas-Fort Worth",
        "Houston / Greater Houston",
      ]}
      faqItems={[
        {
          question: "Do foreclosures always make good investments?",
          answer:
            "No. Each property needs local context, due diligence, and a realistic plan before it becomes a sound opportunity.",
        },
        {
          question: "Can Seeto Realty help me understand the process?",
          answer:
            "Yes. The goal is to make the path clear before you commit to an offer or deeper review.",
        },
        {
          question: "Do you work with end-users and investors?",
          answer:
            "Yes. Both client types can benefit from a careful foreclosure consultation.",
        },
        {
          question: "What markets do you cover?",
          answer:
            "Plano, DFW, Houston, Greater Houston, and nearby Texas markets based on the opportunity.",
        },
      ]}
      relatedLinks={[
        { label: "Investor services", href: "/investors" },
        { label: "Seller services", href: "/sellers" },
      ]}
      icon={ShieldCheck}
    />
  );
}
