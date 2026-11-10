"use client";

import { useEffect, useState } from "react";

const ICON_BASE = "/icons";
const ICON_EXT = "svg";
const ICON_LOGO = "png";
const icon = (name) => `${ICON_BASE}/${name}.${ICON_EXT}`;
const icons = (name) => `${ICON_BASE}/${name}.${ICON_LOGO}`;
const LOGO_SRC = icons("clickup-logo");

const MENUS = {
  brain: {
    label: "Brain AI",
    platform: [
      {
        title: "Brain Platform",
        desc: "The converged AI workspace",
        icon: "brain-platform",
      },
      {
        title: "Super Agents",
        desc: "Delegate your work entirely",
        icon: "super-agents",
      },
      {
        title: "Artifacts²",
        desc: "Ship real apps from a prompt",
        icon: "artifacts",
      },
      { title: "Skills", desc: "Teach it how your team works", icon: "skills" },
      {
        title: "Brain MAX Downloads",
        desc: "Desktop, mobile, and Chrome",
        icon: "brain-max",
      },
    ],
    columns: [
      {
        label: "Agents & Automation",
        links: [
          { label: "Cloud Agents", badge: "Soon" },
          { label: "Process Miner" },
          { label: "Custom Apps" },
        ],
      },
      {
        label: "Knowledge & Capture",
        links: [
          { label: "Context Engine" },
          { label: "Enterprise Search" },
          { label: "Notetaker" },
          { label: "Talk to Text" },
        ],
      },
      {
        label: "Resources",
        links: [{ label: "Pricing" }, { label: "State of AI" }],
      },
    ],
    news: [
      {
        title: "Artifacts²",
        text: "Now live in every workspace",
        cta: "See the gallery",
      },
      {
        title: "Skills",
        text: "Build your own, no code needed",
        cta: "Read the docs",
      },
    ],
  },
  product: {
    label: "Product",
    columns: [
      {
        label: "Projects",
        links: [
          { label: "Tasks", icon: "tasks" },
          { label: "Dashboards", icon: "dashboards" },
          { label: "Board", icon: "board" },
          { label: "Gantt", icon: "gantt" },
        ],
      },
      {
        label: "Communication",
        links: [
          { label: "Chat", icon: "chat" },
          { label: "SyncUp", icon: "syncup" },
          { label: "Inbox", icon: "inbox" },
          { label: "Clips", icon: "clips" },
        ],
      },
      {
        label: "Knowledge",
        links: [
          { label: "Docs", icon: "docs" },
          { label: "Whiteboards", icon: "whiteboards" },
          { label: "Wiki", icon: "wiki" },
          { label: "Forms", icon: "forms" },
        ],
      },
      {
        label: "Time",
        links: [
          { label: "Calendar", icon: "calendar" },
          { label: "Scheduling", icon: "scheduling" },
          { label: "Automations", icon: "automations" },
          { label: "Time tracking", icon: "time-tracking" },
        ],
      },
      {
        label: "More",
        links: [
          { label: "All features", icon: "all-features" },
          { label: "Integrations", icon: "integrations" },
          { label: "Downloads", icon: "downloads" },
          { label: "Watch demo", icon: "watch-demo" },
        ],
      },
    ],
  },
  solutions: {
    label: "Solutions",
    columns: [
      {
        label: "Teams",
        links: [
          "Project management",
          "Product development",
          "Operations",
          "IT",
          "Marketing",
          "Human Resources",
          "Sales",
        ].map((label) => ({ label })),
        seeAll: "See all teams",
      },
      {
        label: "Companies",
        links: ["Enterprise", "Startup", "Small Business", "Non-profit"].map(
          (label) => ({ label }),
        ),
      },
      {
        label: "Industries",
        links: [
          "Healthcare",
          "Education",
          "Agency & Services",
          "Consumer & Retail",
          "Construction",
          "Government",
        ].map((label) => ({ label })),
        seeAll: "See all industries",
      },
    ],
    featured: [
      {
        title: "The Small Business Suite",
        desc: "The only software your small business needs",
        icon: "small-business-suite",
        badge: "New",
      },
      {
        title: "Custom agent solutions",
        desc: "AI workflows built for your team",
        icon: "custom-agent-solutions",
      },
    ],
  },
  learn: {
    label: "Learn",
    columns: [
      {
        label: "Learn",
        links: ["University", "Demos", "Video tutorials", "Webinars"].map(
          (label) => ({ label }),
        ),
      },
      {
        label: "Discover",
        links: ["Blog", "Customer stories", "Guides", "Kill Work Sprawl"].map(
          (label) => ({ label }),
        ),
      },
      {
        label: "Support",
        links: [
          "24/7 Support",
          "Professional services",
          "Premium support",
          "Hire an expert",
        ].map((label) => ({ label })),
      },
    ],
    story: {
      logo: "cartoon-network",
      quote: "Cartoon Network doubles output in 50% less time with ClickUp",
      cta: "Read the story",
    },
  },
};

const MENU_ORDER = ["brain", "product", "solutions", "learn"];
const PLAIN_LINKS = ["Pricing", "Enterprise"];

const S = {
  label:
    "font-[family-name:var(--cu-font-mono)] text-[length:var(--cu-fs-label)] tracking-[var(--cu-ls-label)] uppercase leading-none text-[color:var(--cu-text-label)]",
  title:
    "text-[length:var(--cu-fs-title)] font-medium leading-tight text-[color:var(--cu-ink)]",
  desc: "text-[length:var(--cu-fs-desc)] leading-tight text-[color:var(--cu-text-muted)]",
  link: "text-[length:var(--cu-fs-link)] text-[color:var(--cu-text-link)]",
  blue: "text-[length:var(--cu-fs-label)] mx-2 rounded-[var(--cu-radius-btn)] px-2 py-1 font-medium text-[color:var(--cu-link-blue)] transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]",
  badge:
    "ml-2 rounded-[var(--cu-radius-badge)] bg-[var(--cu-soon-bg)] px-1.5 py-[3px] text-[length:var(--cu-fs-badge)] font-medium uppercase leading-none text-[color:var(--cu-soon-text)]",
  btnBase:
    "inline-flex h-[var(--cu-btn-h)] items-center justify-center rounded-[var(--cu-radius-btn)] px-[var(--cu-btn-px)] text-[length:var(--cu-fs-btn)] font-semibold leading-none transition-colors",
};

const ChevronDown = ({ className = "" }) => (
  <svg
    viewBox="0 0 12 12"
    className={`h-3 w-3 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 4.5 6 7.5l3-3" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 3 5 5-5 5" />
  </svg>
);

const Arrow = () => (
  <svg
    viewBox="0 0 12 12"
    className="ml-1 inline h-3 w-3"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 6h7M6.5 3l3 3-3 3" />
  </svg>
);

const Logo = ({ mobile = false }) => (
  <a href="" aria-label="ClickUp home" className="flex shrink-0 items-center">
    <img
      src={LOGO_SRC}
      alt="ClickUp"
      className={`w-auto ${mobile ? "h-[var(--cu-logo-h-mobile)]" : "h-[var(--cu-logo-h)]"}`}
    />
  </a>
);

const Label = ({ children }) => <p className={S.label}>{children}</p>;

const Badge = ({ children }) => <span className={S.badge}>{children}</span>;

const Icon = ({ name, size = "sm", mono = false }) => (
  <img
    src={icon(name)}
    alt="logo"
    className={`shrink-0 object-contain transition-[filter] duration-150 ${
      mono
        ? "brightness-0 group-hover:brightness-100 group-active:brightness-100 group-focus-visible:brightness-100"
        : ""
    } ${size === "xl" ? "h-[var(--cu-icon-xl)] w-[var(--cu-icon-xl)]" : "h-[var(--cu-icon-sm)] w-[var(--cu-icon-sm)]"}`}
  />
);

function LinkColumn({ col }) {
  const hasIcons = col.links.some((l) => l.icon);
  return (
    <div>
      <Label>{col.label}</Label>
      <ul className="mt-[var(--cu-label-gap)]">
        {col.links.map((l) => (
          <li key={l.label}>
            <a
              href="#"
              className={`mx-2 flex items-center rounded-[var(--cu-radius-btn)] px-2 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)] ${hasIcons ? "min-h-[var(--cu-icon-row-h)] gap-2.5" : "min-h-[var(--cu-link-row-h)]"} ${S.link}`}
            >
              {l.icon && <Icon name={l.icon} />}
              {l.label}
              {l.badge && <Badge>{l.badge}</Badge>}
            </a>
          </li>
        ))}
      </ul>
      {col.seeAll && (
        <a href="#" className={`mt-1 inline-block ${S.blue}`}>
          {col.seeAll}
          <Arrow />
        </a>
      )}
    </div>
  );
}

function BrainPanel({ m }) {
  return (
    <div className="grid grid-cols-[var(--cu-brain-left-w)_1fr]">
      <div>
        <Label>AI Platform</Label>
        <ul className="mt-[var(--cu-label-gap)]">
          {m.platform.map((p) => (
            <li key={p.title}>
              <a
                href="#"
                className="group -mx-2.5 my-1.5 flex h-[calc(var(--cu-platform-row-h)-12px)] items-center gap-3 rounded-[var(--cu-radius-card)] px-1.5 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)] max-w-[var(--cu-brain-w)]"
              >
                <Icon name={p.icon} size="xl" mono />
                <span>
                  <span className={`block ${S.title}`}>{p.title}</span>
                  <span className={`mt-1 block ${S.desc}`}>{p.desc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="grid grid-cols-3">
          {m.columns.map((c) => (
            <LinkColumn key={c.label} col={c} />
          ))}
        </div>
        <div className="mt-6 border-t border-[color:var(--cu-line)] pt-6 ">
          <Label>What&rsquo;s new</Label>
          <ul className="mt-4 space-y-3">
            {m.news.map((n) => (
              <li
                key={n.title}
                className="-mx-2 flex items-baseline gap-2 rounded-[var(--cu-radius-btn)] px-2 py-1 text-[length:var(--cu-fs-link)] transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
              >
                <span className="font-medium text-[color:var(--cu-ink)]">
                  {n.title}
                </span>
                <span className="text-[color:var(--cu-text-muted)]">
                  {n.text}
                </span>
                <a
                  href="#"
                  className="text-[color:var(--cu-link-blue)] hover:underline"
                >
                  {n.cta}
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductPanel({ m }) {
  return (
    <div className="grid grid-cols-5">
      {m.columns.map((c) => (
        <LinkColumn key={c.label} col={c} />
      ))}
    </div>
  );
}

function SolutionsPanel({ m }) {
  return (
    <div className="grid grid-cols-[repeat(3,var(--cu-solutions-col-w))_1fr]">
      {m.columns.map((c) => (
        <LinkColumn key={c.label} col={c} />
      ))}
      <div>
        <Label>Featured</Label>
        <ul className="mt-[var(--cu-label-gap)] space-y-4">
          {m.featured.map((f) => (
            <li key={f.title}>
              <a
                href="#"
                className="-mx-2 flex items-center gap-3 rounded-[var(--cu-radius-card)] p-2 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
              >
                <Icon name={f.icon} size="xl" />
                <span>
                  <span className={`flex items-center ${S.title}`}>
                    {f.title}
                    {f.badge && <Badge>{f.badge}</Badge>}
                  </span>
                  <span
                    className={`mt-1 block text-[length:var(--cu-fs-label)] ${S.desc}`}
                  >
                    {f.desc}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LearnPanel({ m }) {
  return (
    <div className="grid grid-cols-[repeat(3,var(--cu-col-w))_1fr]">
      {m.columns.map((c) => (
        <LinkColumn key={c.label} col={c} />
      ))}
      <div>
        <Label>Customer stories</Label>
        <a
          href="#"
          className="mt-[var(--cu-label-gap)] block rounded-[var(--cu-radius-card)] bg-[var(--cu-surface-card)] p-4 transition-colors hover:bg-[var(--cu-line)] active:bg-[var(--cu-line)] focus-visible:bg-[var(--cu-line)]"
        >
          <img src={icon(m.story.logo)} alt="" className="h-9 w-auto" />
          <p className="mt-3 text-[length:var(--cu-fs-card-quote)] font-medium leading-snug tracking-[var(--cu-ls-tight)] text-[color:var(--cu-ink)]">
            &ldquo;{m.story.quote}&rdquo;
          </p>
          <span className="mt-4 inline-flex items-center text-[length:var(--cu-fs-card-cta)] font-semibold text-[color:var(--cu-ink)]">
            {m.story.cta}
            <Arrow />
          </span>
        </a>
      </div>
    </div>
  );
}

const PANELS = {
  brain: BrainPanel,
  product: ProductPanel,
  solutions: SolutionsPanel,
  learn: LearnPanel,
};

function MobileSub({ id }) {
  const m = MENUS[id];
  const mLink =
    "-mx-2 flex min-h-11 items-center gap-3 rounded-[var(--cu-radius-btn)] px-2 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)] text-[length:var(--cu-fs-mobile-link)] font-medium text-[color:var(--cu-ink)]";
  return (
    <div className="px-[var(--cu-mobile-pad)] pb-6">
      {m.platform && (
        <section className="pt-6">
          <Label>AI Platform</Label>
          <ul className="mt-4 space-y-4">
            {m.platform.map((p) => (
              <li key={p.title}>
                <a
                  href="#"
                  className="group -mx-1.5 flex items-center gap-3 rounded-[var(--cu-radius-card)] px-1.5 py-1 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
                >
                  <Icon name={p.icon} size="xl" mono />
                  <span>
                    <span className="block text-[length:var(--cu-fs-mobile-title)] font-medium text-[color:var(--cu-ink)]">
                      {p.title}
                    </span>
                    <span className="block text-[length:var(--cu-fs-mobile-desc)] text-[color:var(--cu-text-muted)]">
                      {p.desc}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {m.columns.map((c) => (
        <section key={c.label} className="pt-6">
          <Label>{c.label}</Label>
          <ul className="mt-3">
            {c.links.map((l) => (
              <li key={l.label}>
                <a href="#" className={mLink}>
                  {l.icon && <Icon name={l.icon} />}
                  {l.label}
                  {l.badge && <Badge>{l.badge}</Badge>}
                </a>
              </li>
            ))}
          </ul>
          {c.seeAll && (
            <a href="#" className={`mt-1 inline-block ${S.blue}`}>
              {c.seeAll}
              <Arrow />
            </a>
          )}
        </section>
      ))}

      {m.featured && (
        <section className="pt-6">
          <Label>Featured</Label>
          <ul className="mt-4 space-y-4">
            {m.featured.map((f) => (
              <li key={f.title}>
                <a
                  href="#"
                  className="mx-2 flex items-center gap-3 rounded-[var(--cu-radius-card)] p-2 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
                >
                  <Icon name={f.icon} size="xl" />
                  <span>
                    <span className="flex items-center text-[length:var(--cu-fs-mobile-title)] font-medium text-[color:var(--cu-ink)]">
                      {f.title}
                      {f.badge && <Badge>{f.badge}</Badge>}
                    </span>
                    <span className="block text-[length:var(--cu-fs-mobile-desc)] text-[color:var(--cu-text-muted)]">
                      {f.desc}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {m.news && (
        <section className="pt-6">
          <Label>What&rsquo;s new</Label>
          <ul className="mt-4 space-y-3 text-[length:var(--cu-fs-mobile-desc)]">
            {m.news.map((n) => (
              <li
                key={n.title}
                className="mx-2 rounded-[var(--cu-radius-btn)] px-2 py-1 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
              >
                <span className="font-medium text-[color:var(--cu-ink)]">
                  {n.title}
                </span>{" "}
                <span className="text-[color:var(--cu-text-muted)]">
                  {n.text}
                </span>{" "}
                <a href="#" className="text-[color:var(--cu-link-blue)]">
                  {n.cta}
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {m.story && (
        <section className="pt-6">
          <Label>Customer stories</Label>
          <a
            href="#"
            className="mt-4 block rounded-[var(--cu-radius-card)] bg-[var(--cu-surface-card)] p-4 transition-colors hover:bg-[var(--cu-line)] active:bg-[var(--cu-line)] focus-visible:bg-[var(--cu-line)]"
          >
            <img src={icon(m.story.logo)} alt="" className="h-9 w-auto" />
            <p className="mt-3 text-[length:var(--cu-fs-card-quote)] font-medium leading-snug text-[color:var(--cu-ink)]">
              &ldquo;{m.story.quote}&rdquo;
            </p>
            <span className="mt-4 inline-flex items-center text-[length:var(--cu-fs-card-cta)] font-semibold text-[color:var(--cu-ink)]">
              {m.story.cta}
              <Arrow />
            </span>
          </a>
        </section>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      if (e.matches) {
        setMobileOpen(false);
        setMobileSub(null);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
        setMobileSub(null);
      }
    };
    mq.addEventListener("change", onChange);
    window.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSub(null);
  };

  const Panel = open ? PANELS[open] : null;

  return (
    <header
      className="sticky top-0 z-40 bg-[var(--cu-bg)] font-[family-name:var(--cu-font-sans)]"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto hidden h-[var(--cu-header-h)] w-full max-w-[var(--cu-container-w)] items-center justify-between lg:flex">
        <div className="flex items-center gap-5">
          <Logo />
          <nav aria-label="Main">
            <ul className="flex items-center gap-2">
              {MENU_ORDER.map((id) => (
                <li key={id} onMouseEnter={() => setOpen(id)}>
                  <button
                    type="button"
                    aria-expanded={open === id}
                    onClick={() => setOpen(open === id ? null : id)}
                    className={`flex h-[var(--cu-btn-h)] items-center gap-1 rounded-[var(--cu-radius-btn)] px-[var(--cu-nav-pill-px)] text-[length:var(--cu-fs-nav)] font-medium text-[color:var(--cu-text-nav)] transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)] ${
                      open === id ? "bg-[var(--cu-surface-muted)]" : ""
                    }`}
                  >
                    {MENUS[id].label}
                    <ChevronDown
                      className={`transition-transform ${open === id ? "rotate-180" : ""}`}
                    />
                  </button>
                </li>
              ))}
              {PLAIN_LINKS.map((l) => (
                <li key={l} onMouseEnter={() => setOpen(null)}>
                  <a
                    href="#"
                    className="flex h-[var(--cu-btn-h)] items-center rounded-[var(--cu-radius-btn)] px-[var(--cu-nav-pill-px)] text-[length:var(--cu-fs-nav)] font-medium text-[color:var(--cu-text-nav)] transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="flex items-center gap-2.5"
          onMouseEnter={() => setOpen(null)}
        >
          <a
            href="#"
            className="mr-1 rounded-[var(--cu-radius-btn)] px-2.5 py-1 text-[length:var(--cu-fs-demo)] tracking-[var(--cu-ls-tight)] text-[color:var(--cu-text-muted)] transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
          >
            Get a Demo
          </a>
          <a
            href="#"
            className={`${S.btnBase} bg-[var(--cu-surface-muted)] text-[color:var(--cu-ink)] hover:bg-[var(--cu-line)] active:bg-[var(--cu-line)] focus-visible:bg-[var(--cu-line)]`}
          >
            Login
          </a>
          <a
            href="#"
            className={`${S.btnBase} bg-[var(--cu-btn-dark)] text-[color:var(--cu-btn-dark-text)] hover:bg-[var(--cu-text-nav)] active:bg-[var(--cu-text-nav)] focus-visible:bg-[var(--cu-text-nav)]`}
          >
            Sign Up
          </a>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full hidden bg-[var(--cu-bg)] shadow-[var(--cu-shadow-panel)] transition-[opacity,visibility] duration-150 lg:block ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[var(--cu-container-w)] pb-[var(--cu-panel-pb)] pt-[var(--cu-panel-pt)]">
          {Panel && <Panel m={MENUS[open]} />}
        </div>
      </div>

      <div className="flex h-[var(--cu-mobile-header-h)] items-center justify-between px-[var(--cu-mobile-pad)] lg:hidden">
        <Logo mobile />
        <div className="flex items-center gap-4">
          <a
            href="#"
            className={`${S.btnBase} bg-[var(--cu-btn-dark)] text-[color:var(--cu-btn-dark-text)] hover:bg-[var(--cu-text-nav)] active:bg-[var(--cu-text-nav)] focus-visible:bg-[var(--cu-text-nav)]`}
          >
            Sign Up
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-[var(--cu-radius-btn)] p-1.5 text-[color:var(--cu-ink)] transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[var(--cu-bg)] lg:hidden">
          <div className="flex h-[var(--cu-mobile-header-h)] shrink-0 items-center justify-between border-b border-[color:var(--cu-line)] px-[var(--cu-mobile-pad)]">
            <Logo mobile />
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={`${S.btnBase} bg-[var(--cu-btn-dark)] text-[color:var(--cu-btn-dark-text)] hover:bg-[var(--cu-text-nav)] active:bg-[var(--cu-text-nav)] focus-visible:bg-[var(--cu-text-nav)]`}
              >
                Sign Up
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobile}
                className="rounded-[var(--cu-radius-btn)] p-1.5 text-[color:var(--cu-ink)] transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {mobileSub ? (
              <MobileSub id={mobileSub} />
            ) : (
              <ul className="px-[var(--cu-mobile-pad)] pt-2">
                {MENU_ORDER.map((id) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => setMobileSub(id)}
                      className="-mx-3 flex h-[var(--cu-mobile-row-h)] w-[calc(100%+1.5rem)] items-center justify-between rounded-[var(--cu-radius-btn)] px-3 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)] text-left text-[length:var(--cu-fs-mobile-main)] font-medium tracking-[var(--cu-ls-tight)] text-[color:var(--cu-ink)]"
                    >
                      {MENUS[id].label}
                      <ChevronRight />
                    </button>
                  </li>
                ))}
                {[...PLAIN_LINKS, "Get a Demo"].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="-mx-3 flex h-[var(--cu-mobile-row-h)] items-center rounded-[var(--cu-radius-btn)] px-3 transition-colors hover:bg-[var(--cu-surface-muted)] active:bg-[var(--cu-surface-muted)] focus-visible:bg-[var(--cu-surface-muted)] text-[length:var(--cu-fs-mobile-main)] font-medium tracking-[var(--cu-ls-tight)] text-[color:var(--cu-ink)]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="shrink-0 border-t border-[color:var(--cu-line)] p-[var(--cu-mobile-pad)]">
            {mobileSub ? (
              <button
                type="button"
                onClick={() => setMobileSub(null)}
                className="h-[var(--cu-mobile-btn-h)] w-full rounded-[var(--cu-radius-btn)] bg-[var(--cu-surface-muted)] text-[length:var(--cu-fs-mobile-btn)] font-semibold text-[color:var(--cu-ink)] transition-colors hover:bg-[var(--cu-line)] active:bg-[var(--cu-line)] focus-visible:bg-[var(--cu-line)]"
              >
                Back
              </button>
            ) : (
              <a
                href="#"
                className="flex h-[var(--cu-mobile-btn-h)] w-full items-center justify-center rounded-[var(--cu-radius-btn)] bg-[var(--cu-mobile-login-bg)] text-[length:var(--cu-fs-mobile-btn)] font-semibold text-[color:var(--cu-mobile-login-text)] transition-colors hover:bg-[var(--cu-line)] active:bg-[var(--cu-line)] focus-visible:bg-[var(--cu-line)] hover:text-[color:var(--cu-ink)] active:text-[color:var(--cu-ink)]"
              >
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
