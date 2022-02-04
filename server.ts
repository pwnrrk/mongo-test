import dotenv from "dotenv";
import Web from "./app/libs/web";

dotenv.config();

process.on("unhandledRejection", (error) => console.trace(error));
process.on("uncaughtException", (error) => console.trace(error));

const web = new Web();
web.start();
