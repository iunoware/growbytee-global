import Hero from "./(components)/Hero";
import BentoSection from "./(components)/BentoSection";
import StorySection from "./(components)/StorySection";
import CreativeUniverse from "./(components)/(creative universe)/CreativeUniverse";
import AcademyFaq from "./(components)/AcademyFaq";
import ProcessSection from "./(components)/ProcessSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <BentoSection />
      <CreativeUniverse />
      <AcademyFaq />
      <ProcessSection />
      <CTASection />
    </>
  );
}
