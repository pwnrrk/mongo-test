import Controller from "../libs/controller";
import { Http } from "../libs/http";
import Mongo from "../libs/mongodb";

export default class Test extends Controller {
  async save(http: Http) {
    const database = new Mongo().connect();
    try {
      const users = database.db?.collection("users");
      await users?.insertOne(http.request.body);
      http.response.json({ status: "ok", message: "saved!" });
    } finally {
      database.close();
    }
  }
  async get(http: Http) {
    const database = new Mongo().connect();
    try {
      const users = await database.db?.collection("users").find().toArray();
      http.response.json(users);
    } finally {
      database.close();
    }
  }
}
