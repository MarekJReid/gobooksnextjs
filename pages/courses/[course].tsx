import { GetStaticPaths, GetStaticProps } from "next";
import { fetchProducts } from "../../data/fetchProducts";
import Accordion from "../../src/components/Accordian/Accordian";
import courses from "../../data/courses.json";
import CourseContactForm from "../../src/components/CoursePageForm/CoursePageForm";
import PageWrapper from "../../src/components/CoursePageWrapper/CoursePageWrapper";
import Sidebar from "../../src/components/CourseSidebar/CourseSidebar";
import FullScreenImage from "../../src/components/FullPageImage";
import IntroductionSection from "../../src/components/IntroductionSection/IntroductionSection";
import Layout from "../../src/components/Layout";
import { Course, Product } from "../../types/types";
import { useState } from "react";

interface CourseProps {
  product: Course;
}

const CoursePage: React.FC<CourseProps> = ({ product }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  console.log("product.id", product.id);
  return (
    <Layout>
      <FullScreenImage imageUrl={`${product.id}`} />

      <PageWrapper>
        <div className="flex-1 px-4 w-[90vw]">
          {/* New addition to wrap the content */}
          <IntroductionSection
            courseName={product.title}
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
          checkoutUrl={product.button}
        />
      </PageWrapper>
    </Layout>
  );
};
// ...
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
}
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const products: Course[] = courses.courses;

    // Use the product.slug directly as the course param
    const paths = products.map((product) => ({
      params: { course: slugify(product.title) },
    }));

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
  // Ensure that params.course is a string
  const courseParam = params.course as string;

  // Access the courses array from the imported data
  const products: Course[] = courses.courses;

  // Find the product by comparing the slug directly to the given course param
  const product = products.find((p) => slugify(p.title) === courseParam);

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
