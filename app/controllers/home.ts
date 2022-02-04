import Controller from "../libs/controller";
import { Http } from "../libs/http";

export default class Home extends Controller {
  index(http: Http) {
    return http.response.json({ message: "Server is running" });
  }
  hello(http: Http) {
    return http.response.json({ message: "Hello from TS-Rest" });
  }
}
