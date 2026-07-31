import Image from "next/image";
import { forwardRef } from "react";
import type { CSSProperties } from "react";

interface OrbitImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

const OrbitImage = forwardRef<HTMLDivElement, OrbitImageProps>(
  ({ src, alt, width = 220, height = 280, className = "", style }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute top-1/2 left-1/2 cursor-grab select-none touch-none active:cursor-grabbing ${className}`}
        style={{
          width,
          height,
          willChange: "transform",
          ...style,
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={src}
            alt={alt}
            fill
            draggable={false}
            sizes="(max-width: 768px) 140px, 220px"
            className="pointer-events-none object-cover"
          />
        </div>
      </div>
    );
  },
);

OrbitImage.displayName = "OrbitImage";

export default OrbitImage;
