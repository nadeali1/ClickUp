"use client";
import { useState } from "react";

const TABS = [
  {
    id: "projects",
    label: "Projects",
    title: ["Deliver projects on time,", "every time"],
    description:
      "Get your team, department, and company running smoothly with the industry's best project management solution.",
    replaces: ["1one", "2two", "3three", "4four"],
    points: [
      "Manage complex projects at scale",
      "Bring strategic initiatives to life",
      "Detect and mitigate project risks",
    ],
    agents: [
      { avatar: "intake", text: "Intake Agent standardizes project kickoff" },
      { avatar: "assign", text: "Assign Agent determines task owners" },
      { avatar: "pm", text: "PM Agent tracks deliverables + timelines" },
      {
        avatar: "live-answers",
        text: "Live Answers Agent keeps everyone informed",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    title: ["Maximize marketing's", "impact and results"],
    description:
      "Coordinate content, creative, and campaigns in a single workspace purpose-built for marketers.",
    replaces: ["1one", "2two", "3three", "4four"],
    points: [
      "Execute campaigns with velocity",
      "Coordinate + run seamless events",
      "Eliminate content + creative bottlenecks",
    ],
    agents: [
      { avatar: "brief", text: "Brief Agent creates campaign briefs" },
      { avatar: "content", text: "Content Agent drafts promo copy" },
      { avatar: "brand", text: "Brand Agent applies guidelines" },
      { avatar: "live-intel", text: "Live Intel Agent updates core docs" },
    ],
  },
  {
    id: "product",
    label: "Product & Eng",
    title: ["Ship faster,", "more reliable software"],
    description:
      "Streamline the entire strategy + dev process in a single, connected workspace.",
    replaces: ["1one", "2two", "3three", "4four"],
    points: [
      "Plan + execute the roadmap",
      "Identify + resolve bugs",
      "Integrate with AI coders",
    ],
    agents: [
      { avatar: "intake", text: "PRD Agent creates docs from voice notes" },
      { avatar: "live-answers", text: "Triage Agent prioritizes bugs" },
      { avatar: "assign", text: "Live Answers Agent keeps everyone informed" },
      { avatar: "pm", text: "Codegen Agent produces quality code" },
    ],
  },
  {
    id: "it",
    label: "IT",
    title: ["Create the systems,", "for scale"],
    description:
      "Streamline internal support processes and external vendor relationship protocols in a single, unified workspace.",
    replaces: ["1one", "2two", "3three", "4four"],
    points: [
      "Manage vendors + budgeting",
      "Run tight asset management",
      "Streamline contracts + procurement",
    ],
    agents: [
      { avatar: "assign", text: "Assets Agent tracks inventory" },
      { avatar: "brand", text: "RFP Agent manages reqs docs" },
      { avatar: "intake", text: "Contracts Agent standardizes terms" },
      {
        avatar: "live-intel",
        text: "Live Intel Agent identifies redundancies",
      },
    ],
  },
  {
    id: "hr",
    label: "HR",
    title: ["Hire, onboard,", "and grow great teams"],
    description:
      "Run recruiting, onboarding, and people operations from a single connected workspace.",
    replaces: ["1one", "2two", "3three", "4four"],
    points: [
      "Streamline hiring pipelines",
      "Automate employee onboarding",
      "Keep people data in one place",
    ],
    agents: [
      {
        avatar: "intake",
        text: "Onboarding Agent monitors progress + feedback",
      },
      {
        avatar: "assign",
        text: "Pulse Check Agent collects employee sentiment",
      },
      { avatar: "pm", text: "Trainer Agent analyzes course performance" },
      {
        avatar: "live-answers",
        text: "Live Answers Agent provides real-time info",
      },
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    title: ["See everything,", "decide with confidence"],
    description:
      "Get a real-time view of goals, progress, and risk across every team in the company.",
    replaces: ["1one", "2two", "3three", "4four"],
    points: [
      "Align teams to company goals",
      "Report on progress instantly",
      "Spot risks before they grow",
    ],
    agents: [
      {
        avatar: "brief",
        text: "Goal Reminder Agent removes tedious check-ins",
      },
      {
        avatar: "content",
        text: "Alignment Agent ensures cross-functional cohesion",
      },
      { avatar: "brand", text: "Key Results Agent suggest relevant KPIs" },
      {
        avatar: "live-intel",
        text: "Status Update Agent gives always-on visibility",
      },
    ],
  },
];

const SEE_ALL = { id: "all", label: "See all teams", href: "#" };

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-[#6b6c6f]"
  >
    <path
      d="M4 12.5l5 5L20 6.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Avatar = ({ name }) => (
  <div className="relative h-8 w-8 shrink-0">
    <img
      src={`/images/avatars/${name}.webp`}
      alt=""
      className="h-8 w-8 rounded-full object-cover"
    />
  </div>
);

export default function AISolutionsSection() {
  const [active, setActive] = useState("projects");
  const tab = TABS.find((t) => t.id === active);

  return (
    /* hidden below 1024px */
    <section className="aisol hidden bg-white px-5 pb-24 pt-14 lg:block">
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Heading */}
        <h2 className="text-center font-[family-name:var(--aisol-font-heading)] text-[48px] font-semibold leading-[56px] tracking-[-0.045em] text-[color:var(--aisol-heading)]">
          AI solutions for every{" "}
          <span className="text-[color:var(--aisol-heading-muted)]">team</span>
        </h2>
        <p className="mt-2 text-center text-[24px] font-medium leading-8 tracking-[-0.01em] text-[color:var(--aisol-subtitle)]">
          Your key workflows, powered by ClickUp Agents.
        </p>

        {/* Tabs */}
        <div
          className="mt-8 flex items-center justify-center gap-3"
          role="tablist"
        >
          {TABS.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={`h-8 whitespace-nowrap rounded-full px-3.5 text-[14px] font-medium leading-none transition-colors ${
                  isActive
                    ? "border-2 border-solid border-[color:var(--aisol-accent)] text-[color:var(--aisol-accent)]"
                    : "border border-dashed border-[color:var(--aisol-tab-border)] text-[color:var(--aisol-tab)] hover:border-[color:var(--aisol-accent)]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
          <a
            href={SEE_ALL.href}
            className="flex h-8 items-center whitespace-nowrap rounded-full border border-dashed border-[color:var(--aisol-tab-border)] px-3.5 text-[14px] font-medium leading-none text-[color:var(--aisol-tab)] hover:border-[color:var(--aisol-accent)]"
          >
            {SEE_ALL.label}
          </a>
        </div>

        {/* Panel */}
        <div className="mt-6 grid min-h-[476px] grid-cols-[1fr_408px] gap-14 rounded-[40px] bg-[color:var(--aisol-card-bg)] p-14">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="max-w-[420px] font-[family-name:var(--aisol-font-heading)] text-[40px] font-semibold leading-[47px] tracking-[-0.04em]">
                <span className="block text-[color:var(--aisol-heading)]">
                  {tab.title[0]}
                </span>
                <span className="block text-[color:var(--aisol-heading-muted)]">
                  {tab.title[1]}
                </span>
              </h3>
              <p className="mt-2 max-w-[450px] text-[18px] leading-6 tracking-[-0.01em] text-[color:var(--aisol-body)]">
                {tab.description}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-medium uppercase tracking-[0.08em] text-[color:var(--aisol-list)]">
                  Replaces
                </span>
                <div className="flex items-center gap-3">
                  {tab.replaces.map((logo) => (
                    <img
                      key={logo}
                      src={`/images/avatars/replace/${logo}.png`}
                      alt={logo}
                      className="h-4 w-4 object-contain"
                    />
                  ))}
                </div>
              </div>

              <ul className="mt-3.5 flex flex-col gap-[7px]">
                {tab.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-[16px] leading-[22px] text-[color:var(--aisol-list)]"
                  >
                    <CheckIcon />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col">
            <ul className="flex flex-col gap-3">
              {tab.agents.map((a) => (
                <li
                  key={a.text}
                  className="flex min-h-[68px] items-center gap-3.5 rounded-xl bg-white px-4 py-3 shadow-[0_2px_8px_rgba(16,24,40,0.07),0_0_0_1px_rgba(16,24,40,0.02)]"
                >
                  <Avatar name={a.avatar} />
                  <span className="text-[16px] leading-[22px] tracking-[-0.005em] text-[color:var(--aisol-item-title)]">
                    {a.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-[18px] inline-flex h-9 w-fit items-center gap-1.5 rounded-lg bg-[color:var(--aisol-btn-bg)] px-3 text-[16px] font-semibold tracking-[-0.01em] text-[color:var(--aisol-btn-text)]"
            >
              Explore solution
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
