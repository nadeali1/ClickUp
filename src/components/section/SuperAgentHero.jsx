"use client";

import { useEffect, useRef, useState } from "react";
import { TextScramble } from "@/components/motion-primitives/text-scramble";

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export default function SuperAgentHero() {
  const figRef = useRef(null);
  const maskRef = useRef(null);
  const silRef = useRef(null);
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    let raf = 0;
    let current = null; // smoothed dy

    const tick = () => {
      raf = 0;

      const head = headRef.current;
      const fig = figRef.current;
      const mask = maskRef.current;
      if (!head || !fig || !mask) return;

      if (!desktop.matches) {
        current = null;
        mask.style.transform = "";

        setLanded(false);
        return;
      }

      const vh = window.innerHeight;

      const eyeY =
        fig.getBoundingClientRect().top +
        mask.offsetTop +
        mask.offsetHeight / 2;

      const startY =
        head.getBoundingClientRect().bottom + 16 + mask.offsetHeight;

      const pos = Math.min(eyeY, Math.max(startY, vh * 0.5));
      const targetDy = pos - eyeY;

      if (current === null) current = targetDy;
      current += (targetDy - current) * 0.1;
      if (Math.abs(targetDy - current) < 0.1) current = targetDy;

      const range = Math.max(eyeY - startY, 1);
      const t = clamp(-current / range);

      const scale = 1 + 0.5 * t;
      mask.style.transform = `translate3d(-50%, ${current}px, 0) scale(${scale})`;

      setLanded(t < 0.01 && current === targetDy);

      if (current !== targetDy) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktop.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onScroll);

      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sa-section relative flex flex-col items-center"
    >
      <div
        ref={headRef}
        className="sa-head flex flex-col items-center text-center mb-40"
      >
        <h1 className="sa-title">
          A new era of humans, <br className="hidden sm:block" />
          with <br className="block sm:hidden" /> Super Agents
          <sup className="sa-tm">TM</sup>
        </h1>
        <div className="sa-actions flex flex-col items-center sm:flex-row">
          <a href="#" className="sa-btn sa-btn-dark">
            Build your own agent
          </a>
          <a href="#" className="sa-btn sa-btn-light">
            Learn More
          </a>
        </div>
      </div>

      <div className="sa-card relative w-full">
        <div className="sa-card-bg absolute inset-0" />

        <div className="sa-static relative mx-auto lg:hidden">
          <img
            src="/images/agent-mobile.webp"
            alt="Person wearing a Super Agent mask"
            className="block w-full"
          />
          <span className="sa-label sa-label-blur sa-m-delegate">
            Delegate <br /> any task
          </span>
          <span className="sa-label sa-m-memory">
            Infinite <br /> memory
          </span>
        </div>

        <div className="sa-desktop relative hidden lg:block">
          <div ref={figRef} className="relative sa-figure">
            <img
              src="/images/agent-new.webp"
              alt="Person wearing a Super Agent mask"
              className="block w-full"
            />

            {/* <div
              ref={silRef}
              className="sa-silhouette absolute inset-0"
              style={{
                opacity: landed ? 0 : 1,
                transition: "opacity 200ms ease-in",
                transitionDelay: landed ? "ms" : "0ms",
              }}
            /> */}
            <div
              ref={silRef}
              className="sa-silhouette absolute inset-0"
              style={{
                opacity: landed ? 0 : 1,
                transition: "opacity 800ms ease-in-out",
              }}
            />

            <img
              ref={maskRef}
              src="/images/super-agent-mask.webp"
              alt=""
              className="sa-mask absolute "
            />
          </div>

          <div className={`sa-labels ${landed ? "is-on" : ""}`}>
            <span className="sa-label sa-l-works">
              <TextScramble trigger={landed}>Works 24/7</TextScramble>
            </span>
            <span className="sa-label sa-label-small sa-l-tools">
              <TextScramble trigger={landed}>
                500+ tool superpowers
              </TextScramble>
            </span>
            <span className="sa-label sa-label-blur sa-l-super">
              <TextScramble trigger={landed}>Super agent</TextScramble>
            </span>
            <span className="sa-label sa-label-blur sa-l-delegate">
              <TextScramble className="w-[50%]" trigger={landed}>
                Delegate any task
              </TextScramble>
            </span>
            <span className="sa-label sa-l-memory">
              <TextScramble trigger={landed}>Infinite memory</TextScramble>
            </span>

            <div className="sa-cta-rail hidden lg:block">
              <a href="#" className="sa-btn sa-btn-dark sa-cta">
                Build your own agent
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
