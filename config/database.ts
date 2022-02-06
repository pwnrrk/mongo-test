import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(process.env.MONGO_URI as string, {
      dbName: process.env.MONGO_DATABASE_NAME,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}
