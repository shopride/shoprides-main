import type { Metadata } from "next";

// Own title + canonical, so this page isn't treated as a copy of the homepage.
export const metadata: Metadata = {
  title: "Privacy Policy | ShopRides Canada",
  description: "How ShopRides Canada collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
