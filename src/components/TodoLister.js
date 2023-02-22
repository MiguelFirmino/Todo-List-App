import React, { useState } from 'react';
import Description from './Description';

const TodoLister = () => {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function addNewItem() {
    if (newItem !== "") {
      const item = {
        "key": Math.floor(Math.random() * 1000),
        "value": newItem
      }

      setItemList([...itemList, item]);
      setNewItem("");
    } else {
      alert("You need to insert a todo item.");
    }
  }

  function removeItem(key) {
    setItemList(itemList.filter(item => item.key !== key));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <Description todoAmmount={itemList.length}></Description>

      <div className="inputBox">
        <input 
          type="text" 
          placeholder="Insert Todo Item..."
          value={newItem}
          onChange={(event) => {setNewItem(event.target.value)}}
        />

        <button onClick={() => {addNewItem()}}>Add</button>
      </div>

      <ul>
        {itemList.map((item, index) => {
          return (
            <li key={item.key}>
              {item.value}
              <button onClick={() => {removeItem(item.key)}}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoLister;