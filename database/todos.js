const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const TodoSchema = new mongoose.Schema(
  {
    todo: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
