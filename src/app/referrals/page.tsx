import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/referrals/Hero";
import WhyCards from "@/components/referrals/WhyCards";
import Timeline from "@/components/referrals/Timeline";
import BenefitsGrid from "@/components/referrals/BenefitsGrid";
import Stats from "@/components/referrals/Stats";
import Testimonials from "@/components/referrals/Testimonials";
import Faq from "@/components/referrals/Faq";
import FinalCta from "@/components/referrals/FinalCta";

export const metadata: Metadata = {
  title: "Florida Real Estate Agent Referral Program | Seeto Realty",
  description:
    "Refer your Florida-bound clients to Seeto Realty and earn referral fees. Trusted Florida real estate experts providing exceptional client experiences.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Seeto Realty Referral Program",
  url: "https://seetorealty.com/referrals",
  logo: "https://seetorealty.com/images/seeto-realty-logo.svg",
};

export default function ReferralsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Script id="referral-ld" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Hero />
      <main className="container space-y-20 py-12">
        <section>
          <WhyCards />
        </section>

        <section>
          <Timeline />
        </section>

        <section>
          <BenefitsGrid />
        </section>

        <section>
          <Stats />
        </section>

        <section>
          <Testimonials />
        </section>

        <section>
          <Faq />
        </section>

        <FinalCta />
      </main>
    </div>
  );
}
