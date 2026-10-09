import ImageTrail from "./Imagetrail";

const IMAGES = [
  "https://picsum.photos/id/287/300/300",
  "https://picsum.photos/id/1001/300/300",
  "https://picsum.photos/id/1025/300/300",
  "https://picsum.photos/id/1026/300/300",
  "https://picsum.photos/id/1027/300/300",
  "https://picsum.photos/id/1028/300/300",
  "https://picsum.photos/id/1029/300/300",
  "https://picsum.photos/id/1030/300/300",
]; // replace with your own images from /public

function Gradient({ children }: { children: string }) {
  return (
    <span className="bg-linear-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export default function AboutStory() {
  return (
    <section className="bg-[#f7f7f7]">
      <ImageTrail
        items={IMAGES}
        className="flex min-h-[80vh] items-center justify-center overflow-hidden px-6"
      >
        <p className="max-w-4xl text-center text-5xl/12 font-bold text-[#252525] md:text-6xl/18">
          What started with a <Gradient>passion</Gradient> for{" "}
          <Gradient>creativity</Gradient> has grown into a team dedicated to helping{" "}
          <Gradient>businesses</Gradient> build <Gradient>stronger brands.</Gradient>
        </p>
      </ImageTrail>
    </section>
  );
}
