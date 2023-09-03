import { Product } from "../types/types";
import courseData from "./courses.json";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // Fallback to localhost

interface CustomAttribute {
  stringValue?: string;
  // ... you can add other potential properties here
}
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${apiUrl}/api/catalog`);
  const data = await response.json();

  return data.objects.map((item) => {
    const variation = item.itemData.variations[0]; // Assuming there's at least one variation for each item

    // Find corresponding course in courses array from json lll
    const correspondingCourse = courseData.courses.find(
      (course) => course.title === item.itemData.name
    );

    return {
      id: item.id,
      name: item.itemData.name,
      description:
        item.itemData.description || correspondingCourse?.description || "",
      image: item.itemData.imageUrl || "",
      price: variation.itemVariationData.priceMoney.amount,
      ecomUri: item.itemData.ecom_uri || "",
      ecomImageUris: item.itemData.ecom_image_uris || [],
      //   isTaxable: item.itemData.is_taxable || null,

      taxIds: item.itemData.tax_ids || null,
      channels: item.itemData.channels || null,
      checkoutUrl:
        (item.customAttributeValues &&
          (Object.values(item.customAttributeValues)[0] as CustomAttribute)
            .stringValue) ||
        "",
      content: correspondingCourse?.content || [], // Merge course content
    };
  });
};
