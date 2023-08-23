import { Client, Environment, CatalogApi } from "square";

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});

const catalogApi: CatalogApi = client.catalogApi;

export default async function handler(req, res) {
  try {
    const catalogResponse = await catalogApi.listCatalog(undefined, "ITEM");

    // If the item has an image_id, fetch its details
    const items = await Promise.all(
      catalogResponse.result.objects.map(async (item: any) => {
        item.itemData.imageIds && console.log(item.itemData.imageIds[0]);
        let image: any;
        image =
          item.itemData.imageIds &&
          (await catalogApi.retrieveCatalogObject(item.itemData.imageIds[0]));
        if (item.itemData && item.itemData.imageIds) {
          console.log(item.itemData.imageIds[0]);
          const imageResponse = await catalogApi.retrieveCatalogObject(
            item.itemData.imageIds[0]
          );
          item = {
            ...item,
            itemData: {
              ...item.itemData,
              imageUrl: imageResponse.result.object.imageData.url,
            },
          };
        }

        return item;
      })
    );

    // Convert any BigInt to string for JSON serialization
    const result = JSON.parse(
      JSON.stringify({ objects: items }, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      )
    );

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred." });
  }
}
