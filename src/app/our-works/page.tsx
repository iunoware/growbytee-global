import CTASection from "@/src/components/CTASection";
import PageHero from "@/src/components/molecule/PageHero";
import WorksGrid from "./(components)/WorksGrid";

export default function OurWorks() {
  return (
    <>
      {/* <h1 className="h-screen grid place-items-center text-3xl text-white">Our works</h1> */}
      <PageHero
        title="Creating What Makes"
        highlight="Brands Grow"
        description="Explore our campaigns, creative work, branding, and digital experiences crafted to capture attention, strengthen brands, and drive meaningful results."
      />
      <WorksGrid />
      <CTASection />
    </>
  );
}
