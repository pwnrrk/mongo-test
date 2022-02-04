import { Db, MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const dbName = "testdb";

export default class Mongo {
  client: MongoClient;
  db?: Db;
  constructor() {
    this.client = new MongoClient(uri);
  }
  connect() {
    this.client.connect();
    this.db = this.client.db(dbName);
    return this;
  }
  close() {
    this.client.close();
  }
}
