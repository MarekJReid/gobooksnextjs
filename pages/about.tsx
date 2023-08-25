import React from "react";
import data from "../data/aboutUsSections.json";
import { Link } from "react-scroll";
import AboutUsSection from "../src/components/AboutUsSection/AboutUsSection";
import Layout from "../src/components/Layout";
import SEO from "../src/components/SEO";

const SectionComponent: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Us" keywords={["website", "home", "main"]} />
      <div className="container mx-auto flex md:flex-row flex-col-reverse mt-[6rem]">
        <div className="w-full md:w-1/4 py-4 md:mt-12 md:pr-4 hidden md:block">
          <div className="sticky top-[6rem]">
            {data.map((section, index) => (
              <Link
                key={index}
                to={`section-${index}`}
                smooth={true}
                offset={-96}
                duration={500}
                className="block mb-4 cursor-pointer hover:text-blue-500"
              >
                {section.heading}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4">
          {data.map((section, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className="mt-[-6rem] pt-[6rem]">
              <AboutUsSection
                key={index}
                id={`section-${index}`}
                image={section.image}
                heading={section.heading}
                description={section.description}
                align={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SectionComponent;
