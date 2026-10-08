import FadeIn from "@/src/components/molecule/FadeIn";
import Image from "next/image";

// Add, remove or edit projects here, the grid updates automatically.
const works = [
  { title: "Page3 Saloon", image: "/images/digital-marketing-agency-tirunelveli.webp" },
  { title: "Rachnasbeauty", image: "/images/digital-marketing-company.webp" },
  { title: "Chopstix", image: "/images/social-media-marketing-tirunelveli.webp" },
  {
    title: "RSK Glass tech Interior",
    image: "/images/web-development-company-tirunelveli.webp",
  },
  { title: "Metro Masala", image: "/images/search-engine-optimization-services.webp" },
  { title: "Sisters Bake-O-Land", image: "/images/technical-seo-services.webp" },
];

export default function WorksGrid() {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 pb-20 sm:px-6">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
        {works.map((work, index) => (
          <FadeIn key={work.title} delay={(index % 2) * 0.15}>
            <div
              key={work.title}
              className="group relative border-8 border-gray-100 aspect-4/5 overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-800 ease-out group-hover:scale-110"
              />

              {/* bottom gradient so the title stays readable */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent" />

              <p className="absolute bottom-4 left-4 text-sm font-medium text-white sm:text-base">
                {work.title}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
