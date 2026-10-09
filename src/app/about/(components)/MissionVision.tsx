import FadeIn from "@/src/components/molecule/FadeIn";
import LineFadeIn from "@/src/components/molecule/LineFadeIn";

export default function MissionVision() {
  return (
    <section className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-2">
      {/* Mission */}
      <div className="relative overflow-hidden bg-[#f7f7f7] p-8 md:p-10">
        <FadeIn>
          <h2 className="text-5xl font-bold text-[#252525]">Mission</h2>
        </FadeIn>

        <LineFadeIn>
          {/* <p className="mt-6 max-w-xl leading-tight text-4xl text-[#252525]"> */}
          <p className="mt-8 max-w-xl text-4xl/5 text-[#252525] italic">
            Empowering businesses through creativity, technology, and measurable growth.
          </p>
        </LineFadeIn>

        {/* decorative circle */}
        <div className="absolute -right-10 -bottom-24 size-72 rounded-full bg-white" />
      </div>

      {/* Vision */}
      <div className="relative flex flex-col items-end justify-end overflow-hidden bg-[linear-gradient(160deg,#FCAF45_0%,#F77737_20%,#E1306C_55%,#833AB4_85%,#5851db_100%)] p-8 text-right text-white md:p-10">
        <LineFadeIn>
          <p className="max-w-xl text-4xl">
            Building a future where every business thrives through digital innovation.
          </p>
        </LineFadeIn>

        <FadeIn>
          <h2 className="mt-6 text-5xl font-bold">Vision</h2>
        </FadeIn>

        {/* decorative circles */}
        <div className="absolute -top-10 right-6 size-24 rounded-full bg-white/10" />
        <div className="absolute bottom-32 left-6 size-20 rounded-full bg-white/10" />
      </div>
    </section>
  );
}
