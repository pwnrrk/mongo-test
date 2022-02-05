import { Db, MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const dbName = "testdb";

export default class Mongo {
  client: MongoClient;
  db: Db;
  constructor() {
    this.client = new MongoClient(uri);
    this.client.connect();
    this.db = this.client.db(dbName);
  }
  async close() {
    await this.client.close();
  }
  async testConnection() {
    try {
      await this.client.connect();
      return true;
    } catch (error) {
      console.trace(error);
      return false;
    } finally {
      await this.client.close();
    }
  }
}
