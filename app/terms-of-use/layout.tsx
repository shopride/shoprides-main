import type { Metadata } from "next";

// Own title + canonical, so this page isn't treated as a copy of the homepage.
export const metadata: Metadata = {
  title: "Terms of Use | ShopRides Canada",
  description: "The terms that apply when you use the ShopRides Canada website.",
  alternates: { canonical: "/terms-of-use" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
