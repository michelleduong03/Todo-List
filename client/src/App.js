import './App.css';
import React, { Fragment } from "react";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import EditTodos from "./components/EditTodo";

function App() {
  return (
  <Fragment>
    <div className = "container">
      <InputTodo />
      <ListTodos />
      <EditTodos />
    </div>
  </Fragment>
  );
 }

export default App;
