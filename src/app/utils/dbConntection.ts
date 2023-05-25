import mongoose from "mongoose";

import "dotenv/config";
import { log } from "../utils/logger";
import { IProduct } from "../modules/product/product.interface";

const { dataUri } = process.env;
console.log(dataUri);

const dbConnection = mongoose.connection;

const dbConnect = async (): Promise<void> => {
  try {
    if (!dataUri) {
      log.error("NO Uri found in env file!!");
      process.exit(1);
    }
    await mongoose.connect(dataUri);
    console.log(`🛢️Database connection established`);

    // console.log(`🛢️  Database connection established`);
  } catch (err: any) {
    console.error(err.message);
  }
  // const dbConnection = mongoose.connection;
  // const DbCollection = dbConnection.collection("products");
};
export { dbConnect };
