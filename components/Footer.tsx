import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 text-white" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading text-3xl text-center font-bold lg:max-w-[45vw] lg:text-5xl">
          Ready to take <span className="text-[#CBACF9]">your</span> digital
          presence to next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center lg:text-xl">
          Reach out to me today and let&apos;s discuss how can i help you to
          achieve your goals
        </p>
        <a href="mailto:shriyojstha@gmail.com">
          <MagicButton
            title="__Lets get in touch"
            icon={<FaLocationArrow />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 VOZ{" "}
        </p>
        <div className="flex items-center mt-5 md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[rgba(17,25,40,0.75)] rounded-lg border border-[rgba(255,255,255,0.175)]"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
