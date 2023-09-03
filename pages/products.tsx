import React from "react";
import { useProducts } from "../contexts/ProductContexts";
import Image from "next/image";
import Layout from "../src/components/Layout";

const ProductsPage: React.FC = () => {
  const { products } = useProducts();

  return (
    <Layout>
      <h1>Our Courses</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            {/* Assuming you have a name field in each product. Adjust accordingly if your structure is different. */}
            {product.image && (
              <Image
                src={
                  "https://items-images-production.s3.us-west-2.amazonaws.com/files/8ec1a958d835879437bf642361d79f6d7f83e543/original.jpeg"
                }
                width={500}
                height={500}
                alt="Picture of the author"
              />
            )}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProductsPage;
