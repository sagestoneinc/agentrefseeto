import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seetorealty.com"),
  title: {
    default: "Seeto Realty | Plano & Houston Real Estate",
    template: "%s | Seeto Realty",
  },
  description:
    "Seeto Realty is a boutique Texas real estate company serving Plano, Houston, DFW, and Greater Houston buyers, sellers, investors, foreclosure clients, and property owners.",
  keywords: [
    "Seeto Realty",
    "Plano real estate",
    "Houston real estate",
    "DFW homes",
    "property management",
    "Texas real estate",
    "foreclosures",
    "real estate investors",
  ],
  openGraph: {
    title: "Seeto Realty | Plano & Houston Real Estate",
    description:
      "Boutique Texas real estate guidance for buyers, sellers, investors, foreclosures, and property management clients.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Seeto Realty homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seeto Realty | Plano & Houston Real Estate",
    description:
      "A boutique Texas real estate firm serving Plano, Houston, DFW, and Greater Houston.",
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
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="min-h-full bg-shell text-ink">
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
