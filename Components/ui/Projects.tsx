/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Projects as ProjectsData } from "@/Data/data";
import Image from "next/image";
import { FaGlobe, FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="mt-20 flex flex-col gap-8">
      <div>
        <h3 className="md:text-5xl mb-3 font-bold text-center">
          Check out my latest work
        </h3>
        <p className="text-center text-lg text-[var(--color-text)]">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {ProjectsData.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-400">{project.date}</span>
              </div>

              <p className="text-gray-300 text-[11px] mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skils.map((skill) => (
                  <span
                    key={skill.title}
                    className="px-3 py-1 text-xs bg-white/10 text-white rounded-full border border-white/20"
                  >
                    {skill.title}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <FaGlobe className="text-sm" />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <FaGithub className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
