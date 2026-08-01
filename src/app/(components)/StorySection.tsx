"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const industries = [
  {
    title: "Politics",
    alt: "Politics",
    gradient: "from-[#ff4d5f] via-[#ff783f] to-[#ffc92f]",
    images: "mike-2.svg",
  },
  {
    title: "Bakery",
    alt: "Bakery",
    gradient: "from-[#96c8ff] via-[#9ce4ec] to-[#63e7d6]",
    images: "cake.svg",
  },
  {
    title: "Restaurant",
    alt: "Restaurant",
    gradient: "from-[#ffe500] via-[#dfe000] to-[#83b500]",
    images: "chef-hat.svg",
  },
  {
    title: "Constructions",
    alt: "Constructions",
    gradient: "from-[#202828] via-[#283030] to-[#373b3c]",
    images: "helmet.svg",
  },
  {
    title: "Saloon",
    alt: "Saloon",
    gradient: "from-[#ff6570] via-[#f89ca6] to-[#f9d6c2]",
    images: "hair-saloon.svg",
  },
  {
    title: "See more",
    alt: "See More",
    gradient: "from-[#a99be7] via-[#c3a8e2] to-[#efb5cf]",
    images: "see-more.svg",
  },
];

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".story-coin", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="w-full bg-bg py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="flex flex-wrap h-fit items-center pt-10 justify-center gap-5 overflow-x-auto pb-4 sm:gap-7 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="story-coin group min-w-32.5 shrink-0 text-center lg:min-w-0 "
            >
              <div className="story-coin-outline relative isolate mx-auto flex h-32 w-32 items-center justify-center rounded-full p-0.75 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03] sm:h-34 sm:w-34">
                <div
                  className={`relative z-10 flex h-full w-full items-center justify-center rounded-full bg-linear-to-br ${industry.gradient}`}
                >
                  <div
                    className={`relative ${
                      industry.title === "See more" ? "h-12 w-12" : "h-20 w-20"
                    }`}
                  >
                    <Image
                      alt={industry.alt}
                      src={`/images/${industry.images}`}
                      fill
                      className="object-contain drop-shadow-lg drop-shadow-gray-50/20"
                    />
                  </div>
                </div>
              </div>

              <h3 className="mt-4 text-base font-medium text-neutral-950 sm:text-lg">
                {industry.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
