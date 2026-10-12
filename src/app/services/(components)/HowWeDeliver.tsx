"use client";

import { useId, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import FadeIn from "@/src/components/molecule/FadeIn";
import GradientText from "@/src/components/ui/GradientText";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

type Step = {
  number: string;
  title: string;
  body: string;
  /** which side the big number sits on (desktop zigzag) */
  side: "left" | "right";
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discover",
    body: "We understand your business, audience, market, and goals to identify the right opportunities and build a strategy tailored to your brand.",
    side: "right",
  },
  {
    number: "02",
    title: "Strategise",
    body: "Turn insights into a clear, focused strategy designed around your business goals, audience, and growth opportunities.",
    side: "left",
  },
  {
    number: "03",
    title: "Create",
    body: "Create engaging content, campaigns, and digital experiences that capture attention and connect with your audience.",
    side: "right",
  },
  {
    number: "04",
    title: "Launch",
    body: "Bring the strategy to life across the right platforms, reaching your audience at the right time with the right message.",
    side: "left",
  },
  {
    number: "05",
    title: "Optimise",
    body: "Track performance, identify what works, continuously improve campaigns, and scale the results that matter.",
    side: "right",
  },
];

/*  desktop layout
   Everything on desktop lives in one 1000 x 2600 coordinate space.
   The SVG, the numbers and the text blocks all scale together, so the
   curve always lines up with the steps. Height ≈ 2.6 × width, which at
   max-w-5xl is roughly 2.9 viewport heights. */

const VB_W = 1000;
const VB_H = 2600;

// y-centre of each number in viewBox units
const ROW_Y = [170, 720, 1270, 1820, 2370];

// the curve: S-curves joined by short straight runs that pass behind each
// number (so the line enters at the top and leaves from the bottom of it).
// 01 starts at the top of its number and drops straight through it, the same
// way 03 does, so the line never crosses the text next to it.
const CURVE = `
  M700 82
  L700 258
  C700 468 180 408 180 630
  L180 810
  C180 1020 700 960 700 1180
  L700 1360
  C700 1570 180 1510 180 1730
  L180 1910
  C180 2120 700 2060 700 2280
`;

// number centre-x / text left-x, as % of the width
const NUMBER_X = { right: 78, left: 23 };
const TEXT_X = { right: 12, left: 42 };

const GRAY = "#d1d5db";
const GRADIENT_CSS =
  "linear-gradient(to bottom, var(--color-gradient-from, #5851db), var(--color-gradient-via, #FD1D1D), var(--color-gradient-to, #FCAF45))";

// dashed look for the mobile rail (mask turns a solid fill into dashes)
const dashMask = "repeating-linear-gradient(to bottom, #000 0 7px, transparent 7px 15px)";

/*  component */

export default function HowWeDeliver() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<SVGPathElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileFillRef = useRef<HTMLDivElement>(null);

  // ids must be CSS-safe for url(#...)
  const uid = useId().replace(/:/g, "");
  const gradientId = `deliver-gradient-${uid}`;
  const maskId = `deliver-mask-${uid}`;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { isDesktop, reduce } = (ctx.conditions ?? {}) as Record<string, boolean>;

          const target = isDesktop ? revealRef.current : mobileFillRef.current;
          const trigger = isDesktop ? desktopRef.current : mobileRef.current;
          if (!target || !trigger) return;

          const hidden = isDesktop
            ? { drawSVG: "0% 0%" }
            : { clipPath: "inset(0 0 100% 0)" };
          const shown = isDesktop
            ? { drawSVG: "0% 100%" }
            : { clipPath: "inset(0 0 0% 0)" };

          // reduced motion: just show the finished gradient line
          if (reduce) {
            gsap.set(target, shown);
            return;
          }

          gsap.fromTo(target, hidden, {
            ...shown,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top 65%", // line starts filling as the section enters
              end: "bottom 60%", // and finishes just before it leaves
              scrub: 0.6,
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="px-6 py-20 md:py-28 bg-bg">
      <div className="mx-auto max-w-5xl">
        {/* heading */}
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            How We <GradientText>Deliver It</GradientText>
          </h2>
          <p className="mt-2 max-w-md text-sm italic text-gray-800 capitalize">
            From strategy to execution, we turn your goals into campaigns that connect,
            convert, and grow.
          </p>
        </FadeIn>

        {/* desktop */}
        <div className="hidden @container md:block">
          <div
            ref={desktopRef}
            className="relative mt-10 w-full"
            style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
          >
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id={gradientId}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={VB_H}
                >
                  <stop
                    offset="0"
                    style={{ stopColor: "var(--color-gradient-from, #5851db)" }}
                  />
                  <stop
                    offset="0.5"
                    style={{ stopColor: "var(--color-gradient-via, #FD1D1D)" }}
                  />
                  <stop
                    offset="1"
                    style={{ stopColor: "var(--color-gradient-to, #FCAF45)" }}
                  />
                </linearGradient>

                {/* solid path that gets "drawn" on scroll; it only decides
                    which part of the dashed gradient line is visible */}
                <mask
                  id={maskId}
                  maskUnits="userSpaceOnUse"
                  x="-100"
                  y="0"
                  width={VB_W + 200}
                  height={VB_H}
                >
                  <path ref={revealRef} d={CURVE} stroke="#fff" strokeWidth="14" />
                </mask>
              </defs>

              {/* 1. gray dashed line (always visible) */}
              <path d={CURVE} stroke={GRAY} strokeWidth="2.5" strokeDasharray="7 9" />

              {/* 2. gradient dashed line, revealed by the mask */}
              <path
                d={CURVE}
                stroke={`url(#${gradientId})`}
                strokeWidth="2.5"
                strokeDasharray="7 9"
                mask={`url(#${maskId})`}
              />
            </svg>

            <ol>
              {STEPS.map((step, i) => (
                <li
                  key={step.number}
                  className="absolute inset-x-0 h-0"
                  style={{ top: `${(ROW_Y[i] / VB_H) * 100}%` }}
                >
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 bg-bg"
                    style={{ left: `${NUMBER_X[step.side]}%` }}
                  >
                    <GradientText className="block text-[24cqw] leading-none font-extrabold">
                      {step.number}
                    </GradientText>
                  </div>

                  <div
                    className="absolute w-[34%] -translate-y-1/2"
                    style={{ left: `${TEXT_X[step.side]}%` }}
                  >
                    <FadeIn>
                      <h3 className="text-[max(2.275rem,2.4cqw)] font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[max(0.8125rem,1.35cqw)] italic leading-snug text-gray-800 capitalize">
                        {step.body}
                      </p>
                    </FadeIn>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* mobile */}
        <div ref={mobileRef} className="relative mt-10 md:hidden">
          {/* vertical rail: gray dashes + gradient dashes clipped on scroll */}
          <div aria-hidden="true" className="absolute top-3 bottom-3 left-2.5 w-0.5">
            <div
              className="absolute inset-0"
              style={{
                background: GRAY,
                maskImage: dashMask,
                WebkitMaskImage: dashMask,
              }}
            />
            <div
              ref={mobileFillRef}
              className="absolute inset-0"
              style={{
                background: GRADIENT_CSS,
                maskImage: dashMask,
                WebkitMaskImage: dashMask,
                clipPath: "inset(0 0 100% 0)",
              }}
            />
          </div>

          <ol>
            {STEPS.map((step) => (
              <li key={step.number} className="relative pb-14 pl-12 last:pb-0">
                <FadeIn>
                  <GradientText className="block text-7xl leading-none font-extrabold">
                    {step.number}
                  </GradientText>
                  <h3 className="mt-3 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm italic leading-snug text-gray-800 capitalize">
                    {step.body}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
