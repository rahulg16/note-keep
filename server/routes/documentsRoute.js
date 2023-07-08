import express from "express";
import {
  addNewDocument,
  updateDocument,
  deleteDocument,
  getDocument,
} from "../controllers/documentControllers.js";

const router = express.Router();

router.route("/note").post(addNewDocument);

router.route("/note/:id").get(getDocument);
router.route("/note/:id").patch(updateDocument);
router.route("/note/:id").delete(deleteDocument);

export default router;
