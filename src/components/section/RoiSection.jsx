const STATS = [
  {
    label: "ROI",
    value: "384%",
    text: "ClickUp delivered 384% ROI over three years, helping organizations unlock significant efficiency gains.",
  },
  {
    label: "Revenue increase",
    value: "$3.9M",
    text: "ClickUp projects drove $3.9M in revenue gains by streamlining work, consolidating tools, and scaling faster.",
  },
  {
    label: "Hours saved",
    value: "92,400",
    text: "Organizations saved 92,400 hours with ClickUp, reducing manual work and recapturing productivity at scale.",
  },
  {
    label: "Payback",
    value: "<6 mo",
    text: "Customers reached payback in under six months, making ClickUp a proven investment with rapid returns.",
  },
];

export default function RoiSection() {
  return (
    <section className="w-full bg-[var(--roi-bg)] font-[family-name:var(--roi-font-body)]">
      <div className="mx-auto w-full max-w-[var(--roi-max-w)] px-[var(--roi-pad-x)] py-[var(--roi-pad-y)] ">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="m-0 font-[family-name:var(--roi-font-display)] font-semibold text-[length:var(--roi-fs-heading)] leading-[var(--roi-lh-heading)] tracking-[var(--roi-ls-heading)] text-[color:var(--roi-heading)]">
              It&apos;s like adding 15 full-time
              <span className="text-[color:var(--roi-heading-muted)]">
                {" "}
                employees
              </span>
            </h2>

            <p className="mt-[8px] mb-0 max-w-[var(--roi-subtitle-max-w)] text-[length:var(--roi-fs-subtitle)] leading-[var(--roi-lh-subtitle)] font-medium tracking-[-0.01em] text-[color:var(--roi-subtitle)]">
              According to third party research ClickUp saves the average
              company over 30k hours per year,
              <br />
              and delivers industry-leading ROI.
            </p>
          </div>

          <a
            href="#get-started"
            className="mt-[var(--roi-gap-btn)] lg:mt-0 lg:mb-[2px] inline-flex shrink-0 items-center justify-center w-full lg:w-auto md:w-auto h-[var(--roi-btn-h)] px-[var(--roi-btn-px)] rounded-[var(--roi-btn-radius)] bg-[var(--roi-btn-bg)] text-[color:var(--roi-btn-text)] text-[length:var(--roi-fs-btn)] font-[family-name:var(--roi-font-display)] font-semibold tracking-[-0.03em] no-underline"
          >
            Get started
          </a>
        </div>

        {/* ---------- stats ---------- */}
        <div className="mt-[var(--roi-gap-head)] md:mt-[40px] lg:mt-[48px] grid grid-cols-1 lg:grid-cols-4 lg:border-t lg:border-[color:var(--roi-divider)]">
          {STATS.map((s, i) => (
            <article
              key={s.label}
              className={[
                "relative flex flex-col lg:justify-between",
                "py-[var(--roi-card-pad)] px-[var(--roi-card-pad)] lg:py-[28px]",
                "min-h-[var(--roi-card-min-h)]",
                "border-b border-[color:var(--roi-divider)] lg:border-b-0",
                i === 0
                  ? "lg:pl-0"
                  : "lg:border-l lg:border-[color:var(--roi-divider)] roi-notch",
                i === 0 ? "lg:pr-[20px]" : "",
              ].join(" ")}
            >
              <div>
                <p className="m-0 uppercase font-[family-name:var(--roi-font-mono)] text-[length:var(--roi-fs-label)] tracking-[0.02em] text-[color:var(--roi-label)]">
                  {s.label}
                </p>
                <p className="m-0 mt-[var(--roi-gap-value)] font-[family-name:var(--roi-font-display)] font-medium text-[length:var(--roi-fs-value)] leading-[1.1] tracking-[-0.03em] text-[color:var(--roi-value)]">
                  {s.value}
                </p>
              </div>

              <p className="m-0 mt-[var(--roi-gap-desc)] lg:mt-0 text-[length:var(--roi-fs-desc)] leading-[var(--roi-lh-desc)] text-[color:var(--roi-desc)]">
                {s.text}
              </p>
            </article>
          ))}
        </div>

        {/* ---------- footnote ---------- */}
        <p className="m-0 mt-[28px] lg:mt-[36px] text-[length:var(--roi-fs-note)] leading-[18px] text-[color:var(--roi-desc)]">
          *from 2025 The Total Economic Impact™ of ClickUp report from Forrester
          Group.{" "}
          <a
            href="#report"
            className="text-[color:var(--roi-link)] underline underline-offset-2"
          >
            Get the report
          </a>
        </p>
      </div>
    </section>
  );
}
