"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradientbg";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgclassName,
  titleclassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string | React.ReactNode;
  imgclassName?: string | React.ReactNode;
  titleclassName?: string | React.ReactNode;
  spareImg?: string | React.ReactNode;
}) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('shriyojstha@gmail.com');
    setCopy(true)
  }

  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl border border-white/[0.1] bg-white  p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2]  dark:shadow-none ",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(210, 215, 217, 1) 0%, rgba(99, 99, 99, 1) 53%, rgba(43, 42, 40, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify justify-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={String(img)}
              alt={String(img)}
              className={cn(imgclassName, " object-cover  object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5
          ${id === 5 && "w-full opacity-80"}
          `}
        >
          {spareImg && (
            <img
              src={String(spareImg)}
              alt={String(spareImg)}
              className="object-cover w-full h-full object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleclassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-10 mb-25 flex flex-col px-5 p-5 lg:p-5"
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="lg:text-3xl max-w-96 z-10 text-white text-lg font-sans font-bold ">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-5">
                {["React", "NextJS", "", "TypeScript", "C++/SFML"].map(
                  (items) => {
                    return (
                      <span
                        key={items}
                        className="py-1 text-white lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {items}
                      </span>
                    );
                  }
                )}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-6 px-3 rounded-lg text-center bg-[#10132e]" />
                {["", "Node", "PostgreSQL", "C++"].map((items) => {
                  return (
                    <span
                      key={items}
                      className="py-2 text-white lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {items}
                    </span>
                  );
                })}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copy,
                    autoplay: copy,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copy ? "Email Copied!!" : "Copy my Email"}
                icon={<IoCopyOutline size={22} />}
                position="left"
                otherClasses="bg-[#131a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
