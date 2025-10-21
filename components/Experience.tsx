import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";
// import { desc } from "motion/react-client";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading z-50 text-white md:text-4xl text-center text-xl">
        Work
        <span className="text-[#CBACF9]"> Experience</span>
      </h1>
      <div className="w-full mt-10 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div
              className="flex lg:flex-row flex-col
                lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2
                "
            >
              <div className="relative w-16 md:w-20 lg:w-32 h-16 md:h-20 lg:h-32">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="font-semibold text-start text-white-100 mt-3">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
