import Router from "../app/libs/router";

Router.get("/", "home@index", false);
Router.post("/save", "user@save", false);
Router.get("/users", "user@get", false);
Router.get("/user/:name", "user@findOne", false);
Router.get("/youth", "user@find", false);
Router.delete("/delete", "user@delete", true);
