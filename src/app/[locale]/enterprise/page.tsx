import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import FadeIn from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { services, pillars, industries } from "@/app/[locale]/enterprise/data";

export const metadata: Metadata = {
  title: "Enterprise - OpenTracy",
  description:
    "Your AI Lab for your enterprise. Custom Environment RL and self-improving agents, built to cut costs inside your infrastructure.",
};

const DEMO_URL = "https://cal.com/opentracy/30min-demo";

/* ── SVG icons (monochrome, stroke-based) ── */
const IconTag = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 9.5V5a2 2 0 0 1 2-2h4.5a1 1 0 0 1 .7.3l6.5 6.5a2 2 0 0 1 0 2.83l-4.5 4.5a2 2 0 0 1-2.83 0L2.7 10.6A1 1 0 0 1 3 9.5Z" />
    <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);
const IconRoute = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 6h14M3 10h10M3 14h6" />
    <polyline points="14 8 17 10 14 12" />
  </svg>
);
const IconBox = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2 2 6v8l8 4 8-4V6l-8-4Z" />
    <path d="M2 6l8 4 8-4M10 10v10" />
  </svg>
);
const IconBrain = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 3a3 3 0 0 0-3 3c0 1 .4 2 1 2.6A3 3 0 0 0 7 14v3" />
    <path d="M13 3a3 3 0 0 1 3 3c0 1-.4 2-1 2.6A3 3 0 0 1 13 14v3" />
    <path d="M7 6h6M7 10h6" />
  </svg>
);
const IconFlask = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 2v6l-4 8h12l-4-8V2" />
    <path d="M6 2h8" />
  </svg>
);
const IconTrendDown = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="2 5 8 11 12 7 18 14" />
    <polyline points="14 14 18 14 18 10" />
  </svg>
);
const IconGear = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="2.5" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" />
  </svg>
);
const IconDollar = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2v16M14 5H8a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H6" />
  </svg>
);
const IconHeart = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 17s-8-5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5-8 10-8 10Z" />
  </svg>
);
const IconScale = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 3v14M5 17h10" />
    <path d="M3 7l4 6M17 7l-4 6" />
    <path d="M3 7h4M13 7h4" />
  </svg>
);
const IconCode = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 7 2 10 6 13" />
    <polyline points="14 7 18 10 14 13" />
    <path d="M11 4 9 16" />
  </svg>
);
const IconSupport = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Z" />
    <path d="M7 7a3 3 0 0 1 6 2c0 2-3 3-3 3M10 15v.5" />
  </svg>
);
const IconChart = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 14l4-5 4 3 5-7" />
    <path d="M3 17h14" />
  </svg>
);
const IconShield = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2 3 5v5c0 4 3 7 7 8 4-1 7-4 7-8V5l-7-3Z" />
  </svg>
);

/* ── Domain icon map ── */
const domainIcons: Record<string, React.ReactElement> = {
  "Operations & Logistics": <IconGear />,
  "Finance & Risk": <IconDollar />,
  Healthcare: <IconHeart />,
  Legal: <IconScale />,
  Engineering: <IconCode />,
  "Customer Experience": <IconSupport />,
  "Data & Analytics": <IconChart />,
  "Regulated & Government": <IconShield />,
};

/* ── Infrastructure features (no mascot images) ── */
const infraFeatures = [
  {
    title: "On-premise or private cloud",
    desc: "Deploy to AWS, GCP, Azure, or bare metal. You choose where the stack lives.",
  },
  {
    title: "Air-gapped available",
    desc: "For regulated environments with strict network isolation. No outbound traffic.",
  },
  {
    title: "Open-source, MIT license",
    desc: "Full codebase visibility. Fork it, audit it, extend it. No lock-in.",
  },
  {
    title: "LGPD · GDPR · HIPAA · SOC 2",
    desc: "Pre-built compliance postures for each framework. Your team stays in control.",
  },
];

/* ── How it works (horizontal bar) ── */
const howSteps = [
  { num: "01", text: "Map the AI opportunities in your operation" },
  { num: "02", text: "Build Environment RL loops and custom agents" },
  { num: "03", text: "Deploy self-hosted inside your infrastructure" },
  { num: "04", text: "Quality improves and cost falls every cycle" },
];

/* ── Utility icons ── */
const arrowIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-7-7 7 7-7 7"
    />
  </svg>
);
const checkSvg = (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="2 6 5 9 10 3" />
  </svg>
);

export default async function EnterprisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const infraPillar = pillars[2];

  return (
    <div className="enterprise-page enterprise-pitch-page">
      {/* ── HERO: single-column, no image ── */}
      <section className="enterprise-hero enterprise-hero-simple">
        <Container>
          <div className="ep-hero-inner">
            <FadeIn delay={0} y={16}>
              <span className="badge badge-new inline-flex items-center gap-2">
                <span className="badge-new-dot" />
                <span>Enterprise AI Lab</span>
              </span>
            </FadeIn>
            <TextReveal delay={0.08}>
              <h1 className="ep-hero-h1 mt-5">
                Your AI Lab for
                <br />
                Your Enterprise
              </h1>
            </TextReveal>
            <FadeIn delay={0.22} y={8}>
              <p className="ep-hero-sub mt-5">
                Custom <strong>Environment Reinforcement Learning</strong> and{" "}
                <strong>Self-Improving Agents</strong> — built to cut costs and
                run inside your own infrastructure.
              </p>
            </FadeIn>
            <FadeIn delay={0.36} y={10}>
              <div className="ep-hero-actions mt-8">
                <Button href={DEMO_URL} variant="primary" newTab>
                  Book Your AI Lab Call
                </Button>
                <Button href="#core-delivery" variant="secondary">
                  See What We Build
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.46} y={6}>
              <div className="enterprise-hero-trust mt-7">
                <span className="enterprise-hero-trust-item">
                  Environment RL
                </span>
                <span className="enterprise-hero-trust-item">
                  Self-Improving Agents
                </span>
                <span className="enterprise-hero-trust-item">
                  Self-hosted by design
                </span>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="ep-capability-section" id="core-delivery">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">Core Capabilities</span>
              <h2 className="ep-section-title mt-3">
                Two systems. One compounding advantage.
              </h2>
              <p className="ep-section-sub mt-4">
                Environment RL and self-improving agents work together — each
                cycle makes your models more accurate, faster, and cheaper.
              </p>
            </div>
          </FadeIn>

          <div className="features-grid mt-12">
            {/* ─── Custom RL Environments — big card with image ─── */}
            <FadeIn y={20} className="feat-card big">
              <div className="feat-split">
                <div>
                  <div className="feat-tag">Custom RL Environments</div>
                  <h3 className="feat-title">
                    AI that learns from your operation.
                  </h3>
                  <p className="feat-desc">
                    RL loops trained on your real production data — not
                    simulations. Pricing, scheduling, routing, allocation —
                    agents that compound value every shift and outperform
                    generic models.
                  </p>
                  <ul className="ep-check-list mt-5">
                    {pillars[0].outcomes.map((o) => (
                      <li key={o} className="ep-check-item">
                        <span className="ep-check-icon" aria-hidden="true">
                          {checkSvg}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ep-feat-media">
                  <img
                    src="/tracy/tracy-programing.jpeg"
                    alt="Custom RL environment design"
                    width={480}
                    height={360}
                    className="ep-feat-media-img"
                    style={{ objectPosition: "center 32%" }}
                  />
                </div>
              </div>
            </FadeIn>

            {/* ─── RL sub-cards ─── */}
            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">Environment Design</div>
              <h3 className="feat-title">Built around your business logic.</h3>
              <p className="feat-desc">
                Custom simulation environments modeled on your real systems —
                pricing engines, scheduling layers, allocation pipelines. The
                agent trains inside your actual operating constraints, not toy
                problems.
              </p>
            </FadeIn>

            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">Reward Engineering</div>
              <h3 className="feat-title">Optimizes your actual KPIs.</h3>
              <p className="feat-desc">
                Reward functions aligned with what your business cares about —
                margin, throughput, latency, accuracy. Not generic benchmarks.
                Every episode drives toward outcomes that compound on the
                production floor.
              </p>
            </FadeIn>

            {/* ─── Self-Improving Agents — big card with image ─── */}
            <FadeIn y={20} className="feat-card big">
              <div className="feat-split">
                <div className="ep-feat-media">
                  <img
                    src="/tracy/tracy-fine-tuning.jpeg"
                    alt="Self-improving agent distillation pipeline"
                    width={480}
                    height={360}
                    className="ep-feat-media-img"
                    style={{ objectPosition: "center 26%" }}
                  />
                </div>
                <div>
                  <div className="feat-tag">Self-Improving Agents</div>
                  <h3 className="feat-title">
                    Agents that get smarter every week.
                  </h3>
                  <p className="feat-desc">
                    Most AI agents stop improving on Day 1. Ours don&apos;t.
                    They learn from your production traffic, specialize on your
                    workflows, and replace expensive frontier calls —
                    automatically.
                  </p>
                  <ul className="ep-check-list mt-5">
                    {pillars[1].outcomes.map((o) => (
                      <li key={o} className="ep-check-item">
                        <span className="ep-check-icon" aria-hidden="true">
                          {checkSvg}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* ─── Agent sub-cards ─── */}
            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">Distillation Pipeline</div>
              <div className="ep-stat-value">40×</div>
              <p className="ep-stat-label">
                cheaper per call after distillation
              </p>
              <p className="feat-desc mt-4">
                Student models trained on your production traces replace
                expensive frontier API calls — automatically. Costs drop
                continuously as the model specializes on your traffic.
              </p>
            </FadeIn>

            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">Zero Retraining Ops</div>
              <h3 className="feat-title">The improvement loop runs itself.</h3>
              <p className="feat-desc">
                The feedback cycle operates continuously on your production
                traffic. No MLOps team, no manual triggers. The agent
                specializes — and your cost structure follows.
              </p>
              <ul className="ep-check-list mt-5">
                <li className="ep-check-item">
                  <span className="ep-check-icon" aria-hidden="true">
                    {checkSvg}
                  </span>
                  <span>Continuous improvement, no retraining sprints</span>
                </li>
                <li className="ep-check-item">
                  <span className="ep-check-icon" aria-hidden="true">
                    {checkSvg}
                  </span>
                  <span>Zero code changes — the agent just gets better</span>
                </li>
                <li className="ep-check-item">
                  <span className="ep-check-icon" aria-hidden="true">
                    {checkSvg}
                  </span>
                  <span>Compounds on your traffic, not general benchmarks</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── INFRASTRUCTURE ── */}
      <section className="ep-infra-section">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">{infraPillar.eyebrow}</span>
              <h2 className="ep-section-title mt-3">{infraPillar.title}</h2>
              <p className="ep-section-sub mt-4">{infraPillar.blurb}</p>
            </div>
          </FadeIn>

          <div className="features-grid mt-12">
            {/* big card with image */}
            <FadeIn y={20} className="feat-card big">
              <div className="feat-split">
                <div className="ep-feat-media">
                  <img
                    src="/tracy/tracy-servers.jpeg"
                    alt="Tracy managing self-hosted AI infrastructure"
                    width={560}
                    height={440}
                    className="ep-feat-media-img"
                    style={{ objectPosition: "center 34%" }}
                  />
                </div>
                <div>
                  <div className="feat-tag">
                    Full-stack AI inside your perimeter
                  </div>
                  <h3 className="feat-title">
                    Your data never leaves your environment.
                  </h3>
                  <p className="feat-desc">
                    A complete AI stack — gateway, tracing, training, serving —
                    deployed inside your own infrastructure. On-premise, private
                    cloud, or air-gapped. No outbound data, ever.
                  </p>
                  <ul className="ep-check-list mt-5">
                    {infraPillar.outcomes.map((o) => (
                      <li key={o} className="ep-check-item">
                        <span className="ep-check-icon" aria-hidden="true">
                          {checkSvg}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* 4 infra sub-cards */}
            {infraFeatures.map((f) => (
              <FadeIn key={f.title} y={20} className="feat-card">
                <h4 className="feat-title" style={{ fontSize: "1.1rem" }}>
                  {f.title}
                </h4>
                <p className="feat-desc">{f.desc}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="ep-domains-section">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">Industries</span>
              <h2 className="ep-section-title mt-3">
                Built for teams across the enterprise.
              </h2>
              <p className="ep-section-sub mt-4">
                We deploy in every vertical where AI decisions compound over
                time and cost reduction is structural.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="ep-domains-grid mt-10">
            {industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <article className="ep-domain-card">
                  <span className="ep-domain-icon">
                    {domainIcons[ind.title] ?? <IconGear />}
                  </span>
                  <div>
                    <h3 className="ep-domain-title">{ind.title}</h3>
                    <p className="ep-domain-desc">{ind.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="ep-services-section">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">Services</span>
              <h2 className="ep-section-title mt-3">
                What we build with your team.
              </h2>
              <p className="ep-section-sub mt-4">
                From strategy to production — every layer of the AI stack, end
                to end.
              </p>
            </div>
          </FadeIn>
          <div className="ep-services-grid mt-10">
            {services.map((service) => (
              <FadeIn key={service.title}>
                <article className="ep-service-item">
                  <span className="ep-service-check" aria-hidden="true">
                    {checkSvg}
                  </span>
                  <div>
                    <h4 className="ep-service-title">{service.title}</h4>
                    <p className="ep-service-desc">{service.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="enterprise-final-cta scroll-mt-24">
        <Container>
          <div className="enterprise-final-cta-inner">
            <TextReveal>
              <h2 className="enterprise-final-cta-title">
                Let&apos;s build your enterprise AI Lab.
              </h2>
            </TextReveal>
            <FadeIn delay={0.12}>
              <p className="enterprise-final-cta-sub">
                One strategy call to map your Environment RL, self-improving
                agents, and cost-cut roadmap.
              </p>
            </FadeIn>
            <FadeIn delay={0.26}>
              <div className="enterprise-final-cta-buttons">
                <Button
                  href={DEMO_URL}
                  variant="primary"
                  newTab
                  className="sm:min-w-56"
                >
                  Start Your AI Lab Program
                  <span className="ml-1 inline-flex h-4 w-4">{arrowIcon}</span>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.38}>
              <p className="enterprise-final-cta-foot">
                No prep needed · Executive and technical attendees welcome ·
                leave with a concrete build plan
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
