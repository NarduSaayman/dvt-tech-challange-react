import { IProduct } from "./products";

export interface ICart {
  id: number;
  userId: number;
  date: Date;
  products: IProduct[];
}
