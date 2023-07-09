import express from "express";
import {
  getAllUserDetails,
  addUserFolder,
  getUserDetails,
  updateUserFolder,
} from "../controllers/usersControllers.js";
import { addUser, logInUser } from "../controllers/authUserControllers.js";

const router = express.Router();

router.route("/auth/signup").post(addUser);
router.route("/auth/login").post(logInUser);

router.route("/").get(getAllUserDetails).patch(addUserFolder);
router.route("/:id").get(getUserDetails).patch(updateUserFolder);

export default router;
