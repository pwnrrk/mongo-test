import Router from "../app/libs/router";

Router.get("/", "home@index", false);
Router.get("/hello", "home@hello", false);
Router.post("/save", "test@save", false);
Router.get("/users", "test@get", false);
Router.get("/user/:name", "test@findOne", false);
Router.get("/youth", "test@find", false);
Router.delete("/delete", "test@delete", true);
