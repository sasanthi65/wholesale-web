import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import { createCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

export default router;
