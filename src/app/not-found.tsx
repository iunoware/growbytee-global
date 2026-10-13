import Image from "next/image";
import FadeIn from "@/src/components/molecule/FadeIn";
import GradientButton from "@/src/components/ui/GradientButton";

export const metadata = {
  title: "Page Not Found",
};

function Four() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block text-[8.5rem] leading-none sm:text-[12.5rem] md:text-[18rem]"
    >
      {/* back */}
      <span className="text-primary absolute top-0 left-0 translate-x-[0.06em] select-none">
        4
      </span>

      {/* front */}
      <span className="relative text-[#005B1F]">4</span>
    </span>
  );
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f7f7] px-6 text-center">
      <FadeIn>
        <div className="flex items-center justify-center gap-1 md:gap-2" aria-label="404">
          <Four />
          <Image
            src="/images/logo-4.svg"
            alt=""
            width={240}
            height={206}
            unoptimized
            priority
            className="h-24 w-auto sm:h-36 md:h-60"
          />
          <Four />
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h1 className="mt-8 text-2xl font-bold text-black md:text-3xl">
          Oops! This Page Doesn’t Exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm tracking-wide text-black md:text-base">
          The page you’re looking for may have moved or no longer be available. Let’s get
          you back on track.
        </p>
        <div className="mt-6">
          <GradientButton variant="background" href="/">
            Back to Home Page
          </GradientButton>
        </div>
      </FadeIn>
    </main>
  );
}
