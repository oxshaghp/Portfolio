"use clint";
import React from "react";
import { Educattion } from "@/Data/data";
import Image from "next/image";
function Education() {
  return (
    <section>
      <h3 className="text-2xl font-bold mt-16 mb-7">Education</h3>
      <div>
        {Educattion.map((education, index) => (
          <div key={index} className="flex justify-between items-center w-full">
            <a
              href="https://thebes.edu.eg/ar"
              className="flex justify-center items-center gap-3"
            >
              <Image
                src={education.image}
                alt={education.title}
                width={100}
                height={100}
                className="w-10 h-10 rounded-full"
              />
              <p>{education.title}</p>
            </a>
            <p>{education.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
