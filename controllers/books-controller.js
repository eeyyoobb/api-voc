const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    return res.status(200).json({ books });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ book });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addBook = async (req, res, next) => {
  const newBook = new Book({ ...req.body });
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  try {
    let book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    book.name = name;
    book.author = author;
    book.description = description;
    book.price = price;
    book.available = available;
    book.image = image;
    book = await book.save();
    res.status(200).json({ book });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndRemove(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = { getAllBooks, getById, addBook, updateBook, deleteBook };
