"use client";

import Image from "next/image";
import FadeIn from "@/src/components/molecule/FadeIn";
import GradientText from "@/src/components/ui/GradientText";
import { useState } from "react";

const cards = [
  {
    front: {
      src: "/images/strategy-cards/frame-1-1.png",
      alt: "social media marketing agency",
    },
    back: {
      src: "/images/strategy-cards/frame-1-2.png",
      alt: "social media management services",
    },
  },
  {
    front: {
      src: "/images/strategy-cards/frame-2-1.png",
      alt: "instagram marketing agency",
    },
    back: {
      src: "/images/strategy-cards/frame-2-2.png",
      alt: "facebook advertising agency",
    },
  },
  {
    front: { src: "/images/strategy-cards/frame-3-1.png", alt: "meta ads agency" },
    back: { src: "/images/strategy-cards/frame-3-2.png", alt: "google ads management" },
  },
  {
    front: {
      src: "/images/strategy-cards/frame-4-1.png",
      alt: "performance marketing agency",
    },
    back: { src: "/images/strategy-cards/frame-4-2.png", alt: "lead generation agency" },
  },
];

export default function ChallengeSection() {
  // const fronts = images.slice(0, 4);
  // const backs = images.slice(4, 8);
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="px-6 py-16 md:px-14 bg-bg">
      <h2 className="text-3xl font-bold md:text-4xl text-gray-800">
        Your <GradientText>Challenge</GradientText>. Our{" "}
        <GradientText>Strategy</GradientText>
      </h2>
      <p className="mt-4 max-w-md text-sm italic text-gray-800">
        Every Business Has Unique Challenges. We Create Tailored Strategies That Turn Them
        Into Measurable Growth.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ front, back }, i) => (
          <FadeIn key={front.src} delay={i * 0.1}>
            <div className="group aspect-3/4 perspective-[1000px]">
              <div
                onClick={() => setFlipped(flipped === i ? null : i)}
                className={`relative card h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] ${flipped === i ? "transform-[rotateY(180deg)]" : ""}`}
              >
                {/* front */}
                <div className="absolute shadow-lg inset-0 overflow-hidden rounded-2xl backface-hidden">
                  <Image src={front.src} alt={front.alt} fill className="object-cover " />
                </div>

                {/* back (pre-rotated so it faces away until the flip) */}
                <div className="absolute shadow-lg inset-0 overflow-hidden rounded-2xl backface-hidden transform-[rotateY(180deg)]">
                  <Image src={back.src} alt={back.alt} fill className="object-cover " />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
