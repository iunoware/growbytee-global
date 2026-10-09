"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type ImageTrailProps = {
  items: string[];
  children?: ReactNode;
  className?: string;
};

const THRESHOLD = 80; // how far (px) the mouse must move before the next image appears

export default function ImageTrail({ items, children, className = "" }: ImageTrailProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = container.current!;
      const images = gsap.utils.toArray<HTMLElement>(".trail-img");

      const mouse = { x: 0, y: 0 }; // current pointer position
      const cache = { x: 0, y: 0 }; // smoothed pointer position (lags behind)
      const last = { x: 0, y: 0 }; // where the last image was shown
      let index = 0;
      let zIndex = 1;
      let started = false;

      const onMove = (e: MouseEvent | TouchEvent) => {
        const rect = el.getBoundingClientRect();
        const point = "touches" in e ? e.touches[0] : e;
        mouse.x = point.clientX - rect.left;
        mouse.y = point.clientY - rect.top;

        // on the very first move, start the smoothed position at the pointer
        if (!started) {
          started = true;
          cache.x = mouse.x;
          cache.y = mouse.y;
        }
      };

      const showNextImage = () => {
        index = (index + 1) % images.length;
        zIndex++;

        const img = images[index];
        const inner = img.querySelector(".trail-img-inner");
        const halfW = img.offsetWidth / 2;
        const halfH = img.offsetHeight / 2;

        gsap.killTweensOf(img);
        gsap
          .timeline()
          // fly from the smoothed position to the pointer while scaling up
          .fromTo(
            img,
            {
              opacity: 1,
              scale: 0,
              zIndex,
              x: cache.x - halfW,
              y: cache.y - halfH,
            },
            {
              duration: 0.4,
              ease: "power1",
              scale: 1,
              x: mouse.x - halfW,
              y: mouse.y - halfH,
            },
            0,
          )
          // inner image settles from zoomed + bright to normal
          .fromTo(
            inner,
            { scale: 2.8, filter: "brightness(250%)" },
            { duration: 0.4, ease: "power1", scale: 1, filter: "brightness(100%)" },
            0,
          )
          // then shrink and fade out
          .to(img, { duration: 0.4, ease: "power2", opacity: 0, scale: 0.2 }, 0.45);
      };

      // runs every frame
      const tick = () => {
        cache.x += (mouse.x - cache.x) * 0.1;
        cache.y += (mouse.y - cache.y) * 0.1;

        const distance = Math.hypot(mouse.x - last.x, mouse.y - last.y);
        if (started && distance > THRESHOLD) {
          showNextImage();
          last.x = mouse.x;
          last.y = mouse.y;
        }
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("touchmove", onMove);
      gsap.ticker.add(tick);

      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("touchmove", onMove);
        gsap.ticker.remove(tick);
      };
    },
    { scope: container, dependencies: [items] },
  );

  return (
    <div ref={container} className={`relative ${className}`}>
      {children}

      {items.map((url, i) => (
        <div
          key={i}
          className="trail-img pointer-events-none absolute top-0 left-0 aspect-[1.1] w-47.5 overflow-hidden rounded-2xl opacity-0 will-change-transform"
        >
          <div
            className="trail-img-inner absolute -top-2.5 -left-2.5 h-[calc(100%+20px)] w-[calc(100%+20px)] bg-cover bg-center"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}
