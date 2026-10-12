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
    // No custom cursor on touch devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const big = bigRef.current!;
    const small = smallRef.current!;

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set([big, small], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    // quickTo is the performant replacement for TweenMax.to on every mousemove
    const bigX = gsap.quickTo(big, "x", { duration: 0.4, ease: "power3.out" });
    const bigY = gsap.quickTo(big, "y", { duration: 0.4, ease: "power3.out" });
    const smallX = gsap.quickTo(small, "x", { duration: 0.1, ease: "power3.out" });
    const smallY = gsap.quickTo(small, "y", { duration: 0.1, ease: "power3.out" });

    let shown = false;

    const onMove = (e: MouseEvent) => {
      if (!shown) {
        // jump to the first position, then reveal
        gsap.set([big, small], { x: e.clientX, y: e.clientY });
        gsap.to([big, small], { autoAlpha: 1, duration: 0.2 });
        shown = true;
      }
      bigX(e.clientX);
      bigY(e.clientY);
      smallX(e.clientX);
      smallY(e.clientY);
    };

    // Event delegation so it also works for elements rendered later
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVER_SELECTOR)) {
        gsap.to(big, { scale: 4, duration: 0.3 });
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVER_SELECTOR)) {
        gsap.to(big, { scale: 1, duration: 0.3 });
      }
    };

    const onLeaveWindow = () => gsap.to([big, small], { autoAlpha: 0, duration: 0.2 });
    const onEnterWindow = () =>
      shown && gsap.to([big, small], { autoAlpha: 1, duration: 0.2 });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
    };
  });

  return (
    <>
      <style>{`.has-custom-cursor, .has-custom-cursor * { cursor: none !important; }`}</style>

      <div aria-hidden className="pointer-events-none fixed top-0 left-0 z-1000">
        {/* big circle */}
        <div
          ref={bigRef}
          className="fixed top-0 left-0 size-7.5 rounded-full bg-transparent border-2 border-primary/90"
          // className="fixed top-0 left-0 size-7.5 rounded-full bg-[#af3787]"
        />

        {/* dot */}
        <div
          ref={smallRef}
          className="fixed top-0 left-0 size-2 rounded-full bg-primary"
        />
      </div>
    </>
  );
}

// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// // Elements that make the ring grow on hover
// const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

// export default function CustomCursor() {
//   const bigRef = useRef<HTMLDivElement>(null);
//   const smallRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // No custom cursor on touch devices
//     if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

//     const big = bigRef.current!;
//     const small = smallRef.current!;

//     document.documentElement.classList.add("has-custom-cursor");

//     gsap.set([big, small], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

//     const bigX = gsap.quickTo(big, "x", { duration: 0.4, ease: "power3.out" });
//     const bigY = gsap.quickTo(big, "y", { duration: 0.4, ease: "power3.out" });
//     const smallX = gsap.quickTo(small, "x", { duration: 0.1, ease: "power3.out" });
//     const smallY = gsap.quickTo(small, "y", { duration: 0.1, ease: "power3.out" });

//     let shown = false;

//     const onMove = (e: MouseEvent) => {
//       if (!shown) {
//         gsap.set([big, small], { x: e.clientX, y: e.clientY });
//         gsap.to([big, small], { autoAlpha: 1, duration: 0.2 });
//         shown = true;
//       }
//       bigX(e.clientX);
//       bigY(e.clientY);
//       smallX(e.clientX);
//       smallY(e.clientY);
//     };

//     const onOver = (e: MouseEvent) => {
//       if ((e.target as Element).closest(HOVER_SELECTOR)) {
//         gsap.to(big, { scale: 3.5, duration: 0.3 });
//       }
//     };
//     const onOut = (e: MouseEvent) => {
//       if ((e.target as Element).closest(HOVER_SELECTOR)) {
//         gsap.to(big, { scale: 1, duration: 0.3 });
//       }
//     };

//     const onLeaveWindow = () => gsap.to([big, small], { autoAlpha: 0, duration: 0.2 });
//     const onEnterWindow = () =>
//       shown && gsap.to([big, small], { autoAlpha: 1, duration: 0.2 });

//     window.addEventListener("mousemove", onMove);
//     document.addEventListener("mouseover", onOver);
//     document.addEventListener("mouseout", onOut);
//     document.documentElement.addEventListener("mouseleave", onLeaveWindow);
//     document.documentElement.addEventListener("mouseenter", onEnterWindow);

//     return () => {
//       document.documentElement.classList.remove("has-custom-cursor");
//       window.removeEventListener("mousemove", onMove);
//       document.removeEventListener("mouseover", onOver);
//       document.removeEventListener("mouseout", onOut);
//       document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
//       document.documentElement.removeEventListener("mouseenter", onEnterWindow);
//     };
//   });

//   return (
//     <>
//       <style>{`.has-custom-cursor, .has-custom-cursor * { cursor: none !important; }`}</style>

//       <div aria-hidden className="pointer-events-none fixed top-0 left-0 z-1000">
//         {/* gradient ring, with a soft white halo so it stays visible over the gradient buttons */}
//         <div
//           ref={bigRef}
//           className="fixed top-0 left-0 size-8 rounded-full bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] drop-shadow-[0_0_2px_rgba(255,255,255,0.9)]"
//           style={{
//             padding: 2, // ring thickness
//             maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
//             maskClip: "content-box, border-box",
//             maskComposite: "exclude",
//             WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
//             WebkitMaskClip: "content-box, border-box",
//             WebkitMaskComposite: "xor",
//           }}
//         />

//         {/* dot: dark fill + white outline = visible on light pages AND on the gradient buttons */}
//         <div
//           ref={smallRef}
//           className="fixed top-0 left-0 size-2.5 rounded-full bg-primary"
//         />
//       </div>
//     </>
//   );
// }
