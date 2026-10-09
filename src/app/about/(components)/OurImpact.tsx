"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GradientText from "@/src/components/ui/GradientText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { value: 150, suffix: "+", decimals: 0, label: "Happy Clients" },
  { value: 320, suffix: "+", decimals: 0, label: "Projects Delivered" },
  { value: 2.5, suffix: "M+", decimals: 1, label: "Audience Reached" },
  { value: 97, suffix: "%", decimals: 0, label: "Client Satisfaction" },
];

export default function OurImpact() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray<HTMLElement>(".counter");

      counters.forEach((el, i) => {
        const { value, suffix, decimals } = stats[i];
        const obj = { n: 0 };

        gsap.to(obj, {
          n: value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = obj.n.toFixed(decimals) + suffix;
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-[#f7f7f7] px-6 py-16 md:px-10">
      {/* <div className="grid gap-10 md:grid-cols-[300px_1fr]"> */}
      <div className="grid gap-10 md:grid-cols-3">
        <h2 className="text-5xl font-bold text-black">
          Our{" "}
          {/* <span className="bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text text-transparent">
            Impact
          </span> */}
          <GradientText>Impact</GradientText>
        </h2>

        <div className="flex flex-col gap-24">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="counter text-6xl font-bold text-black italic">
                0{stat.suffix}
              </p>
              <p className="text-sm text-black">{stat.label}</p>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </section>
  );
}
