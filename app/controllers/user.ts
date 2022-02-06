import Controller from "../libs/controller";
import { Http } from "../libs/http";
import Mongo from "../libs/mongodb";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class UserController extends Controller {
  async save(http: Http) {
    try {
      const userData = http.request.body;
      const oldUser = await User.findOne({ email: userData.email });

      if (oldUser)
        return http.response
          .status(409)
          .json({ status: "failed", message: "User already register" });

      const encryptedPassword = await bcrypt.hash(userData.password, 10);
      userData.password = encryptedPassword;
      const user = await User.create(userData);
      const token = jwt.sign(
        {
          user_id: user._id,
          email: user.email,
        },
        process.env.TOKEN_KEY as string,
        {
          expiresIn: "3d",
        }
      );
      user.token = token;
      http.response.json({
        status: "ok",
        message: "saved!",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async get(http: Http) {
    const database = new Mongo();
    try {
      const users = await database.db.collection("users").find().toArray();
      const count = await database.db.collection("users").countDocuments();
      http.response.json({ total: count, data: users });
    } finally {
      database.close();
    }
  }
  async find(http: Http) {
    const database = new Mongo();
    try {
      const query = { age: { $lt: 20 } };
      const users = await database.db.collection("users").find(query).toArray();
      http.response.json(users);
    } finally {
      database.close();
    }
  }
  async delete(http: Http) {
    const database = new Mongo();
    try {
      const query = { name: http.request.body.name };
      const user = await database.db
        .collection("users")
        .findOneAndDelete(query);
      http.response.json({ status: "ok", deleted: user });
    } finally {
      database.close();
    }
  }
  async findOne(http: Http) {
    const database = new Mongo();
    try {
      const query = { name: http.request.params.name };
      const user = await database.db.collection("users").findOne(query);
      if (user) return http.response.json(user);
      http.response.status(404).json({ message: "No users" });
    } finally {
      database.close();
    }
  }
}
