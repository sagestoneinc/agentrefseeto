"use client";

import { ArrowUpRight } from "lucide-react";

import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <Button
          asChild
          className="flex-1"
          size="sm"
          aria-label="Request a consultation"
        >
          <a href="#contact">Consult</a>
        </Button>
        <CalendlyPopupButton
          calendlyUrl={CALENDLY_URL}
          variant="outline"
          size="sm"
          className="flex-1"
          aria-label="Schedule consultation"
        >
          Book
          <ArrowUpRight className="h-4 w-4" />
        </CalendlyPopupButton>
      </div>
    </div>
  );
}
