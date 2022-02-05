import dotenv from "dotenv";
import Mongo from "./app/libs/mongodb";
import Web from "./app/libs/web";

dotenv.config();

process.on("unhandledRejection", (error) => console.trace(error));
process.on("uncaughtException", (error) => console.trace(error));

const web = new Web();
web.start();
new Mongo().testConnection().then((result) => {
  if (result) console.log("Mongo Running");
});
