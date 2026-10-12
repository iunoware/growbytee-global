"use client";

import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import FadeIn from "./FadeIn";
import GradientText from "../ui/GradientText";
import GradientButton from "../ui/GradientButton";

// gsap.registerPlugin(useGSAP);

type PageHeroProps = {
  title: string; // black part, e.g. "Creating What Makes"
  highlight: string; // gradient part, e.g. "Brands Grow"
  description: string;
  href?: string;
  gradientButtonText?: string;
  whatsappUrl?: string;
};

export default function PageHero({
  title,
  highlight,
  description,
  href,
  gradientButtonText,
  whatsappUrl,
}: PageHeroProps) {
  const container = useRef<HTMLElement>(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".hero-item",
  //       { y: 40, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.15 },
  //     );
  //   },
  //   { scope: container },
  // );

  return (
    <section
      ref={container}
      className="flex min-h-screen w-full items-center justify-center bg-[#f7f7f7] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <FadeIn key={title}>
          <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">{title}</span>
            <GradientText>{highlight}</GradientText>
          </h1>
        </FadeIn>

        <FadeIn key={description} delay={0.5}>
          {/* <p className="hero-item mx-auto mt-6 max-w-2xl text-sm italic leading-relaxed text-black opacity-0 sm:text-base md:mt-8 md:text-lg"> */}
          <p className="mx-auto mt-6 max-w-2xl text-sm italic leading-relaxed text-black sm:text-base md:mt-8 md:text-lg">
            {description}
          </p>
        </FadeIn>

        {gradientButtonText && (
          <FadeIn>
            <div className="hero-fade mt-8 flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
              <GradientButton variant="outline" href={href}>
                {gradientButtonText}
              </GradientButton>

              <GradientButton
                variant="background"
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappUrl}
              >
                Book a Strategy Call
              </GradientButton>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
