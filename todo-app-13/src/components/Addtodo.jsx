import { useState,useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
function Addtodo({onNewItem}){

  const [todoName,setTodoName]=useState("");
  const [dueDate,setDueDate]=useState("");
  const noOfUpdates=useRef(0);
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
    noOfUpdates.current+=1;

  }
  const handleDateChange=(event)=>{
    
    setDueDate(event.target.value);
    console.log(`no of updates are : ${noOfUpdates.current}`)
  }

  const buttonClick=(event)=>{
    event.preventDefault();
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");
    
  }
    return (
    <div className="container text-center">
  
  <div className="row row-container">
    <div className="col-6"><input type="text" placeholder="enter text here" value={todoName} onChange={handleNameChange}></input></div>
    <div className="col-4"><input type="date" value={dueDate} onChange={handleDateChange}></input></div>
    <div className="col-2"><button type="button" className="btn btn-success btns-container" onClick={buttonClick}><center><IoAddCircle /></center></button></div>
  </div>
  </div>
    );
}
export default Addtodo;