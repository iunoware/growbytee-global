"use client";

import GradientButton from "@/src/components/GradientButton";
import OrbitGallery from "./OrbitGallery";
import { galleryImages } from "./gallery-data";

export default function CreativeUniverse() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7]">
      <OrbitGallery
        images={galleryImages}
        radiusX={520}
        radiusY={250}
        imageWidth={180}
        imageHeight={230}
        speed={70}
      />

      <div className="pointer-events-none absolute pt-60 inset-0 z-10 flex items-center justify-center">
        <div className="pointer-events-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            Explore Our Creative{" "}
            <span className="bg-linear-to-r from-[#5851db] via-[#fd1d1d] to-[#fcaf45] bg-clip-text text-transparent">
              Universe.
            </span>
          </h2>

          <p className="mt-4 text-sm text-neutral-700 md:text-base">
            Every campaign begins with an idea and ends with measurable results.
          </p>

          <div className="mt-7">
            <GradientButton variant="background" href="/portfolio">
              Explore Our Work
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
