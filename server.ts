import dotenv from "dotenv";
import Web from "./app/libs/web";
import { connect } from "./config/database";

dotenv.config();

process.on("unhandledRejection", (error) => console.trace(error));
process.on("uncaughtException", (error) => console.trace(error));

export const web = new Web();
web.start();
connect();
