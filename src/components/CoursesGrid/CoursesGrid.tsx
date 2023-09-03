// ThreeColumnGrid.tsx
import React, { ReactNode } from "react";
import { useProducts } from "../../../contexts/ProductContexts";
import Image from "next/image";
import CourseCard from "../CourseCard/CourseCard";

interface ThreeColumnGridProps {
  children: ReactNode;
  columns: number | undefined;
}

const CoursesGrid: React.FC<ThreeColumnGridProps> = ({ columns }) => {
  const { products } = useProducts();
  return (
    <>
      <h2 className="text-4xl mt-36 md:mt-0 md:text-5xl font-bold text-center">
        Find your course here
      </h2>
      <div
        className={`grid grid-cols-1 mb-24 md:grid-cols-3 gap-4 grid-flow-row justify-center flex align-center py-16 p-5 md:pt-[56px] `}
      >
        {products.map((product, i) => (
          <CourseCard product={product} key={i} slug={""} />
        ))}
      </div>
    </>
  );
};

export default CoursesGrid;
