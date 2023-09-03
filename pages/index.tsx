/* eslint-disable react/no-children-prop */
import React from "react";
import data from "../data/aboutUsSections.json";
import CourseContactForm from "../src/components/CoursePageForm/CoursePageForm";
import CoursesGrid from "../src/components/CoursesGrid/CoursesGrid";
import Hero from "../src/components/Hero/Hero";
import LandingAboutUsSection from "../src/components/LandingAboutUsSection/LandingAboutUsSection";
import Layout from "../src/components/Layout";
import SEO from "../src/components/SEO";
const ProductsPage: React.FC = () => {
  const { description, image } = data[0];
  return (
    <Layout>
      <SEO title="Home" keywords={["website", "home", "main"]} />
      <Hero />
      <div className="container  flex md:flex-row flex-col-reverse mt-[6rem] ">
        <LandingAboutUsSection
          index={2}
          image={image}
          heading="Your future starts here"
          description={description}
          align={"left"}
        />
      </div>
      <CoursesGrid children={""} columns={0} />

      <CourseContactForm />
    </Layout>
  );
};

export default ProductsPage;
