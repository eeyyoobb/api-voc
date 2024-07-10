const express = require("express");
const { createComment, deleteComment, getAllComments, updateComment } = require("../controllers/commentControllers");
const { adminGuard, authGuard } = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(authGuard, createComment)
  .get(authGuard, adminGuard, getAllComments);

router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);

module.exports = router;
