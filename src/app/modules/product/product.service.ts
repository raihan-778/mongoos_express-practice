import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const getAllProductFromDB = async (): Promise<IProduct[]> => {
  return Product.find();
};
export const getProductsByIdFromDB = async (
  id: string
): Promise<IProduct[]> => {
  return Product.find({ _id: id });
};
