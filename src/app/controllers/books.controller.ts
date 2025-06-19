import express, { Request, Response } from 'express';


export const booksRouter = express.Router();

booksRouter.get("/", async(req: Request, res: Response)=>{
    res.send("Book route setup successfull")
})