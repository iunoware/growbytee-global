import CTASection from "@/src/components/CTASection";
import AboutHero from "./(components)/AboutHero";
import AboutStory from "./(components)/AboutStory";
import MissionVision from "./(components)/MissionVision";
import OurImpact from "./(components)/OurImpact";
import TrustedBy from "./(components)/TrustedBy";
import TestimonialSection from "./(components)/TestimonialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brand | Digital Growth Agency in Tamil Nadu | Growbytee Global",
  description:
    "We're a digital marketing company in Tamil Nadu helping businesses grow through SEO, performance marketing and branding that delivers.",
};

export default function OurWorks() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <OurImpact />
      <TrustedBy />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
