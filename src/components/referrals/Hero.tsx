import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-[#F7F7F7] px-3 py-1 text-sm font-semibold text-[#C1121F]/90">Referral Partners</p>
          <h1 className="text-3xl font-display leading-tight text-[#111111] sm:text-4xl">Refer Your Florida-Bound Clients. Get Rewarded.</h1>
          <p className="max-w-xl text-lg text-neutral-600">Partner with Seeto Realty and earn referral fees when your clients buy or sell real estate in Florida. Trusted, white-glove service and fast communication for every referral.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#submit">Submit a Referral</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Schedule a Partnership Call</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2">Licensed Florida Brokerage</span>
            <span className="inline-flex items-center gap-2">Fast Communication</span>
            <span className="inline-flex items-center gap-2">Referral-Friendly Process</span>
            <span className="inline-flex items-center gap-2">Professional Client Experience</span>
          </div>
        </div>

        <div className="relative order-first -mb-6 lg:order-last lg:mb-0">
          <div className="pointer-events-none relative mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
            <Image src="/images/hero-property.svg" alt="Florida waterfront property" width={900} height={600} className="w-full object-cover" priority />
          </div>
        </div>
      </div>
    </header>
  );
}
