const baseUrl: string = "https://fakestoreapi.com";

const fetchCreator = (endpoint: string): Promise<Response> => {
  return fetch(`${baseUrl}${endpoint}`)
    .then((res) => res.json())
    .then((res) => res);
};

// "res: any" to be changed to the actual expected model
export const fetchAllProducts = (): Promise<any> =>
  fetchCreator(`/products`).then((res: any) => res);
