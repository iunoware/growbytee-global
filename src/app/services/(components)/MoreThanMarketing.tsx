"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FadeIn from "@/src/components/molecule/FadeIn";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  {
    value: 98,
    label: "Client Satisfaction",
    text: "Delivering reliable experiences and long-term partnerships.",
    bg: "bg-[#333333] text-white",
    height: "min-h-[350px]",
    numberSize: "text-7xl md:text-8xl",
  },
  {
    value: 186,
    label: "Average Reach Growth",
    text: "Helping brands expand their visibility and connect with wider audiences.",
    bg: "bg-[#4fc97a] text-[#333333]",
    height: "min-h-[280px]",
    numberSize: "text-6xl md:text-8xl",
  },
  {
    value: 42,
    label: "Conversion Growth",
    text: "Optimizing campaigns to turn attention into meaningful business results.",
    bg: "bg-[#a8e84f] text-[#333333]",
    height: "min-h-[180px]",
    numberSize: "text-5xl md:text-7xl",
  },
];

function Counter({ value, className }: { value: number; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `+${Math.round(obj.val)}`;
      },
    });
  });

  return (
    <span ref={ref} className={`font-bold leading-none ${className}`}>
      +0
    </span>
  );
}

export default function MoreThanMarketing() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl font-bold text-black">
            More Than{" "}
            <span className="bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text text-transparent">
              Marketing
            </span>
          </h2>
          <p className="mt-4 max-w-md text-sm italic text-gray-800">
            We Blend Strategy, Creativity, Technology, And Data To Drive Meaningful
            Business Growth.
          </p>
        </FadeIn>

        <div className="mt-16 flex flex-col items-stretch gap-0 md:flex-row md:items-end">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.15} className="flex-1">
              <div
                className={`flex flex-col justify-between p-8 rounded-xl md:rounded-none md:[clip-path:polygon(0_0,80%_0,100%_20%,100%_100%,0_100%)] ${stat.bg} ${stat.height}`}
              >
                <div className="flex items-start gap-2">
                  <Counter value={stat.value} className={stat.numberSize} />
                  <span className="text-xl font-semibold">(%)</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold">{stat.label}</h3>
                  <p className="mt-1 max-w-55 text-xs italic opacity-80">{stat.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
