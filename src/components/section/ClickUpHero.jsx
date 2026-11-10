"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

const MOCK_W = 880;
const SHOWCASE_H = 514;

const SIDEBAR = [
  "Projects",
  "Chat",
  "Brain MAX",
  "AI Agents",
  "Sprints",
  "Time Tracking",
  "Calendar",
  "Docs",
  "Whiteboards",
  "Automations",
  "Dashboards",
  "Scheduling",
];

const TILES = [
  {
    label: "ClickUp 4.0",
    badge: true,
    bg: "bg-ink text-white font-mono",
    glyph: "4.0",
  },
  { label: "Agents", badge: true, bg: "bg-app-violet text-white", glyph: "◉◉" },
  { label: "Projects", bg: "bg-app-green text-white", glyph: "☰" },
  { label: "Brain (AI)", brain: true },
  { label: "Time Tracking", bg: "bg-app-orange text-white", glyph: "◔" },
  { label: "Chat", bg: "bg-app-violet text-white", glyph: "#" },
  { label: "Calendar", bg: "bg-app-pink text-white", glyph: "31" },
  { label: "Docs", bg: "bg-app-blue text-white", glyph: "≡" },
  { label: "Whiteboards", bg: "bg-app-yellow text-ink", glyph: "∿" },
  { label: "Sprints", bg: "bg-app-teal text-white", glyph: "▬" },
  { label: "Automations", bg: "bg-app-blue text-white", glyph: "∿" },
  { label: "and more...", more: true },
];

const GROUPS = [
  {
    name: "IN PROGRESS",
    chip: "bg-brand-blue",
    status: "text-brand-blue",
    rows: [
      { t: "Migrate DB to Postgres 16", p: "High", tag: "Data", av: ["a"] },
      { t: "Optimize image pipeline", p: "High", tag: "Frontend", av: ["b"] },
      { t: "Add rate limiting to API", p: "High", tag: "Backend", av: ["a"] },
    ],
  },
  {
    name: "IN REVIEW",
    chip: "bg-review",
    status: "text-review",
    rows: [
      {
        t: "Add SSO login flow",
        sub: 2,
        p: "High",
        tag: "Backend",
        av: ["c", "b"],
      },
      { t: "Cache layer for search", p: "Low", tag: "Backend", av: ["c"] },
      { t: "Fix flaky E2E tests", p: "High", tag: "Infra", av: ["c"] },
    ],
  },
];

const TAG = {
  Data: "bg-tag-pink-bg text-tag-pink",
  Frontend: "bg-tag-blue-bg text-tag-blue",
  Backend: "bg-tag-teal-bg text-tag-teal",
  Infra: "bg-tag-violet-bg text-tag-violet",
};
const AVATAR = { a: "bg-avatar-a", b: "bg-avatar-b", c: "bg-avatar-c" };

const RAIL = ["Home", "Spaces", "Chat", "AI", "Apps"];

const LOGOS_LG = [
  ["amazon", "/icons/trusted/Amazon.svg"],
  ["NVIDIA", "/icons/trusted/Nvidia.svg"],
  ["Deloitte", "/icons/trusted/Deloitte.svg"],
  ["verizon", "/icons/trusted/Verizon.svg"],
  ["Spotify", "/icons/trusted/Spotify.svg"],
  ["Stanford", "/icons/trusted/Stanford.svg"],
];

const LOGOS_SM = [
  ["amazon", "/icons/trusted/Amazon.svg"],
  ["NVIDIA", "/icons/trusted/Nvidia.svg"],
  ["Deloitte", "/icons/trusted/Deloitte.svg"],
  ["verizon", "/icons/trusted/Verizon.svg"],
  ["Spotify", "/icons/trusted/Spotify.svg"],
  ["Stanford", "/icons/trusted/Stanford.svg"],
];

const Chevron = ({ className = "" }) => (
  <svg
    viewBox="0 0 12 12"
    className={`size-3 shrink-0 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 4.5 6 7.5 9 4.5" />
  </svg>
);
const PlusCircle = ({ className = "" }) => (
  <svg
    viewBox="0 0 16 16"
    className={`size-4 shrink-0 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 5v6M5 8h6" />
  </svg>
);
const CheckCircle = () => (
  <svg viewBox="0 0 16 16" className="size-4 shrink-0">
    <circle cx="8" cy="8" r="7" fill="currentColor" />
    <path
      d="M5 8.2 7.1 10.2 11 6"
      stroke="#fff"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Flag = ({ className = "" }) => (
  <svg
    viewBox="0 0 12 12"
    className={`size-3 shrink-0 ${className}`}
    fill="currentColor"
  >
    <path d="M2 1h1v10H2zM3 1.5h6.5L8 3.7 9.5 6H3z" />
  </svg>
);
const BrainIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
    <circle cx="12" cy="6" r="4" fill="#ff4d8d" />
    <circle cx="18" cy="12" r="4" fill="#7b5cfa" />
    <circle cx="12" cy="18" r="4" fill="#32c5ff" />
    <circle cx="6" cy="12" r="4" fill="#ffb020" />
    <circle cx="12" cy="12" r="2.5" fill="#fff" />
  </svg>
);

function useFit(base) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      if (w) setScale(Math.min(1, w / base));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [base]);
  return [ref, scale];
}

function Mock() {
  const [ref, s] = useFit(MOCK_W);
  return (
    <div ref={ref} className="relative min-w-0 flex-1 overflow-hidden">
      <div
        className="relative flex origin-top-left flex-col"
        style={{
          width: MOCK_W,
          height: SHOWCASE_H / s,
          transform: `scale(${s})`,
        }}
      >
        {/* top bar */}
        <div className="flex items-center px-2.5 pt-2.5 pb-0.5">
          <span className="flex h-7 items-center gap-1.5 rounded-ctl px-2 text-ui font-medium text-ink">
            <span className="text-app-orange">✳</span>Mango Tech
            <Chevron className="text-muted" />
          </span>
          <span className="mr-search-r ml-auto flex h-7 w-search items-center justify-between rounded-full border border-line bg-white px-3.5 text-ui-sm text-muted cursor-default">
            Search ⌘K
            <BrainIcon className="size-3" />
          </span>
        </div>

        <div className="ml-2.5 mr-1.5 flex min-h-0 flex-1 overflow-hidden rounded-t-xl border border-b-0 border-line bg-panel">
          {/* dark rail */}
          <aside className="flex w-rail shrink-0 flex-col items-center bg-rail pt-1 text-ui-xs font-semibold text-white">
            {RAIL.map((l, i) => (
              <div
                key={l}
                className="flex h-17 flex-col items-center justify-center gap-1"
              >
                {i === 0 ? (
                  <span className="size-5 rounded-full bg-linear-to-br from-brand-purple to-app-pink" />
                ) : l === "Apps" ? (
                  <span className="grid size-5 grid-cols-2 gap-0.5">
                    <i className="rounded-sm bg-tag-pink" />
                    <i className="rounded-sm bg-flag-high" />
                    <i className="rounded-sm bg-app-green" />
                    <i className="rounded-sm bg-white" />
                  </span>
                ) : (
                  <span className="size-5 rounded-md border-2 border-white/90" />
                )}
                {l}
              </div>
            ))}
            <div className="mt-auto flex flex-col items-center gap-1 pb-3">
              <span className="size-5 rounded-full border-2 border-white/90" />
              Invite
            </div>
          </aside>

          {/* panel */}
          <div className="relative min-w-0 flex-1 px-panel text-ui-sm">
            <div className="flex h-10 items-center gap-2 text-ui font-medium text-ink">
              <span className="grid size-4.5 place-items-center rounded bg-tag-pink text-ui-2xs text-white">
                ✎
              </span>
              Engineering
              <Chevron className="text-muted" />
              <span className="text-muted">☆</span>
            </div>
            <div className="flex h-11 items-end gap-5 border-b border-line text-muted">
              {["List", "Board", "Gantt"].map((t, i) => (
                <span
                  key={t}
                  className={`flex items-center gap-1.5 pb-2.5 ${i === 0 ? "-mb-px border-b-2 border-ink font-medium text-ink" : ""}`}
                >
                  <span
                    className={`size-3 rounded-sm ${["bg-brand-purple", "bg-brand-blue", "bg-tag-pink"][i]}`}
                  />
                  {t}
                </span>
              ))}
              <span className="pb-2.5">+ View</span>
            </div>
            <div className="flex h-10 items-center justify-between text-muted">
              <span className="flex gap-3.5">
                <i className="size-3.5 rounded-sm border border-current" />
                <i className="size-3.5 rounded-full border border-current" />
                <i className="size-3.5 rounded-sm border border-current" />
              </span>
              <span className="flex items-center gap-4">
                <span>⛛</span>
                <span className="flex h-7.5 items-center overflow-hidden rounded-md bg-brand-purple font-semibold text-white">
                  <span className="px-3">+ Task</span>
                  <span className="flex h-full items-center border-l border-white/30 px-1.5">
                    <Chevron />
                  </span>
                </span>
              </span>
            </div>

            <div className="grid-task h-8 font-medium text-muted">
              <span className="pl-10">Name</span>
              <span>Priority</span>
              <span>Assignee</span>
              <span className="flex items-center justify-between">
                Labels
                <PlusCircle className="size-3.5" />
              </span>
            </div>

            {GROUPS.map((g) => (
              <div key={g.name} className="mt-1.5">
                <div className="flex h-7 items-center gap-2 text-ui-xs">
                  <Chevron className="text-ink" />
                  <span
                    className={`flex h-5.5 items-center gap-1.5 rounded-md px-2 font-bold text-white ${g.chip}`}
                  >
                    ◔ {g.name}
                  </span>
                  <span className="text-muted">3</span>
                </div>
                {g.rows.map((r) => (
                  <div
                    key={r.t}
                    className="grid-task h-9 border-b border-line text-ui text-ink"
                  >
                    <span className="flex items-center gap-2.5 pl-3.5">
                      <span
                        className={`size-3.5 shrink-0 rounded-full border-2 ${g.status}`}
                      />
                      {r.t}
                      {r.sub && (
                        <span className="text-ui-xs text-muted">⑂ {r.sub}</span>
                      )}
                    </span>
                    <span
                      className={`flex items-center gap-1.5 text-ui-sm ${r.p === "Low" ? "text-flag-low" : "text-muted"}`}
                    >
                      <Flag
                        className={
                          r.p === "Low" ? "text-flag-low" : "text-flag-high"
                        }
                      />
                      {r.p}
                    </span>
                    <span className="flex -space-x-1">
                      {r.av.map((a, i) => (
                        <span
                          key={i}
                          className={`size-4.5 rounded-full border border-white ${AVATAR[a]}`}
                        />
                      ))}
                    </span>
                    <span>
                      <span
                        className={`rounded px-2 py-0.5 text-ui-xs ${TAG[r.tag]}`}
                      >
                        {r.tag}
                      </span>
                    </span>
                  </div>
                ))}
                <div className="grid-task h-8.5 text-ui-sm text-muted/70">
                  <span className="flex items-center gap-2.5 pl-3.5">
                    <PlusCircle className="size-3.5" />
                    Add task
                  </span>
                  <span className="pl-4">Count 3</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* floating "Brain" card */}
        <div className="absolute top-brain-y left-brain-x flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2 shadow-card">
          <span className="grid size-8.5 place-items-center rounded-full border border-line">
            <BrainIcon className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-ui-lg font-medium text-ink">Brain</span>
            <span className="block text-ui-2xs text-brand-purple">
              Moving to In Review...
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <section className="hidden border-y border-line md:block">
      <div className="mx-auto max-w-content px-gutter">
        <div className="flex h-showcase border-x border-line">
          <ul className="w-sidebar shrink-0 border-r border-line pt-2.5">
            {SIDEBAR.map((item, i) => (
              <li
                key={item}
                className={`flex h-8 items-center gap-2.5 px-5 text-navlink font-medium ${i === 0 ? "text-brand-blue" : "text-ink-soft"}`}
              >
                {i === 0 ? (
                  <span className="text-brand-blue">
                    <CheckCircle />
                  </span>
                ) : (
                  <PlusCircle className="text-muted" />
                )}
                {item}
              </li>
            ))}
          </ul>
          <Mock />
        </div>
      </div>
    </section>
  );
}

function Trusted() {
  return (
    <section className="lg:border-b lg:border-line">
      <div className="mx-auto max-w-content px-gutter">
        {/* <div className="flex flex-col items-center pt-22 pb-20 lg:border-x lg:border-line lg:pt-4 lg:pb-28 xl:h-trusted xl:flex-row xl:py-0"> */}
        {/* <p className="font-mono text-label uppercase text-muted xl:w-sidebar xl:shrink-0 xl:px-5">Trusted by the best</p> */}

        {/* mobile + tablet set */}
        {/* <ul className="mt-9 grid w-full max-w-logos grid-cols-3 gap-y-9 text-center text-ink-soft lg:hidden"> */}
        {/* {LOGOS_SM.map(([name, cls]) => <li key={name} className={cls}>{name}</li>)} */}
        {/* </ul> */}
        {/* desktop set */}
        {/* <ul className="mt-8 hidden w-full grid-cols-6 place-items-center text-ink-soft lg:grid xl:mt-0 xl:flex-1"> */}
        {/* {LOGOS_LG.map(([name, cls]) => <li key={name} className={cls}>{name}</li>)} */}
        {/* </ul> */}
        {/* </div> */}

        <div className="flex items-center flex-col justify-center pt-10 pb-5 lg:border-x lg:border-line lg:py-4 lg:h-trusted lg:flex-row lg:py-0">
          <p className="font-mono text-label uppercase text-muted xl:w-sidebar xl:shrink-0 lg:px-5 flex justify-center items-center">
            Trusted by the best
          </p>

          {/* mobile + tablet set */}
          <ul className="mt-9 grid w-full max-w-logos grid-cols-3 gap-y-9 lg:hidden group">
            {LOGOS_SM.map(([name, src]) => (
              <li key={name} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={name}
                  width={100}
                  height={32}
                  className="h-8 max-h-8 w-auto max-w-[80px] grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>

          {/* desktop set */}

          <ul className="mt-4 hidden w-full grid-cols-6 place-items-center lg:grid xl:mt-0 xl:flex-1 trusted-logos">
            {LOGOS_LG.map(([name, src]) => (
              <li key={name} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={name}
                  width={130}
                  height={45}
                  className="h-8 max-h-8 w-auto max-w-[100px] grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ClickUpHero() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <main>
        <section className=" sm:mx-auto flex max-w-content flex-col sm:px-gutter pt-hero-top-sm lg:pt-hero-top">
          <div className="flex flex-col gap-2 px-4">
            <a
              href="#"
              className="mb-6 hidden w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1 text-ui font-medium text-ink md:inline-flex"
            >
              The Best AI is <BrainIcon className="size-4" /> Brain
              <sup className="-ml-1 text-ui-2xs">2</sup>
              <svg
                viewBox="0 0 12 12"
                className="size-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4.5 3 7.5 6 4.5 9" />
              </svg>
            </a>

            <h1 className="order-1 text-hero-sm text-ink sm:text-hero-md lg:text-hero md:hidden">
              One Workspace built to think and work
            </h1>

            <h1 className="hidden md:block md:order-1 md:text-hero-lg md:text-ink sm:text-hero-lg md:text-hero-lg">
              Software to replace all <br />
              software. <br /> Brain AI to 100x everything you do.
            </h1>

            <p className="order-2 mt-4 text-lead-sm text-ink-soft lg:mt-0.5 lg:max-w-sub lg:text-lead">
              ClickUp connects your work, knowledge, and conversations to AI
              that can find answers, take action, and build alongside you.
            </p>

            <div className="order-3  mt-4 flex  gap-3 sm:order-3 sm:mt-6 sm:mb-12 lg:mt-8 lg:mb-16">
              <div className="gap-3">
                <a
                  href="#"
                  className="inline-flex h-cta-sm w-full items-center justify-center rounded-btn bg-ink px-5 text-cta font-semibold text-white sm:w-auto lg:h-cta"
                >
                  Get started. It’s FREE!
                </a>

                <p className=" text-note text-ink-soft sm:flex ml-5">
                  <span className="lg:block">Free forever.</span>{" "}
                  <span className="lg:block">No credit card.</span>
                </p>
              </div>
              <a
                href="#"
                className="hidden md:inline-flex h-cta-sm w-full items-center justify-center rounded-btn px-5 text-cta font-semibold  sm:w-auto lg:h-cta bg-[var(--cu-surface-muted)] text-[color:var(--cu-ink)] hover:bg-[var(--cu-line)] active:bg-[var(--cu-line)] focus-visible:bg-[var(--cu-line)]` "
              >
                Get a Demo
              </a>
            </div>
          </div>

          <ul className="sm:px-4 border-3 mt-8 grid grid-cols-3 border-t border-l border-line sm:order-4 sm:mt-0 md:hidden">
            {TILES.map((t) => (
              <li
                key={t.label}
                className="relative flex min-h-tile flex-col items-center justify-center gap-2 border-r border-b border-line px-2 text-center text-ui-lg font-medium text-ink-soft"
              >
                {t.badge && (
                  <span className="absolute top-1 rounded bg-chip px-2 py-0.5 text-ui-xs font-medium text-ink">
                    New
                  </span>
                )}
                <span className={t.badge ? "mt-3" : ""}>
                  {t.brain ? (
                    <BrainIcon className="size-7" />
                  ) : t.more ? (
                    <span className="grid size-6 grid-cols-2 gap-0.5">
                      <i className="rounded-sm bg-tag-pink" />
                      <i className="rounded-sm bg-flag-low" />
                      <i className="rounded-sm bg-app-green" />
                      <i className="rounded-full bg-muted" />
                    </span>
                  ) : (
                    <span
                      className={`grid h-7 min-w-7 place-items-center rounded-lg px-1.5 text-ui-sm font-bold ${t.bg}`}
                    >
                      {t.glyph}
                    </span>
                  )}
                </span>
                {t.label}
              </li>
            ))}
          </ul>
        </section>

        <Showcase />
        <Trusted />
      </main>
    </div>
  );
}
