// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// import GradientButton from "@/src/components/ui/GradientButton";
// import { whatsappUrl } from "../lib/data";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// export default function CTASection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useGSAP(
//     () => {
//       const prefersReducedMotion = window.matchMedia(
//         "(prefers-reduced-motion: reduce)",
//       ).matches;

//       if (prefersReducedMotion) {
//         gsap.set(".cta-reveal", {
//           opacity: 1,
//           y: 0,
//         });

//         return;
//       }

//       gsap.fromTo(
//         ".cta-reveal",
//         {
//           opacity: 0,
//           y: 120,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.14,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     },
//     {
//       scope: sectionRef,
//     },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f7f7]"
//     >
//       <div className="mx-auto grid w-full max-w-360 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 xl:px-16">
//         {/* Left content */}
//         <div className="relative z-10 max-w-4xl">
//           <h2 className="cta-reveal text-[2.6rem] leading-[1.08] font-normal tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
//             Ready to Grow
//           </h2>

//           <h2 className="cta-reveal flex flex-wrap items-center text-[2.6rem] leading-[1.08] font-normal tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
//             <span className="relative mr-3 inline-flex items-center justify-center px-2">
//               {/* Oval circle */}
//               <span
//                 aria-hidden="true"
//                 className="pointer-events-none absolute top-1/2 left-1/2 h-full w-[120%] -translate-x-1/2 -translate-y-1/2 -rotate-18 rounded-[50%] border-2 border-black bg-[#eff8f2]/60"
//               />

//               {/* Gradient text */}
//               <span className="relative z-10 bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text font-semibold text-transparent">
//                 Your
//               </span>

//               {/* Arrow SVG */}
//               <Image
//                 src="/images/fancy-arrow.svg"
//                 alt=""
//                 width={45}
//                 height={55}
//                 aria-hidden="true"
//                 className="pointer-events-none absolute top-[78%] left-[52%] z-20 h-auto w-5 -translate-x-1/2 sm:w-10 lg:w-9"
//               />
//             </span>

//             <span className="relative z-10">Business</span>
//           </h2>

//           <p className="cta-reveal mt-6 max-w-2xl text-sm leading-7 italic text-[#333333] sm:text-base sm:leading-8">
//             Tell us your brand name and growth goal. We&apos;ll give you a preview of what
//             your success could look like with Growbytee.
//           </p>

//           <div className="cta-reveal mt-8">
//             <GradientButton
//               variant="background"
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Book a Free Strategy Call
//             </GradientButton>
//           </div>
//         </div>

//         {/* Right phone mockup */}
//         <div className="cta-reveal relative flex items-center justify-center lg:justify-end">
//           <div
//             aria-hidden="true"
//             className="absolute bottom-3 left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl"
//           />

//           <Image
//             src="/images/cta-mobile-img.png"
//             alt="Growbytee social media growth preview"
//             width={620}
//             height={850}
//             className="relative z-10 h-auto w-60 object-contain sm:w-72.5 lg:w-80"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import GradientButton from "@/src/components/ui/GradientButton";
import GrowthPreviewModal, { type GrowthPreview } from "./GrowthPreviewModal";
import { whatsappUrl } from "../lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [preview, setPreview] = useState<GrowthPreview | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".cta-reveal", {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.fromTo(
        ".cta-reveal",
        {
          opacity: 0,
          y: 120,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  const username = preview?.brand.toLowerCase().replace(/\s+/g, "");

  const handleSubmit = (data: GrowthPreview) => {
    setPreview(data);
    setModalOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f7f7]"
    >
      <div className="mx-auto grid w-full max-w-360 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 xl:px-16">
        {/* Left content */}
        <div className="relative z-10 max-w-4xl">
          <h2 className="cta-reveal text-[2.6rem] leading-[1.08] font-normal tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
            Ready to Grow
          </h2>

          <h2 className="cta-reveal flex flex-wrap items-center text-[2.6rem] leading-[1.08] font-normal tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-haspopup="dialog"
              aria-label="Open growth preview"
              className="relative mr-3 inline-flex cursor-pointer items-center justify-center px-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5851db]"
            >
              {/* Oval circle */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 h-full w-[120%] -translate-x-1/2 -translate-y-1/2 -rotate-18 rounded-[50%] border-2 border-black bg-[#eff8f2]/60"
              />

              {/* Gradient text */}
              <span className="relative z-10 bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text font-semibold text-transparent">
                Your
              </span>

              {/* Arrow SVG */}
              <Image
                src="/images/fancy-arrow.svg"
                alt="content marketing agency"
                width={45}
                height={55}
                aria-hidden="true"
                className="pointer-events-none absolute top-[78%] left-[52%] z-20 h-auto w-5 -translate-x-1/2 sm:w-10 lg:w-9"
              />
            </button>

            <span className="relative z-10">Business</span>
          </h2>

          <p className="cta-reveal mt-6 max-w-2xl text-sm leading-7 italic text-[#333333] sm:text-base sm:leading-8">
            Tell us your brand name and growth goal. We&apos;ll give you a preview of what
            your success could look like with Growbytee.
          </p>

          <div className="cta-reveal mt-8">
            <GradientButton
              variant="background"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Strategy Call
            </GradientButton>
          </div>
        </div>

        {/* Right phone mockup */}
        <div className="cta-reveal relative flex items-center justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl"
          />

          {/* @container so overlay text scales with the phone width */}
          <div className="@container relative z-10 w-60 sm:w-72.5 lg:w-80">
            <Image
              src="/images/cta-mobile-img.png"
              alt={
                preview
                  ? `Instagram preview for ${preview.brand} with ${preview.followers} followers`
                  : "Growbytee social media growth preview"
              }
              width={1236}
              height={2570}
              className="h-auto w-full object-contain"
            />

            {preview && (
              <div
                key={`${preview.brand}-${preview.followers}`}
                className="animate-[ctaFadeIn_0.6s_ease-out] font-semibold text-black"
              >
                {/* username (top bar) */}
                <span className="absolute top-[8.4%] left-[41%] flex h-[5%] w-[12.8%] items-center justify-center bg-white text-[4.2cqw] leading-none">
                  <span className="truncate">{username}</span>
                </span>

                {/* display name */}
                <span className="absolute top-[16.8%] left-[30%] flex h-[4%] w-[34%] items-center bg-white text-[5cqw] leading-none">
                  <span className="truncate">{preview.brand}</span>
                </span>

                {/* followers count */}
                <span className="absolute top-[20.2%] left-[47%] flex h-[3.4%] w-[22%] items-center bg-white text-[4.4cqw] leading-none">
                  {preview.followers}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <GrowthPreviewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialValues={preview}
      />

      <style>{`@keyframes ctaFadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </section>
  );
}
