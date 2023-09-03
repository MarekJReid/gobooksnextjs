// CoursePage.tsx
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
  console.log("product", product);
  return (
    <Layout>
      <FullScreenImage imageUrl={product.image} />

      <PageWrapper>
        <div className="flex-1 px-4 w-[90vw]">
          {" "}
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
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
}
export async function getStaticPaths() {
  const products: Product[] = await fetchProducts();

  // Use the slugify function here to convert product names to slugs
  const paths = products.map((product) => ({
    params: { course: slugify(product.name) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
// Use the fetchProducts function to fetch products
export async function getStaticProps({
  params,
}: {
  params: { course: string };
}) {
  const products = await fetchProducts();

  // Find the product by comparing the slugified name to the given course param
  const product = products.find((p) => slugify(p.name) === params.course);

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
}

export default CoursePage;
