const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.use(formidable());

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

fs.readFile(__dirname + "/data/posts.json", function(error, file) {
  console.log("He leido el fichero: " + file.toString());
});

app.get("/nodeGirls", function(req, res) {
  res.send("Hello Girl!");
});

app.post("/create-post", function(req, res) {
  const object = JSON.stringify({ [Date.now()]: req.fields });
  fs.writeFile(__dirname + "/data/posts.json", object, function(error) {
    console.log("Fichero guardado");
  });
  res.send("hola!");
});
