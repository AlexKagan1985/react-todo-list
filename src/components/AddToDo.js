import React, { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

function AddToDo({ setInputText, todos, setTodos, inputText }) {
  const changeInput = (e) => {
    setInputText(e.target.value);
  };

  const addClick = (e) => {
    e.preventDefault();
    //console.log(e);
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };

  const clearList = () => {
    setTodos([]);
    setInputText("");
  };

  return (
    <div className="m-5 justify-content-between">
      <input
        type="text"
        placeholder="add todo"
        className="bg-warning rounded me-3 w-25 "
        value={inputText}
        onChange={changeInput}
      />
      <button
        className="btn text-white bg-primary rounded me-3"
        onClick={addClick}
      >
        Add
      </button>
      <button onClick={clearList} className="btn text-white bg-danger rounded">
        Clear List
      </button>
    </div>
  );
}

export default AddToDo;
