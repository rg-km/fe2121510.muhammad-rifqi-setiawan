import express from "express";

import {
  getBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook,
} from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);

router.post("/", createBook);

router.get("/:id", getBook);

// TODO: answer here
// delete
router.delete("/:id", deleteBook);

// patch
router.patch("/:id", updateBook);

export default router;
