import express, { Application, Request, Response } from "express";
import cors from "cors";
import { booksRouter } from "./app/controllers/books.controller";
import { borrowRouter } from "./app/controllers/borrows.controller";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/books", booksRouter);
app.use("/borrow", borrowRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Library Management Server . ");
});

export default app;
