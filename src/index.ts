import app from "./app";

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

  //get data using collection name
  const dataBase = mongoose.connection;
  const newCollection = dataBase.collection("practice_data");

  app.get("/persons", async (req, res) => {
    const result = await newCollection.find({}).limit(20).toArray();
    res.send(result);
  });
};
dbConnect();
app.listen(port, () =>
  console.log(`your connection is running on port${port}`)
);
