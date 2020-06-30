const express = require("express");
const nunjucks = require("nunjucks");
const router = require("./src/router/router");
const mongoose = require("mongoose");
const session = require("express-session");

mongoose.connect("mongodb://127.0.0.1:27017/loginteste", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
const server = express();

server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));
server.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(express.json());
server.use(router);

server.set("view engine", "njk");

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.listen(3000, () => {
  console.log("Server running at 3000!");
});
