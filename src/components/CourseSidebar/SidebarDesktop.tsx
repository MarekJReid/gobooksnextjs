import React from "react";
import Image from "next/image";

interface SidebarProps {
  priceToUse: string;
}

const SidebarDesktop: React.FC<SidebarProps> = ({ priceToUse }) => {
  const price = parseFloat(priceToUse) / 100;
  return (
    <div className="flex flex-col sticky md:right-0 bg-white h-[66vh] md:top-[6vh] md:w-4/12 lg:w-3/12">
      {/* Image wrapper */}
      <div className="relative flex-grow">
        <Image
          src="/herohero1.jpg"
          alt="Descriptive alt text"
          layout="fill"
          objectFit="cover" // to ensure the image covers the entire container
          quality={100}
        />
      </div>

      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4 mt-4">
          START YOUR FUTURE TODAY
        </h2>
        <h2 className="text-5xl font-bold mb-4 mt-4">Enrol now</h2>
        <p className="text-5xl font-bold mb-2">${price.toFixed(2)}</p>
        <p className="text-2xl text-green-500 line-through">
          ${(price * 1.25).toFixed(2)}
        </p>
        <button className="bg-red-500 text-white text-2xl text-bold rounded-md px-16 py-4 mb-2">
          Enrol Now
        </button>
      </div>
    </div>
  );
};

export default SidebarDesktop;
