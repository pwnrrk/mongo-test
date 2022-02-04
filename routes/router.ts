import Router from "../app/libs/router";

Router.get("/", "home@index", false);
Router.get("/hello", "home@hello", false);
