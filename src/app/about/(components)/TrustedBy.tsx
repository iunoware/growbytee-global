import Image from "next/image";

const logos = [
  {
    src: "/images/client-logos/client-2.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-1.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-3.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-4.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-1.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-2.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-3.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-4.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-1.png",
    alt: "Digital marketing company in Tirunelveli",
  },
  {
    src: "/images/client-logos/client-2.png",
    alt: "Digital marketing company in Tirunelveli",
  },
];

const topRow = logos.slice(0, 5);
const bottomRow = logos.slice(5);

function LogoRow({ items, className = "" }: { items: typeof logos; className?: string }) {
  return (
    <div className={`grid grid-cols-2 items-center gap-6 md:grid-cols-5 ${className}`}>
      {items.map((logo, i) => (
        <div
          key={`${logo.src}-${i}`}
          className={`flex justify-center ${i % 2 === 0 ? "bg-[#9EE1B4] rounded-2xl" : ""}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={240}
            height={120}
            className="h-24 w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-16 md:px-10">
      <div className="grid items-center gap-10 md:grid-cols-[300px_1fr]">
        <h2 className="text-3xl font-bold text-black">
          <span className="bg-linear-to-r from-[#5851db] to-[#FD1D1D] bg-clip-text text-transparent">
            Trusted
          </span>{" "}
          By
        </h2>

        <div className="flex flex-col gap-6">
          {/* top row is shifted right, bottom row left, for the zigzag look */}
          <LogoRow items={topRow} className="md:pl-[10%]" />
          {/* <LogoRow items={bottomRow} className="md:pr-[10%]" /> */}
          <LogoRow items={bottomRow} className="md:pr-[10%]" />
        </div>
      </div>
    </section>
  );
}
