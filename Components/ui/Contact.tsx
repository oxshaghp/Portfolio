/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

function Contact() {
  return (
    <div className="mt-20 flex flex-col gap-8">
      <h3 className="md:text-5xl mb-3 font-bold text-center">Contact Me</h3>
      <p className="text-center text-lg text-[var(--color-text)]">
        Want to chat? Just shoot me a dm with a direct question on{" "}
        <a
          href="https://www.linkedin.com/in/abdullah-atef-b2061a324/"
          className="text-blue-500 underline mx-1"
        >
          LinkedIn
        </a>{" "}
        and I'll respond whenever I can. I will ignore all soliciting.
      </p>
      <div></div>
    </div>
  );
}

export default Contact;
