import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTasks] = useState(TASKS);
  const [selectedCategory, setCategory] = useState("All");

  function deleteTask(event) {
    const newTaskList = taskList.filter(task => task.text !== event.target.id)
    setTasks(newTaskList);
  }

  function filterCategory(category) {
    let filteredList = TASKS;
    if (category !== "All") {
      filteredList = filteredList.filter(task => task.category === category)
    }
    setCategory(category);
    setTasks(filteredList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
        current = {selectedCategory} 
        filterCategory={filterCategory}/>
      <NewTaskForm />
      <TaskList tasks={taskList} deleteTask ={deleteTask}/>
    </div>
  );
}

export default App;
