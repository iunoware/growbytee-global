import CTASection from "@/src/components/CTASection";
import ChallengeSection from "./(components)/ChallengeSection";
import HowWeDeliver from "./(components)/HowWeDeliver";
import MoreThanMarketing from "./(components)/MoreThanMarketing";
import ServicesHero from "./(components)/ServicesHero";

export default function OurWorks() {
  return (
    <>
      <ServicesHero />
      <HowWeDeliver />
      <ChallengeSection />
      <MoreThanMarketing />
      <CTASection />
    </>
  );
}
