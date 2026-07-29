import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopRides Canada | Auto, Powersports & Equipment Financing",
  description: "Get approved for financing on cars, powersports vehicles, and heavy equipment across Canada. All credit types welcome. Apply in minutes.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
