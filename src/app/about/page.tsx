import CTASection from "@/src/components/CTASection";
import PageHero from "@/src/components/ui/PageHero";

export default function OurWorks() {
  return (
    <>
      {/* <h1 className="h-screen grid place-items-center text-3xl text-white">About</h1> */}
      <PageHero
        title="Where Creativity Meets"
        highlight="Business Growth"
        description="We help businesses grow through creative marketing, innovative technology, and measurable results."
      />
      <CTASection />
    </>
  );
}
