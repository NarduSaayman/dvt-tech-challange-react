import { IProduct } from '../models/products';

const baseUrl: string = 'https://fakestoreapi.com';

const fetchCreator = (endpoint: string): any => {
  const response = fetch(`${baseUrl}${endpoint}`)
    .then((res) => res.json())
    .then((res) => res);
  return response;
};

export const fetchAllProducts = (): Promise<IProduct[]> =>
  fetchCreator(`/products`).then((res: IProduct[]) => res);

export const fetchProductById = (id: number): Promise<IProduct> =>
  fetchCreator(`/products/${id}`).then((res: IProduct) => res);

export const fetchLimitedProducts = (limit: number): Promise<IProduct[]> =>
  fetchCreator(`/products?limit=${limit}`).then((res: IProduct[]) => res);
