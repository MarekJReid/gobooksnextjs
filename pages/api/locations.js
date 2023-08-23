import { ApiError } from "square";
import { locationsApi } from "./api";
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export default async function handler(req, res) {
  try {
    const response = await catalogApi.listCatalog();

    console.log(response.result);
    res.status(200).json(response.result);
  } catch (error) {
    console.log(error);
  }

  try {
    let listLocationsResponse = await locationsApi.listLocations();
    let locations = listLocationsResponse.result.locations;

    const formattedLocations = locations.map((location) => ({
      id: location.id,
      name: location.name,
      address: location.address.addressLine1,
      locality: location.address.locality,
    }));

    res.status(200).json(formattedLocations);
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result.errors.map((e) => ({
        category: e.category,
        code: e.code,
        detail: e.detail,
      }));
      res.status(500).json(errors);
    } else {
      res.status(500).json({ message: "Unexpected error occurred." });
    }
  }
}
