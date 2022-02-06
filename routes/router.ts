import Router from "../app/libs/router";

Router.get("/", "home@index", false);
Router.post("/user/register", "user@register", false);
Router.post("/user/login", "user@login", false);
Router.post("/post/save", "post@save", true);
