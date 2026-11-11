const CERTS = [
  {
    label: "SOC 2 Type II",
    src: "/images/enterp/cert-soc2-badge.svg",
    alt: "AICPA SOC 2",
  },
  {
    label: "ISO 27001",
    src: "/images/enterp/schellman_iso27001.png",
    alt: "ISO 27001 certified",
  },
  { label: "GDPR", src: "/images/enterp/cert-gdpr-badge.svg", alt: "GDPR" },
  { label: "HIPAA", src: "/images/enterp/cert-hipaa-badge.svg", alt: "HIPAA" },
];

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
    className="shrink-0 w-[var(--ent-globe-size)] h-[var(--ent-globe-size)] text-[color:var(--ent-icon)]"
  >
    <circle cx="12" cy="12" r="9.25" />
    <ellipse cx="12" cy="12" rx="4" ry="9.25" />
    <path d="M2.75 12h18.5M4.2 7h15.6M4.2 17h15.6" />
  </svg>
);

const Sparkle = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="md:hidden pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-[var(--ent-sparkle-size)] h-[var(--ent-sparkle-size)] fill-[var(--ent-sparkle)]"
  >
    <path d="M12 0c.7 6.2 5.8 11.3 12 12-6.2.7-11.3 5.8-12 12-.7-6.2-5.8-11.3-12-12C6.2 11.3 11.3 6.2 12 0Z" />
  </svg>
);

export default function EnterpriseSection() {
  return (
    <section className="w-full bg-[var(--ent-bg)] font-[family-name:var(--ent-font-body)]">
      <div className="mx-auto box-content w-full max-w-[var(--ent-max-w)] py-[var(--ent-pad-y)]">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="flex w-full flex-col items-center text-center lg:min-w-0 lg:flex-1 lg:items-stretch lg:text-left">
            <div className="lg:flex lg:h-[var(--ent-row1-h)] lg:flex-col lg:justify-end lg:pb-[var(--ent-head-pb)]">
              <h2 className="m-0 font-[family-name:var(--ent-font-display)] font-semibold text-[length:var(--ent-fs-heading)] leading-[var(--ent-lh-heading)] tracking-[var(--ent-ls-heading)] text-[color:var(--ent-heading)]">
                <span className="block">Enterprise-grade</span>
                <span className="block text-[color:var(--ent-muted)]">
                  everything
                </span>
              </h2>

              <p className="m-0 mt-[var(--ent-gap-sub)] text-[length:var(--ent-fs-subtitle)] leading-[var(--ent-lh-subtitle)] tracking-[-0.01em] text-[color:var(--ent-subtitle)]">
                Out of the box security &amp; AI that&apos;s even more private
                than ChatGPT
                <sup className="ml-[1px] align-super text-[length:var(--ent-fs-sup)] leading-none">
                  1
                </sup>
              </p>
            </div>

            <div className="mt-[var(--ent-gap-support)] flex items-center gap-[var(--ent-support-gap)] font-[family-name:var(--ent-font-mono)] text-[length:var(--ent-fs-mono)] uppercase tracking-[var(--ent-ls-mono)] text-[color:var(--ent-label)] lg:mt-0 lg:w-full lg:border-t lg:border-[color:var(--ent-line)] lg:pt-[var(--ent-support-pt)]">
              <GlobeIcon />
              <span>24/7 Support</span>
            </div>

            <div className="mt-[var(--ent-gap-line)] h-px w-full bg-[image:var(--ent-hline-fade)] md:hidden" />
          </div>

          <ul className="ent-grid relative m-0 mt-[var(--ent-gap-grid)] grid w-full list-none grid-cols-2 p-0 md:grid-cols-4 lg:mt-0 lg:w-auto lg:shrink-0 lg:grid-cols-[repeat(4,var(--ent-col-w))]">
            <Sparkle />

            {CERTS.map((c) => (
              <li
                key={c.label}
                className="ent-card flex min-h-[var(--ent-card-min-h)] flex-col items-center justify-center gap-[var(--ent-card-gap)] lg:justify-start lg:gap-0"
              >
                <div className="flex w-full items-center justify-center lg:h-[var(--ent-row1-h)] lg:px-[var(--ent-cell-px)]">
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="block h-auto w-auto max-h-[var(--ent-img-h)] max-w-[var(--ent-img-max-w)] object-contain lg:max-w-full"
                  />
                </div>

                <span className="block text-center font-[family-name:var(--ent-font-mono)] text-[length:var(--ent-fs-mono)] uppercase tracking-[var(--ent-ls-mono)] text-[color:var(--ent-label)] lg:w-full lg:border-t lg:border-[color:var(--ent-line)] lg:pt-[var(--ent-label-pt)] min-[1120px]:whitespace-nowrap">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
