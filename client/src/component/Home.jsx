import React, { useEffect, useState } from "react";
import axios from "axios";
// Hooks use Effect HOOk
function Home() {
  var [todos, setTodo] = useState([]);
  var [input, setInput] = useState("");
  function get() {
    axios.get("/api/todos").then(({ data }) => {
      setTodo(data);
    });
  }
  useEffect(() => {
    get();
  });
  function add() {
    axios.post("/api/todos", { todo: input });
  }
  function del(id) {
    axios.delete("/api/todos/" + id);
  }
  function up(id) {
    axios.put("/api/todos/" + id, { todo: input });
  }
  var list = todos.map((e, i) => (
    <li key={i}>
      {e.todo}
      <button onClick={() => del(e._id)}>delete</button>
      <button onClick={() => up(e._id)}>update</button>
    </li>
  ));
  return (
    <div>
      <h1>let's make a todo list</h1>
      <input type="text" onChange={(event) => setInput(event.target.value)} />
      <button onClick={add}>add todo</button>
      {list}
    </div>
  );
}

export default Home;
