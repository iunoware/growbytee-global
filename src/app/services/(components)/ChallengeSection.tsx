"use client";

import Image from "next/image";
import FadeIn from "@/src/components/molecule/FadeIn";
import GradientText from "@/src/components/ui/GradientText";
import { useState } from "react";

// Put your 8 images in /public/services/ and list them here.
// Index 0-3 = front faces, index 4-7 = back faces (1 -> 5, 2 -> 6, ...)
const images = [
  "/images/strategy-cards/frame-1-1.png",
  "/images/strategy-cards/frame-2-1.png",
  "/images/strategy-cards/frame-3-1.png",
  "/images/strategy-cards/frame-4-1.png",

  "/images/strategy-cards/frame-1-2.png",
  "/images/strategy-cards/frame-2-2.png",
  "/images/strategy-cards/frame-3-2.png",
  "/images/strategy-cards/frame-4-2.png",
];

export default function ChallengeSection() {
  const fronts = images.slice(0, 4);
  const backs = images.slice(4, 8);
  const [flipped, setFlipped] = useState<number | null>(null);

  // function flipCards(e: any) {
  //   e.preventDefault();
  //   const element = document.getElementsByClassName(".card");

  //   if (flipCard) {
  //     element.classList.add("transform-[rotateY(180deg)]");
  //   } else {
  //     element.classList.add("transform-[rotateY(0deg)]");
  //   }
  // }

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
        {fronts.map((front, i) => (
          <FadeIn key={front} delay={i * 0.1}>
            {/* perspective gives the flip its 3D depth */}
            <div className="group aspect-3/4 perspective-[1000px]">
              {/* this inner div is the one that rotates */}
              <div
                onClick={() => setFlipped(flipped === i ? null : i)}
                className={`relative card h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] ${flipped === i ? "transform-[rotateY(180deg)]" : ""}`}
              >
                {/* front */}
                <div className="absolute shadow-lg inset-0 overflow-hidden rounded-2xl backface-hidden">
                  <Image
                    src={front}
                    alt={`Challenge ${i + 1}`}
                    fill
                    className="object-cover "
                  />
                </div>

                {/* back (pre-rotated so it faces away until the flip) */}
                <div className="absolute shadow-lg inset-0 overflow-hidden rounded-2xl backface-hidden transform-[rotateY(180deg)]">
                  <Image
                    src={backs[i]}
                    alt={`Strategy ${i + 1}`}
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
