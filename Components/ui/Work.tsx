"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/accordion";
import { workData } from "@/Data/data";

function Work() {
  return (
    <section>
      <h3 className="text-2xl font-bold mt-16">Work Experience</h3>
      <div>
        <Accordion type="single" collapsible>
          {workData.map((work, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger imageSrc={work.image} title={work.title} />
              <AccordionContent>
                <div className="space-y-2">
                  <p className="text-sm text-[var(--color-white)] font-medium">
                    {work.date}
                  </p>
                  <p className="text-[var(--color-text)]">{work.description}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Work;
