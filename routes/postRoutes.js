const express = require("express");
const router = express.Router();
const {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} = require("../controllers/postControllers");
const { authGuard, adminOrEditorGuard } = require("../middleware/authMiddleware");

router.route("/")
  .post(authGuard, adminOrEditorGuard, createPost)
  .get(getAllPosts);

router.route("/:slug")
  .put(authGuard, adminOrEditorGuard, updatePost)
  .delete(authGuard, adminOrEditorGuard, deletePost)
  .get(getPost);

module.exports = router;
