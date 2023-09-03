import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { fetchProducts } from "../data/fetchProducts";

interface ProductContextType {
  products: Product[];
}
type Product = {
  channels?: unknown; // You've marked it as 'undefined', but it might be more suitable to define its type when it's available.
  description: string;
  ecomImageUris: string[];
  ecomUri: string;
  id: string;
  image: string;
  isTaxable?: boolean; // Assuming it's a boolean since the key is named "isTaxable".
  name: string;
  price: string; // You might want to consider converting this to a number if that's more applicable.
  taxIds?: unknown[]; // Same note as for 'channels'.
  checkoutUrl: string;
};

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductContextType | undefined>(
  undefined
);

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  // in your ProductsProvider component...
  useEffect(() => {
    fetchProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
