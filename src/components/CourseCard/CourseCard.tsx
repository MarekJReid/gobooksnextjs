import React from "react";
import Image from "next/image";
import { Product } from "../../../types/types";
import Link from "next/link";

interface CourseCardProps {
  product: Product;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ product }) => {
  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes
  }
  return (
    <div
      key={product.id}
      className="transform transition-transform hover:scale-105 flex flex-col justify-center items-center w-full h-full bg-white p-5"
    >
      <Link
        href={`/courses/${encodeURIComponent(slugify(product.name))}`}
        className="no-underline hover:no-underline"
      >
        <div className="group cursor-pointer flex flex-col justify-center items-center">
          {product.image ? (
            <Image
              src={product.image}
              width={500}
              height={500}
              alt="Product Image"
            />
          ) : (
            <div className="w-[90vw] md:w-[30vw] lg:w-[25vw] h-[20vh] bg-red-500"></div>
          )}
          <h2 className="text-center">{product.name}</h2>
          <p className="">{product.description}</p>
          <h2 className="">${(parseFloat(product.price) / 100).toFixed(2)}</h2>
        </div>
      </Link>
      <div className="w-full flex flex-col md:flex-row justify-center md:space-x-4 p-4">
        <a
          href={product.checkoutUrl && product.checkoutUrl}
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
