import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const PORT = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/libraryManagementDB");
    console.log("MongoDB connected successfull");
    server = app.listen(PORT, () => {
      console.log(`This server running on this port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

// ! call main function
main();
