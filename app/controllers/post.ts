import Controller from "../libs/controller";
import { Http } from "../libs/http";
import Mongo from "../libs/mongodb";
import Post from "../models/post";

export default class PostController extends Controller {
  async save(http: Http) {
    const database = new Mongo();
    try {
      const post: Post = http.request.body;
      await database.db.collection("posts").insertOne(post);
      http.response.json({ status: "ok", message: "saved!" });
    } finally {
      database.close();
    }
  }
}
