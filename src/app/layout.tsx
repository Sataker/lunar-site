import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunar-sys.com"),
  title: "Lunar Router — One API for Every LLM",
  description:
    "Route requests to 13+ LLM providers through a single API. Track costs, measure quality, and optimize your AI infrastructure. Open source.",
  keywords: [
    "LLM",
    "LLM router",
    "AI gateway",
    "LLM proxy",
    "OpenAI alternative",
    "AI infrastructure",
    "LLM observability",
    "model evaluation",
  ],
  openGraph: {
    title: "Lunar Router — One API for Every LLM",
    description:
      "Route to 13+ providers, track costs, measure quality. Open source AI infrastructure.",
    type: "website",
    url: "https://lunar-sys.com",
    siteName: "Lunar Router",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunar Router — One API for Every LLM",
    description:
      "Route to 13+ providers, track costs, measure quality. Open source AI infrastructure.",
  },
  alternates: {
    canonical: "https://lunar-sys.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://lunar-sys.com/#organization",
                  name: "Lunar Router",
                  url: "https://lunar-sys.com",
                  description:
                    "Open source LLM gateway. Route, observe, evaluate, and optimize AI infrastructure.",
                  sameAs: [
                    "https://github.com/lunar-org-ai/lunar-router",
                    "https://discord.gg/thyZx5GkFV",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://lunar-sys.com/#website",
                  url: "https://lunar-sys.com",
                  name: "Lunar Router",
                  publisher: {
                    "@id": "https://lunar-sys.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
