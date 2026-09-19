import type { Metadata } from "next";
import CarLoanPreApproval from "./CarLoanPreApproval";

export const metadata: Metadata = {
  title: "Car Loan Pre-Approval Online — All Credit Types | ShopRides",
  description:
    "Get pre-approved for a car loan across Canada. All credit types welcome. No SIN required to start. No impact on your credit score. Decision in as little as 24 hours.",
  alternates: { canonical: "/car-loan-pre-approval" },
  openGraph: {
    title: "Car Loan Pre-Approval Online — All Credit Types | ShopRides",
    description:
      "Get pre-approved for a car loan across Canada. All credit types welcome. No SIN required to start. Decision in as little as 24 hours.",
    url: "https://auto.shoprides.ca/car-loan-pre-approval",
    siteName: "ShopRides Canada",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan Pre-Approval Online | ShopRides Canada",
    description:
      "Get pre-approved for a car loan across Canada. All credit types welcome.",
  },
};

export default function Page() {
  return <CarLoanPreApproval />;
}
