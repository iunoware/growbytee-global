"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type LineFadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
};

export default function LineFadeIn({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 0.8,
  stagger = 0.12,
}: LineFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // show the wrapper; the individual lines start hidden below
      gsap.set(ref.current, { autoAlpha: 1 });

      SplitText.create(ref.current, {
        type: "lines",
        autoSplit: true, // re-splits on resize / font load
        onSplit(self) {
          return gsap.from(self.lines, {
            y,
            opacity: 0,
            duration,
            delay,
            stagger,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
          });
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`invisible ${className}`}>
      {children}
    </div>
  );
}
