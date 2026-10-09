// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import PageHero from "@/src/components/molecule/PageHero";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const STORY =
//   "Every great brand starts with a vision. We turn ideas into digital experiences that inspire growth.";

// const HIGHLIGHTED = ["vision", "growth"];

// // Splits text into word spans so GSAP can reveal them one by one.
// // Normal words: gray -> black (color tween).
// // Highlighted words: gray base + gradient overlay that fades in on top.
// function Words({ text, name }: { text: string; name: string }) {
//   return (
//     <>
//       {text.split(" ").map((word, i) => {
//         const isHighlighted = HIGHLIGHTED.includes(word.replace(/[.,!?]/g, ""));

//         if (isHighlighted) {
//           return (
//             <span key={i}>
//               <span className={`${name} relative inline-block`}>
//                 <span className="text-[#b0b0b5]">{word}</span>
//                 <span
//                   aria-hidden
//                   className="gradient-overlay absolute inset-0 bg-linear-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent opacity-0"
//                 >
//                   {word}
//                 </span>
//               </span>{" "}
//             </span>
//           );
//         }

//         return (
//           <span key={i}>
//             <span className={`${name} text-[#b0b0b5]`}>{word}</span>{" "}
//           </span>
//         );
//       })}
//     </>
//   );
// }

// export default function Hero() {
//   const root = useRef<HTMLElement>(null);

//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: root.current,
//           start: "top top",
//           end: "+=1000%", // total scroll distance of the whole sequence
//           pin: true,
//           scrub: 1,
//         },
//       });

//       tl
//         // 1. black box slides up over the hero
//         .fromTo(".box-layer", { yPercent: 100 }, { yPercent: 0, ease: "none" })
//         // 2. green section slides up over the box
//         .fromTo(".green-layer", { yPercent: 100 }, { yPercent: 0, ease: "none" })
//         // 3. "OUR STORY" gray -> black, word by word
//         .to(".title-word", { color: "#000", stagger: 0.5, ease: "none" })
//         // 4. title fades out, paragraph fades in
//         .to(".title", { opacity: 0 }, "+=0.5")
//         .to(".story", { opacity: 1 })
//         // 5. paragraph gray -> black, word by word
//         .addLabel("story");

//       const words = root.current!.querySelectorAll(".story-word");
//       words.forEach((word, i) => {
//         const overlay = word.querySelector(".gradient-overlay");
//         const position = `story+=${i * 0.3}`;

//         if (overlay) {
//           tl.to(overlay, { opacity: 1, duration: 0.3, ease: "none" }, position);
//         } else {
//           tl.to(word, { color: "#000", duration: 0.3, ease: "none" }, position);
//         }
//       });

//       // 6. images pop in one after another, after all the text is done
//       tl.fromTo(
//         ".img-1",
//         { opacity: 0, y: 60, scale: 0.8 },
//         { opacity: 1, y: 0, scale: 1, ease: "none", duration: 1 },
//         ">",
//       ).fromTo(
//         ".img-2",
//         { opacity: 0, y: 60, scale: 0.8 },
//         { opacity: 1, y: 0, scale: 1, ease: "none", duration: 1 },
//         ">",
//       );
//     },
//     { scope: root },
//   );

//   return (
//     <section ref={root} className="relative h-screen overflow-hidden">
//       {/* Original hero */}
//       <div className="absolute inset-0 z-0">
//         <PageHero
//           title="Where Creativity Meets"
//           highlight="Business Growth"
//           description="We help businesses grow through creative marketing, innovative technology, and measurable results."
//         />
//       </div>

//       {/* Black box (video placeholder) */}
//       <div className="box-layer absolute inset-0 z-10 bg-[#f7f7f7] p-6 md:p-12">
//         <div className="relative flex h-full w-full flex-col items-center justify-center rounded-4xl bg-black text-white">
//           {/* Future landscape video: uncomment and remove the play-button block below
//           <video
//             src="/videos/reel.mp4"
//             className="absolute inset-0 h-full w-full rounded-4xl object-cover"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//           */}

//           {/* play button block */}
//           <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M8 5v14l11-7z" />
//           </svg>
//           <span className="mt-2 text-lg font-semibold">Show reel</span>
//         </div>
//       </div>

//       {/* Green "Our story" section */}
//       <div className="green-layer absolute inset-0 z-20 bg-[#92ffb9]">
//         <h2 className="title absolute inset-0 flex items-center justify-center text-4xl font-bold uppercase md:text-6xl">
//           <span>
//             <span className="title-word text-[#b0b0b5]">Our</span>{" "}
//             <span className="title-word text-[#b0b0b5]">Story</span>
//           </span>
//         </h2>

//         <p className="story absolute inset-x-0 top-28 max-w-4xl px-8 text-3xl font-bold opacity-0 md:px-16 md:text-6xl">
//           <Words text={STORY} name="story-word" />
//         </p>

//         {/* Images (replace the src paths with your own) */}
//         <div className="img-1 absolute top-20 right-6 h-44 w-36 rotate-[8deg] overflow-hidden rounded-3xl opacity-0 md:top-32 md:right-32 md:h-96 md:w-72">
//           <Image
//             src="/images/google-business-profile-optimization.webp"
//             alt="Team brainstorming with sticky notes"
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="img-2 absolute top-60 right-2 h-40 w-40 rotate-[-8deg] overflow-hidden rounded-3xl opacity-0 md:top-104 md:right-12 md:h-80 md:w-80">
//           <Image
//             src="/images/search-engine-marketing.webp"
//             alt="Developer working at a desk"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "@/src/components/molecule/PageHero";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STORY =
  "Every great brand starts with a vision. We turn ideas into digital experiences that inspire growth.";

const HIGHLIGHTED = ["vision", "growth"];

// Splits text into word spans so GSAP can reveal them one by one.
// Normal words: gray -> black (color tween).
// Highlighted words: gray base + gradient overlay that fades in on top.
function Words({ text, name }: { text: string; name: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => {
        const isHighlighted = HIGHLIGHTED.includes(word.replace(/[.,!?]/g, ""));

        if (isHighlighted) {
          return (
            <span key={i}>
              <span className={`${name} relative inline-block`}>
                <span className="text-[#b0b0b5]">{word}</span>
                <span
                  aria-hidden
                  className="gradient-overlay absolute inset-0 bg-linear-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent opacity-0"
                >
                  {word}
                </span>
              </span>{" "}
            </span>
          );
        }

        return (
          <span key={i}>
            <span className={`${name} text-[#b0b0b5]`}>{word}</span>{" "}
          </span>
        );
      })}
    </>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=900%", // total scroll distance of the whole sequence
          pin: true,
          scrub: 1,
        },
      });

      tl
        // 1. black box slides up over the hero
        .fromTo(".box-layer", { yPercent: 100 }, { yPercent: 0, ease: "none" })
        // 2. green section slides up over the box
        .fromTo(".green-layer", { yPercent: 100 }, { yPercent: 0, ease: "none" })
        // 3. "OUR STORY" gray -> black, word by word
        .to(".title-word", { color: "#000", stagger: 0.5, ease: "none" })
        // 4. title fades out, paragraph fades in
        .to(".title", { opacity: 0 }, "+=0.5")
        .to(".story", { opacity: 1 })
        // 5. paragraph gray -> black, word by word
        .addLabel("story");

      const words = root.current!.querySelectorAll(".story-word");
      words.forEach((word, i) => {
        const overlay = word.querySelector(".gradient-overlay");
        const position = `story+=${i * 0.3}`;

        if (overlay) {
          tl.to(overlay, { opacity: 1, duration: 0.3, ease: "none" }, position);
        } else {
          tl.to(word, { color: "#000", duration: 0.3, ease: "none" }, position);
        }
      });

      // 6. images pop in one after another, after all the text is done
      tl.fromTo(
        ".img-1",
        { opacity: 0, y: 60, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, ease: "none", duration: 1 },
        ">",
      ).fromTo(
        ".img-2",
        { opacity: 0, y: 60, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, ease: "none", duration: 1 },
        ">",
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-screen overflow-hidden">
      {/* Original hero */}
      <div className="absolute inset-0 z-0">
        <PageHero
          title="Where Creativity Meets"
          highlight="Business Growth"
          description="We help businesses grow through creative marketing, innovative technology, and measurable results."
        />
      </div>

      {/* Black box (video placeholder) */}
      <div className="box-layer absolute inset-0 z-10 bg-[#f7f7f7] p-6 md:p-12">
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-4xl bg-black text-white">
          {/* Future landscape video: uncomment and remove the play-button block below
          <video
            src="/videos/reel.mp4"
            className="absolute inset-0 h-full w-full rounded-4xl object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          */}

          {/* play button block */}
          <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="mt-2 text-lg font-semibold">Show reel</span>
        </div>
      </div>

      {/* Green "Our story" section */}
      <div className="green-layer absolute inset-0 z-20 bg-[#92ffb9]">
        <h2 className="title absolute inset-0 flex items-center justify-center text-4xl font-bold uppercase md:text-6xl">
          <span>
            <span className="title-word text-[#b0b0b5]">Our</span>{" "}
            <span className="title-word text-[#b0b0b5]">Story</span>
          </span>
        </h2>

        <p className="story absolute inset-x-0 top-28 max-w-4xl px-8 text-4xl font-bold opacity-0 md:px-16 md:text-6xl">
          <Words text={STORY} name="story-word" />
        </p>

        {/* Images (replace the src paths with your own) */}
        <div className="img-1 absolute top-88 left-10 h-60 w-52 rotate-[8deg] overflow-hidden rounded-3xl opacity-0 md:top-32 md:right-32 md:left-auto md:h-96 md:w-72">
          <Image
            src="/images/google-business-profile-optimization.webp"
            alt="Team brainstorming with sticky notes"
            fill
            className="object-cover"
          />
        </div>

        <div className="img-2 absolute top-120 right-10 h-56 w-56 rotate-[-8deg] overflow-hidden rounded-3xl opacity-0 md:top-104 md:right-12 md:h-80 md:w-80">
          <Image
            src="/images/search-engine-marketing.webp"
            alt="Developer working at a desk"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
