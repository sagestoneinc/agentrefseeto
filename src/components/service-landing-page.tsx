import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { FadeIn } from "@/components/motion/fade-in";
import { ReferralForm } from "@/components/referral-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CALENDLY_URL } from "@/lib/constants";

export type ServicePageLink = {
  label: string;
  href: string;
};

export type ServicePageFaq = {
  question: string;
  answer: string;
};

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  overview: string;
  bullets: string[];
  proof: string[];
  localAreas: string[];
  faqItems: ServicePageFaq[];
  relatedLinks?: ServicePageLink[];
  icon: LucideIcon;
};

export function ServiceLandingPage({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  overview,
  bullets,
  proof,
  localAreas,
  faqItems,
  relatedLinks = [],
  icon: Icon,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-shell text-ink">
      <main>
        <section className="relative overflow-hidden bg-hero-glow pb-16 pt-14 lg:pb-24 lg:pt-20">
          <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn className="space-y-6">
              <Badge className="bg-brand/10 text-brand">{eyebrow}</Badge>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-xl text-lg text-neutral-600">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/">Schedule Consultation</Link>
                </Button>
                <CalendlyPopupButton
                  calendlyUrl={CALENDLY_URL}
                  variant="outline"
                  size="lg"
                >
                  Book a Call
                  <ArrowUpRight className="h-4 w-4" />
                </CalendlyPopupButton>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-neutral-600">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-neutral-200 bg-white px-4 py-2"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn className="relative">
              <div className="absolute -top-10 right-4 hidden rounded-2xl border border-white/40 bg-white/90 p-4 shadow-luxe lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Local guidance</p>
                    <p className="text-xs text-neutral-500">Plano + Houston</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-luxe">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={960}
                  height={640}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white py-10">
          <div className="container grid gap-6 md:grid-cols-3">
            {proof.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <p className="font-medium text-neutral-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <FadeIn className="space-y-6">
              <Badge>What you get</Badge>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                {overview}
              </h2>
              <p className="text-lg text-neutral-600">
                Seeto Realty should make the next step obvious, whether the goal is to buy, sell, invest, or manage property.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {bullets.map((bullet) => (
                  <Card key={bullet} className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                        <BadgeCheck className="h-5 w-5" />
                      </span>
                      <p className="text-sm text-neutral-600">{bullet}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeIn>
            <FadeIn className="space-y-6">
              <Card className="border-neutral-200 p-8">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Local service areas
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink">Texas markets with local context</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {localAreas.map((area) => (
                    <div
                      key={area}
                      className="rounded-2xl border border-neutral-200 bg-soft/60 px-4 py-3 text-sm font-medium text-neutral-700"
                    >
                      {area}
                    </div>
                  ))}
                </div>
                {relatedLinks.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {relatedLinks.map((link) => (
                      <Button asChild key={link.href} variant="outline">
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </div>
                )}
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-ink">Start here</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Share your timeline and market area, and Seeto Realty will route your inquiry to the right local next step.
                </p>
                <div className="mt-5">
                  <ReferralForm />
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>

        <section className="bg-soft py-20">
          <div className="container">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <Badge className="mx-auto mb-4">FAQ</Badge>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Common questions about this service path.
              </h2>
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

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-diagonal-accent opacity-95" />
          <div className="container relative flex flex-col items-center justify-between gap-8 text-center text-white lg:flex-row lg:text-left">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-white/10 text-white">Final CTA</Badge>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Ready to move forward with Seeto Realty?
              </h2>
              <p className="text-lg text-white/80">
                Book a consultation and get a practical next step for your Texas market goals.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
              <Button asChild size="lg" variant="secondary">
                <Link href="/">Back to homepage</Link>
              </Button>
              <CalendlyPopupButton calendlyUrl={CALENDLY_URL} size="lg" variant="dark">
                Get a Consultation
                <ArrowUpRight className="h-4 w-4" />
              </CalendlyPopupButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
