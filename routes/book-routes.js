const express = require("express");
const { getAllBooks, addBook, getById, updateBook, deleteBook } = require("../controllers/books-controller");

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id", getById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
