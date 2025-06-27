"use client";
import React from "react";
import { Skils as SkilsData } from "@/Data/data";
import { Button } from "./button";

function Skils() {
  return (
    <div className="mt-16 flex flex-col gap-3">
      <h3 className="text-2xl font-bold">Skils</h3>
      <div className="flex flex-wrap gap-3">
        {SkilsData.map((skill) => (
          <Button
            variant="outline"
            className="text-[12px] h-6 bg-white text-black font-bold"
            key={skill.title}
          >
            {skill.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Skils;
