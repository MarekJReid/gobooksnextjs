import React from "react";

interface SidebarProps {
  priceToUse: string;
  checkoutUrl: string;
}

const SidebarMobile: React.FC<SidebarProps> = ({ priceToUse, checkoutUrl }) => {
  const price = parseFloat(priceToUse) / 100;
  return (
    <div className="fixed bottom-0 w-full bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center px-4">
        <p className="text-lg text-green-500 line-through mr-2">
          ${(price * 1.25).toFixed(2)}
        </p>
        <p className="text-3xl font-bold mb-2">${price.toFixed(2)}</p>
      </div>
      <button className="bg-red-500 text-white rounded-md px-8 py-2">
        <a
          href={checkoutUrl && checkoutUrl}
          // open in new tab
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline hover:no-underline hover:text-white hover:scale-105 transition-transform"
        >
          Enrol Now
        </a>
      </button>
    </div>
  );
};

export default SidebarMobile;
