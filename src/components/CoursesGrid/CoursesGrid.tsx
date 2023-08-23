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
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-row justify-center flex align-center py-16 p-5 md:pt-[56px]`}
    >
      {products.map((product, i) => (
        <CourseCard product={product} key={i} />
      ))}
    </div>
  );
};

export default CoursesGrid;
