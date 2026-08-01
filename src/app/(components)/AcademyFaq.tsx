"use client";

import { useRef, useState } from "react";
// import Link from "next/link";
import GradientButton from "@/src/components/GradientButton";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    number: "01",
    title: "Social Media Marketing",
    tags: ["Content Strategy", "Community Growth", "Brand Engagement"],
    description:
      "Create meaningful content that captures attention, sparks conversations, builds lasting communities, and transforms your social media presence into a powerful platform for brand awareness, customer engagement, and long-term business growth.",
    href: "/",
    bgColor: "bg-[#feeacd]",
  },
  {
    number: "02",
    title: "Performance Marketing",
    tags: ["Meta Ads", "Google Ads", "Conversion Optimisation"],
    description:
      "Reach the right audience at the right time with high-performing Meta and Google Ads campaigns designed to generate qualified leads, increase conversions, maximize return on investment, and deliver measurable business growth through continuous optimisation and data-driven decision making.",
    href: "/",
    bgColor: "bg-[#d2d9f9]",
  },
  {
    number: "03",
    title: "Creative Studio",
    tags: ["Professional Reels", "Photography & Videography", "Brand Visual Design"],
    description:
      "Bring your brand to life with compelling visual storytelling that captures attention and leaves a lasting impression. From professional reels, commercial photography, and cinematic videos to branded graphics, motion design, and marketing creatives.",
    href: "/",
    bgColor: "bg-[#f4d7e7]",
  },
  {
    number: "04",
    title: "Growth & Analytics",
    tags: ["Performance Tracking", "Campaign Optimisation", "Data-Driven Insights"],
    description:
      "Make smarter marketing decisions with real-time insights and continuous performance analysis. We track every campaign, monitor key performance indicators, measure audience behaviour, and optimize strategies using accurate data to improve engagement",
    href: "/",
    bgColor: "bg-[#fecdcd]",
  },
];

export default function AcademyFaq() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set([".academy-heading", ".academy-description", ".academy-item"], {
          opacity: 1,
          y: 0,
        });

        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".academy-heading",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
        )
        .fromTo(
          ".academy-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .fromTo(
          ".academy-item",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3",
        );
    },
    {
      scope: sectionRef,
    },
  );

  const toggleItem = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-[#f7f7f7]">
      {/* Section heading */}
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="academy-heading text-lg font-medium italic text-black/45 sm:text-xl">
            Don&apos;t Just Watch Great Work
          </p>

          <h2 className="academy-heading mt-2 text-4xl font-bold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
            Learn to Create It!
          </h2>

          <p className="academy-description mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
            Discover the creative process, tools, and skills behind every project at
            Growbytee Academy.
          </p>
        </div>

        <div className="academy-heading flex items-start lg:pt-5">
          {/* <Link
            href="/academy"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#7557ff,#ff5c86,#ffb347)] p-px transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#f7f7f7] px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-white">
              Explore the Academy
            </span>
          </Link> */}
          <GradientButton variant="outline">Explore the Academy</GradientButton>
        </div>
      </div>

      {/* Accordion */}
      <div className="border-t border-black/15">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          const buttonId = `academy-faq-button-${index}`;
          const contentId = `academy-faq-content-${index}`;

          return (
            <article
              key={faq.title}
              className={`academy-item border-b border-black/15 transition-colors duration-500 ${
                // isActive ? "bg-[#FDD49B]" : "bg-white"
                isActive ? `${faq.bgColor}` : "bg-white"
              }`}
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isActive}
                aria-controls={contentId}
                onClick={() => toggleItem(index)}
                className="group grid w-full grid-cols-[44px_1fr_auto] items-start gap-4 px-5 py-7 text-left sm:grid-cols-[72px_1fr_auto] sm:px-8 lg:grid-cols-[260px_1fr_auto] lg:px-12 lg:py-9"
              >
                <span className="pt-1 text-sm font-medium italic text-black/80 sm:text-base">
                  {faq.number}
                </span>

                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-black sm:text-3xl lg:text-4xl">
                    {faq.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-medium text-black/65 sm:text-xs">
                    {faq.tags.map((tag, tagIndex) => (
                      <div key={tag} className="flex items-center gap-2">
                        <span>{tag}</span>

                        {tagIndex < faq.tags.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-black/65"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <span
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 transition-all duration-300 sm:h-11 sm:w-11 ${
                    isActive
                      ? "rotate-180 bg-black text-white"
                      : "bg-transparent text-black group-hover:bg-black group-hover:text-white"
                  }`}
                >
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                </span> */}
              </button>

              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-[44px_1fr] gap-4 px-5 pb-10 sm:grid-cols-[72px_1fr] sm:px-8 sm:pb-12 lg:grid-cols-[260px_1fr] lg:px-12 lg:pb-14">
                    <div aria-hidden="true" />

                    <div className="max-w-5xl">
                      <p className="text-base leading-7 text-black/75 sm:text-lg sm:leading-8 lg:text-xl lg:leading-8">
                        {faq.description}
                      </p>

                      {/* <Link
                        href={faq.href}
                        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#7557ff,#ff5c86,#ffb347)] p-px transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#FDD49B] px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-white">
                          Grow With Us
                        </span>
                      </Link> */}
                      <GradientButton variant="outline" href={faq.href} className="mt-7">
                        Grow With Us
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
