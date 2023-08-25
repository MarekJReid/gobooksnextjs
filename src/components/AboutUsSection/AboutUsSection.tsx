// Section.tsx

import React from "react";
import { AboutUsSectionProps } from "../../../types/types";
import Image from "next/image";

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  id,
  index,
  image,
  heading,
  description,
  align,
}) => {
  console.log("key", id);
  return (
    <div
      id={id}
      className={`flex flex-col md:flex-row h-[24rem]  mb-[3.5rem] md:mb-[7.5rem] ${
        align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <Image
        src={`/${image}${index}.jpg`}
        alt={heading}
        width={500}
        height={500}
        className="w-full md:w-1/3 h-auto object-cover"
      />
      <div
        className={`w-full md:w-2/3 pt-16 ${
          align === "left" ? "md:pl-16" : "md:pr-16"
        }`}
      >
        <h2 className="text-xl font-bold">{heading}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AboutUsSection;
