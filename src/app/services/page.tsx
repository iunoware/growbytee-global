import CTASection from "@/src/components/CTASection";
import ChallengeSection from "./(components)/ChallengeSection";
import HowWeDeliver from "./(components)/HowWeDeliver";
import MoreThanMarketing from "./(components)/MoreThanMarketing";
import ServicesHero from "./(components)/ServicesHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Tamil Nadu | SEO, Ads & Web | Growbytee Global",
  description:
    "Full service digital marketing agency in Tamil Nadu. SEO services, social media marketing, Google Ads management, branding and web development.",
};

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
