import {
  Client,
  Environment,
  CatalogApi,
  CatalogObject,
  LocationsApi,
} from "square";

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});

const catalogApi: CatalogApi = client.catalogApi;
const locationsApi: LocationsApi = client.locationsApi;

export { catalogApi, locationsApi, client };
