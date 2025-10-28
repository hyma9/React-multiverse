import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css';
import Btncontainer from './components/Btncontainer';
import {useState} from 'react';

function App() {
  const [calval,setCalval]=useState("");
  const onButtonClick=(buttonText)=>{
    if (buttonText==="c"){
      setCalval("");
    }
      else if (buttonText==='='){
        const result=eval(calval);
        setCalval(result);
      }else{
        const newDisplayValue=calval+buttonText;
        setCalval(newDisplayValue);
      }
  }


  return (
    <div className={styles.calculator} >
    <Display displayValue={calval}></Display>
    <Btncontainer onButtonClick ={onButtonClick}></Btncontainer>
    </div>
  );
}

export default App
