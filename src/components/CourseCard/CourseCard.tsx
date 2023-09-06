import React from "react";
import Image from "next/image";
import { Course } from "../../../types/types";
import Link from "next/link";
interface CourseCardProps {
  product: Course;
  slug: string;
  id: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ product, id }) => {
  console.log("product", product);
  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes
  }
  return (
    <div
      key={id}
      className="transform transition-transform hover:scale-105 flex flex-col justify-between items-center w-full  bg-white p-5"
    >
      <Link
        href={`/courses/${encodeURIComponent(slugify(product.title))}`}
        className="no-underline hover:no-underline "
      >
        <div className="group cursor-pointer flex flex-col  items-center pt-6">
          <Image
            src={`/${id}.jpg`}
            width={500}
            height={500}
            alt="Product Image"
          />
          <h2 className="text-center mt-6">{product.title}</h2>
          <div className="flex flex-col  mt-6 h-[300px] items-center justify-between h-full">
            <p className="font-semibold">{product.description}</p>
            <h2 className="text-7xl text-blue-900 ">${product.price}</h2>
          </div>
        </div>
      </Link>
      <div className="w-full flex flex-col md:flex-row justify-center md:space-x-4 p-4">
        <a
          href={product.button && product.button}
          // open in new tab
          target="_blank"
          rel="noopener noreferrer"
          className="w-[90%] md:w-45 py-4 px-4 bg-green-700 text-white text-2xl rounded flex justify-center items-center no-underline hover:no-underline hover:text-white hover:scale-105 transition-transform"
        >
          Sign Up Now!
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
