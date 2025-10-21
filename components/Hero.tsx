"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { GiMapleLeaf } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white " />

        <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319]">
          <div
            className={cn(
              "fixed inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_0px,transparent_1px),linear-gradient(to_bottom,#262626_0px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}

          <div className="fixed pointer-events-none  inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
              <h2 className=" uppercase text-white"> Hey MotherFuckers</h2>
              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Hello Jantas, Welcome to Voz D. Shrestha's Portfolio"
              />

              <p className="text-black text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl dark:text-white">
                Hey Its me voz
              </p>

              <a href="#about">
                <MagicButton
                  title="see my work, Nigga!!"
                  otherClasses="gap-2"
                  icon={<GiMapleLeaf size={25} />}
                  position="left"
                  handleClick={() => {}}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
