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
  return (
    <div
      id={id}
      className={`flex flex-col md:flex-row md:mb-[7.5rem] ${
        align === "right" ? "md:flex-row-reverse" : ""
      } pb-4 md:pb-0`}
    >
      <Image
        src={`/${image}${index}.jpg`}
        alt={heading}
        width={500}
        height={500}
        className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0"
      />
      <div
        className={`w-full md:w-2/3 pt-4 md:pt-16 ${
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
