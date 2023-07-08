import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoute from "./routes/usersRoute.js";
import documentsRoute from "./routes/documentsRoute.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", userRoute);
app.use("/api/users", documentsRoute);

export default app;
