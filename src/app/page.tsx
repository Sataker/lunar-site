import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import CodeBlock from "@/components/CodeBlock";
import AsciiWindow, { AsciiPanel } from "@/components/AsciiWindow";
import Stepper from "@/components/Stepper";

export const metadata: Metadata = {
  title: "Lunar Router — One API for Every LLM",
  description:
    "Route requests to 13+ LLM providers through a single API. Track costs, measure quality, and find the best model for every prompt. Open source.",
  alternates: {
    canonical: "/",
  },
};

const metrics = [
  { value: "13+", label: "LLM Providers" },
  { value: "70+", label: "Models Supported" },
  { value: "<2ms", label: "Routing Overhead" },
  { value: "MIT", label: "Open Source" },
];

const features = [
  {
    title: "One API, Every Model",
    description: "Send requests to OpenAI, Anthropic, Google, Mistral, Groq, Bedrock, and 7 more providers through a single endpoint. Same format, every time.",
    icon: "->",
  },
  {
    title: "See Every Request",
    description: "Every call is logged with full input, output, cost, and latency. Stored in ClickHouse for fast queries across millions of traces.",
    icon: "[]",
  },
  {
    title: "Know What It Costs",
    description: "Automatic cost tracking for 70+ models with per-token pricing. See exactly where your money goes, broken down by model, user, or feature.",
    icon: "$",
  },
  {
    title: "Smart Routing",
    description: "Route simple prompts to fast, cheap models. Send complex ones to powerful models. Automatic fallbacks if a provider goes down.",
    icon: "<>",
  },
  {
    title: "Find Quality Issues",
    description: "AI agents scan your traces for hallucinations, refusals, and quality drops. Get alerts before your users notice problems.",
    icon: "!",
  },
  {
    title: "Train Smaller Models",
    description: "Cluster your prompts by domain, then distill knowledge from large models into smaller, faster, cheaper ones you own.",
    icon: "v",
  },
];

const pipelineSteps = [
  { number: 1, title: "Connect", description: "Add your API keys" },
  { number: 2, title: "Route", description: "Send requests" },
  { number: 3, title: "Observe", description: "Track everything" },
  { number: 4, title: "Evaluate", description: "Measure quality" },
  { number: 5, title: "Optimize", description: "Cut costs" },
];

const providers = [
  "OpenAI", "Anthropic", "Google Gemini", "Mistral", "Groq",
  "AWS Bedrock", "Azure OpenAI", "Cohere", "DeepSeek",
  "Together AI", "Fireworks", "Ollama", "OpenRouter",
];

const sdkCode = `import lunar_router as lr

# One line to call any model
response = lr.completion(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
    fallbacks=["anthropic/claude-3-haiku"]
)

print(response.choices[0].message.content)
print(f"Cost: \${response._cost:.6f}")
# Every request is automatically traced`;

export default function Home() {
  return (
    <div className="bg-grid">
      {/* Hero Section */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="hero-glow" />
        <Container>
          <div className="max-w-3xl mx-auto text-center fade-in">
            <Badge variant="accent" className="mb-6">
              Open Source
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              One API for{" "}
              <span className="highlight-box">every LLM.</span>
            </h1>
            <p className="mt-6 text-lg text-[#888888] max-w-xl mx-auto leading-relaxed">
              Route to 13+ providers, track costs, measure quality, and optimize your AI stack. All through a single endpoint.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="https://app.lunar-sys.com" variant="primary">
                Start for free
              </Button>
              <Button href="/docs" variant="secondary">
                Read the docs
              </Button>
            </div>
          </div>
        </Container>

        {/* Metrics Bar */}
        <div className="mt-20 border-y border-[#222222] py-8 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <span className="font-mono text-xl font-bold metric-value">
                    {metric.value}
                  </span>
                  <span className="ml-2 text-xs text-[#666666]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-20">
        <Container>
          <div className="terminal max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="text-xs text-[#666666] ml-2 font-mono">lunar-router</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AsciiPanel title="ROUTE">
                  <div className="space-y-1.5 font-mono text-xs p-3">
                    <div className="log-line">
                      <span className="timestamp">[12:01:03]</span> Incoming request...
                    </div>
                    <div className="log-line">
                      <span className="timestamp">[12:01:03]</span> Model: gpt-4o-mini
                    </div>
                    <div className="log-line">
                      <span className="timestamp">[12:01:04]</span> <span className="success">OK</span> 234ms $0.0003
                    </div>
                  </div>
                </AsciiPanel>
                <AsciiPanel title="TRACE">
                  <div className="space-y-1.5 font-mono text-xs p-3">
                    <div className="log-line">
                      <span className="timestamp">[12:01:04]</span> Logging to ClickHouse
                    </div>
                    <div className="log-line">
                      <span className="timestamp">[12:01:04]</span> Input: 42 tokens
                    </div>
                    <div className="log-line">
                      <span className="timestamp">[12:01:04]</span> <span className="success">Stored</span> trace #48291
                    </div>
                  </div>
                </AsciiPanel>
                <AsciiPanel title="EVAL">
                  <div className="space-y-1.5 font-mono text-xs p-3">
                    <div className="log-line">
                      <span className="timestamp">[12:01:05]</span> Scanning quality...
                    </div>
                    <div className="log-line">
                      <span className="timestamp">[12:01:05]</span> Score: 9.2/10
                    </div>
                    <div className="log-line">
                      <span className="timestamp">[12:01:05]</span> <span className="accent">No issues found</span>
                    </div>
                  </div>
                </AsciiPanel>
              </div>
              <div className="mt-4">
                <div className="progress-bar">
                  <div className="progress-bar-fill" />
                </div>
                <div className="mt-3 font-mono text-xs text-[#666666]">
                  <span className="blink-caret">Processing requests</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Features Section */}
      <section id="features" className="py-24">
        <Container>
          <SectionHeading
            title="Everything you need to manage LLMs"
            subtitle="From routing to evaluation to distillation. One platform, no complexity."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="feature-icon mb-4 font-mono font-bold text-sm">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#888888] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* How It Works */}
      <section className="py-24">
        <Container>
          <SectionHeading
            title="Up and running in 5 minutes"
            subtitle="Add your API keys, point your code to Lunar, and start saving."
          />
          <div className="mt-16">
            <Stepper steps={pipelineSteps} />
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* SDK Section */}
      <section className="py-24">
        <Container>
          <SectionHeading
            title="Simple by design"
            subtitle="If you've used the OpenAI SDK, you already know how to use Lunar."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <CodeBlock code={sdkCode} language="python" />
            <div className="space-y-6">
              <div className="p-5 border border-[#222222] rounded-xl">
                <h3 className="font-semibold text-sm">OpenAI-compatible</h3>
                <p className="mt-1.5 text-sm text-[#888888]">Same request format you already use. Change one line to start routing through Lunar.</p>
              </div>
              <div className="p-5 border border-[#222222] rounded-xl">
                <h3 className="font-semibold text-sm">Automatic fallbacks</h3>
                <p className="mt-1.5 text-sm text-[#888888]">If OpenAI is down, Lunar switches to your backup model. No code changes needed.</p>
              </div>
              <div className="p-5 border border-[#222222] rounded-xl">
                <h3 className="font-semibold text-sm">Cost on every response</h3>
                <p className="mt-1.5 text-sm text-[#888888]">Every response includes the exact cost. No more guessing or waiting for billing dashboards.</p>
              </div>
              <div className="p-5 border border-[#222222] rounded-xl">
                <h3 className="font-semibold text-sm">Streaming included</h3>
                <p className="mt-1.5 text-sm text-[#888888]">Full streaming support for all providers, including Anthropic SSE translation.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Providers Section */}
      <section className="py-24">
        <Container>
          <SectionHeading
            title="Works with every provider"
            subtitle="One integration. All the models you need."
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {providers.map((provider) => (
              <span
                key={provider}
                className="px-4 py-2 text-sm border border-[#222222] rounded-lg text-[#888888] hover:text-white hover:border-[#444444] transition-colors"
              >
                {provider}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Open Source CTA */}
      <section className="py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Open source. Self-host or cloud.
            </h2>
            <p className="mt-4 text-[#888888] leading-relaxed">
              Run Lunar on your own infrastructure with full control, or use our managed cloud. MIT licensed, no vendor lock-in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="https://app.lunar-sys.com" variant="primary">
                Start for free
              </Button>
              <Button href="https://github.com/lunar-org-ai/lunar-router" variant="secondary">
                View on GitHub
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#666666]">
              Free tier available. No credit card required.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
