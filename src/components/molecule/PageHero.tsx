"use client";

import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import FadeIn from "./FadeIn";
import GradientText from "../ui/GradientText";

// gsap.registerPlugin(useGSAP);

type PageHeroProps = {
  title: string; // black part, e.g. "Creating What Makes"
  highlight: string; // gradient part, e.g. "Brands Grow"
  description: string;
};

export default function PageHero({ title, highlight, description }: PageHeroProps) {
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
            {/* <span className="hero-item block opacity-0">{title}</span> */}
            <span className="block">{title}</span>
            {/* <span className="hero-item block bg-linear-to-r from-[#8e44ad] to-[#ff1f1f] bg-clip-text text-transparent opacity-0"> */}
            {/* <span className="block bg-linear-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
              {highlight}
            </span> */}
            <GradientText>{highlight}</GradientText>
          </h1>
        </FadeIn>

        <FadeIn key={description} delay={0.5}>
          {/* <p className="hero-item mx-auto mt-6 max-w-2xl text-sm italic leading-relaxed text-black opacity-0 sm:text-base md:mt-8 md:text-lg"> */}
          <p className="mx-auto mt-6 max-w-2xl text-sm italic leading-relaxed text-black sm:text-base md:mt-8 md:text-lg">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
