import { GetStaticPaths, GetStaticProps } from "next";
import { fetchProducts } from "../../data/productService";
import Accordion from "../../src/components/Accordian/Accordian";
import ContactForm from "../../src/components/ContactForm/ContactForm";
import CourseContactForm from "../../src/components/CoursePageForm/CoursePageForm";
import PageWrapper from "../../src/components/CoursePageWrapper/CoursePageWrapper";
import Sidebar from "../../src/components/CourseSidebar/CourseSidebar";
import FullScreenImage from "../../src/components/FullPageImage";
import IntroductionSection from "../../src/components/IntroductionSection/IntroductionSection";
import Layout from "../../src/components/Layout";
import { Product } from "../../types/types";
import { useState } from "react";

interface CourseProps {
  product: Product;
}

const CoursePage: React.FC<CourseProps> = ({ product }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  console.log("product.image", product);
  return (
    <Layout>
      <FullScreenImage imageUrl={product.image} />

      <PageWrapper>
        <div className="flex-1 px-4 w-[90vw]">
          {/* New addition to wrap the content */}
          <IntroductionSection
            courseName={product.name}
            courseDescription={product.description}
          />
          <Accordion
            sections={product.content}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <CourseContactForm />
        </div>

        <Sidebar
          priceToUse={product.price}
          price={0}
          checkoutUrl={product.checkoutUrl}
        />
      </PageWrapper>
    </Layout>
  );
};
// ...

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const products: Product[] = await fetchProducts();

    // Ensure products is an array
    if (!Array.isArray(products)) {
      console.error("Products is not an array:", products);
      return {
        paths: [],
        fallback: "blocking", // or any other appropriate value
      };
    }

    // Use the product.slug directly as the course param
    const paths = products.map((product) => ({
      params: { course: String(product.slug) }, // Convert to string
    }));
    console.log("paths", paths);
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      paths: [],
      fallback: "blocking", // or any other appropriate value
    };
  }
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: {
  params: { course: any }; // Ensure course is of type string
}) => {
  const products = await fetchProducts();

  // Find the product by comparing the slug directly to the given course param
  const product = products.find((p) => p.slug === params.course);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

// ...

export default CoursePage;
