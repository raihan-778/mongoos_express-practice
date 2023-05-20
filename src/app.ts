import express, { Application } from "express";

import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { dbConnect } from "./app/utils/dbConntection";
const app: Application = express();
app.use(cors());
//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // if it "true" then it will take any type of data and if it false it will take only json & string data.

//db connection
dbConnect();

//we will import all route here

//here will be default route

//custom route path

//export express app

export { app };
