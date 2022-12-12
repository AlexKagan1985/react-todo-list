import logo from "./logo.svg";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import AddToDo from "./components/AddToDo";
import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App text-center bg-dark">
      <Header />

      <AddToDo
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <ListItem setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
