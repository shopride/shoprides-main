import type { Metadata } from "next";
import { preload } from "react-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shoprides.ca"),
  title: "ShopRides Canada | Auto, Powersports & Equipment Financing",
  description: "Get approved for financing on cars, powersports vehicles, and heavy equipment across Canada. All credit types welcome. Apply in minutes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ShopRides Canada | Auto, Powersports & Equipment Financing",
    description: "Financing for cars, powersports and heavy equipment across Canada. All credit types welcome.",
    url: "https://www.shoprides.ca",
    siteName: "ShopRides Canada",
    locale: "en_CA",
    type: "website",
  },
};

// Tells Google who runs the site and links the three financing sites together.
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "ShopRides Canada",
  url: "https://www.shoprides.ca",
  telephone: "+1-343-307-5919",
  email: "info@shoprides.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1800 Bank Street, Suite 200",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "CA",
  parentOrganization: { "@type": "Organization", name: "ShopRides Solutions Inc." },
  subOrganization: [
    { "@type": "FinancialService", name: "ShopRides Auto Financing", url: "https://auto.shoprides.ca" },
    { "@type": "FinancialService", name: "ShopRides Powersports Financing", url: "https://powersports.shoprides.ca" },
    { "@type": "FinancialService", name: "ShopRides Equipment Financing", url: "https://equipment.shoprides.ca" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Start downloading the brand fonts right away (used above the fold).
  preload("/fonts/oswald-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/inter-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="en-CA">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        {children}
        {/* Vercel Speed Insights: real visitors' load times */}
            <SpeedInsights />
          </body>
    </html>
  );
}
