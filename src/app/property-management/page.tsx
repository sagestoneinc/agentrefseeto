import type { Metadata } from "next";
import { Handshake } from "lucide-react";

import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata: Metadata = {
  title: "Property Management",
  description:
    "Seeto Realty property management supports Texas owners with tenant placement, lease management, maintenance coordination, and reporting.",
};

export default function PropertyManagementPage() {
  return (
    <ServiceLandingPage
      eyebrow="Property management"
      title="Protect your property with a clear, responsive management process."
      description="Seeto Realty helps Texas owners reduce friction with tenant placement, lease management, maintenance coordination, and straightforward reporting."
      imageSrc="/images/estate-interior.svg"
      imageAlt="Texas property management guidance"
      overview="A management path designed to help owners stay informed while protecting asset value."
      bullets={[
        "Tenant placement and owner screening support",
        "Lease management and renewal coordination",
        "Maintenance coordination and follow-up",
        "Simple owner reporting and communication",
      ]}
      proof={[
        "Property management support in Plano and Houston",
        "Boutique service with clear ownership of the process",
        "Local responsiveness from first inquiry to ongoing service",
      ]}
      localAreas={[
        "Plano / Collin County",
        "Dallas-Fort Worth",
        "Houston / Greater Houston",
      ]}
      faqItems={[
        {
          question: "What does property management include?",
          answer:
            "The core service should cover tenant placement, lease handling, maintenance coordination, and owner communication.",
        },
        {
          question: "Do you help with investor properties?",
          answer:
            "Yes. Investors often need the same clear, responsive management path as any other owner.",
        },
        {
          question: "Can Seeto Realty support properties in multiple Texas markets?",
          answer:
            "Yes. Plano, DFW, Houston, and Greater Houston are all part of the firm’s local service footprint.",
        },
        {
          question: "How do I get started?",
          answer:
            "Schedule a consultation and share the property details, timeline, and current ownership goals.",
        },
      ]}
      relatedLinks={[
        { label: "Buyer services", href: "/buyers" },
        { label: "Investor services", href: "/investors" },
      ]}
      icon={Handshake}
    />
  );
}
