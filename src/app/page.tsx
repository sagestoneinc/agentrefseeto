import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Clock,
  Handshake,
  HeartHandshake,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { FadeIn } from "@/components/motion/fade-in";
import { ReferralForm } from "@/components/referral-form";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CALENDLY_URL } from "@/lib/constants";

const trustItems = [
  {
    title: "Founded in 2010",
    description: "More than a decade of Texas market experience.",
    icon: ShieldCheck,
  },
  {
    title: "Plano + Houston",
    description: "Two offices with one boutique standard of service.",
    icon: MapPin,
  },
  {
    title: "DFW + Greater Houston",
    description: "Local support for clients across the state’s biggest markets.",
    icon: Building2,
  },
  {
    title: "Fast response",
    description: "Expect a local follow-up within one business day.",
    icon: Clock,
  },
];

const servicePaths = [
  {
    title: "Buyers",
    href: "/buyers",
    description:
      "Find the right home in Plano, Houston, or the surrounding markets with local guidance and clear next steps.",
    icon: Search,
    points: ["Neighborhood fit", "Offer strategy", "Tour coordination"],
    cta: "Explore buyer support",
  },
  {
    title: "Sellers",
    href: "/sellers",
    description:
      "Price, position, and market your home with a practical plan designed to increase buyer interest.",
    icon: TrendingUp,
    points: ["Pricing strategy", "Listing prep", "Marketing guidance"],
    cta: "Request a valuation",
  },
  {
    title: "Investors",
    href: "/investors",
    description:
      "Evaluate opportunities through a return-focused lens, from buy-and-hold to value-add acquisitions.",
    icon: Sparkles,
    points: ["Acquisition support", "Cash-flow review", "Portfolio thinking"],
    cta: "Talk to an investor advisor",
  },
  {
    title: "Foreclosures",
    href: "/foreclosures",
    description:
      "Navigate distressed and bank-owned properties with the local context and risk awareness those deals require.",
    icon: ShieldCheck,
    points: ["Opportunity screening", "Due diligence", "Market context"],
    cta: "Explore foreclosure help",
  },
  {
    title: "Property management",
    href: "/property-management",
    description:
      "Protect ownership value with tenant placement, communication, maintenance coordination, and reporting.",
    icon: Handshake,
    points: ["Tenant placement", "Lease management", "Owner reporting"],
    cta: "Request management info",
  },
];

const marketHighlights = [
  {
    title: "Plano / Collin County",
    description:
      "High-touch representation for families, move-up buyers, and sellers who want disciplined local guidance.",
    icon: Building2,
  },
  {
    title: "Dallas-Fort Worth",
    description:
      "Broader market coverage for clients who need pricing, negotiation, and neighborhood context.",
    icon: MapPin,
  },
  {
    title: "Houston / Greater Houston",
    description:
      "Responsive support for buyers, sellers, and investors across one of Texas’s most active markets.",
    icon: Users,
  },
  {
    title: "Investor and rental properties",
    description:
      "Practical advice for income-producing properties, ownership strategy, and long-term planning.",
    icon: TrendingUp,
  },
];

const whyPoints = [
  {
    title: "Boutique, not volume-driven",
    description:
      "The service model should feel personal, responsive, and more accountable than a template brokerage.",
    icon: HeartHandshake,
  },
  {
    title: "Local and practical",
    description:
      "The messaging should sound like someone who knows the Texas market and can explain the next step clearly.",
    icon: TrendingUp,
  },
  {
    title: "Clear communication",
    description:
      "Fast follow-up and plain-language updates are conversion tools, not just service extras.",
    icon: Sparkles,
  },
  {
    title: "Founder-led accountability",
    description:
      "Michael Seeto should feel present as a trust signal, not just a name in the footer.",
    icon: Handshake,
  },
];

const processSteps = [
  {
    title: "Start with a consult",
    description:
      "Tell the team whether you’re buying, selling, investing, or managing property.",
  },
  {
    title: "Get a local plan",
    description:
      "Match your goals to the right market, timeline, and service path.",
  },
  {
    title: "Move with confidence",
    description:
      "Receive focused guidance instead of a generic real-estate script.",
  },
  {
    title: "Stay supported",
    description:
      "The same local team remains available after the transaction if you need them again.",
  },
];

const faqItems = [
  {
    question: "What areas does Seeto Realty serve?",
    answer:
      "Plano, DFW, Houston, Greater Houston, and nearby Texas markets depending on the client need.",
  },
  {
    question: "Do you work with both buyers and sellers?",
    answer:
      "Yes. The homepage should make it obvious that Seeto Realty supports both sides of the transaction.",
  },
  {
    question: "Can you help with investment properties and foreclosures?",
    answer:
      "Yes. Investors and foreclosure clients should have clear landing paths and consultation prompts.",
  },
  {
    question: "What does property management include?",
    answer:
      "Tenant placement, lease coordination, maintenance oversight, rent handling, and owner reporting.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Seeto Realty",
  url: "https://seetorealty.com",
  slogan: "Trusted Texas real estate guidance in Plano and Houston.",
  description:
    "Seeto Realty is a boutique Texas real estate company serving buyers, sellers, investors, foreclosure clients, and property owners.",
  areaServed: ["Texas", "Plano", "Houston", "Dallas-Fort Worth", "Greater Houston"],
  serviceType: [
    "Residential Real Estate",
    "Property Management",
    "Investor Services",
    "Foreclosure Guidance",
  ],
};

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-shell">
        <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-shell/90 backdrop-blur">
          <div className="container flex items-center justify-between gap-6 py-4">
            <a href="#top" className="flex items-center gap-3">
              <Image
                src="/images/seeto-realty-logo.svg"
                alt="Seeto Realty"
                width={220}
                height={52}
                priority
              />
            </a>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 lg:flex">
              <a className="hover:text-ink" href="#services">Services</a>
              <a className="hover:text-ink" href="#markets">Markets</a>
              <a className="hover:text-ink" href="#why-seeto">Why Seeto</a>
              <a className="hover:text-ink" href="#about">About</a>
              <a className="hover:text-ink" href="#faq">FAQ</a>
            </nav>
            <Button asChild className="hidden lg:inline-flex">
              <a href="#contact">Schedule Consultation</a>
            </Button>
          </div>
        </header>

        <main id="top" className="flex-1 pb-24 md:pb-0">
          <section className="relative overflow-hidden bg-hero-glow pb-16 pt-14 lg:pb-24 lg:pt-20">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(164,106,67,0.08),transparent_55%)]" />
            <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <FadeIn className="space-y-6">
                <Badge className="bg-brand/10 text-brand">Boutique Texas real estate</Badge>
                <h1 className="text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Real estate guidance for buyers, sellers, investors, foreclosures, and property owners.
                </h1>
                <p className="max-w-xl text-lg text-neutral-600">
                  Seeto Realty is a boutique Texas real estate company with offices in Plano and Houston, serving DFW and Greater Houston with modern, practical, conversion-focused support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href="#contact">Schedule Consultation</a>
                  </Button>
                  <CalendlyPopupButton calendlyUrl={CALENDLY_URL} variant="outline" size="lg">
                    Get a Home Valuation
                    <ArrowUpRight className="h-4 w-4" />
                  </CalendlyPopupButton>
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-semibold text-neutral-600">
                  <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">Founded in 2010</span>
                  <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">Plano + Houston offices</span>
                  <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">Buyers, sellers, investors, foreclosures</span>
                </div>
              </FadeIn>
              <FadeIn className="relative">
                <div className="absolute -top-10 right-4 hidden rounded-2xl border border-white/40 bg-white/90 p-4 shadow-luxe lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Michael Seeto</p>
                      <p className="text-xs text-neutral-500">Founder-led local service</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-luxe">
                  <Image
                    src="/images/hero-property.svg"
                    alt="Elegant Texas residential property"
                    width={960}
                    height={640}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-8 left-6 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-card">
                  <p className="text-xs font-semibold text-neutral-500">Offices in</p>
                  <p className="text-2xl font-semibold text-ink">Plano + Houston</p>
                  <p className="text-xs text-neutral-500">Serving DFW and Greater Houston</p>
                </div>
              </FadeIn>
            </div>
          </section>

          <section className="border-y border-neutral-200 bg-white py-10">
            <div className="container grid gap-6 md:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3 text-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="text-neutral-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="services" className="py-20">
            <div className="container">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4">Client pathways</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Clear entry points for every type of Seeto Realty client.
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  The homepage should route visitors to the right next step fast, without generic real estate clutter.
                </p>
              </FadeIn>
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {servicePaths.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} className="p-6">
                      <div className="flex items-start gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                          <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
                        </div>
                      </div>
                      <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4 text-brand" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                      >
                        {service.cta}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="markets" className="bg-soft py-20">
            <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <FadeIn className="space-y-6">
                <Badge>Local expertise</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Coverage that feels local in Plano, Houston, and across Texas.
                </h2>
                <p className="text-lg text-neutral-600">
                  Seeto Realty should communicate place clearly. Buyers want neighborhood nuance, sellers want pricing context, and investors need market discipline.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {marketHighlights.map((market) => {
                    const Icon = market.icon;
                    return (
                      <Card key={market.title} className="p-5">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-ink">{market.title}</h3>
                            <p className="mt-2 text-sm text-neutral-600">{market.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </FadeIn>
              <FadeIn className="relative">
                <div className="absolute -right-8 top-8 hidden h-40 w-40 rounded-[40px] border border-brand/30 bg-diagonal-accent opacity-10 lg:block" />
                <Image
                  src="/images/estate-exterior.svg"
                  alt="Texas home exterior"
                  width={900}
                  height={720}
                  className="w-full rounded-3xl border border-neutral-200 object-cover shadow-luxe"
                />
              </FadeIn>
            </div>
          </section>

          <section id="why-seeto" className="py-20">
            <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <FadeIn className="space-y-6">
                <Badge>Why Seeto Realty</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Boutique service with founder-level accountability.
                </h2>
                <p className="text-lg text-neutral-600">
                  Founded by Michael Seeto in 2010, the brand should feel local, modern, and trustworthy without defaulting to real estate clichés.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whyPoints.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <Card key={benefit.title} className="p-5">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-ink">{benefit.title}</p>
                            <p className="mt-2 text-sm text-neutral-600">{benefit.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </FadeIn>
              <FadeIn className="relative">
                <Image
                  src="/images/estate-interior.svg"
                  alt="Modern Texas interior"
                  width={900}
                  height={720}
                  className="w-full rounded-3xl border border-neutral-200 object-cover shadow-luxe"
                />
                <Card className="absolute -bottom-6 left-6 max-w-sm p-6 shadow-luxe">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Founded by
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">Michael Seeto</h3>
                  <p className="mt-3 text-sm text-neutral-600">
                    A practical real estate partner for clients who want responsiveness, market clarity, and an experienced local point of contact.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </section>

          <section className="bg-soft py-20">
            <div className="container">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4">Simple process</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  A clear path from first question to next step.
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  The lead journey should reduce friction and make the next move obvious.
                </p>
              </FadeIn>
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {processSteps.map((step, index) => (
                  <Card key={step.title} className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm text-neutral-600">{step.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="py-20">
            <div className="container">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4">FAQ</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Answer the common questions before the consultation.
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Strong FAQ coverage supports SEO, accessibility, and conversion.
                </p>
              </FadeIn>
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {faqItems.map((faq) => (
                  <Card key={faq.question} className="p-6">
                    <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="py-20">
            <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <FadeIn className="space-y-6">
                <Badge>About Seeto Realty</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  A founder-led Texas brand built for trust, clarity, and response.
                </h2>
                <p className="text-lg text-neutral-600">
                  Since 2010, Seeto Realty has served clients who want practical advice, polished presentation, and a real local point of contact.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Founded", value: "2010" },
                    { label: "Texas offices", value: "2" },
                    { label: "Primary markets", value: "DFW + HOU" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-card"
                    >
                      <p className="text-2xl font-semibold text-ink">{stat.value}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn className="space-y-6">
                <Image
                  src="/images/estate-exterior.svg"
                  alt="Texas property exterior"
                  width={900}
                  height={720}
                  className="w-full rounded-3xl border border-neutral-200 object-cover shadow-luxe"
                />
                <Card className="border-neutral-200 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Broker profile
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">Michael Seeto</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    The name to feature when the goal is trust, local credibility, and a premium but practical Texas real estate experience.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </section>

          <section className="bg-soft py-20">
            <div className="container">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4">Trust elements</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  The site should surface proof before asking for a lead.
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Keep the proof honest: founding year, office locations, service areas, and a simple contact path.
                </p>
              </FadeIn>
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="p-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20">
            <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <FadeIn className="space-y-6">
                <Badge>Contact Seeto Realty</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Start with the right conversation.
                </h2>
                <p className="text-lg text-neutral-600">
                  Use this form for buyers, sellers, investors, foreclosure clients, and property owners who want a local next step.
                </p>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-ink">Fast, practical follow-up</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Expect a response within one business day, a clear next step, and a consultation path that matches the client type.
                  </p>
                  <CalendlyPopupButton
                    calendlyUrl={CALENDLY_URL}
                    variant="outline"
                    className="mt-4"
                  >
                    Schedule Consultation
                    <ArrowUpRight className="h-4 w-4" />
                  </CalendlyPopupButton>
                </div>
              </FadeIn>
              <FadeIn>
                <Card className="p-8">
                  <ReferralForm />
                </Card>
              </FadeIn>
            </div>
          </section>

          <section className="relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-diagonal-accent opacity-95" />
            <div className="absolute inset-0 -skew-y-3 bg-black/10" />
            <div className="container relative flex flex-col items-center justify-between gap-8 text-center text-white lg:flex-row lg:text-left">
              <div className="max-w-2xl space-y-4">
                <Badge className="bg-white/10 text-white">Final CTA</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Ready to talk about your next move in Texas real estate?
                </h2>
                <p className="text-lg text-white/80">
                  Book a consultation or send a quick inquiry for the right guidance in Plano, Houston, DFW, and Greater Houston.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
                <Button asChild size="lg" variant="secondary">
                  <a href="#contact">Request Consultation</a>
                </Button>
                <CalendlyPopupButton
                  calendlyUrl={CALENDLY_URL}
                  size="lg"
                  variant="dark"
                >
                  Get a Home Valuation
                  <ArrowUpRight className="h-4 w-4" />
                </CalendlyPopupButton>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-neutral-200 py-8">
          <div className="container flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
            <p>© 2026 Seeto Realty. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#top" className="hover:text-ink">Back to top</a>
              <a href="#contact" className="hover:text-ink">Contact</a>
            </div>
          </div>
        </footer>
      </div>

      <StickyMobileCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
