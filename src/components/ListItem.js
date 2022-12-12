import React from "react";
import Todo from "./Todo";
function ListItem({ todos, setTodos }) {
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default ListItem;
