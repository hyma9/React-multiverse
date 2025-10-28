import { MdDelete } from "react-icons/md";
function Todoitem({todoname,tododate,onDeleteClick}){
   
    return (
  <div className="container text-center">
   <div className="row row-container">
    <div className="col-6">{todoname}</div>
    <div className="col-4">{tododate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger btns-container" onClick={()=>onDeleteClick(todoname)}><MdDelete /></button></div>
</div>
  </div>
    )
}
export default Todoitem;