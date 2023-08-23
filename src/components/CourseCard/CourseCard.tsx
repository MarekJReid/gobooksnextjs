// CourseCard.tsx
import React from "react";
import Image from "next/image"; // Assuming you're using Next.js based on your code
import { Product } from "../../../types/types";

interface CourseCardProps {
  product: Product;
}

const CourseCard: React.FC<CourseCardProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex flex-col justify-center items-center w-full h-full bg-white p-5"
    >
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
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <div className="w-full flex flex-col md:flex-row justify-between md:space-x-4 p-4">
        <button className="w-full md:w-45 py-2 px-4 bg-blue-400 text-white rounded mb-4 md:mb-0">
          Pay Later
        </button>
        <a
          href={product.checkoutUrl && product.checkoutUrl}
          //open in new tab
          target="_blank"
          className="w-full md:w-45 py-2 px-4 bg-green-700 text-white rounded flex justify-center items-center"
        >
          Sign Up Now!
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
