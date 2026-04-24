import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { i18n } from "@/i18n/config";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Start free trial - Coming soon | OpenTracy",
  description:
    "The free trial flow is almost ready. Join the community, read docs, or open OpenTracy on GitHub.",
};

export default async function StartFreeTrialComingSoonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <Badge variant="accent" className="mb-4">
            Coming Soon
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Start free trial will be ready soon.
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            We are finishing the trial onboarding flow. In the meantime, choose
            one of the options below.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button
              href="https://discord.gg/gDNPhQ347V"
              variant="primary"
              className="justify-center"
              newTab
            >
              Join community
            </Button>
            <Button href="/docs" variant="secondary" className="justify-center">
              Read the docs
            </Button>
            <Button
              href="https://github.com/lunar-org-ai/lunar-router"
              variant="secondary"
              className="justify-center"
              newTab
            >
              Open on GitHub
            </Button>
          </div>

          <div className="mt-8">
            <Button href={`/${locale}`} variant="ghost">
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
