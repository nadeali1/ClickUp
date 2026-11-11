"use client";
import { useState, useEffect, useRef } from "react";

const BADGES_SRC = "/images/awards-badges.svg";

const TESTIMONIALS = [
  {
    quote: '"ClickUp is serving us so we can serve our pet guardians."',
    name: "Samantha Dengate",
    role: "Sr. Project Manager",
    video: "/videos/vid1.mp4",
    poster: "/images/loved/img1.webp",
    logo: "/images/loved/diggs.webp",
    logoAlt: "Diggs",
  },
  {
    quote: '"It\'s a low-code platform that helps us automate processes."',
    name: "Joerg Klueckmann",
    role: "VP of Marketing",
    video: "/videos/vid2.mp4",
    poster: "/images/loved/img1.webp",
    logo: "/images/loved/finastra.webp",
    logoAlt: "Finastra",
  },
  {
    quote:
      '"ClickUp is the best thing I\'ve rolled out in the past two years."',
    name: "Lauren Makielski",
    role: "Chief of Staff",
    video: "/videos/vid3.mp4",
    poster: "/images/loved/img1.webp",
    logo: "/images/loved/hawke.webp",
    logoAlt: "Hawke Media",
  },
];

function useIsDesktop() {
  const query = "(min-width: 1023px)";

  const [match, setMatch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);

    const onChange = (e) => setMatch(e.matches);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatch(mq.matches);

    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  return match;
}

const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="ml-[3px] w-[length:var(--loved-play-icon-size)] h-[length:var(--loved-play-icon-size)]"
  >
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
  </svg>
);

const PauseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="w-[length:var(--loved-play-icon-size)] h-[length:var(--loved-play-icon-size)] "
  >
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

export default function LovedSection() {
  const isDesktop = useIsDesktop();
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!isDesktop || !sectionRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, [isDesktop]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && inView && !paused) {
        v.play().catch(() => {});
      } else {
        v.pause();
        if (i !== active) v.currentTime = 0;
      }
    });
  }, [active, paused, inView, isDesktop]);

  if (!isDesktop) return null;

  const handleSelect = (i) => {
    if (i === active) {
      setPaused((p) => !p);
    } else {
      setActive(i);
      setPaused(false);
    }
  };

  const handleEnded = (i) => {
    if (i === active) setActive((i + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      ref={sectionRef}
      className=" hidden lg:block w-full bg-[var(--loved-bg)] font-[family-name:var(--loved-font-body)]"
    >
      <div className="mx-auto box-content w-full max-w-[var(--loved-max-w)] px-[var(--loved-pad-x)] py-[var(--loved-pad-y)]">
        <div className="flex items-center justify-between mb-[var(--loved-gap-head)]">
          <h2 className="m-0 font-[family-name:var(--loved-font-display)] font-medium text-[length:var(--loved-fs-heading)] leading-[var(--loved-lh-heading)] tracking-[var(--loved-ls-heading)] text-[color:var(--loved-heading)]">
            Loved by 5+ million teams,
            <br />
            backed by 100+ awards
          </h2>

          <img
            src={BADGES_SRC}
            alt="G2 Highest User Adoption, Inc. Power Partner 2026, G2 Best Est. ROI"
            className="block w-[var(--loved-badge-w)] h-auto shrink-0"
          />
        </div>

        <div className="grid grid-cols-3 gap-[var(--loved-gap-cards)]">
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === active;
            const isPlaying = isActive && !paused && inView;

            return (
              <article
                key={t.name}
                className="group relative isolate overflow-hidden aspect-[var(--loved-card-ratio)] rounded-[var(--loved-card-radius)] bg-[var(--loved-card-bg)] "
              >
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={t.video}
                  poster={t.poster}
                  muted
                  playsInline
                  preload="metadata"
                  onEnded={() => handleEnded(i)}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className=" pointer-events-none absolute inset-0 bg-[image:var(--loved-overlay)] " />

                <button
                  type="button"
                  onClick={() => handleSelect(i)}
                  aria-label={
                    isPlaying
                      ? `Pause ${t.name}'s story`
                      : `Play ${t.name}'s story`
                  }
                  className=" absolute left-50 top-100 inset-0 z-10 flex cursor-pointer border-0 bg-transparent p-0 outline-none "
                >
                  <span className="flex items-center justify-center rounded-2xl w-[var(--loved-play-size-w)] h-[var(--loved-play-size)] bg-[var(--loved-play-bg)] text-[color:var(--loved-play-icon)] opacity-0 scale-90 transition-[opacity,transform] duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 ">
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </span>
                </button>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-[var(--loved-card-pad)] pb-[var(--loved-card-pad-bottom)] text-[color:var(--loved-text)] group-hover:hidden">
                  <p className="m-0 font-[family-name:var(--loved-font-display)] font-semibold tracking-[-0.02em] text-[length:var(--loved-fs-quote)] leading-[var(--loved-lh-quote)]">
                    {t.quote}
                  </p>

                  <div className="mt-[var(--loved-quote-gap)] flex items-end justify-between gap-[12px]">
                    <div className="font-[family-name:var(--loved-font-display)] text-[length:var(--loved-fs-person)] leading-[var(--loved-lh-person)] tracking-[-0.03em]">
                      <p className="m-0">{t.name}</p>
                      <p className="m-0">{t.role}</p>
                    </div>
                    <img
                      src={t.logo}
                      alt={t.logoAlt}
                      className="block h-[var(--loved-logo-h)] w-auto max-w-[var(--loved-logo-max-w)] object-contain object-right"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
