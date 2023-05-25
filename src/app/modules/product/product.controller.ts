import { Request, Response, NextFunction } from "express";
import { getAllProductFromDB } from "./product.service";

export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductFromDB();
  res.send(products);
  console.log("hitted all product api", products);
};
