import React from "react";

interface SidebarProps {
  priceToUse: string;
}

const SidebarMobile: React.FC<SidebarProps> = ({ priceToUse }) => {
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
        Enrol Now
      </button>
    </div>
  );
};

export default SidebarMobile;
