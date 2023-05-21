import mongoose from "mongoose";
import { Express } from "express";
import cors from "cors";
import "dotenv/config";
import { log } from "./logger";

const { dataUri } = process.env;
const dbConnection = mongoose.connection;
const dataCollection = dbConnection.collection("practice_data");

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
