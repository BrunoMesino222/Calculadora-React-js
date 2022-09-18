import './App.css';
import logo from "./Imagenes/logo.png";
import Button from './Componentes/Button.js';
import Screen from "./Componentes/Screen.js";
import Clear from "./Componentes/Clear.js";
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {

const[input, setInput] = useState('');

const addInput = val => {
  setInput(input + val);
};

const calcResult = () => {
  if(input){
    setInput(evaluate(input));
  } else {
    setInput("Math ERROR")
  }
  setInput(evaluate(input));
};

  return (
    <div className="App">
    <div className="contCalculadora">
      <Screen input={input}/>
      <div className="fila">
        <Button clickCtrl={addInput}>1</Button>
        <Button clickCtrl={addInput}>2</Button>
        <Button clickCtrl={addInput}>3</Button>
        <Button clickCtrl={addInput}>+</Button>
      </div>
      <div className="fila">
        <Button clickCtrl={addInput}>4</Button>
        <Button clickCtrl={addInput}>5</Button>
        <Button clickCtrl={addInput}>6</Button>
        <Button clickCtrl={addInput}>-</Button>
      </div>
      <div className="fila">
        <Button clickCtrl={addInput}>7</Button>
        <Button clickCtrl={addInput}>8</Button>
        <Button clickCtrl={addInput}>9</Button>
        <Button clickCtrl={addInput}>*</Button>
      </div>
      <div className="fila">
        <Button clickCtrl={calcResult}>=</Button>
        <Button clickCtrl={addInput}>0</Button>
        <Button clickCtrl={addInput}>.</Button>
        <Button clickCtrl={addInput}>/</Button>
      </div>
      <div className="fila">
        <Clear clearCtrl={() => setInput('')}>Clear</Clear>
      </div>
     </div>
     <div className="contLogo">
      <img
      src={logo}
      className="logo"
      alt="Hola mundo"/>
     </div>
    </div>
  );
}

export default App;
