import React from "react";
import { useProducts } from "../../contexts/ProductContexts";

interface FullScreenImageProps {
  imageUrl: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl }) => {
  const { products } = useProducts();
  console.log("products[0]", products[0]);
  return (
    <>
      {products[0] && (
        <div
          className="w-full h-[70vh] bg-cover"
          style={{
            backgroundImage: `url(${products[0].image})`,
            backgroundSize: "cover", // Add this line to maintain aspect ratio
          }}
        ></div>
      )}
    </>
  );
};

export default FullScreenImage;
