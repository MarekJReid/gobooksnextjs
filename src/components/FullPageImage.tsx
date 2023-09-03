import React from "react";

interface FullScreenImageProps {
  imageUrl: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl }) => (
  <div
    className="w-full h-[70vh] bg-cover"
    style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
);

export default FullScreenImage;
