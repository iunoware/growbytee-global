import CTASection from "@/src/components/CTASection";
import PageHero from "@/src/components/molecule/PageHero";
import WorksGrid from "./(components)/WorksGrid";
import { whatsappUrl } from "@/src/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works | Digital Marketing Agency Tamil Nadu | Growbytee Global",
  description:
    "See how our online marketing agency drives leads for Tamil Nadu brands with local SEO, Meta ads, Instagram marketing and content that converts.",
};

export default function OurWorks() {
  return (
    <>
      {/* <h1 className="h-screen grid place-items-center text-3xl text-white">Our works</h1> */}
      <PageHero
        title="Creating What Makes"
        highlight="Brands Grow"
        description="Explore our campaigns, creative work, branding, and digital experiences crafted to capture attention, strengthen brands, and drive meaningful results."
        href="/services"
        gradientButtonText="Explore our services"
        whatsappUrl={whatsappUrl}
      />
      <WorksGrid />
      <CTASection />
    </>
  );
}
