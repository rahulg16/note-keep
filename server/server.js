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
