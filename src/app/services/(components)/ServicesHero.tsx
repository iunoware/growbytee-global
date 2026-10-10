"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GradientText from "@/src/components/ui/GradientText";
import Button from "@/src/components/ui/Button";

gsap.registerPlugin(useGSAP);

const images = [
  {
    src: "/images/social-media-marketing-tamil-nadu.jpg",
    alt: "social-media-marketing-tamil-nadu",
  },
  {
    src: "/images/seo-services-tamil-nadu.jpg",
    alt: "seo-services-tamil-nadu",
  },
  {
    src: "/images/google-ads-agency-tamil-nadu.jpg",
    alt: "google-ads-agency-tamil-nadu",
  },
  {
    src: "/images/digital-marketing-agency-tamil-nadu.jpg",
    alt: "digital-marketing-agency-tamil-nadu",
  },
  {
    src: "/images/seo-agency-tamil-nadu.jpg",
    alt: "seo-agency-tamil-nadu",
  },
  {
    src: "/images/digital-marketing-company-tamil-nadu.jpg",
    alt: "digital-marketing-company-tamil-nadu",
  },
];

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // const trackImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      // const trackImage = trackImageRef.current;
      if (!track) return;

      // track holds 2 identical groups, so -50% = exactly one group -> seamless loop
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 10,
        ease: "none",
        repeat: -1,
      });

      // const pause = () => tween.pause();
      // const resume = () => tween.resume();
      const pause = () => tween.timeScale(0.5);
      const resume = () => tween.timeScale(1);

      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", resume);
      // trackImage?.addEventListener("mouseenter", pause);
      // trackImage?.addEventListener("mouseleave", resume);

      return () => {
        track.removeEventListener("mouseenter", pause);
        track.removeEventListener("mouseleave", resume);
        // trackImage?.removeEventListener("mouseenter", pause);
        // trackImage?.removeEventListener("mouseleave", resume);
        tween.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section ref={sectionRef} className="bg-bg">
        <div className="relative overflow-hidden rounded-2xl">
          {/* top half circle */}
          <div className="absolute -top-48 left-1/2 z-30 h-110 md:h-100 w-[180%] md:w-[120%] -translate-x-1/2 rounded-[50%] bg-bg">
            <h2 className="absolute bottom-10 left-1/2 w-full -translate-x-1/2 px-4 text-center text-3xl font-bold text-black">
              A–Z of <GradientText>Digital Growth</GradientText>
            </h2>
          </div>

          {/* image carousel */}
          <div ref={trackRef} className="flex w-max will-change-transform">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 gap-8 pr-8"
                aria-hidden={groupIndex === 1}
              >
                {images.map((image) => (
                  <article
                    key={`${groupIndex}-${image.src}`}
                    // ref={trackImageRef}
                    className="relative h-screen w-48 shrink-0 overflow-hidden sm:w-64"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 192px, 256px"
                      className="object-cover"
                    />
                  </article>
                ))}
              </div>
            ))}
          </div>

          {/* bottom half circle */}
          <div className="absolute -bottom-48 left-1/2 z-30 h-130 md:h-100 w-[180%] md:w-[120%] -translate-x-1/2 rounded-[50%] bg-bg">
            <div className="absolute md:pt-0 pt-8 top-8 left-1/2 flex w-full max-w-2xl -translate-x-1/2 flex-col items-center gap-3 px-4 text-center">
              <h2 className="text-2xl font-bold text-black">
                Every Channel. One Growth Strategy.
              </h2>
              <p className="text-sm text-black italic">
                From strategy and branding to content, advertising, SEO, and analytics,
                explore everything we do to help your brand attract, engage, convert, and
                grow.
              </p>
              <Button type="outline" text="Talk to Our Team" />
            </div>
          </div>

          {/* left blur */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-[#f7f7f7]/10 backdrop-blur-lg sm:w-24"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
            }}
          />

          {/* right blur */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-[#f7f7f7]/10 backdrop-blur-lg sm:w-24"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, black 20%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, black 0%, black 20%, transparent 100%)",
            }}
          />
        </div>
      </section>
    </>
  );
}
