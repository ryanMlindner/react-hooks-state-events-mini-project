import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTasks] = useState(TASKS);
  const [selectedCategory, setCategory] = useState("All");

  function deleteTask(event) {
    const newTaskList = taskList.filter(task => task.text !== event.target.id)
    setTasks(newTaskList);
  }

  function filterCategory(category) {
    setCategory(category);
  }

  function createNewTask(taskData) {
    setTasks(taskList => [...taskList, taskData]);
  }

  function filterList() {
    let filteredList = taskList;
    if (selectedCategory !== "All") {
      filteredList = taskList.filter(task => task.category === selectedCategory)
    }
    return filteredList;
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
        current = {selectedCategory} 
        filterCategory={filterCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={createNewTask}/>
      <TaskList tasks={filterList()} deleteTask ={deleteTask}/>
    </div>
  );
}

export default App;
