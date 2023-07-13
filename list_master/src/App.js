import React, { useState } from 'react';
import './App.css';

function App() {

  // state hook - 'useState'

  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([]);

  function addItem()
  {
    if(!newItem){
      alert("Enter an item!")
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
    console.log(items);
  }

  function deleteItem(id)
  {
    const newArray = items.filter(item => item.id != id);
    setItems(newArray);
  }

  return (
    <div className="App">
      {/* 1. HEADEER*/}
      <h1>TO DO LIST</h1>

      {/* 2. INPUT AND BUTTONS*/}
        <input 
        type = "text"
        placeholder = "Add any to do item..."
        value = {newItem}
        onChange = {e => setNewItem(e.target.value)}
        />
        <button onClick = {() => addItem()}> Add </button>
    
      {/* 3. LIST OF ITEMS (UNORDERED LIST WITH LIST ITEMS) */}

      <ul>
        {items.map(item => {
          return(
            <li key = {item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
