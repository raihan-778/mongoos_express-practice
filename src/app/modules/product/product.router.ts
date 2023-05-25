import { Router } from "express";
import { getAllProduct, getProductById } from "./product.controller";

export const router: Router = Router();

router.get("/allProducts", getAllProduct);

router.get("/:id", getProductById);

export default router;
