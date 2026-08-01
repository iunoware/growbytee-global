"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GradientButton from "@/src/components/GradientButton";
// import {} from "@heroicons/react/24/outline";
import { PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  // const [showPauseFeedback, setShowPauseFeedback] = useState(false);

  async function handlePlayToggle() {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Unable to toggle video playback:", error);
    }
  }

  async function handleAudioToggle() {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = !video.muted;
      setIsMuted(video.muted);

      // if (video.paused) {
      //   await video.play();
      // }
    } catch (error) {
      console.error("Unable to play video:", error);
    }
  }

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".hero-fade", {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.fromTo(
        ".hero-fade",
        {
          opacity: 0,
          x: -160,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".mobile-fade",
        {
          opacity: 0,
          x: 160,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-bg lg:pt-0 pt-10"
    >
      <div className="mx-auto grid w-full max-w-360 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 xl:px-16">
        {/* Left content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="hero-fade text-[2.6rem] font-normal leading-[1.15] tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
            We Turn Businesses Into
          </h1>
          {/* <br className="hidden hero-fade sm:block" /> */}
          <h1 className="hero-fade text-[2.6rem] font-normal leading-[1.15] tracking-[-0.04em] text-[#2b2b2b] sm:text-5xl lg:text-[4rem] xl:text-[4.45rem]">
            Brands People{" "}
            <span className="hero-fade bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text font-semibold text-transparent">
              Remember.
            </span>
          </h1>
          <p className="hero-fade mt-6 max-w-3xl text-sm italic leading-7 text-[#333333] sm:text-base sm:leading-8">
            From viral content to high-converting ad campaigns, we help brands increase
            reach, generate qualified leads, and drive measurable growth.
          </p>
          <div className="hero-fade mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <GradientButton variant="outline" href="/">
              Explore Success Stories
            </GradientButton>

            <GradientButton variant="background" href="/">
              Book a Strategy Call
            </GradientButton>

            {/* <Button type="background" text="Book a Strategy Call" /> */}
          </div>
        </div>

        {/* Right image */}
        {/* old video player */}
        <div className="mobile-fade relative flex items-center justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute bottom-3 cursor-none left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl"
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
            {/* Mute / unmute */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleAudioToggle();
              }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className={`pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-black/70 ${
                isPlaying ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="h-5 w-5" />
              ) : (
                <SpeakerWaveIcon className="h-5 w-5" />
              )}
            </button>

            {/* Play button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handlePlayToggle();
              }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`pointer-events-auto flex h-18 w-18 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isPlaying ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <PlayIcon className="ml-1 h-9 w-9" />
            </button>
          </div>

          {/* <div
            className={`absolute left-1/2 top-84 items-center p-2 justify-center rounded-full bg-black/55 text-white backdrop-blur-sm -translate-x-1/2 z-999 cursor-pointer ${
              isPlaying
                ? "pointer-events-none scale-75 opacity-0"
                : "pointer-events-auto scale-100 opacity-100"
            }`}
            onClick={handleAudioToggle}
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="text-white h-6 w-6" />
            ) : (
              <SpeakerWaveIcon className="text-white h-6 w-6" />
            )}
          </div>

          <button
            type="button"
            onClick={handlePlayToggle}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className={`absolute left-1/2 top-1/2 z-30 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              isPlaying
                ? "pointer-events-none scale-75 opacity-0"
                : "pointer-events-auto scale-100 opacity-100"
            }`}
          >
            <PlayIcon className="ml-1 h-9 w-9" />
          </button> */}

          <video
            ref={videoRef}
            src="/videos/hero-video-audio.mp4"
            autoPlay
            loop
            playsInline
            muted
            onClick={handlePlayToggle}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            preload="auto"
          ></video>
        </div>

        {/* new video player */}
        {/* <div className="mobile-fade relative flex items-center justify-center lg:justify-end">
          <div className="group relative w-fit overflow-hidden rounded-3xl">
            <div
              aria-hidden="true"
              className="absolute -bottom-2 left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl"
            />

            <video
              ref={videoRef}
              src="/videos/hero-video-audio.mp4"
              autoPlay
              loop
              playsInline
              muted={isMuted}
              preload="auto"
              onClick={handlePlayToggle}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="relative z-10 h-auto w-60 cursor-pointer object-contain sm:w-72 lg:w-80 xl:w-92"
            />

            <button
              type="button"
              onClick={handlePlayToggle}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute left-1/2 top-1/2 z-30 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isPlaying
                  ? "pointer-events-none scale-75 opacity-0"
                  : "pointer-events-auto scale-100 opacity-100"
              }`}
            >
              <PlayIcon className="ml-1 h-9 w-9" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleAudioToggle();
              }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-black/70"
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="h-6 w-6" />
              ) : (
                <SpeakerWaveIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
