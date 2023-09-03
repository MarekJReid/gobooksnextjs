import React from "react";
import { useProducts } from "../../contexts/ProductContexts";

interface FullScreenImageProps {
  imageUrl: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl }) => {
  const { products } = useProducts();
  const image = products[0].image;
  return (
    <div
      className="w-full h-[70vh] bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover", // Add this line to maintain aspect ratio
      }}
    ></div>
  );
};

export default FullScreenImage;
