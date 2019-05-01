// jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res) {
  console.log(req);
  res.send("<h1>Hello!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("<h1>Contact me at johndoe@yahoo.com</h1>");
});

app.get("/about", function(req, res) {
  res.send("I like <ul><li>Coffee</li><li>Green Tea</li><li>Code</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
