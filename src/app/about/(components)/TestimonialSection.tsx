"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GradientText from "@/src/components/ui/GradientText";

gsap.registerPlugin(useGSAP);

const testimonials = [
  {
    id: 1,
    name: "Name",
    role: "Founder, Retail Brand",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae quo eveniet impedit rerum eos vitae iste. Velit, unde? At!",
  },
  {
    id: 2,
    name: "Name",
    role: "Founder, Restaurant",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae quo eveniet impedit rerum eos vitae iste. Velit, unde? At!",
  },
  {
    id: 3,
    name: "Name",
    role: "Founder, Construction",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae quo eveniet impedit rerum eos vitae iste. Velit, unde? At!",
  },
  {
    id: 4,
    name: "Name",
    role: "Founder, Healthcare",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae quo eveniet impedit rerum eos vitae iste. Velit, unde? At!",
  },
];

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // track holds 2 identical groups, so -50% = exactly one group -> seamless loop
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 35,
        ease: "none",
        repeat: -1,
      });

      const pause = () => tween.pause();
      const resume = () => tween.resume();

      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", resume);

      return () => {
        track.removeEventListener("mouseenter", pause);
        track.removeEventListener("mouseleave", resume);
        tween.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-[#f7f7f7] px-6 py-16 md:px-10">
      <div className="grid items-center gap-6 md:grid-cols-[300px_1fr] md:gap-10">
        <h2 className="text-3xl font-bold text-black">
          Client <GradientText>Voices</GradientText>
        </h2>

        {/* marquee viewport */}
        <div className="relative overflow-hidden rounded-2xl">
          <div ref={trackRef} className="flex w-max will-change-transform">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 gap-8 pr-8"
                aria-hidden={groupIndex === 1}
              >
                {testimonials.map((t) => (
                  <article
                    key={`${groupIndex}-${t.id}`}
                    className="w-72 shrink-0 sm:w-80"
                  >
                    <span className="block relative h-10 text-8xl leading-[0.8] font-black text-black">
                      {/* “ */}
                      <Image
                        src="/images/quote.svg"
                        alt={`"`}
                        fill
                        sizes="48px"
                        className="object-contain object-left"
                      />
                    </span>

                    <p className="mt-4 text-lg leading-snug text-black">{t.content}</p>

                    <p className="mt-2 bg-linear-to-r from-[#E1306C] to-[#FCAF45] bg-clip-text text-sm tracking-wide text-transparent">
                      ★★★★★
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-neutral-300">
                        {t.image ? (
                          <Image
                            src={t.image}
                            alt={groupIndex === 0 ? t.name : ""}
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-neutral-300 flex justify-center items-center text-xs text-gray-900">
                            <span>{t.name.slice(0, 2).toUpperCase()}</span>
                          </div>
                        )}
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-bold text-black">{t.name}</p>
                        <p className="text-xs text-black">{t.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>

          {/* left blur */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-[#f7f7f7]/55 backdrop-blur-[6px] sm:w-24"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
            }}
          />

          {/* right blur */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-[#f7f7f7]/55 backdrop-blur-[6px] sm:w-24"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, black 20%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, black 0%, black 20%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
