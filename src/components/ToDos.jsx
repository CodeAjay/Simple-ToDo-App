import React from "react";
import "../styles.css";
import ToDo from "./ToDo";

const ToDos = () => {
  const todo = ToDo.todo;
  return (
    <>
      <h1>To Do's</h1>
      {console.log(todo)}
    </>
  );
};

export default ToDos;
