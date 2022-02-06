import Controller from "../libs/controller";
import { Http } from "../libs/http";
import Mongo from "../libs/mongodb";

export default class User extends Controller {
  async save(http: Http) {
    const database = new Mongo();
    try {
      const users = database.db.collection("users");
      await users?.insertOne(http.request.body);
      http.response.json({ status: "ok", message: "saved!" });
    } finally {
      database.close();
    }
  }
  async get(http: Http) {
    const database = new Mongo();
    try {
      const users = await database.db.collection("users").find().toArray();
      http.response.json(users);
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
