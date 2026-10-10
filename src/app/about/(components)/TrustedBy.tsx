import GradientText from "@/src/components/ui/GradientText";
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

// const topRow = logos.slice(0, 5);
// const bottomRow = logos.slice(5);

// function LogoRow({ items, className = "" }: { items: typeof logos; className?: string }) {
// function LogoRow({
//   items,
//   className = "",
//   offset = 0,
// }: {
//   items: typeof logos;
//   className?: string;
//   offset?: number;
// }) {
//   return (
//     <div
//       className={`grid grid-cols-2 items-center gap-4 md:gap-0 md:grid-cols-5 ${className}`}
//     >
//       {items.map((logo, i) => (
//         <div
//           key={`${logo.src}-${i}`}
//           // className={`flex justify-center ${i % 2 === 0 ? "bg-[#9EE1B4] rounded-2xl" : ""}`}
//           className={`flex h-30 items-center justify-center ${(i + offset) % 2 === 1 ? "bg-[#9EE1B4] rounded-2xl" : ""}`}
//         >
//           <Image
//             src={logo.src}
//             alt={logo.alt}
//             width={240}
//             height={120}
//             className="h-24 w-auto max-w-full object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

function LogoGrid({ items }: { items: typeof logos }) {
  return (
    <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-5 md:gap-2">
      {items.map((logo, i) => {
        // mobile (2 cols): checkerboard
        const mobileGreen = (Math.floor(i / 2) + i) % 2 === 0;
        // desktop (5 cols): boxes 2,4 on top row, 1,3,5 on bottom row
        const desktopGreen = i % 2 === 1;

        return (
          <div
            key={`${logo.src}-${i}`}
            className={`flex h-28 items-center justify-center rounded-2xl ${
              mobileGreen ? "max-md:bg-[#9EE1B4]" : ""
            } ${desktopGreen ? "md:bg-[#9EE1B4]" : ""}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={120}
              className="h-20 w-auto max-w-full object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-16 md:px-10">
      {/* <div className="grid items-center gap-10 md:grid-cols-[200px_1fr]"> */}
      <div className="grid items-center gap-6 md:grid-cols-[300px_1fr] md:gap-0">
        <h2 className="text-3xl font-bold text-black">
          {/* <span className="bg-linear-to-r from-[#5851db] to-[#FD1D1D] bg-clip-text text-transparent">
            Trusted
          </span>{" "} */}
          <GradientText>Trusted</GradientText> By
        </h2>

        <div className="flex flex-col gap-6">
          {/* top row is shifted right, bottom row left, for the zigzag look */}

          {/* <LogoRow items={topRow} offset={0} />
          <LogoRow items={bottomRow} offset={1} /> */}

          <LogoGrid items={logos} />
        </div>
      </div>
    </section>
  );
}
