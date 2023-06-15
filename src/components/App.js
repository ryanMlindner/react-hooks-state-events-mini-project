import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTasks] = useState(TASKS);

  function deleteTask(event) {
    const newTaskList = taskList.filter(task => task.text !== event.target.id)
    setTasks(newTaskList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={taskList} deleteTask ={deleteTask}/>
    </div>
  );
}

export default App;
