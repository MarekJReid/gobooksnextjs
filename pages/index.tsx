/* eslint-disable react/no-children-prop */
import React from "react";
import CoursesGrid from "../src/components/CoursesGrid/CoursesGrid";
import Hero from "../src/components/Hero/Hero";
import Layout from "../src/components/Layout";
import SEO from "../src/components/SEO";

const ProductsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={["website", "home", "main"]} />
      <Hero />
      <CoursesGrid children={""} columns={0} />
    </Layout>
  );
};

export default ProductsPage;
