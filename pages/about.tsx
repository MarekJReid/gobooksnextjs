import React from "react";
import data from "../data/aboutUsSections.json";
import { Link } from "react-scroll";
import AboutUsSection from "../src/components/AboutUsSection/AboutUsSection";
import Layout from "../src/components/Layout";
import SEO from "../src/components/SEO";
import Image from "next/image";

const SectionComponent: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Us" keywords={["website", "home", "main"]} />
      <div className="container mx-auto flex flex-col md:flex-row mt-[6rem]">
        <div className="hidden md:block w-full md:w-1/4 py-4 md:mt-12 md:pr-4">
          <div className="sticky top-[6rem]">
            {data.map((section, index) => (
              <Link
                key={index}
                to={`section-${index}`}
                smooth={true}
                offset={-96}
                duration={500}
                activeClass="active-link"
                className="block mb-4 cursor-pointer "
              >
                {section.heading}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4 px-4 md:px-0">
          {data.map((section, index) => {
            if (section.type === "intro") {
              return (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="flex flex-col items-center my-4 md:my-8"
                >
                  <Image
                    src="/about0.jpg"
                    alt={section.heading}
                    width={500}
                    height={500}
                    className="w-full object-cover md:object-contain md:h-[40rem]"
                  />
                  <h1 className="text-4xl font-bold text-center mt-4 md:mt-16 mb-4">
                    {section.heading}
                  </h1>
                  <p className="text-center mb-6 text-xl md:mb-[6rem] px-4 md:px-16">
                    {section.description}
                  </p>
                </div>
              );
            } else {
              return (
                <AboutUsSection
                  key={index}
                  index={index}
                  id={`section-${index}`}
                  image={section.image}
                  heading={section.heading}
                  description={section.description}
                  align={index % 2 === 0 ? "left" : "right"}
                />
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SectionComponent;
