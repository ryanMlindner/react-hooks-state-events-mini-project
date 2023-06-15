import React from "react";

function CategoryFilter({ categories, current ,filterCategory }) {
  
  //if its stupid and it works...
  let buttons = categories.map((category) => {
    let button;
    if (category === current) {
      button = <button key={category} 
                 onClick={toggleSelected} 
                 className="selected">{category}</button>
    }
    else {button = <button key={category} onClick={toggleSelected} className="">{category}</button>}
    return button;
  });

  function toggleSelected(event) {
    filterCategory(event.target.innerText);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
