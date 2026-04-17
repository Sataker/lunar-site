import { Metadata } from "next";
import Container from "@/components/Container";
import CodeBlock from "@/components/CodeBlock";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Docs — Lunar Router",
  description: "Get started with Lunar Router. Installation, quickstart guide, and API reference.",
};

const quickstartCode = `# Install
pip install lunar-router

# Set your API keys
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...

# Or self-host the full stack
git clone https://github.com/lunar-org-ai/lunar-router.git
cd lunar-router
docker compose up -d`;

const usageCode = `import lunar_router as lr

# Call any model through Lunar
response = lr.completion(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
    fallbacks=["anthropic/claude-3-haiku"]
)

# Response includes cost tracking
print(response.choices[0].message.content)
print(f"Cost: \${response._cost:.6f}")
print(f"Latency: {response._latency_ms}ms")`;

const categories = [
  {
    title: "Getting Started",
    description: "Install Lunar, set up your first route, and send your first request.",
    href: "https://docs.lunar-sys.com/lunar/installation",
  },
  {
    title: "Models & Providers",
    description: "See all 13 providers and 70+ models. Learn how to add your own.",
    href: "https://docs.lunar-sys.com/lunar/guides/models-providers",
  },
  {
    title: "Routing Strategies",
    description: "Load balancing, fallbacks, semantic routing, and cost-based routing.",
    href: "https://docs.lunar-sys.com/lunar/guides/streaming",
  },
  {
    title: "Observability",
    description: "ClickHouse traces, cost tracking, latency monitoring, and dashboards.",
    href: "https://docs.lunar-sys.com/lunar/overview",
  },
  {
    title: "Evaluations",
    description: "Run model comparisons, use AI-as-judge, and track quality over time.",
    href: "https://docs.lunar-sys.com/lunar/overview",
  },
  {
    title: "Self-Hosting",
    description: "Deploy the full stack with Docker. ClickHouse, Go engine, Python API, and UI.",
    href: "https://docs.lunar-sys.com/pricing/instance-tiers",
  },
];

export default function DocsPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Documentation
          </h1>
          <p className="mt-4 text-[#888888] text-lg">
            Everything you need to get started with Lunar Router.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Quickstart</h2>
          <div className="space-y-6">
            <CodeBlock code={quickstartCode} language="bash" />
            <CodeBlock code={usageCode} language="python" />
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            title="Explore the docs"
            align="left"
            className="max-w-3xl mx-auto"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <Card key={cat.title} href={cat.href} className="p-5 hover:border-[#444444]">
                <h3 className="text-sm font-semibold">{cat.title}</h3>
                <p className="mt-2 text-xs text-[#888888] leading-relaxed">{cat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
