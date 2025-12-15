import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "CyberHeart (CYHT) - Decentralized Web3 Value Network | DeFi GameFi SocialFi RWA",
  description: "CyberHeart (CYHT) is a next-generation decentralized Web3.0 value network. Users truly own their identity, assets, and data. High-performance modular infrastructure for DeFi, GameFi, SocialFi, and RWA applications. Total supply: 30B CYHT tokens.",
  keywords: "CyberHeart, CYHT token, Web3, Web3.0, blockchain, DeFi, GameFi, SocialFi, RWA, real-world assets, cryptocurrency, decentralized network, DAO governance, tokenomics, crypto token, digital assets, smart contracts, cross-chain, Layer2, metaverse, NFT",
  authors: [{ name: "CyberHeart Foundation" }],
  openGraph: {
    title: "CyberHeart (CYHT) - Next-Gen Web3 Decentralized Value Network",
    description: "High-performance modular Web3 infrastructure. Users own their identity, assets & data. CYHT token for gas, staking, governance. DeFi · GameFi · SocialFi · RWA",
    type: "website",
    locale: "en_US",
    siteName: "CyberHeart",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CyberHeart - Web3 Value Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberHeart (CYHT) - Web3 Decentralized Value Network",
    description: "High-performance Web3 infrastructure for DeFi, GameFi, SocialFi & RWA. 30B CYHT tokens | Modular architecture | DAO governance",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://cyberheart.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
