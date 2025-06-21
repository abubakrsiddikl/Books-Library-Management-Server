import { model, Schema, Types } from "mongoose";
import { BookModelType, IBooks } from "../interfaces/books.interface";

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
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
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

// update book copies use static method
bookSchema.statics.updateCopiesAfterBorrow = async function (
  bookId: Types.ObjectId | string,
  quantity: number
): Promise<void> {
  const book = await this.findById(bookId);
  if (!book) {
    throw new Error("Book Not Found");
  }
  if (book.copies < quantity) {
    throw new Error("Not enough copies available");
  }
  book.copies -= quantity;
  if (book.copies === 0) {
    book.available = false;
  }
  await book.save();
};

export const Book = model<IBooks, BookModelType>("Book", bookSchema);
