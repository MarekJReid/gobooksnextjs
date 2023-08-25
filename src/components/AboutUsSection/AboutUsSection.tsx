// Section.tsx

import React from "react";
import { AboutUsSectionProps } from "../../../types/types";

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  id,
  key,
  image,
  heading,
  description,
  align,
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col md:flex-row h-[24rem] m-[3.5rem] mb-[3.5rem] md:mb-[7.5rem] ${
        align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/3 h-4/4 bg-green-500"></div>
      {/* <Image
        src={image}
        alt={heading}
        className="w-full md:w-1/3 h-auto object-cover"
      /> */}
      <div className="w-full md:w-2/3 pl-4 pr-4">
        <h2 className="text-xl font-bold">{heading}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AboutUsSection;
