import express from "express";
import { getUserDetails, addUserFolder } from "../controllers/usersControllers.js";
import { addUser, logInUser } from "../controllers/authUserControllers.js";

const router = express.Router();

router.route("/auth/signup").post(addUser);
router.route("/auth/login").post(logInUser);

router.route("/").get(getUserDetails).patch(addUserFolder);

export default router;
