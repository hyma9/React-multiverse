import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import Welcomemsg from "./components/Welcomemsg";
import "./App.css";
import { useState } from "react";

function App() {


const [todoItems,setTodoItems]=useState([]);

const handleNewItem=(itemName,itemDueDate)=>{
  console.log(`new item added Name:${itemName} and Duedate:${itemDueDate}`);
  const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
  setTodoItems(newTodoItems);
}

const handleDeleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)
  setTodoItems(newTodoItems)
  
   
}
  return (

    <center className="todo-container">
      <Appname/>
      <Addtodo onNewItem={handleNewItem}/>
     {todoItems.length === 0 && <Welcomemsg></Welcomemsg>}
      <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
      
   
  
   
  </center>
  );
}

export default App
