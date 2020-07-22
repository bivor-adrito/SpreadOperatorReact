import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");

  const [listArray, setListArray] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setListItem(newItem);
  }

  function handleClick() {
    setListArray(prevItem => {
      return [...prevItem, listItem];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArray.map(item => (
            <li>{item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
