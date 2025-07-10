"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
  "/IMG-20250626-WA0008.webp",
  "/IMG-20250626-WA0009.webp",
  "/IMG-20250626-WA0007.webp",
  "/IMG-20250626-WA0005.webp",
];

const breakpointColumnsObj = {
  default: 2,
  1280: 2,
  1024: 2,
  640: 1,
};

export default function Life() {
  return (
    <section className="mt-16 px-4 max-w-7xl mx-auto relative">
      <h3 className="text-3xl font-bold mb-8">Life in Square</h3>

      {/* Gallery */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <Image
              src={image}
              alt={`Life moment ${index + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
}
