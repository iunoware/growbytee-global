"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  EyeIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    image: "/images/marketing-bento/client-1.jpg",
    content:
      "The campaigns delivered measurable results. Better engagement, and a clear return on investment.",
    role: "Founder, Healthcare",
  },
  {
    id: 2,
    image: "/images/marketing-bento/client-2.jpg",
    content:
      "Growbytee didn't just improve our social media—they transformed our business. Our enquiries doubled within two months.",
    role: "Founder, Restaurant",
  },
  {
    id: 3,
    image: "/images/marketing-bento/client-3.jpg",
    content:
      "From branding to performance marketing, every strategy was backed by data. We finally found a growth partner we can trust.",
    role: "Founder, Construction",
  },
];

export default function BentoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // gsap.from(".heading-line", {
      //   opacity: 0,
      //   y: 40,
      //   duration: 0.8,
      //   stagger: 0.12,
      //   ease: "power3.out",
      //   scrollTrigger: {
      //     trigger: sectionRef.current,
      //     start: "top 75%",
      //   },
      // });

      gsap.from(".bento-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-150 lg:grid-cols-[0.82fr_1fr_1fr] lg:grid-rows-6 lg:gap-4 ">
          {/* Left reels card */}
          <article className="bento-card marketing-bento-card relative min-h-125 overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_4px_12px_rgba(0,0,0,0.14)] md:col-span-2 lg:col-span-1 lg:row-span-6 lg:min-h-0">
            <Image
              src="/images/marketing-bento/social-post.jpg"
              alt="Social media campaign post"
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 27vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute right-0 bottom-0 left-0 px-4 pb-4">
              <div className="flex items-center gap-4 text-[12px] font-medium text-white">
                <span className="flex items-center gap-1">
                  <EyeIcon className="h-4 w-4" />
                  256K
                </span>

                <span className="flex items-center gap-1">
                  <HeartIcon className="h-4 w-4" />
                  18.5K
                </span>

                <span className="flex items-center gap-1">
                  <PaperAirplaneIcon className="h-4 w-4" />
                  1.3K
                </span>

                <PaperAirplaneIcon className="ml-auto h-4 w-4 -rotate-12" />
              </div>
            </div>
          </article>

          {/* Meta Ads card */}
          <article className="bento-card relative lg:row-span-3 marketing-bento-card min-h-72 overflow-hidden rounded-2xl bg-[#FFCCE9] p-5 text-[#66003A] shadow-[0_4px_12px_rgba(0,0,0,0.14)] sm:p-6 lg:min-h-0 ">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex items-center gap-2">
                {/* <span className="text-xl leading-none font-bold">∞</span> */}
                <div className="h-6 w-6 relative">
                  <Image
                    fill
                    src="/images/meta-logo.svg"
                    alt="Growbytee social media profile"
                  />
                </div>

                <p className="text-sm font-bold sm:text-base">Meta Ads Campaign</p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-2xl leading-none font-medium">Budget</p>

                  <p className="mt-2 text-3xl leading-none font-bold sm:text-4xl">
                    ₹30,000
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl leading-none font-medium">Reach</p>

                    <ArrowTrendingUpIcon className="h-5 w-5" />
                  </div>

                  <p className="mt-2 text-3xl leading-none font-bold sm:text-4xl">420K</p>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-3 gap-3 pt-7">
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold sm:text-sm">356</p>

                    <span className="text-[7px] font-bold text-green-500">▲12%</span>
                  </div>

                  <p className="mt-1 text-[10px] sm:text-xs">Leads</p>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold sm:text-sm">₹84</p>

                    <span className="text-[7px] font-bold text-red-500">▼8%</span>
                  </div>

                  <p className="mt-1 text-[10px] sm:text-xs">Cost Per Lead</p>
                </div>

                <div>
                  <p className="text-xs font-bold sm:text-sm">6.8x</p>

                  <p className="mt-1 text-[10px] sm:text-xs">ROAS</p>
                </div>
              </div>
            </div>

            {/* Decorative meta */}
            {/* <div className="absolute -right-7 -bottom-12 h-40 w-40 rounded-full border-18 border-[#66003A]/7" /> */}
            {/* <div className="absolute right-12 -bottom-17 h-32 w-32 rounded-full border-15 border-[#66003A]/7" /> */}

            {/* <div className="-translate-y-26 translate-x-65 -rotate-15 absolute"> */}
            <div className="-translate-y-26 translate-x-65 -rotate-15 absolute">
              <div className="h-45 w-45 relative  opacity-10">
                <Image
                  fill
                  src="/images/meta-logo.svg"
                  alt="Growbytee social media profile"
                />
              </div>
            </div>
          </article>

          {/* Instagram profile card */}
          <article className="bento-card lg:row-span-2 marketing-bento-card relative min-h-72 overflow-hidden rounded-2xl bg-[#EDEDED] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.14)] sm:p-6 lg:min-h-0">
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#ff6885]" />

            <div className="flex h-full items-center">
              <div className="grid w-full grid-cols-[auto_1fr] items-center gap-5">
                <div className="rounded-full bg-linear-to-br from-[#66003A] via-[#ff496f] to-[#FFF1CC] p-0.75">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white bg-neutral-300">
                    <Image
                      src="/images/logo-2.png"
                      alt="Growbytee social media profile"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    growbytee_global
                  </h3>

                  <div className="mt-5 grid grid-cols-3 gap-5">
                    <div>
                      <p className="text-sm font-bold text-black">120</p>
                      <p className="mt-1 text-[11px] text-black">posts</p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-black">10K</p>
                      <p className="mt-1 text-[11px] text-black">followers</p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-black">200</p>
                      <p className="mt-1 text-[11px] text-black">following</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Testimonials card */}
          <article className="bento-card lg:row-span-4 marketing-bento-card min-h-72 overflow-hidden rounded-2xl bg-[#D2D9F9] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.14 sm:p-6 lg:min-h-0 ">
            <div className="flex h-full flex-col justify-center gap-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="
                    grid grid-cols-[44px_1fr] items-center gap-3
                    rounded-xl bg-white/85 px-3 py-2.5
                    shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                  "
                >
                  <div className="relative h-11 w-11 overflow-hidden rounded-full bg-neutral-300">
                    <Image
                      src={testimonial.image}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="line-clamp-2 text-[10px] leading-3.25 text-neutral-700">
                      “{testimonial.content}”
                    </p>

                    <div className="mt-1 flex items-end justify-between gap-2">
                      <p className="text-[10px] tracking-wide text-red-500">★★★★★</p>

                      <p className="truncate text-[7px] text-neutral-600 italic">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Analytics card */}
          <article className="bento-card lg:row-span-3 marketing-bento-card relative min-h-72 overflow-hidden rounded-2xl bg-[#FFF1CC] p-5 text-[#664A00] shadow-[0_4px_12px_rgba(0,0,0,0.14)] sm:p-6 lg:min-h-0 ">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded border border-[#664A00]">
                  <ChartBarIcon className="h-4 w-4" />
                </span>

                <p className="text-sm font-bold sm:text-base">Analytics</p>
              </div>

              <h3 className="mt-7 text-2xl font-bold sm:text-3xl">Qualified Leads</h3>

              <p className="mt-auto self-end text-2xl font-bold sm:text-3xl">
                486+ Leads
              </p>
            </div>

            <ChartBarIcon className="absolute -right-3 -bottom-5 h-36 w-36 -rotate-12 text-[#664A00]/10" />
          </article>
        </div>
      </div>
    </section>
  );
}
