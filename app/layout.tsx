import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AssetWyze — AI-Powered Asset Management for Growing Businesses",
  description:
    "AssetWyze gives growing businesses one intelligent platform to manage assets, maintenance, work orders and teams — without the enterprise price tag.",
  keywords:
    "asset management software, CMMS, computerised maintenance management, work orders, facilities management, asset tracking, SME asset management, maintenance scheduling",
  metadataBase: new URL("https://assetwyze.com"),
  openGraph: {
    title: "AssetWyze — AI-Powered Asset Management",
    description:
      "One intelligent platform for assets, maintenance, work orders and teams — without the enterprise price tag.",
    type: "website",
    url: "https://assetwyze.com",
    siteName: "AssetWyze",
  },
  twitter: {
    card: "summary_large_image",
    title: "AssetWyze — AI-Powered Asset Management",
    description: "One intelligent platform for assets, maintenance, work orders and teams.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
