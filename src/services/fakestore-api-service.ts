import { ICart } from '../models/cart';
import { IProduct } from '../models/products';
import { IUserCredentials, IUserProfile } from '../models/user';

const baseUrl: string = 'https://fakestoreapi.com';

const fetchCreator = (
  endpoint: string,
  method?: string,
  body?: string,
): any => {
  const response = fetch(`${baseUrl}${endpoint}`, { method, body })
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

export const fetchCartByUserId = (userId: number): Promise<ICart[]> =>
  fetchCreator(`/carts/user/${userId}`).then((res: ICart[]) => res);

export const createCartForUser = (cart: ICart) => {
  fetchCreator(`/carts`, `POST`, JSON.stringify(cart)).then(
    (res: ICart) => res,
  );
};

export const addUser = (user: IUserProfile) => {
  fetchCreator(`/users`, `POST`, JSON.stringify(user)).then(
    (res: IUserProfile) => res,
  );
};

export const loginUser = (user: IUserCredentials) => {
  fetchCreator(`/auth/login`, `POST`, JSON.stringify(user)).then(
    (res: { token: string }) => res,
  );
};
