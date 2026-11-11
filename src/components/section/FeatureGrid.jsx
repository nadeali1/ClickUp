import React from "react";

const ICON_DIR = "/icons/features";
const IMAGE_DIR = "images/";

const TILES = [
  // row 1
  ["dependencies", "Dependencies"],
  ["connected-search", "Connected Search"],
  ["tasks", "Tasks"],
  ["mind-maps", "Mind Maps"],
  ["wikis", "Wikis"],
  ["ai-notetaker", "AI Notetaker"],
  ["calendar", "Calendar"],
  ["proofing", "Proofing"],
  ["portfolios", "Portfolios"],
  ["templates", "Templates"],
  // row 2
  ["reminders", "Reminders"],
  ["reporting", "Reporting"],
  ["goals", "Goals"],
  ["sprints", "Sprints"],
  ["custom-status", "Custom Status"],
  ["ai-writer", "AI Writer"],
  // row 3
  ["api-calls", "API Calls"],
  ["milestones", "Milestones"],
  ["forms", "Forms"],
  ["automations", "Automations"],
  ["custom-fields", "Custom Fields"],
  ["timesheets", "Timesheets"],
  // row 4
  ["ai-qa", "AI Q&A"],
  ["priorities", "Priorities"],
  ["time-estimates", "Time Estimates"],
  ["clips", "Clips"],
  ["everything-view", "Everything view"],
  ["single-sign-on", "Single Sign-on"],
  // row 5
  ["emails", "Emails"],
  ["dashboards", "Dashboards"],
  ["time-tracking", "Time Tracking"],
  ["kanban-boards", "Kanban Boards"],
  ["integrations", "Integrations"],
  ["guests", "Guests"],
  // row 6
  ["tags", "Tags"],
  ["support", "24/7 Support"],
  ["checklists", "Checklists"],
  ["scheduling", "Scheduling"],
  ["spreadsheets", "Spreadsheets"],
  ["whiteboards", "Whiteboards"],
  ["gantt-charts", "Gantt Charts"],
  ["roadmaps", "Roadmaps"],
  ["inbox", "Inbox"],
  ["teams", "Teams"],
];

const CARDS = [
  { key: "projects", label: "Projects", tint: "from-card-projects" },
  { key: "docs", label: "Docs", tint: "from-card-docs" },
  { key: "brain", label: "Brain", tint: "from-card-brain" },
  { key: "chat", label: "Chat", tint: "from-card-chat" },
];

/* ------------------------------ assets ------------------------------ */

function TileIcon({ name, className = "" }) {
  const url = `url(${ICON_DIR}/${name}.svg)`;
  return (
    <span
      aria-hidden
      className={`block shrink-0 bg-current ${className}`}
      style={{
        WebkitMask: `${url} center / contain no-repeat`,
        mask: `${url} center / contain no-repeat`,
      }}
    />
  );
}

function CardIcon({ name, className = "" }) {
  return (
    <img
      src={`${ICON_DIR}/${name}.svg`}
      alt=""
      className={`shrink-0 ${className}`}
    />
  );
}

/** Card PNG */
function CardImage({ name }) {
  return (
    <img
      src={`${IMAGE_DIR}/${name}.avif`}
      alt=""
      className="size-full object-contain"
    />
  );
}

function Tile({ icon, label }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-1.5 border-l border-t border-line px-1 text-center text-tile font-normal text-muted transition-colors hover:z-10 hover:border hover:border-ink hover:bg-surface hover:text-ink lg:gap-2 lg:text-tile-lg">
      <TileIcon name={icon} className="size-icon lg:size-icon-lg" />
      <span>{label}</span>
    </div>
  );
}

function Empty({ col, row }) {
  return (
    <div
      aria-hidden
      className="border-l border-t border-line"
      style={{ gridColumnStart: col, gridRowStart: row }}
    />
  );
}

function Card({ item }) {
  return (
    <div
      className={`flex flex-col overflow-hidden border-l border-t border-line bg-linear-to-b ${item.tint} to-surface transition-shadow hover:z-10 hover:shadow-card-hover`}
    >
      <div className="min-h-0 flex-1 px-3 pt-4 lg:px-8 lg:pt-10">
        <CardImage name={item.key} />
      </div>
      <div className="flex items-center justify-center gap-1.5 pb-5 text-card font-semibold tracking-tight text-ink lg:gap-2.5 lg:pb-7 lg:text-card-lg">
        <CardIcon
          name={`card-${item.key}`}
          className="size-card-icon lg:size-card-icon-lg"
        />
        <span>{item.label}</span>
      </div>
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="bg-surface px-3 pb-16 pt-16 font-sans md:px-6">
      {/* heading */}
      <header className="text-center">
        <h2 className="mx-auto max-w-title-mobile text-feature font-semibold tracking-hero text-ink md:max-w-none md:text-feature-md">
          All apps, AI Agents,
          <br className="hidden md:block" /> and humans in{" "}
          <span className="text-ink-soft">ClickUp</span>
        </h2>
        <p className="mx-auto mt-3 max-w-sub-mobile text-sub text-muted md:max-w-none md:text-sub-md">
          100+ products to replace fragmented software &amp; maximize human
          productivity.
        </p>
      </header>

      <div className="mask-fade-x mx-auto mt-4 max-w-grid-max overflow-hidden">
        <div className="flex justify-center cursor-pointer">
          <div className="mask-fade-y grid shrink-0 grid-cols-[repeat(10,var(--cw))] grid-rows-[calc(var(--ch)/2)_repeat(6,var(--ch))_calc(var(--ch)/2)] border-b border-r border-line [--ch:var(--spacing-cell-h)] [--cw:var(--spacing-cell-w)] lg:[--ch:var(--spacing-cell-h-lg)] lg:[--cw:var(--spacing-cell-w-lg)]">
            {Array.from({ length: 10 }, (_, i) => (
              <Empty key={`t${i}`} col={i + 1} row={1} />
            ))}
            {Array.from({ length: 10 }, (_, i) => (
              <Empty key={`b${i}`} col={i + 1} row={8} />
            ))}

            <div className="relative col-span-4 col-start-4 row-span-4 row-start-3 grid grid-cols-2 grid-rows-2">
              {CARDS.map((c) => (
                <Card key={c.key} item={c} />
              ))}
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 bg-sparkle [clip-path:polygon(50%_0,60%_40%,100%_50%,60%_60%,50%_100%,40%_60%,0_50%,40%_40%)] lg:size-4"
              />
            </div>

            {TILES.map(([icon, label]) => (
              <Tile key={icon} icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
