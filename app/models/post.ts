import { ObjectId } from "bson";

export default interface Post {
  _id: ObjectId;
  title: string;
  content_url: string;
  author_id: ObjectId;
}
