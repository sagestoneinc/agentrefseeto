"use client";

import { Button, type ButtonProps } from "@/components/ui/button";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyPopupButtonProps extends ButtonProps {
  calendlyUrl: string;
}

export function CalendlyPopupButton({
  calendlyUrl,
  onClick,
  ...props
}: CalendlyPopupButtonProps) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (window?.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      return;
    }

    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return <Button {...props} onClick={handleClick} />;
}
