import Controller from "libs/controller";
import { Http } from "libs/http";
import Post from "models/post";

export default class PostController extends Controller {
  async save(http: Http) {
    try {
      const postData = http.request.body;
      postData.author_id = http.request.body.user.user_id;
      delete postData.user;
      const post = await Post.create(postData);
      http.response.json({ status: "ok", message: "saved!", data: post });
    } catch (error) {
      console.log(error);
    }
  }
  async getUsersPost(http: Http) {
    try {
      const author_id = http.request.body.user.user_id;
      const posts = await Post.find({ author_id: author_id });
      http.response.json(posts);
    } catch (error) {
      console.trace(error);
    }
  }
  async delete(http: Http) {
    try {
      const post = await Post.findOneAndDelete({ _id: http.request.params.id });
      http.response.json({ status: "ok", message: "Post deleted", data: post });
    } catch (error) {
      console.trace(error);
    }
  }
  async update(http: Http) {
    try {
      const post = await Post.findByIdAndUpdate(
        http.request.body._id,
        http.request.body,
        {
          new: true,
        }
      );
      http.response.json({
        status: "ok",
        message: "Post updated!",
        data: post,
      });
    } catch (error) {
      console.trace(error);
    }
  }
}
