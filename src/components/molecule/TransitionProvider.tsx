"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";

const TransitionContext = createContext<{ navigateTo: (href: string) => void }>({
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function TransitionProvider({
  children,
  column = 6,
}: {
  children: ReactNode;
  column?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(true); // true while the intro is playing
  const hasMounted = useRef(false);

  /* Initial loading animation (runs once) */
  useEffect(() => {
    const cols = colRefs.current;
    let ctx: gsap.Context;

    const playIntro = () => {
      ctx = gsap.context(() => {
        gsap
          .timeline({
            delay: 0.4,
            onComplete: () => {
              isTransitioning.current = false;
            },
          })
          .to(logoRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" })
          .to(
            cols,
            { y: "-100%", duration: 0.7, ease: "power3.inOut", stagger: 0.05 },
            "-=0.1",
          );
      });
    };

    if (document.readyState === "complete") {
      playIntro();
    } else {
      window.addEventListener("load", playIntro, { once: true });
    }

    return () => {
      window.removeEventListener("load", playIntro);
      ctx?.revert();
    };
  }, []);

  /* Reveal after route change */
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (!isTransitioning.current) return;

    gsap
      .timeline({
        onComplete: () => {
          isTransitioning.current = false;
        },
      })
      .to(logoRef.current, { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" })
      .to(
        colRefs.current,
        { y: "-100%", duration: 0.5, ease: "power3.inOut", stagger: 0.05 },
        "-=0.1",
      );
  }, [pathname]);

  const navigateTo = useCallback(
    (href: string) => {
      if (isTransitioning.current) return;
      if (pathname === href) return;

      isTransitioning.current = true;
      const cols = colRefs.current;
      gsap.set(cols, { y: "100%" });
      gsap.set(logoRef.current, { opacity: 0, y: 20 });

      gsap
        .timeline({ onComplete: () => router.push(href) })
        .to(cols, {
          y: "0%",
          duration: 0.5,
          ease: "power3.inOut",
          stagger: 0.05,
        })
        .to(
          logoRef.current,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        );
    },
    [router, pathname],
  );

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {Array.from({ length: column }).map((_, idx) => (
          <div
            key={idx}
            ref={(el) => {
              colRefs.current[idx] = el;
            }}
            className="absolute top-0 h-full bg-linear-to-t from-[#084724] to-[#0D6B36] will-change-transform"
            // className="absolute top-0 h-full bg-[#0D6B36] will-change-transform"
            style={{
              left: `${(idx * 100) / column}%`,
              width: `calc(${100 / column}% + 1px)`, // 1px overlap hides the seams
              transform: "translateY(0%)", // covered on first paint
            }}
          />
        ))}
        <div
          ref={logoRef}
          className="absolute top-1/2 left-1/2 h-10 w-40 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/logo-4.png"
            alt="Growbytee Global"
            fill
            priority
            sizes="160px"
            className="object-contain"
          />
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
