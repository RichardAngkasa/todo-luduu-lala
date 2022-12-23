import React from "react";
import Todo from "./Todo";

function TodoList({ list, fetch }) {
  return list.map((todo) => {
    return <Todo key={todo.id} todo={todo} fetch={fetch} />;
  });
}

export default TodoList;
