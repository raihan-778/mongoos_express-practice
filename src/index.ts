import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

app.use(cors());
//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // if it "true" then it will take any type of data and if it false it will take only json & string data.

const { dataUri } = process.env;
console.log(dataUri);

const port = process.env.PORT || 5000;

const dbConnect = async () => {
  if (!dataUri) {
    throw new Error("Database connection failed");
  }
  await mongoose
    .connect(dataUri)
    .then(() => console.log("Database connected!!"));
  app.get("/", (req, res) => {
    res.send({
      message: {
        data: "Our server is running ❤️‍🔥🎆🎇",
        status: 200,
      },
    });
  });
};
dbConnect();
app.listen(port, () =>
  console.log(`your connection is running on port${port}`)
);
