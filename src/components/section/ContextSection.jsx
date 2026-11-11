"use client";

import { useEffect, useRef, useState } from "react";
// import './globally.css'

/**
 * ContextSection
 * - Laptop / desktop (>= 1024px): "Play Video" button replaces the cursor and
 *   follows the mouse while it is over the section.
 * - Tablet / mobile (< 1024px): the image scrolls left to right, and a
 *   static "Play Video" button sits below them.
 *
 * All colors and pixel values come from global.css tokens.
 */

function PlayIcon() {
  return (
    <span className="grid size-(--cuv-btn-icon) shrink-0 place-items-center rounded-full bg-cuv-btn-icon-bg">
      <svg
        viewBox="0 0 24 24"
        className="ml-[2px] size-[14px] fill-cuv-btn-icon-fg"
      >
        <path d="M6 4l14 8-14 8V4z" />
      </svg>
    </span>
  );
}

export default function ContextSection({
  imageSrc = "/images/context-sprawl-placeholder.webp",
  videoSrc = "",
}) {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const scrollRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (el && window.innerWidth < 1024) {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }
  }, []);

  useEffect(() => {
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.22;
      current.current.y += (target.current.y - current.current.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // close modal with Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const show = (visible) => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = visible ? "1" : "0";
      cursorRef.current.dataset.on = visible ? "1" : "0";
    }
  };

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    if (cursorRef.current?.dataset.on !== "1") {
      current.current = { x, y };
      show(true);
    }
    target.current = { x, y };
  };

  const openVideo = () => setOpen(true);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cuv-surface px-(--cuv-section-px) py-(--cuv-section-py) font-cuv-body"
    >
      {/* heading */}
      <div className="mx-auto w-full max-w-[1210px] px-5 text-center md:px-8">
        <h2 className="font-cuv-display text-cuv-h1 font-semibold">
          <span className="cuv-headline-line">
            60% of work is lost in context
          </span>
          <br className="hidden md:block" />{" "}
          <span className="cuv-headline-line">– and AI is lost without it</span>
        </h2>

        <p className="mx-auto mt-(--cuv-h1-mb) mb-(--cuv-sub-mb) max-w-(--cuv-sub-mw) text-cuv-sub font-normal text-cuv-subtitle md:max-w-none">
          Work Sprawl is killing context and destroying productivity.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="cuv-scroll w-full overflow-x-auto overflow-y-hidden lg:overflow-visible"
      >
        <div
          onPointerMove={onMove}
          onPointerLeave={() => show(false)}
          onClick={(e) => {
            if (
              window.innerWidth >= 1024 &&
              e.target.closest("[data-play-skip]") === null
            ) {
              openVideo();
            }
          }}
          className="cuv-section-hover relative mx-auto w-(--cuv-media-w) lg:context-mask-fade-x "
        >
          <img
            src={imageSrc}
            alt="Work sprawl: context switching, context missing and context stitching"
            draggable={false}
            className="block h-auto w-full select-none"
          />
        </div>
      </div>

      <div className="mt-(--cuv-btn-mt) flex justify-center lg:hidden">
        <button
          type="button"
          data-play-skip
          onClick={openVideo}
          className="h-(--cuv-btn-h) rounded-(--cuv-btn-radius) bg-cuv-btn-bg px-(--cuv-btn-px) text-cuv-btn font-semibold text-cuv-btn-text"
        >
          Play Video
        </button>
      </div>

      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{ opacity: 0 }}
        className="pointer-events-none absolute top-0 left-0 z-20 hidden h-(--cuv-btn-h) items-center gap-(--cuv-btn-gap) rounded-(--cuv-btn-radius) bg-cuv-btn-bg py-0 pr-(--cuv-btn-px) pl-3 text-cuv-btn font-semibold whitespace-nowrap text-cuv-btn-text transition-opacity duration-200 will-change-transform lg:flex"
      >
        <PlayIcon />
        Play Video
      </div>

      {open && (
        <div
          data-play-skip
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="fixed inset-0 z-50 grid cursor-auto place-items-center bg-cuv-modal-backdrop p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="aspect-video w-full max-w-[960px] overflow-hidden rounded-(--cuv-btn-radius) bg-cuv-btn-bg"
          >
            {videoSrc ? (
              <video src={videoSrc} controls autoPlay className="size-full" />
            ) : (
              <div className="grid size-full place-items-center text-cuv-btn-text">
                Add your video via the <code className="mx-1">videoSrc</code>{" "}
                prop
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
