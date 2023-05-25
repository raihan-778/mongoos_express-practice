import { Request, Response, NextFunction } from "express";
import { getAllProductFromDB, getProductsByIdFromDB } from "./product.service";

export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductFromDB();
  res.send(products);
  console.log("hitted all product api", products);
};
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductsByIdFromDB(id);
  res.send(product);
  console.log("hitted id product api", product);
};
