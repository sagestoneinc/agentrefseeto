import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seetorealty.com"),
  title: {
    default: "Agent Referral Program | Seeto Realty",
    template: "%s | Seeto Realty",
  },
  description:
    "Earn referral income without losing your clients. Partner with Seeto Realty Property Management to refer owners and keep your relationship.",
  keywords: [
    "Seeto Realty",
    "agent referral program",
    "property management",
    "real estate partners",
    "referral rewards",
    "Texas property management",
  ],
  openGraph: {
    title: "Agent Referral Program | Seeto Realty",
    description:
      "Partner with Seeto Realty Property Management and earn referral rewards while maintaining your client relationships.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Seeto Realty Agent Referral Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Referral Program | Seeto Realty",
    description:
      "Refer property owners to Seeto Realty Property Management and earn rewards while keeping the relationship.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="min-h-full bg-white text-ink">
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
