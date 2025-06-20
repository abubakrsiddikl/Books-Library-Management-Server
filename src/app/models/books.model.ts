import { model, Schema } from "mongoose";
import { IBooks } from "../interfaces/books.interface";

const bookSchema = new Schema<IBooks>(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
      minlength: [2, "Author name must be at least 2 characters"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      trim: true,
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: [true, "Number of copies is required"],
      min: [0, "Copies must be a positive number"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Book = model<IBooks>("Book", bookSchema);
