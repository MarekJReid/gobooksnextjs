import React from "react";
import { useProducts } from "../../contexts/ProductContexts";

interface FullScreenImageProps {
  imageUrl: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <>
      <div
        className="w-full h-[70vh] bg-cover"
        style={{
          backgroundImage: `url(/${imageUrl}.jpg)`,
          backgroundSize: "cover", // Add this line to maintain aspect ratio
        }}
      ></div>
    </>
  );
};

export default FullScreenImage;
