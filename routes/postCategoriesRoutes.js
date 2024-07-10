const express = require("express");

const {
  createPostCategory,
  deletePostCategory,
  getAllPostCategories,
  updatePostCategory,
  getSingleCategory,
} = require("../controllers/postCategoriesController");
const { adminOrEditorGuard, authGuard } = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(authGuard, adminOrEditorGuard, createPostCategory)
  .get(getAllPostCategories);

router
  .route("/:postCategoryId")
  .get(getSingleCategory)
  .put(authGuard, adminOrEditorGuard, updatePostCategory)
  .delete(authGuard, adminOrEditorGuard, deletePostCategory);

module.exports = router;
