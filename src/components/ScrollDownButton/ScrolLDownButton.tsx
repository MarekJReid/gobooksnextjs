// components/ScrollDownButton.tsx
import Image from "next/image";
import React from "react";
import DownArrow from "./DownArrow/DownArrow";
const ScrollDownButton: React.FC = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-center">
      <button
        onClick={handleScrollDown}
        className="mt-14 md:mt-24 text-white px-6 py-3 rounded  text-5xl"
      >
        See our courses below
        <div className="mt-16 animate-bounce">
          <DownArrow />
        </div>
      </button>
    </div>
  );
};

export default ScrollDownButton;
