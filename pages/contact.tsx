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
        className="flex flex-col md:flex-row w-full mt-[4rem] relative"
        style={{
          background: "#3489a7",
        }}
      >
        {/* Left container - holds the image */}
        <div className="display:md:w-1/2 w-full h-[200px] md:h-[97vh] md:block relative">
          <Image
            src="/gobooks.jpg"
            layout="fill"
            objectFit="cover"
            alt="Description of image"
          />
        </div>

        {/* Right container - holds the form and contact details */}
        <div className="w-full md:w-1/2  p-8 md:py-16 md:px-24 text-white relative">
          <h1 className="text-3xl mt-10 mb-6">We are here to help</h1>
          <h3 className="text-2xl mb-4">
            Fill out the form to reach out to us
          </h3>
          <ContactForm />

          <h3 className="text-2xl mt-12 mb-4">Or reach out to us</h3>

          <p className="mb-2">
            Opening Hours - 10:00 to 17:00 Monday to Friday
          </p>
          <p className="mb-2">16 Sydney Street</p>
          <p className="mb-2">Kilmore, 3764, Victoria</p>
          <a
            style={{ color: "white" }}
            href="mailto:contact@exploreeducationandtraining.com.au"
          >
            <p className="mb-2">
              Email: contact@exploreeducationandtraining.com.au
            </p>
          </a>
          <p className="mb-2">Phone: 0400393323</p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
