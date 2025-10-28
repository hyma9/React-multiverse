import styles from "./Btncontainer.module.css"
const Btncontainer=({ onButtonClick })=>{

    const btnnames=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];




     return (
     <div className={styles.buttonContainer}>
        {btnnames.map((btnname)=>(
        
        <button className={styles.buttonitems} onClick={()=>onButtonClick(btnname)}>{btnname}</button>
    ))}
         
        </div>
); 
};
export default Btncontainer;