"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/IMG-20250626-WA0008.webp",
  "/IMG-20250626-WA0009.webp",
  "/IMG-20250626-WA0007.webp",
  "/IMG-20250626-WA0005.webp",
  "/IMG-20250626-WA0006.webp",
  "/IMG-20250606-WA0006.webp",
  "/IMG-20250617-WA0003.webp",
  "/WhatsApp-Image-2025-06-26-at-20.15.39_f0af19ab.webp",
];

const breakpointColumnsObj = {
  default: 2,
  1280: 2,
  1024: 2,
  640: 1,
};

export default function Life() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            onClick={() => {
              if (isLargeScreen) setActiveImage(image);
            }}
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

      {/* Lightbox overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black bg-opacity-80 z-[9999] px-4 flex items-center justify-center overflow-hidden"
            style={{
              touchAction: "none",
              overscrollBehavior: "none",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              key="image"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl rounded-xl shadow-2xl z-[10000]"
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={activeImage}
                  alt="Expanded"
                  fill
                  className="object-contain rounded-xl "
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
