import React from "react";

export default function Todo({ todo, text, todos, setTodos }) {
  const deleteBtn = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    // console.log(todo);
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="bg-warning rounded me-3 w-25 ">{text}</div>
      <button className="btn text-white bg-primary rounded me-3">Edit</button>
      <button
        onClick={deleteBtn}
        className="btn text-white bg-danger rounded me-3"
      >
        Delete
      </button>
    </div>
  );
}
