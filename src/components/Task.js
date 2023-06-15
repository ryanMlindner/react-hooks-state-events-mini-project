import React from "react";

function Task({ text, category, deleteTask}) {
  console.log(deleteTask);
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={text} onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
