const express = require("express");
const bodyParser = require("body-parser");
const Todo = require("../database/todos.js");

const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const { result } = require("underscore");
app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/todos", (req, res) => {
  Todo.find({}, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  });
});
app.post("/api/todos", (req, res) => {
  const newM = new Todo(req.body);
  newM.save((err, result) => {
    res.send({ body: "ok" });
  });
});
app.put("/api/todos/:id", (req, res) => {
  Todo.updateOne({ _id: req.params.id }, req.body, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send({ result: "done" });
  });
});
app.delete("/api/todos/:id", (req, res) => {
  Todo.deleteOne({ _id: req.params.id }, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
