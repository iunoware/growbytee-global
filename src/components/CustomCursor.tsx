"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Elements that make the big ball grow on hover
const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

export default function CustomCursor() {
  const bigRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // No custom cursor on touch-only devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const big = bigRef.current!;
    const small = smallRef.current!;

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set([big, small], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const bigX = gsap.quickTo(big, "x", { duration: 0.4, ease: "power3.out" });
    const bigY = gsap.quickTo(big, "y", { duration: 0.4, ease: "power3.out" });
    const smallX = gsap.quickTo(small, "x", { duration: 0.1, ease: "power3.out" });
    const smallY = gsap.quickTo(small, "y", { duration: 0.1, ease: "power3.out" });

    let shown = false;

    const hide = () => {
      shown = false;
      gsap.to([big, small], { autoAlpha: 0, duration: 0.2 });
      gsap.set(big, { scale: 1 });
    };

    // Pointer events tell us the input type; touch taps also fire emulated
    // mouse events, so we must NOT rely on mousemove/mouseover.
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (!shown) {
        gsap.set([big, small], { x: e.clientX, y: e.clientY });
        gsap.to([big, small], { autoAlpha: 1, duration: 0.2 });
        shown = true;
      }
      bigX(e.clientX);
      bigY(e.clientY);
      smallX(e.clientX);
      smallY(e.clientY);
    };

    // Any touch hides the cursor
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") hide();
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if ((e.target as Element).closest(HOVER_SELECTOR)) {
        gsap.to(big, { scale: 4, duration: 0.3 });
      }
    };
    const onOut = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if ((e.target as Element).closest(HOVER_SELECTOR)) {
        gsap.to(big, { scale: 1, duration: 0.3 });
      }
    };

    const onLeaveWindow = () => gsap.to([big, small], { autoAlpha: 0, duration: 0.2 });
    const onEnterWindow = () =>
      shown && gsap.to([big, small], { autoAlpha: 1, duration: 0.2 });

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
    };
  });

  return (
    <>
      <style>{`.has-custom-cursor, .has-custom-cursor * { cursor: none !important; }`}</style>

      <div aria-hidden className="pointer-events-none fixed top-0 left-0 z-999999">
        {/* big circle */}
        <div
          ref={bigRef}
          className="invisible fixed top-0 left-0 size-7.5 rounded-full bg-transparent border-2 border-primary/90"
        />

        {/* dot */}
        <div
          ref={smallRef}
          className="invisible fixed top-0 left-0 size-2 rounded-full bg-primary"
        />
      </div>
    </>
  );
}
