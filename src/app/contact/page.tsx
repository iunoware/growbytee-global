import ContactForm from "./(components)/ContactForm";
import FAQ from "./(components)/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Digital Marketing Agency in Tamil Nadu | Growbytee Global",
  description:
    "See how our online marketing agency drives leads for Tamil Nadu brands with local SEO, Meta ads, Instagram marketing and content that converts.",
};

export default function OurWorks() {
  return (
    <>
      <ContactForm />
      <FAQ />
    </>
  );
}
