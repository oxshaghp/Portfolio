/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

function About() {
  return (
    <section className="flex justify-start items-start gap-3 flex-col mt-12">
      <h3 className="text-2xl font-bold">About</h3>
      <p className="text-[var(--color-text)] text-sm">
        I'm a
        <strong className="text-white mx-1">Front-End Web Developer</strong>
        <strong className=" text-black underline mx-1 dark:text-white">
          with 2+ years of experience
        </strong>
        building fast, responsive, and visually polished web interfaces. I
        specialize in{" "}
        <strong className=" text-black underline mx-1 dark:text-white">
          HTML
        </strong>{" "}
        ,
        <strong className=" text-black underline mx-1 dark:text-white">
          css
        </strong>
        ,{" "}
        <strong className=" text-black underline mx-1 dark:text-white">
          javascript
        </strong>
        ,{" "}
        <strong className=" text-black underline mx-1 dark:text-white">
          Typescript
        </strong>
        ,{" "}
        <strong className=" text-black underline mx-1 dark:text-white">
          React
        </strong>
        ,{" "}
        <strong className=" text-black underline mx-1 dark:text-white">
          Astro
        </strong>
        ,
        <strong className=" text-black underline mx-1 dark:text-white">
          Next js
        </strong>
        , and modern styling tools like Tailwind CSS and SCSS. I care deeply
        about writing clean, maintainable code and delivering smooth, accessible
        user experiences. Recently, I’ve been exploring motion design and
        performance optimization to create more engaging and dynamic websites.
      </p>
    </section>
  );
}

export default About;
