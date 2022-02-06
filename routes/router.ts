import Router from "../app/libs/router";

Router.get("/", "home@index", false);
Router.post("/user/register", "user@register", false);
Router.post("/user/login", "user@login", false);
Router.post("/post/save", "post@save", true);
Router.get("/post/me", "post@getUsersPost", true);
Router.delete("/post/:id", "post@delete", true);
Router.put("/post", "post@update", true);
