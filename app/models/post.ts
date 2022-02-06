import { ObjectId } from "bson";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String },
  date: { type: String },
  author_id: { type: ObjectId },
});

export default mongoose.model("post", postSchema);
