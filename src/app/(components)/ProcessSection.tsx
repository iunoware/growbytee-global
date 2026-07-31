"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GradientButton from "@/src/components/GradientButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const processCards = [
  {
    id: 1,
    image: "/images/process/process-card-1.png",
    alt: "Discover process",
  },
  {
    id: 2,
    image: "/images/process/process-card-2.png",
    alt: "Strategise process",
  },
  {
    id: 3,
    image: "/images/process/process-card-3.png",
    alt: "Create process",
  },
  {
    id: 4,
    image: "/images/process/process-card-4.png",
    alt: "Process step four",
  },
  {
    id: 5,
    image: "/images/process/process-card-5.png",
    alt: "Process step five",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cardsContainer = cardsContainerRef.current;
      const progress = progressRef.current;
      const cards = cardRefs.current.filter(
        (card): card is HTMLDivElement => card !== null,
      );

      if (!section || !cardsContainer || !progress || !cards.length) return;

      /*
       * First card is already visible.
       * Remaining cards begin below the card container.
       */
      gsap.set(cards[0], {
        yPercent: 0,
        zIndex: 1,
      });

      gsap.set(cards.slice(1), {
        yPercent: 125,
      });

      cards.forEach((card, index) => {
        gsap.set(card, {
          zIndex: index + 1,
        });
      });

      // First card represents the initial 20%.
      gsap.set(progress, {
        width: "20%",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (processCards.length - 1)}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.slice(1).forEach((card, index) => {
        const cardNumber = index + 2;
        const progressPercentage = (cardNumber / processCards.length) * 100;

        timeline
          .to(
            card,
            {
              yPercent: 0,
              duration: 1,
            },
            index,
          )
          .to(
            progress,
            {
              width: `${progressPercentage}%`,
              duration: 1,
            },
            index,
          );
      });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f8f8f8]"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-360 flex-col px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left fixed content */}
          <div className="relative z-10 flex flex-col items-start">
            <h2 className="max-w-150 text-[clamp(3rem,5.4vw,6.8rem)] leading-[0.95] font-semibold tracking-[-0.055em] text-black">
              Create
              <br />
              Experiences
              <br />
              <span className="bg-linear-to-r from-[#5145e5] via-[#ff3131] to-[#ffad45] bg-clip-text text-transparent">
                Meaningful
              </span>
            </h2>

            <p className="mt-6 max-w-125 text-sm leading-relaxed text-neutral-700 sm:text-base">
              Every successful project starts with strategy and ends with measurable
              business growth.
            </p>

            {/* <a
              // href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#5b38dc] via-[#ff3434] to-[#ffb14d] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Grow Your Brand
            </a> */}
            <GradientButton variant="background" className="mt-3">
              Let&apos; Grow your brand
            </GradientButton>
          </div>

          {/* Right card stack */}
          <div className="relative flex items-center justify-center">
            <div
              ref={cardsContainerRef}
              className="relative h-85 w-full max-w-180 overflow-hidden sm:h-107.5 lg:h-130 xl:h-145"
            >
              {processCards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className="absolute inset-0 flex items-center justify-center will-change-transform"
                >
                  {/* <div className="relative h-full w-full"> */}
                  <div className="relative h-[80%] w-[80%]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mt-8 h-1.5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            ref={progressRef}
            className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-[#5541e6] via-[#ff3030] to-[#ffc85a] will-change-[width]"
          />
        </div>
      </div>
    </section>
  );
}
