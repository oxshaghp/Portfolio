/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section className="flex justify-between items-center gap-4 mt-16">
      <div className="flex justify-start items-start gap-3 flex-col">
        <h1 className="md:text-5xl text-3xl font-bold">Hi, I'm Abdallah 👋</h1>
        <p className="lg:text-lg md:text-xl max-w-sm">
          Front-End Developer who loves turning ideas into interactive,
          beautiful websites. Always learning, always building.Let's connect on
          <a
            href="https://www.linkedin.com/in/abdullah-atef-b2061a324/"
            className="text-blue-500 underline mx-1"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div>
        <Image
          src="/WhatsApp-Image-2025-06-26-at-20.15.39_f0af19ab.webp"
          alt="hero"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
    </section>
  );
}

export default Hero;
