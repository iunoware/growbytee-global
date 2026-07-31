import Hero from "./(components)/Hero";
import BentoSection from "./(components)/BentoSection";
import StorySection from "./(components)/StorySection";
import CreativeUniverse from "./(components)/(creative universe)/CreativeUniverse";

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <BentoSection />
      <CreativeUniverse />
    </>
  );
}
