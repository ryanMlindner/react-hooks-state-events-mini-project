import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  });

  function handleChange(event) {
    const name = event.target.name;
    let data = event.target.value;
    console.log(event.target.value);

    setFormData({
      //some day spread operator syntax will look normal
      //maybe
      ...formData,
      [name]: data,
    })
  }
  
  categories = categories.filter(category => category !== "All");

  function submitForm(event) {
    event.preventDefault();
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form" onSubmit={submitForm}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categories.map(category => {
            return <option key={category} name={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
