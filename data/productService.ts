import { useEffect, useState } from "react";
import { catalogApi } from "../pages/api/api";

export function useSquareData() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const catalogResponse = await catalogApi.listCatalog(undefined, "ITEM");
        // Process the data or extract what you need here
        const processedData = catalogResponse.result.objects;
        console.log("catalogResponse", catalogResponse);
        setData(processedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, error };
}
