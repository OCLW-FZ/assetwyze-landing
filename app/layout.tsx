import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AssetWyze — AI-Powered Asset Management for Growing Businesses",
  description:
    "AssetWyze gives growing businesses one intelligent platform to manage assets, maintenance, work orders and teams — without the enterprise price tag.",
  keywords:
    "asset management, CMMS, maintenance management, work orders, facilities management, SME",
  openGraph: {
    title: "AssetWyze — AI-Powered Asset Management",
    description:
      "One intelligent platform for assets, maintenance, work orders and teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
