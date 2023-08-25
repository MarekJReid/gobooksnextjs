import React from "react";
import data from "../data/aboutUsSections.json";
import { Link } from "react-scroll";
import AboutUsSection from "../src/components/AboutUsSection/AboutUsSection";
import Layout from "../src/components/Layout";
import SEO from "../src/components/SEO";
import Image from "next/image";

// ... other imports ...

const SectionComponent: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Us" keywords={["website", "home", "main"]} />
      <div className="container mx-auto flex md:flex-row flex-col-reverse mt-[6rem] sticky">
        <div className="w-full md:w-1/4 py-4 md:mt-12 md:pr-4 hidden md:block">
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
        <div className="w-full md:w-3/4 ">
          {data.map((section, index) => {
            if (section.type === "intro") {
              return (
                <div key={index} id={`section-${index}`}>
                  <Image
                    src="/about0.jpg"
                    alt={section.heading}
                    width={500}
                    height={500}
                    className="w-full h-[40rem] object-contain"
                  />
                  <h1 className="text-4xl font-bold text-center mb-4 mt-16">
                    {section.heading}
                  </h1>
                  <p className="text-center mb-[6rem] text-xl px-16">
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
