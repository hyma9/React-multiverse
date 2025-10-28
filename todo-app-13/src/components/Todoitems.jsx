
import Todoitem from "./Todoitem";
const Todoitems=({todoItems,onDeleteClick})=>{
    return (
    <div className="items-container">
        {todoItems.map(item=> (
        <Todoitem 
        key={item.name}
        todoname={item.name} tododate={item.duedate} onDeleteClick={onDeleteClick}></Todoitem>))}

     </div>
    )     
}
export default Todoitems;