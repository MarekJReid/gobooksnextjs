/* eslint-disable react/no-children-prop */
import React from "react";
import { useProducts } from "../contexts/ProductContexts";
import Image from "next/image";
import Layout from "../src/components/Layout";
import CoursesGrid from "../src/components/CoursesGrid/CoursesGrid";
import Hero from "../src/components/Hero/Hero";
import SEO from "../src/components/SEO";

const ProductsPage: React.FC = () => {
  const { products } = useProducts();
  console.log("products", products);
  return (
    <Layout>
      <SEO title="Home" keywords={["website", "home", "main"]} />
      <Hero />
      <CoursesGrid children={""} columns={0} />
    </Layout>
  );
};

export default ProductsPage;
