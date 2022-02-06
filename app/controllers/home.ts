import Controller from "../libs/controller";
import { Http } from "../libs/http";

export default class Home extends Controller {
  index(http: Http) {
    http.response.send("Server is running");
  }
}
