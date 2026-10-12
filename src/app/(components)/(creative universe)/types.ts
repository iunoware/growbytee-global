export interface OrbitImage {
  id: number;
  src: string;
}

export interface OrbitGalleryProps {
  images: string[];
  alts: string[];
  radiusX?: number;
  radiusY?: number;
  imageWidth?: number;
  imageHeight?: number;
  speed?: number;
}
