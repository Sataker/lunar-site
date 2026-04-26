import type { Metadata } from "next";
import { DM_Mono, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opentracy.com"),
  title: "OpenTracy — One API for Every LLM",
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
    title: "OpenTracy — One API for Every LLM",
    description:
      "Route to 13+ providers, track costs, measure quality. Open source AI infrastructure.",
    type: "website",
    url: "https://opentracy.com",
    siteName: "OpenTracy",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenTracy — One API for Every LLM",
    description:
      "Route to 13+ providers, track costs, measure quality. Open source AI infrastructure.",
  },
  alternates: {
    canonical: "https://opentracy.com",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${dmMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <PostHogProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://opentracy.com/#organization",
                    name: "OpenTracy",
                    url: "https://opentracy.com",
                    description:
                      "Open source LLM gateway. Route, observe, evaluate, and optimize AI infrastructure.",
                    sameAs: [
                      "https://github.com/lunar-org-ai/lunar-router",
                      "https://discord.gg/gDNPhQ347V",
                    ],
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://opentracy.com/#website",
                    url: "https://opentracy.com",
                    name: "OpenTracy",
                    publisher: {
                      "@id": "https://opentracy.com/#organization",
                    },
                  },
                ],
              }),
            }}
          />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
