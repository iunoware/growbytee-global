import CTASection from "@/src/components/CTASection";
import AboutHero from "./(components)/AboutHero";
import AboutStory from "./(components)/AboutStory";

export default function OurWorks() {
  return (
    <>
      {/* <h1 className="h-screen grid place-items-center text-3xl text-white">About</h1> */}
      <AboutHero />
      <AboutStory />
      <CTASection />
    </>
  );
}
