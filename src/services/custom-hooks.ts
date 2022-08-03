import { useState, useEffect } from 'react';
import { IProduct } from '../models/products';

export const useFetch = () => {
  // Response state
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = (url: string) => {
    fetch(url) // 'https://jsonplaceholder.typicode.com/users'
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setLoading(false);
        setData(json);
      });
  };

  useEffect(() => {
    fetchApi('');
  }, []);

  return { loading, data };
};
