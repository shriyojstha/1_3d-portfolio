import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id='projects'>
      <h1 className="heading text-white md:text-4xl text-center text-xl">
        A small selection of
        <span className="text-[#CBACF9]"> Recent Projects</span>
      </h1>
      <div className="flex flex-col sm:flex-row text-white flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => {
          return (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[8-vw]"
              key={project.title}
            >
              <PinContainer title={project.title} href={project.link}>
                <div className="relative flex items-center justify-center sm:w-[500px] sm:h-[40vh] w-[80vw] overflow-hidden  h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute z-10 bottom-0"
                  />
                </div>
                <h1 className="font-bold text-base md:text-xl lg:text-xl line-clamp-1">
                  {project.title}
                </h1>
                <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2">
                  {project.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => {
                      return (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img
                            src={icon}
                            alt={icon}
                            className="p-2 rounded-full bg-black lg:w-8 lg:h-8 w-8 h-8 flex items-center justify-center"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-[#CBACF9]">
                      {" "}
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
