import { useState, useEffect } from "react";
import { IProducts } from "../models/products";

export const useFetch = () => {
  // Response state
  const [data, setData] = useState<IProducts>();

  useEffect(() => {
    // Define asynchronous function
    const fetchApi = async () => {
      // ...
    };

    // Call async function
    fetchApi();
  }, []);

  return data;
};
