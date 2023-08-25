/* eslint-disable react/no-children-prop */
import React from "react";

import Layout from "../src/components/Layout";

import SEO from "../src/components/SEO";
import ContactForm from "../src/components/ContactForm/ContactForm";
import Image from "next/image";

const ProductsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact Us" keywords={["website", "home", "main"]} />

      <div
        className="flex flex-col md:flex-row w-full h-[90vh"
        style={{
          background: "#3489a7",
        }}
      >
        {/* Left container - holds the image */}
        <div className="relative md:w-1/2 w-full h-[95vh] md:block">
          <Image
            src="/gobooks.jpg"
            layout="fill"
            objectFit="cover"
            alt="Description of image"
          />
        </div>

        {/* Right container - holds the form and contact details */}
        <div className="w-full md:w-1/2  p-8 md:py-16 md:px-24 text-white">
          <h1 className="text-3xl mb-6">We are here to help</h1>
          <h3 className="text-2xl mb-4">
            Fill out the form to reach out to us
          </h3>
          <ContactForm />

          <h3 className="text-2xl mt-12 mb-4">Or reach out to us</h3>
          <h5 className="text-xl mb-2">Phone: [Your Phone Number]</h5>
          <p className="text-base">
            16 Kilmore Rd,
            <br />
            Kilmore, Victoria, [Postcode]
          </p>
        </div>

        {/* Mobile image */}
        <div className="md:hidden w-full h-1/4">
          <Image
            src="/gobooks.jpg"
            layout="fill"
            objectFit="cover"
            alt="Description of image"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
