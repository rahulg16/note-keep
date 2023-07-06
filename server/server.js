<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 3000;

const DB = process.env.DB_CONNECTION.replace(
  "<password>",
  process.env.DB_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("connected to DB");
});

app.listen(port, console.log(`server started at port ${port}`));
=======
require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

let port = process.env.PORT || 3000;

app.listen(port, async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then((data) => console.log("Connected to DB"))
    .catch((err) => console.log("Error connecting to DB", err));

  console.log(`Server listening on port: ${port}`);
});
>>>>>>> 1ef577d18cf086f782d9f336fa7c5faf4c609232
