import React, { useState } from "react";

interface ArrowIconProps {
  isOpen: boolean;
}

const ArrowIcon: React.FC<ArrowIconProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <svg
      onClick={() => setIsOpen(!isOpen)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ease-in-out transform ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        d="M6 15L12 9L18 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
