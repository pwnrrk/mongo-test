import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(process.env.MONGO_URI as string, { dbName: "testdb" })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}
