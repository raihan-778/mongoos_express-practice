import mongoose from "mongoose";

import "dotenv/config";
import { log } from "./logger";

const { dataUri } = process.env;
console.log(dataUri);

const dbConnection = mongoose.connection;
const DbCollection = dbConnection.collection("test_product");
console.log(DbCollection.name);

const dbConnect = async (): Promise<void> => {
  try {
    if (!dataUri) {
      log.error("NO Uri found in env file!!");
      process.exit(1);
    }
    await mongoose.connect(dataUri);
    log.info(`🛢️Database connection established`);

    // console.log(`🛢️  Database connection established`);
  } catch (err: any) {
    log.error(err.message);
  }
};
export { dbConnect };
