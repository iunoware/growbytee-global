"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

import GradientButton from "@/src/components/ui/GradientButton";
import Image from "next/image";
import GradientText from "./ui/GradientText";

export type GrowthPreview = {
  brand: string;
  followers: string;
};

type GrowthPreviewModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: GrowthPreview) => void;
  initialValues?: GrowthPreview | null;
};

const inputClass =
  "w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-sm text-[#2b2b2b] placeholder:text-gray-400 focus:border-[#5851db] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5851db]/30";

export default function GrowthPreviewModal({
  open,
  onClose,
  onSubmit,
  initialValues,
}: GrowthPreviewModalProps) {
  const [brand, setBrand] = useState(initialValues?.brand ?? "");
  const [followers, setFollowers] = useState(initialValues?.followers ?? "");

  // Esc to close + lock page scroll while open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const b = brand.trim();
    const f = followers.trim();
    if (!b || !f) return;
    onSubmit({ brand: b, followers: f.toUpperCase() });
  };

  // Rendered into <body> with a normal z-index (NOT the browser top layer),
  // so a custom cursor with a higher z-index stays visible above it.
  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/50 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="growth-modal-title"
        // className="relative my-auto w-full max-w-2xl rounded-3xl bg-white px-6 pt-10 pb-8 shadow-2xl sm:px-10 sm:py-12"
        className="relative my-auto w-full max-w-3xl rounded-3xl bg-white px-6 pt-10 pb-8 shadow-2xl sm:px-10 sm:py-12"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-[#2b2b2b] transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-[#5851db] sm:top-6 sm:right-6"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="size-6"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <h2
          id="growth-modal-title"
          className="pr-10 text-3xl font-medium tracking-[-0.03em] text-[#111] sm:text-4xl"
        >
          Tell Us Your Growth <GradientText>Goal</GradientText>
        </h2>

        <p className="mt-5 max-w-md text-base leading-snug italic text-[#222] sm:text-lg">
          Tell us your brand name and growth goal. We&apos;ll give you a preview of what
          your success could look like with Growbytee.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4">
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter your brand name"
            aria-label="Brand name"
            maxLength={30}
            required
            autoFocus
            className={inputClass}
          />
          <input
            type="text"
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
            placeholder="e.g. 100K"
            aria-label="Follower goal"
            maxLength={8}
            required
            className={inputClass}
          />
          <div className="pt-2">
            <GradientButton variant="background" type="submit">
              Preview My Growth
            </GradientButton>
          </div>
        </form>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 sm:block"
        >
          <Image
            src="/images/modal-bg.png"
            alt="branding and digital marketing agency"
            fill
            sizes="(min-width: 640px) 40vw, 0px"
            className="object-contain object-bottom-right rounded-3xl"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
