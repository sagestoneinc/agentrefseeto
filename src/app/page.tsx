import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Clock,
  Crown,
  Gem,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { FadeIn } from "@/components/motion/fade-in";
import { ReferralForm } from "@/components/referral-form";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CALENDLY_URL } from "@/lib/constants";

const LOGO_URL =
  "https://github.com/user-attachments/assets/1db20d6f-ccd6-458d-9fc0-295ea27095a3";
const BROCHURE_URL =
  "https://github.com/user-attachments/assets/998a387a-c0f5-4c2a-acbe-20ecfdb1ba14";

const trustItems = [
  {
    title: "Local Expertise",
    description: "Texas-based property management specialists.",
    icon: Building2,
  },
  {
    title: "Dedicated Support",
    description: "Broker-first communication and reporting.",
    icon: HeartHandshake,
  },
  {
    title: "Transparent Communication",
    description: "Clear status updates for every referral.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Response Times",
    description: "Owner outreach within one business day.",
    icon: Clock,
  },
];

const steps = [
  {
    title: "Refer",
    description: "Share owner details and property goals.",
  },
  {
    title: "Connect",
    description: "We make a warm introduction and keep you informed.",
  },
  {
    title: "Convert",
    description: "Seeto Realty handles the consultation and onboarding.",
  },
  {
    title: "Earn",
    description: "Receive referral rewards while protecting your relationship.",
  },
];

const rewards = [
  {
    tier: "Silver Partner",
    referrals: "1 Referral",
    reward: "$250",
    icon: Star,
  },
  {
    tier: "Gold Partner",
    referrals: "2-4 Referrals",
    reward: "$350",
    icon: Crown,
    featured: true,
  },
  {
    tier: "Platinum Partner",
    referrals: "5+ Referrals",
    reward: "$500",
    icon: Gem,
  },
];

const benefits = [
  {
    title: "Protect the relationship",
    description: "You remain the trusted advisor while we operate behind the scenes.",
    icon: ShieldCheck,
  },
  {
    title: "Grow referral income",
    description: "Increase rewards with every qualifying owner you connect.",
    icon: TrendingUp,
  },
  {
    title: "Premium service delivery",
    description: "Luxury-ready leasing, maintenance, and investor care.",
    icon: Sparkles,
  },
  {
    title: "Broker-led oversight",
    description: "Direct access to leadership and transparent reporting.",
    icon: Handshake,
  },
];

const testimonials = [
  {
    quote:
      "Seeto Realty gave my investor clients a seamless management solution while keeping me in the loop for future sales opportunities.",
    name: "North Texas REALTOR® Partner",
  },
  {
    quote:
      "The referral process feels premium and proactive. My clients feel supported, and I stay positioned as their advisor.",
    name: "Plano Listing Agent",
  },
  {
    quote:
      "Clear communication, fast response, and a polished onboarding experience. It makes referrals easy.",
    name: "Houston Investment Agent",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Seeto Realty Property Management",
  url: "https://seetorealty.com",
  slogan: "We Manage The Property. You Keep The Relationship.",
  description:
    "Seeto Realty Property Management partners with real estate agents to deliver premium property management for their owner clients.",
  areaServed: ["Texas", "Plano", "Houston", "North Texas"],
  serviceType: ["Property Management", "Agent Referral Program"],
};

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-white">
        <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
          <div className="container flex items-center justify-between gap-6 py-4">
            <a href="#top" className="flex items-center gap-3">
              <Image
                src={LOGO_URL}
                alt="Seeto Realty logo"
                width={240}
                height={72}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </a>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 lg:flex">
              <a className="hover:text-ink" href="#how-it-works">
                How it works
              </a>
              <a className="hover:text-ink" href="#rewards">
                Rewards
              </a>
              <a className="hover:text-ink" href="#promise">
                Promise
              </a>
              <a className="hover:text-ink" href="#about">
                About
              </a>
              <a className="hover:text-ink" href="#testimonials">
                Testimonials
              </a>
            </nav>
            <Button asChild className="hidden lg:inline-flex">
              <a href="#referral-form">Submit A Referral</a>
            </Button>
          </div>
        </header>

        <main id="top" className="flex-1 pb-24 md:pb-0">
          <section className="relative overflow-hidden bg-hero-glow pb-16 pt-14 lg:pb-24 lg:pt-20">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(160,0,0,0.08),transparent_55%)]" />
            <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <FadeIn className="space-y-6">
                <Badge className="bg-brand/10 text-brand">
                  Agent Referral Program
                </Badge>
                <h1 className="text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Earn Referral Income Without Losing Your Clients
                </h1>
                <p className="max-w-xl text-lg text-neutral-600">
                  Partner with Seeto Realty Property Management and earn referral
                  rewards while maintaining your client relationships.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href="#referral-form">Submit A Referral</a>
                  </Button>
                  <CalendlyPopupButton
                    calendlyUrl={CALENDLY_URL}
                    variant="outline"
                    size="lg"
                  >
                    Schedule Partnership Call
                    <ArrowUpRight className="h-4 w-4" />
                  </CalendlyPopupButton>
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-semibold text-neutral-600">
                  <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">
                    Broker-led property management
                  </span>
                  <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">
                    Referral tracking dashboard
                  </span>
                  <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">
                    Luxury client experience
                  </span>
                </div>
              </FadeIn>
              <FadeIn className="relative">
                <div className="absolute -top-10 right-4 hidden rounded-2xl border border-white/40 bg-white/90 p-4 shadow-luxe lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        Premium owner onboarding
                      </p>
                      <p className="text-xs text-neutral-500">
                        Concierge management setup
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-luxe">
                  <Image
                    src="/images/hero-property.svg"
                    alt="Luxury property management"
                    width={960}
                    height={640}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-8 left-6 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-card">
                  <p className="text-xs font-semibold text-neutral-500">
                    Rewards start at
                  </p>
                  <p className="text-2xl font-semibold text-ink">$250</p>
                  <p className="text-xs text-neutral-500">
                    per qualified referral
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          <section className="border-y border-neutral-200 bg-white py-10">
            <div className="container grid gap-6 md:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 text-sm"
                  >
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

          <section id="how-it-works" className="py-20">
            <div className="container">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4">How it works</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  A simple, broker-focused referral process.
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  We do the heavy lifting while you stay connected to your
                  client. Clear touchpoints keep everyone aligned.
                </p>
              </FadeIn>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                  <Card key={step.title} className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-600">
                      {step.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="rewards" className="bg-soft py-20">
            <div className="container">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4">Referral rewards program</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Earn more as you refer more owners.
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Tiered rewards recognize your partnership and support your
                  ongoing client relationships.
                </p>
              </FadeIn>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {rewards.map((reward) => {
                  const Icon = reward.icon;
                  return (
                    <Card
                      key={reward.tier}
                      className={`relative overflow-hidden p-7 ${
                        reward.featured
                          ? "border-brand shadow-luxe"
                          : "border-neutral-200"
                      }`}
                    >
                      {reward.featured && (
                        <span className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                          Most Popular
                        </span>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                            {reward.referrals}
                          </p>
                          <h3 className="text-xl font-semibold text-ink">
                            {reward.tier}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="text-4xl font-semibold text-ink">
                          {reward.reward}
                        </p>
                        <p className="text-sm text-neutral-600">
                          Paid per qualifying referral
                        </p>
                      </div>
                      <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                        <li>Dedicated onboarding concierge</li>
                        <li>Client communication updates</li>
                        <li>Broker-to-broker transparency</li>
                      </ul>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <FadeIn className="space-y-6">
                <Badge>Why partner with Seeto Realty</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  High-end property management that elevates your brand.
                </h2>
                <p className="text-lg text-neutral-600">
                  We act as a premium extension of your service, giving owners
                  a seamless transition into professional management while you
                  stay positioned for future sales and investment support.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <Card key={benefit.title} className="p-5">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-ink">
                              {benefit.title}
                            </p>
                            <p className="mt-2 text-sm text-neutral-600">
                              {benefit.description}
                            </p>
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
                  src="/images/estate-interior.svg"
                  alt="Luxury property interior"
                  width={900}
                  height={720}
                  className="w-full rounded-3xl border border-neutral-200 object-cover shadow-luxe"
                />
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-card lg:absolute lg:-bottom-8 lg:left-6 lg:mt-0 lg:w-72">
                  <div className="relative h-20 w-14 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                    <Image
                      src={BROCHURE_URL}
                      alt="Seeto Realty referral brochure"
                      width={140}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Referral brochure
                    </p>
                    <p className="text-sm font-semibold text-ink">
                      Inspired by Seeto&apos;s premium partner guide.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <section
            id="promise"
            className="relative overflow-hidden bg-diagonal-accent py-20 text-white"
          >
            <div className="absolute inset-0 -skew-y-3 bg-brand opacity-20" />
            <div className="container relative">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4 bg-white/10 text-white">
                  Partner promise
                </Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  “We Manage The Property. You Keep The Relationship.”
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Our operating model is designed to support agents, not compete
                  with them. Seeto Realty becomes the behind-the-scenes
                  management partner while you remain the trusted advisor for
                  every transaction.
                </p>
              </FadeIn>
            </div>
          </section>

          <section id="about" className="py-20">
            <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <FadeIn className="space-y-6">
                <Badge>About Seeto Realty</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Boutique brokerage guidance with dedicated property management.
                </h2>
                <p className="text-lg text-neutral-600">
                  Founded by broker Michael Seeto, the firm supports property
                  owners and investors across Texas with high-touch leasing,
                  maintenance coordination, and portfolio strategy.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Founded", value: "2010" },
                    { label: "Texas offices", value: "2" },
                    { label: "Markets served", value: "TX" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-card"
                    >
                      <p className="text-2xl font-semibold text-ink">
                        {stat.value}
                      </p>
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
                  alt="Luxury property exterior"
                  width={900}
                  height={720}
                  className="w-full rounded-3xl border border-neutral-200 object-cover shadow-luxe"
                />
                <Card className="border-neutral-200 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Broker profile
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">
                    Michael Seeto
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    A practical partner for agents whose clients need property
                    management, investment insight, or a trusted real estate
                    resource in Texas.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </section>

          <section id="testimonials" className="bg-soft py-20">
            <div className="container">
              <FadeIn className="mx-auto max-w-3xl text-center">
                <Badge className="mx-auto mb-4">Testimonials</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Agents value the premium, protective approach.
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Referral partners rely on consistent communication, luxury
                  service, and the assurance that their client relationships are
                  protected.
                </p>
              </FadeIn>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="p-6">
                    <p className="text-lg text-ink">“{testimonial.quote}”</p>
                    <p className="mt-4 text-sm font-semibold text-neutral-500">
                      {testimonial.name}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="referral-form" className="py-20">
            <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <FadeIn className="space-y-6">
                <Badge>Submit a referral</Badge>
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  Introduce a property owner today.
                </h2>
                <p className="text-lg text-neutral-600">
                  Complete the secure form and our team will coordinate next
                  steps while keeping you informed throughout the process.
                </p>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-ink">
                    Concierge follow-up
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    We respond within one business day, schedule the owner
                    consult, and send you a status update after every touch.
                  </p>
                  <CalendlyPopupButton
                    calendlyUrl={CALENDLY_URL}
                    variant="outline"
                    className="mt-4"
                  >
                    Schedule Partnership Call
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
                  Ready to protect the relationship and earn referral rewards?
                </h2>
                <p className="text-lg text-white/80">
                  Refer an owner now or book a partnership call to learn how
                  Seeto Realty supports agents across Texas.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
                <Button asChild size="lg" variant="secondary">
                  <a href="#referral-form">Submit A Referral</a>
                </Button>
                <CalendlyPopupButton
                  calendlyUrl={CALENDLY_URL}
                  size="lg"
                  variant="dark"
                >
                  Schedule Partnership Call
                  <ArrowUpRight className="h-4 w-4" />
                </CalendlyPopupButton>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-neutral-200 py-8">
          <div className="container flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
            <p>© 2026 Seeto Realty Property Management. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#top" className="hover:text-ink">
                Back to top
              </a>
              <a href="#referral-form" className="hover:text-ink">
                Submit a referral
              </a>
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
