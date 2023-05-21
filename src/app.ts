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
//render ejs
app.set("view engine", "ejs");

//we will import all route here

import ProductRoute from "./app/modules/product/product.router";

//here will be default route

app.get("/", (req, res) => {
  res.render("index");
});

//custom route path
app.use("/api/v1/products", ProductRoute);
//export express app

export { app };
