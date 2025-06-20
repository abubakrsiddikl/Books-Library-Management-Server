import express, { Request, Response } from "express";
import { Book } from "../models/books.model";

export const booksRouter = express.Router();

// ! create a book
booksRouter.post("/create-book", async (req: Request, res: Response) => {
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
  res.send("Book route setup successfull");
});
