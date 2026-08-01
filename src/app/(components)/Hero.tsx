"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import Button from "@/src/components/Button";
import GradientButton from "@/src/components/GradientButton";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".hero-fade", {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.fromTo(
        ".hero-fade",
        {
          opacity: 0,
          x: -160,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".mobile-fade",
        {
          opacity: 0,
          x: 160,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-12"
    >
      <div className="mx-auto grid w-full max-w-360 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 xl:px-16">
        {/* Left content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="hero-fade text-[2.6rem] font-normal leading-[1.15] tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
            We Turn Businesses Into
          </h1>
          {/* <br className="hidden hero-fade sm:block" /> */}
          <h1 className="hero-fade text-[2.6rem] font-normal leading-[1.15] tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
            Brands People{" "}
            <span className="hero-fade bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text font-semibold text-transparent">
              Remember.
            </span>
          </h1>
          <p className="hero-fade mt-6 max-w-3xl text-sm italic leading-7 text-[#333333] sm:text-base sm:leading-8">
            From viral content to high-converting ad campaigns, we help brands increase
            reach, generate qualified leads, and drive measurable growth.
          </p>
          <div className="hero-fade mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <GradientButton variant="outline" href="/">
              Explore Success Stories
            </GradientButton>

            <GradientButton variant="background" href="/">
              Book a Strategy Call
            </GradientButton>

            {/* <Button type="background" text="Book a Strategy Call" /> */}
          </div>
        </div>

        {/* Right image */}
        <div className="mobile-fade relative flex items-center justify-center lg:justify-end">
          {/* Soft shadow below phone */}
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl"
          />

          <Image
            src="/images/mobile-mockup.webp"
            alt="Growbytee digital marketing showcase"
            width={620}
            height={850}
            priority
            className="relative z-10 h-auto w-60 object-contain sm:w-72.5 lg:w-82.5 xl:w-92.5"
          />
        </div>
      </div>
    </section>
  );
}
