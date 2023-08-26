import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDo() {
  const [todo, settodo] = useState([]);
  const [dos, setdo] = useState("");
  const [btn, setbtn] = useState(true);
  const [done, setDone] = useState([]);
  const [check, setCheck] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleDos = (e) => {
    const inputValue = e.target.value;
    const trimmedValue = inputValue.replace(/^\s+/, ""); // Remove leading spaces

    setdo(trimmedValue);

    if (trimmedValue !== "") {
      setbtn(false);
    } else {
      setbtn(true);
    }
  };

  const classes = styl();

  const handleAddToDo = () => {
    if (dos !== "") {
      settodo([...todo, dos]);
      setdo("");
      setbtn(true);
    } else {
      alert("Enter a task to do");
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setdo(todo[index]);
  };

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    settodo(updatedTodo);
  };

  const handleDeleteDone = (index) => {
    const updatedDone = done.filter((_, i) => i !== index);
    setDone(updatedDone);
  };

  const handleCheckbox = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    const completedTask = todo[index];
    settodo(updatedTodo);
    setDone([...done, completedTask]);
    setCheck(false);
  };

  return (
    <>
      <div className={classes.container}>
        <Input
          placeholder="Enter Your Task here"
          className={classes.input}
          value={dos}
          onChange={handleDos}
        />
        <Button
          onClick={handleAddToDo}
          className={classes.btn}
          variant="contained"
          color="primary"
          disabled={btn}
        >
          Add
        </Button>
      </div>
      <div className={classes.todos}>
        <h2>To Do's</h2>
        {todo.length > 0 ? "" : <p>No Tasks to do Yet. Add some tasks to do</p>}
        {todo.map((task, index) => (
          <div key={index} className={classes.taskContainer}>
            <p>
              {index + 1}: {task}{" "}
              <input
                type="checkbox"
                onChange={() => handleCheckbox(index)}
                checked={check}
              />
              <EditIcon
                className={classes.editIcon}
                onClick={() => handleEdit(index)}
              />
              <DeleteIcon
                className={classes.deleteIcon}
                onClick={() => handleDelete(index)}
              />
            </p>
          </div>
        ))}
        <h2>Done</h2>
        {todo.length > 0 ? (
          done.length > 0 ? (
            ""
          ) : (
            <p>No Tasks Done Yet</p>
          )
        ) : (
          <p>No Tasks To do Yet Add some tasks to do.</p>
        )}
        {done.map((task, index) => (
          <div key={index} className={classes.taskContainer}>
            <p className={classes.done}>
              {index + 1}: {task}{" "}
              <DeleteIcon
                className={classes.deleteIcon}
                onClick={() => handleDeleteDone(index, "done")}
              />
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

const styl = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    paddingVertical: 8,
    marginBottom: 10
  },
  btn: {
    alignSelf: "flex-start"
  },
  todos: {
    textAlign: "left"
  },
  taskContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10
  },
  editIcon: {
    marginLeft: 10,
    cursor: "pointer"
  },
  deleteIcon: {
    marginLeft: 5,
    cursor: "pointer"
  },
  done: {
    color: "red",
    textDecoration: "line-through"
  }
}));

export default ToDo;
