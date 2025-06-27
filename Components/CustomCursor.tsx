"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 12 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 12 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };
    const lenisRoot = document.querySelector("[data-lenis-scroll]") || window;
    lenisRoot.addEventListener("mousemove", move as EventListener);

    return () => {
      lenisRoot.removeEventListener("mousemove", move as EventListener);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block custom-cursor fixed top-0 left-0 z-[999999] h-10 w-10 rounded-full bg-black dark:bg-transparent border pointer-events-none mix-blend-difference"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
}
