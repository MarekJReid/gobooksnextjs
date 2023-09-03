import React from "react";
import { AboutUsSectionProps } from "../../../types/types";
import Image from "next/image";

const LandingAboutUsSection: React.FC<AboutUsSectionProps> = ({
  id,
  index,
  image,
  heading,
  description,
  align,
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col md:flex-row h-[24rem] px-4 md:px-0 mb-[3.5rem] md:mb-[7.5rem] ${
        align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* <Image
        src={`/${image}${index}.jpg`}
        alt={heading}
        width={500}
        height={500}
        className="w-full md:w-1/2 h-auto object-cover"
      /> */}
      <div
        className={`w-full flex flex-col justify-center items-center ${
          align === "left" ? "md:pl-16" : "md:pr-16"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold">{heading}</h2>
        <p className="mt-2 text-2xl md:text-3xl text-center">{description}</p>
      </div>
    </div>
  );
};

export default LandingAboutUsSection;
