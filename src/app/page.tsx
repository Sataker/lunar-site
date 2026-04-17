import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Lunar Router — One API for Every LLM",
  description:
    "Route requests to 13+ LLM providers through a single API. Track costs, measure quality, and find the best model for every prompt. Open source.",
  alternates: {
    canonical: "/",
  },
};

const features = [
  {
    title: "One API, Every Model",
    description: "Send requests to OpenAI, Anthropic, Google, Mistral, and 9 more through a single endpoint.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "blue" as const,
  },
  {
    title: "Real-Time Traces",
    description: "Every request logged with full input, output, cost, and latency. Query millions of traces instantly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    color: "orange" as const,
  },
  {
    title: "Cost Tracking",
    description: "Automatic per-token pricing for 70+ models. See exactly where your money goes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    color: "blue" as const,
  },
  {
    title: "Smart Routing",
    description: "Route simple prompts to cheap models, complex ones to powerful ones. Automatic fallbacks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>
      </svg>
    ),
    color: "orange" as const,
  },
  {
    title: "Quality Monitoring",
    description: "AI agents scan traces for hallucinations and quality drops. Get alerts before users notice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "blue" as const,
  },
  {
    title: "Model Distillation",
    description: "Train smaller, faster, cheaper models from your production data. Own your models.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l-8 4.5v9L12 21l8-4.5v-9L12 3z"/><path d="M12 12l8-4.5"/><path d="M12 12v9"/><path d="M12 12L4 7.5"/>
      </svg>
    ),
    color: "orange" as const,
  },
];

const providers = [
  { name: "OpenAI", color: "#10a37f" },
  { name: "Anthropic", color: "#d4a373" },
  { name: "Google Gemini", color: "#4285f4" },
  { name: "Mistral", color: "#f97316" },
  { name: "Groq", color: "#f55036" },
  { name: "AWS Bedrock", color: "#ff9900" },
  { name: "Azure OpenAI", color: "#0078d4" },
  { name: "Cohere", color: "#39594d" },
  { name: "DeepSeek", color: "#5b7ee5" },
  { name: "Together AI", color: "#6366f1" },
  { name: "Fireworks", color: "#e11d48" },
  { name: "Ollama", color: "#888888" },
  { name: "OpenRouter", color: "#8b5cf6" },
];

const sdkCode = `import lunar_router as lr

# Call any model — one line
response = lr.completion(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
    fallbacks=["anthropic/claude-3-haiku"]
)

print(response.choices[0].message.content)
print(f"Cost: \${response._cost:.6f}")`;

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-28 relative overflow-hidden">
        <div className="hero-glow" />
        <Container>
          <div className="max-w-3xl mx-auto text-center fade-in">
            <Badge variant="accent" className="mb-6">
              Open Source &mdash; MIT Licensed
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              One API for{" "}
              <span className="gradient-text">every LLM.</span>
            </h1>
            <p className="mt-6 text-lg text-[#999] max-w-xl mx-auto leading-relaxed">
              Route to 13+ providers, track costs, measure quality, and optimize your AI stack. All through a single endpoint.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="https://app.lunar-sys.com" variant="primary">
                Start for free
              </Button>
              <Button href="/lunar-site/docs" variant="secondary">
                Read the docs
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Dashboard Mockup */}
      <section className="pb-20">
        <Container>
          <div className="dashboard-mock max-w-4xl mx-auto fade-in">
            <div className="dashboard-titlebar">
              <div className="titlebar-dot" style={{ background: "#ff5f57" }} />
              <div className="titlebar-dot" style={{ background: "#febc2e" }} />
              <div className="titlebar-dot" style={{ background: "#28c840" }} />
              <span className="text-xs text-[#555] ml-2 font-mono">Lunar Router — Dashboard</span>
            </div>
            <div className="dashboard-body">
              <div className="dashboard-stat-row">
                <div className="dashboard-stat">
                  <div className="text-xs text-[#666] mb-1">Requests Today</div>
                  <div className="text-xl font-bold">12,847</div>
                  <div className="dashboard-bar"><div className="dashboard-bar-fill-blue" style={{ width: "78%" }} /></div>
                </div>
                <div className="dashboard-stat">
                  <div className="text-xs text-[#666] mb-1">Total Cost</div>
                  <div className="text-xl font-bold" style={{ color: "#f97316" }}>$4.23</div>
                  <div className="dashboard-bar"><div className="dashboard-bar-fill-orange" style={{ width: "35%" }} /></div>
                </div>
                <div className="dashboard-stat">
                  <div className="text-xs text-[#666] mb-1">Avg Quality</div>
                  <div className="text-xl font-bold" style={{ color: "#22c55e" }}>9.4/10</div>
                  <div className="dashboard-bar"><div className="dashboard-bar-fill-green" style={{ width: "94%" }} /></div>
                </div>
              </div>
              <div className="text-xs text-[#555] font-mono mb-2">Recent Traces</div>
              <div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:01:04</span>
                  <span>gpt-4o-mini</span>
                  <span className="ml-auto text-[#555]">234ms</span>
                  <span style={{ color: "#f97316" }}>$0.0003</span>
                </div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:01:02</span>
                  <span>claude-3-haiku</span>
                  <span className="ml-auto text-[#555]">312ms</span>
                  <span style={{ color: "#f97316" }}>$0.0005</span>
                </div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-warn" />
                  <span className="text-[#555]">12:01:00</span>
                  <span>gemini-1.5-flash</span>
                  <span className="ml-auto text-[#555]">189ms</span>
                  <span style={{ color: "#f97316" }}>$0.0002</span>
                </div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:00:58</span>
                  <span>gpt-4o</span>
                  <span className="ml-auto text-[#555]">1.2s</span>
                  <span style={{ color: "#f97316" }}>$0.0089</span>
                </div>
                <div className="dashboard-trace-row" style={{ borderBottom: "none" }}>
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:00:55</span>
                  <span>mistral-small</span>
                  <span className="ml-auto text-[#555]">156ms</span>
                  <span style={{ color: "#f97316" }}>$0.0001</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Flow Diagram */}
      <section className="py-24 section-glow-blue">
        <Container>
          <SectionHeading
            title="How it works"
            subtitle="Your app talks to Lunar. Lunar talks to every LLM provider."
          />
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <div className="flow-node">
              <div className="text-sm font-semibold">Your App</div>
              <div className="text-xs text-[#666] mt-1">Single API call</div>
            </div>
            <div className="flow-arrow hidden md:block">→</div>
            <div className="flow-arrow md:hidden">↓</div>
            <div className="flow-node flow-node-accent">
              <div className="text-sm font-semibold" style={{ color: "#0070f3" }}>Lunar Router</div>
              <div className="text-xs text-[#666] mt-1">Route + Trace + Eval</div>
            </div>
            <div className="flow-arrow hidden md:block">→</div>
            <div className="flow-arrow md:hidden">↓</div>
            <div className="flex flex-col gap-2">
              <div className="flow-node py-2 px-4">
                <div className="text-xs">OpenAI</div>
              </div>
              <div className="flow-node py-2 px-4">
                <div className="text-xs">Anthropic</div>
              </div>
              <div className="flow-node py-2 px-4">
                <div className="text-xs">Google</div>
              </div>
              <div className="flow-node py-2 px-4">
                <div className="text-xs text-[#666]">+10 more</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Metrics */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto stagger">
            <div className="metric-card">
              <div className="metric-value metric-value-blue">13+</div>
              <div className="text-sm text-[#666] mt-2">LLM Providers</div>
            </div>
            <div className="metric-card">
              <div className="metric-value metric-value-orange">70+</div>
              <div className="text-sm text-[#666] mt-2">Models</div>
            </div>
            <div className="metric-card">
              <div className="metric-value metric-value-blue">&lt;2ms</div>
              <div className="text-sm text-[#666] mt-2">Routing Overhead</div>
            </div>
            <div className="metric-card">
              <div className="metric-value metric-value-orange">MIT</div>
              <div className="text-sm text-[#666] mt-2">Open Source</div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Features */}
      <section id="features" className="py-24 section-glow-orange">
        <Container>
          <SectionHeading
            title="Everything you need to manage LLMs"
            subtitle="From routing to evaluation to distillation. One platform."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className={`feature-icon feature-icon-${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#888] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* SDK */}
      <section className="py-24 section-glow-blue">
        <Container>
          <SectionHeading
            title="Simple by design"
            subtitle="If you've used the OpenAI SDK, you already know Lunar."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <CodeBlock code={sdkCode} language="python" />
            <div className="space-y-4">
              <div className="p-5 border border-[#1a1a1a] rounded-2xl hover:border-[#333] transition-colors">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#0070f3" }} />
                  <h3 className="font-semibold text-sm">OpenAI-compatible</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">Same format you already use. Change one line to start.</p>
              </div>
              <div className="p-5 border border-[#1a1a1a] rounded-2xl hover:border-[#333] transition-colors">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#f97316" }} />
                  <h3 className="font-semibold text-sm">Automatic fallbacks</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">If a provider goes down, Lunar switches to your backup.</p>
              </div>
              <div className="p-5 border border-[#1a1a1a] rounded-2xl hover:border-[#333] transition-colors">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#0070f3" }} />
                  <h3 className="font-semibold text-sm">Cost on every response</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">Every response includes exact cost. No more guessing.</p>
              </div>
              <div className="p-5 border border-[#1a1a1a] rounded-2xl hover:border-[#333] transition-colors">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#f97316" }} />
                  <h3 className="font-semibold text-sm">Full streaming</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">All providers including Anthropic SSE translation.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Providers */}
      <section className="py-24 section-glow-orange">
        <Container>
          <SectionHeading
            title="Works with every provider"
            subtitle="One integration. All the models you need."
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {providers.map((provider) => (
              <div key={provider.name} className="provider-pill">
                <div className="provider-dot" style={{ background: provider.color }} />
                {provider.name}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Final CTA */}
      <section className="py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Open source.{" "}
              <span className="gradient-text">Self-host or cloud.</span>
            </h2>
            <p className="mt-4 text-[#888] leading-relaxed">
              Run on your own infrastructure with full control, or use our managed cloud. MIT licensed, no vendor lock-in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="https://app.lunar-sys.com" variant="primary">
                Start for free
              </Button>
              <Button href="https://github.com/lunar-org-ai/lunar-router" variant="secondary">
                View on GitHub
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#555]">
              Free tier available. No credit card required.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
