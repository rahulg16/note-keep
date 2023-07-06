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
