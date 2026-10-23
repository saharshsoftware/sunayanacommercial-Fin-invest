import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { lspNames } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Use the public production asset for every shared URL, including `/`.
const socialImageUrl =
  "https://sunayanacommercial-fin-invest.vercel.app/icons/sunayana-logo-v2.png";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://sunayanacommercial-fin-invest.vercel.app",
  ),
  openGraph: {
    type: "website",
    siteName: "Sunayana Commercial Private Limited",
    title: "Sunayana Commercial Private Limited | RBI Registered NBFC",
    description: `Sunayana Commercial Private Limited is an RBI-registered NBFC lending through its digital lending partners, ${lspNames}.`,
    images: [
      {
        url: socialImageUrl,
        secureUrl: socialImageUrl,
        width: 512,
        height: 512,
        alt: "Sunayana Commercial Private Limited logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sunayana Commercial Private Limited | RBI Registered NBFC",
    description: `Sunayana Commercial Private Limited is an RBI-registered NBFC lending through its digital lending partners, ${lspNames}.`,
    images: [
      {
        url: socialImageUrl,
        alt: "Sunayana Commercial Private Limited logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icons/sunayana-32-v3.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/sunayana-48-v3.png", type: "image/png", sizes: "48x48" },
      { url: "/icons/sunayana-logo-v2.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: {
      url: "/icons/sunayana-apple-v2.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  title: {
    default: "Sunayana Commercial Private Limited | RBI Registered NBFC",
    template: "%s | Sunayana Commercial Private Limited",
  },
  description: `Sunayana Commercial Private Limited is an RBI-registered NBFC lending through its digital lending partners, ${lspNames}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
