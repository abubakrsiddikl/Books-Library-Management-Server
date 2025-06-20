import { Model, Types } from "mongoose";

export interface IBooks {
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface BookModelType extends Model<IBooks> {
  updateCopiesAfterBorrow(
    bookId: Types.ObjectId | string,
    quantity: number
  ): Promise<void>;
}
