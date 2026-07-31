"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import OrbitImage from "./OrbitImage";
import type { OrbitGalleryProps } from "./types";

gsap.registerPlugin(useGSAP);

export default function OrbitGallery({
  images,
  radiusX = 520,
  radiusY = 260,
  imageWidth = 180,
  imageHeight = 230,
  speed = 30,
}: OrbitGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!images.length) return;

      const state = {
        angle: 0,
        isDragging: false,
        startX: 0,
        startAngle: 0,
      };

      const radiansPerSecond = (Math.PI * 2) / speed;
      const dragSensitivity = 0.005;

      const updateImages = () => {
        imageRefs.current.forEach((image, index) => {
          if (!image) return;

          const startingAngle = (index / images.length) * Math.PI * 2;
          const currentAngle = startingAngle + state.angle;

          const x = Math.cos(currentAngle) * radiusX;
          const y = Math.sin(currentAngle) * radiusY + 80;

          // const isBottomHalf = Math.sin(currentAngle) > 0;
          const verticalPosition = Math.sin(currentAngle);

          const fadeStart = -0.15;
          const fadeEnd = 0.3;

          const opacity = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(fadeEnd, fadeStart, 0, 1, verticalPosition),
          );

          gsap.set(image, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            opacity,
            // autoAlpha: isBottomHalf ? 0 : 1,
            // pointerEvents: isBottomHalf ? "none" : "auto",
            visibility: opacity <= 0.01 ? "hidden" : "visible",
            pointerEvents: opacity < 0.4 ? "none" : "auto",
          });
        });
      };

      const animate = (_time: number, deltaTime: number) => {
        if (!state.isDragging) {
          state.angle += radiansPerSecond * (deltaTime / 1000);
          updateImages();
        }
      };

      const handlePointerDown = (event: PointerEvent) => {
        state.isDragging = true;
        state.startX = event.clientX;
        state.startAngle = state.angle;

        const target = event.currentTarget as HTMLElement;
        target.setPointerCapture(event.pointerId);
      };

      const handlePointerMove = (event: PointerEvent) => {
        if (!state.isDragging) return;

        const distance = event.clientX - state.startX;

        state.angle = state.startAngle + distance * dragSensitivity;

        updateImages();
      };

      const handlePointerUp = (event: PointerEvent) => {
        state.isDragging = false;

        const target = event.currentTarget as HTMLElement;

        if (target.hasPointerCapture(event.pointerId)) {
          target.releasePointerCapture(event.pointerId);
        }
      };

      updateImages();
      gsap.ticker.add(animate);

      imageRefs.current.forEach((image) => {
        if (!image) return;

        image.addEventListener("pointerdown", handlePointerDown);
        image.addEventListener("pointermove", handlePointerMove);
        image.addEventListener("pointerup", handlePointerUp);
        image.addEventListener("pointercancel", handlePointerUp);
      });

      return () => {
        gsap.ticker.remove(animate);

        imageRefs.current.forEach((image) => {
          if (!image) return;

          image.removeEventListener("pointerdown", handlePointerDown);
          image.removeEventListener("pointermove", handlePointerMove);
          image.removeEventListener("pointerup", handlePointerUp);
          image.removeEventListener("pointercancel", handlePointerUp);
        });
      };
    },
    {
      scope: galleryRef,
      dependencies: [images, radiusX, radiusY, speed],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={galleryRef} className="relative h-162.5 w-full overflow-hidden">
      {images.map((image, index) => (
        <OrbitImage
          key={`${image}-${index}`}
          ref={(element) => {
            imageRefs.current[index] = element;
          }}
          src={image}
          alt={`Creative work ${index + 1}`}
          width={imageWidth}
          height={imageHeight}
          className="orbit-image"
        />
      ))}
    </div>
  );
}
