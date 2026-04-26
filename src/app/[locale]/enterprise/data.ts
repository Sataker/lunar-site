export type Pillar = {
  id: "rl" | "self-learning" | "infrastructure";
  eyebrow: string;
  title: string;
  blurb: string;
  outcomes: string[];
  mascot: string;
};

export const pillars: Pillar[] = [
  {
    id: "rl",
    eyebrow: "Custom RL Environments",
    title: "AI that learns from your operation.",
    blurb:
      "Reinforcement learning loops trained on your real production data. Pricing, scheduling, routing, allocation — agents that get better every shift.",
    outcomes: [
      "Decisions trained on real outcomes, not simulations",
      "Deployed inside your infrastructure",
      "Compounds value across every episode",
    ],
    mascot: "/tracy/tracy-zen.png",
  },
  {
    id: "self-learning",
    eyebrow: "Self-Improving Agents",
    title: "Agents that get smarter every week.",
    blurb:
      "Most AI agents stop improving on Day 1. Ours don't. They learn from your traffic, specialize on your workflows, and replace expensive frontier calls with custom models — automatically.",
    outcomes: [
      "More accurate every week, no retraining ops",
      "Up to 40× cheaper per call after distillation",
      "Zero code changes — the agent just gets better",
    ],
    mascot: "/tracy/tracy-default.png",
  },
  {
    id: "infrastructure",
    eyebrow: "Owned AI Infrastructure",
    title: "Your data. Your models. Your servers.",
    blurb:
      "A full AI stack deployed inside your perimeter — gateway, traces, training, serving. Compliance-ready. Open-source. No data leaves your environment.",
    outcomes: [
      "On-premise, private cloud, or air-gapped",
      "LGPD, GDPR, HIPAA, SOC 2 ready",
      "Open-source — no vendor lock-in, ever",
    ],
    mascot: "/tracy/tracy-security.png",
  },
];

export type Outcome = {
  value: string;
  label: string;
};

export const outcomes: Outcome[] = [
  { value: "40×", label: "cheaper per call" },
  { value: "1 week", label: "to first model in production" },
  { value: "100%", label: "of your data stays with you" },
  { value: "13+", label: "AI providers, one stack" },
];

export type Industry = {
  emoji: string;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    emoji: "⚙️",
    title: "Operations & Logistics",
    description: "Routing, scheduling, predictive maintenance.",
  },
  {
    emoji: "💰",
    title: "Finance & Risk",
    description: "Pricing, credit scoring, fraud detection.",
  },
  {
    emoji: "🏥",
    title: "Healthcare",
    description: "Triage, decision support, clinical summaries.",
  },
  {
    emoji: "⚖️",
    title: "Legal",
    description: "Contracts, compliance, knowledge agents.",
  },
  {
    emoji: "💻",
    title: "Engineering",
    description: "Coding agents, PR review, build intelligence.",
  },
  {
    emoji: "📞",
    title: "Customer Experience",
    description: "Support, FAQ, lead qualification.",
  },
  {
    emoji: "📊",
    title: "Data & Analytics",
    description: "SQL, extraction, executive insights.",
  },
  {
    emoji: "🔒",
    title: "Regulated & Government",
    description: "Air-gapped, redacted, compliance-first.",
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "AI Strategy & Architecture",
    description: "Roadmap, build-vs-buy, ROI for your AI program.",
  },
  {
    title: "Custom RL Environment Design",
    description: "Reward signals, policy training, production loops.",
  },
  {
    title: "Self-Learning Agent Development",
    description: "End-to-end agents that compound from day one.",
  },
  {
    title: "Custom Model Training",
    description: "Distilled student models trained on your traffic.",
  },
  {
    title: "RAG & Knowledge Pipelines",
    description: "Retrieval over your docs, tuned for accuracy.",
  },
  {
    title: "Self-Hosted Stack Deployment",
    description: "Full AI infrastructure inside your perimeter.",
  },
  {
    title: "LLM Ops & Monitoring",
    description: "Drift detection, hallucination scanning, on-call.",
  },
  {
    title: "Compliance & Security",
    description: "LGPD, GDPR, HIPAA, SOC 2. Air-gapped configs.",
  },
  {
    title: "Custom Integrations",
    description: "ERPs, CRMs, internal APIs, wired into the AI layer.",
  },
  {
    title: "Training & Enablement",
    description: "Hands-on sessions for your ML and product teams.",
  },
];

export type Step = {
  num: string;
  title: string;
  body: string;
};

export const engagementSteps: Step[] = [
  {
    num: "01",
    title: "Discovery",
    body: "We map your AI spend, your highest-ROI workflows, and the data you already have.",
  },
  {
    num: "02",
    title: "Pilot",
    body: "First custom agent or RL loop deployed in your infrastructure — under a week.",
  },
  {
    num: "03",
    title: "Production",
    body: "We harden, monitor, and integrate. Your team owns what we ship.",
  },
  {
    num: "04",
    title: "Compounding",
    body: "Every cycle: cheaper, smarter, more specialized to your business.",
  },
];
