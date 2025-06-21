import express, { Request, Response } from "express";
import { Book } from "../models/books.model";

export const booksRouter = express.Router();

// ! create a book
booksRouter.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res.json(error);
  }
});

// ! get all books
booksRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { filter, sortBy, sort, limit } = req.query;
    // filter by genre
    const filterCondition = filter
      ? { genre: { $regex: new RegExp(filter as string, "i") } }
      : {};

    // sort by createdAt time
    const sortByCondition: any = {};
    sortByCondition[sortBy as string] = sort === "desc" ? -1 : 1;

    // limit
    const limitNumber = parseInt(limit as string, 10);
    const books = await Book.find(filterCondition)
      .sort(sortByCondition)
      .limit(limitNumber);

    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.json(error);
  }
});

// ! get book by ID
booksRouter.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    res.status(201).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ! update a book
booksRouter.put("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updatedBody = req.body;
    const book = await Book.findByIdAndUpdate(bookId, updatedBody, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ! delete a book
booksRouter.delete("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findByIdAndDelete(bookId);
    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});