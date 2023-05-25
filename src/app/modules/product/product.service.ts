import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const getAllProductFromDB = async (): Promise<IProduct[]> => {
  return Product.find();
};
export const getProductsByIdFromDB = async (
  payload: string
): Promise<IProduct[]> => {
  return Product.find({ id: payload });
};
