import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import config from "./config";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url!);
    console.log("MongoDB connected successfull");
    server = app.listen(config.port, () => {
      console.log(`This server running on this port : ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

// ! call main function
main();
