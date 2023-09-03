import React from "react";
import Image from "next/image";

interface SidebarProps {
  priceToUse: string;
  checkoutUrl: string;
}

const SidebarDesktop: React.FC<SidebarProps> = ({
  priceToUse,
  checkoutUrl,
}) => {
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
        <button className="bg-red-500 text-white rounded-md px-8 py-2">
          <a
            href={checkoutUrl && checkoutUrl}
            // open in new tab
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl no-underline hover:no-underline hover:text-white hover:scale-105 transition-transform"
          >
            Enrol Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default SidebarDesktop;
