import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  desctiption: { type: String, required: true, trim: true, maxlength: 1000 },
  price: { type: Number, required: true, default: 0 },
  sku: { type: String, required: true, unique: true },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
