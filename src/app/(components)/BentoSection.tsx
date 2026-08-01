"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  EyeIcon,
  HeartIcon as HeartOutlineIcon,
  PaperAirplaneIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

type LikePosition = {
  x: number;
  y: number;
};

const testimonials = [
  {
    id: 1,
    image: "/images/testimonial-1.jpg",
    content:
      "The campaigns delivered measurable results. Better engagement, and a clear return on investment.",
    role: "Founder, Healthcare",
  },
  {
    id: 2,
    image: "/images/testimonial-2.jpg",
    content:
      "Growbytee didn't just improve our social media—they transformed our business. Our enquiries doubled within two months.",
    role: "Founder, Restaurant",
  },
  {
    id: 3,
    image: "/images/testimonial-3.jpg",
    content:
      "From branding to performance marketing, every strategy was backed by data. We finally found a growth partner we can trust.",
    role: "Founder, Construction",
  },
];

export default function BentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likePosition, setLikePosition] = useState<LikePosition | null>(null);

  useGSAP(
    () => {
      gsap.from(".bento-card", {
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

      const counterElements = gsap.utils.toArray<HTMLElement>("[data-counter]");

      counterElements.forEach((element) => {
        const target = Number(element.dataset.counter ?? 0);
        const decimals = Number(element.dataset.decimals ?? 0);
        const prefix = element.dataset.prefix ?? "";
        const suffix = element.dataset.suffix ?? "";

        const counter = {
          value: 0,
        };

        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
          onUpdate: () => {
            const formattedValue = counter.value.toLocaleString("en-IN", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });

            element.textContent = `${prefix}${formattedValue}${suffix}`;
          },
        });
      });

      // testimonial loop
      const testimonialTrack = testimonialTrackRef.current;

      if (testimonialTrack) {
        const testimonialTween = gsap.to(testimonialTrack, {
          yPercent: -50,
          duration: 14,
          ease: "none",
          repeat: -1,
        });

        const pauseTestimonials = () => testimonialTween.pause();
        const resumeTestimonials = () => testimonialTween.resume();

        testimonialTrack.addEventListener("mouseenter", pauseTestimonials);
        testimonialTrack.addEventListener("mouseleave", resumeTestimonials);

        return () => {
          testimonialTrack.removeEventListener("mouseenter", pauseTestimonials);
          testimonialTrack.removeEventListener("mouseleave", resumeTestimonials);
          testimonialTween.kill();
        };
      }
    },
    {
      scope: sectionRef,
    },
  );

  function handleDoubleClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const card = event.currentTarget.getBoundingClientRect();
    setIsLiked(true);

    setLikePosition({
      x: event.clientX - card.left,
      y: event.clientY - card.top,
    });

    window.setTimeout(() => {
      setLikePosition(null);
    }, 700);
  }

  return (
    <section ref={sectionRef} className="overflow-hidden bg-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-150 lg:grid-cols-[0.82fr_1fr_1fr] lg:grid-rows-6 lg:gap-4 ">
          {/* Reels card */}
          <article
            onDoubleClick={handleDoubleClick}
            className="bento-card marketing-bento-card relative min-h-125 overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_4px_12px_rgba(0,0,0,0.14)] md:col-span-2 lg:col-span-1 lg:row-span-6 lg:min-h-0"
          >
            {/* like animation */}
            <div>
              {likePosition && (
                <HeartSolidIcon
                  className="animate-ping pointer-events-none absolute top-40 left-20 z-20 rotate-6 h-20 w-20 text-red-500"
                  style={{
                    left: likePosition.x,
                    top: likePosition.y,
                  }}
                />
              )}
            </div>

            {/* 
              purple - #7A3AC6
              red - #F66347
            */}

            <Image
              src="/images/insta-img.jpg"
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
                  <EyeIcon className="h-6 w-6" />
                  <span data-counter="256" data-suffix="K">
                    256K
                  </span>
                </span>

                <span className="flex items-center gap-1">
                  <div
                    onClick={() => {
                      setIsLiked((prev) => !prev);
                      // handleDoubleClick();
                    }}
                  >
                    {isLiked ? (
                      <HeartSolidIcon className="h-6 w-6 text-red-500" />
                    ) : (
                      <HeartOutlineIcon className="h-6 w-6" />
                    )}
                  </div>
                  <span data-counter="18.5" data-decimals="1" data-suffix="K">
                    18.5K
                  </span>
                </span>

                <span className="flex items-center gap-1">
                  <PaperAirplaneIcon className="h-6 w-6" />
                  <span data-counter="1.3" data-decimals="1" data-suffix="K">
                    1.3K
                  </span>
                </span>
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

                  <p
                    data-counter="30000"
                    data-prefix="₹"
                    className="mt-2 text-3xl leading-none font-bold sm:text-4xl"
                  >
                    ₹30,000
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl leading-none font-medium">Reach</p>

                    <ArrowTrendingUpIcon className="h-5 w-5" />
                  </div>

                  <p
                    data-counter="420"
                    data-suffix="K"
                    className="mt-2 text-3xl leading-none font-bold sm:text-4xl"
                  >
                    420K
                  </p>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-3 gap-3 pt-7">
                <div>
                  <div className="flex items-center gap-1">
                    <p data-counter="356" className="text-xs font-bold sm:text-sm">
                      356
                    </p>

                    <span className="text-[7px] font-bold text-green-500">▲12%</span>
                  </div>

                  <p className="mt-1 text-[10px] sm:text-xs">Leads</p>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <p
                      data-counter="84"
                      data-prefix="₹"
                      className="text-xs font-bold sm:text-sm"
                    >
                      ₹84
                    </p>

                    <span className="text-[7px] font-bold text-red-500">▼8%</span>
                  </div>

                  <p className="mt-1 text-[10px] sm:text-xs">Cost Per Lead</p>
                </div>

                <div>
                  <p
                    data-counter="6.8"
                    data-decimals="1"
                    data-suffix="x"
                    className="text-xs font-bold sm:text-sm"
                  >
                    6.8x
                  </p>

                  <p className="mt-1 text-[10px] sm:text-xs">ROAS</p>
                </div>
              </div>
            </div>

            {/* <div className="-translate-y-26 translate-x-65 -rotate-15 absolute"> */}
            <div className="-bottom-13 -right-9 -rotate-15 absolute">
              <div className="h-45 w-45 relative  opacity-10">
                <Image
                  fill
                  src="/images/meta-logo.svg"
                  alt="Growbytee social media profile"
                />
              </div>
            </div>
          </article>

          {/* profile card */}
          <article className="bento-card lg:row-span-2 marketing-bento-card relative min-h-72 overflow-hidden rounded-2xl bg-[#EDEDED] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.14)] sm:p-6 lg:min-h-0">
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#ff6885]" />

            <div className="flex h-full items-center">
              <div className="grid w-full grid-cols-[auto_1fr] items-center gap-5">
                <div className="shrink-0 grid place-items-center rounded-full bg-linear-to-br from-[#66003A] via-[#ff496f] to-[#FFF1CC] p-0.75">
                  <div className="relative h-18 w-18 overflow-hidden rounded-full bg-black">
                    <Image
                      src="/images/logo-2.png"
                      alt="Growbytee Global logo"
                      fill
                      sizes="72px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    growbytee_global
                  </h3>

                  <div className="mt-5 grid grid-cols-3 gap-5">
                    <div>
                      <p data-counter="120" className="text-sm font-bold text-black">
                        120
                      </p>
                      <p className="mt-1 text-[11px] text-black">posts</p>
                    </div>

                    <div>
                      <p
                        data-counter="10"
                        data-suffix="K"
                        className="text-sm font-bold text-black"
                      >
                        10K
                      </p>
                      <p className="mt-1 text-[11px] text-black">followers</p>
                    </div>

                    <div>
                      <p data-counter="200" className="text-sm font-bold text-black">
                        200
                      </p>
                      <p className="mt-1 text-[11px] text-black">following</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Testimonials card */}
          {/* Testimonials card */}
          <article className="bento-card marketing-bento-card relative min-h-72 overflow-hidden rounded-2xl bg-[#D2D9F9] shadow-[0_4px_12px_rgba(0,0,0,0.14)] lg:row-span-4 lg:min-h-0">
            {/* Moving testimonials viewport */}
            <div className="absolute inset-x-5 top-0 bottom-0 overflow-hidden sm:inset-x-6">
              <div
                ref={testimonialTrackRef}
                className="flex flex-col will-change-transform"
              >
                {[0, 1].map((groupIndex) => (
                  <div
                    key={groupIndex}
                    className="flex flex-col gap-3 pt-3 pb-0"
                    aria-hidden={groupIndex === 1}
                  >
                    {testimonials.map((testimonial) => (
                      <div
                        key={`${groupIndex}-${testimonial.id}`}
                        className="grid min-h-26 grid-cols-[44px_1fr] items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-3 py-4 shadow-[0_8px_24px_rgba(44,58,130,0.12)]"
                      >
                        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-neutral-300">
                          <Image
                            src={testimonial.image}
                            alt={groupIndex === 0 ? testimonial.role : ""}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="line-clamp-2 text-sm leading-4 text-neutral-700">
                            “{testimonial.content}”
                          </p>

                          <div className="mt-2 flex items-end justify-between gap-2">
                            <p className="shrink-0 text-sm tracking-wide text-red-500">
                              ★★★★★
                            </p>

                            <p className="truncate text-xs text-neutral-600 italic">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Top foreground blur */}
            <div
              className="pointer-events-none absolute top-0 right-0 left-0 z-20 h-[28%] bg-[#D2D9F9]/55 backdrop-blur-[6px] "
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
              }}
            />

            {/* Bottom foreground blur */}
            <div
              className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-[28%] bg-[#D2D9F9]/55 backdrop-blur-[6px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
                maskImage:
                  "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
              }}
            />
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

              <p
                data-counter="486"
                data-suffix="+ Leads"
                className="mt-auto self-end text-2xl font-bold sm:text-3xl"
              >
                486+ Leads
              </p>
            </div>

            <div className="-bottom-14 -right-10 -rotate-6 absolute">
              <ChartBarSquareIcon className="h-55 w-55 -rotate-12 text-[#664A00]/10" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
