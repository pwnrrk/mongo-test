import Controller from "../libs/controller";
import { Http } from "../libs/http";
import Post from "../models/post";

export default class PostController extends Controller {
  async save(http: Http) {
    try {
      const postData = http.request.body;
      postData.author_id = http.request.body.user_id;
      delete postData.user;
      const post = await Post.create(postData);
      http.response.json({ status: "ok", message: "saved!", data: post });
    } catch (error) {
      console.log(error);
    }
  }
}
