import { Client, Environment, CatalogApi } from "square";
import { Product } from "../types/types";
import courseData from "./courses.json";
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});
interface CustomAttribute {
  stringValue?: string;
  // ... you can add other potential properties here
}
const catalogApi: CatalogApi = client.catalogApi;
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
}
// ...

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const catalogResponse = await catalogApi.listCatalog(undefined, "ITEM");

    const items = await Promise.all(
      catalogResponse.result.objects.map(async (item: any) => {
        const variation = item.itemData.variations[0]; // Assuming there's at least one variation for each item

        // Find corresponding course in courses array from json (assuming you have it available)
        const correspondingCourse = courseData.courses.find(
          (course) => course.title === item.itemData.name
        );

        // Convert price to string
        const price = variation.itemVariationData.priceMoney.amount.toString();

        return {
          id: item.id,
          name: item.itemData.name,
          slug: slugify(item.itemData.name),
          description:
            item.itemData.description || correspondingCourse?.description || "",
          image: item.itemData.imageUrl || "",
          price, // Store price as a string
          ecomUri: item.itemData.ecom_uri || "",
          ecomImageUris: item.itemData.ecom_image_uris || [],
          // isTaxable: item.itemData.is_taxable || null,
          taxIds: item.itemData.tax_ids || null,
          channels: item.itemData.channels || null,
          checkoutUrl:
            (item.customAttributeValues &&
              (Object.values(item.customAttributeValues)[0] as CustomAttribute)
                .stringValue) ||
            "",
          content: correspondingCourse?.content || [], // Merge course content
        };
      })
    );
    console.log("items", items);
    return items; // Return the items array with price as strings
  } catch (error) {
    console.log(error);
    throw new Error("An error occurred while fetching products.");
  }
};
