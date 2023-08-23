import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

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

  useEffect(() => {
    // Fetch products from your catalogHandler or another API endpoint
    // For the purpose of this example, let's say you have an API route "/api/catalog" that uses catalogHandler
    fetch("/api/catalog")
      .then((res) => res.json())
      .then((data) => {
        const products = data.objects.map((item) => {
          const variation = item.itemData.variations[0]; // Assuming there's at least one variation for each item

          return {
            id: item.id,
            name: item.itemData.name,
            description: item.itemData.description || "",
            image: item.itemData.imageUrl || "",
            price: variation.itemVariationData.priceMoney.amount,
            ecomUri: item.itemData.ecom_uri || "",
            ecomImageUris: item.itemData.ecom_image_uris || [],
            isTaxable: item.itemData.is_taxable,
            taxIds: item.itemData.tax_ids,
            channels: item.itemData.channels,
            checkoutUrl:
              (item.customAttributeValues &&
                Object.values(item.customAttributeValues)[0].stringValue) ||
              "",
          };
        });
        setProducts(products); // Assuming `objects` contains the list of products
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
