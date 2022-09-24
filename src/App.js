import './App.css';
import logo from "./Imagenes/logo.png";
import Button from './Componentes/Button.js';
import Screen from "./Componentes/Screen.js";
import Clear from "./Componentes/Clear.js";
import {useState} from "react";
import {evaluate, format, number} from "mathjs";

function App() {

const[input, setInput] = useState('');

const validateInput = (value, lastValue='') => {
  console.log(Number(value))
  const formattedValue = Number(value) || ''
const formattedLastValue = Number(lastValue)
if ( value !== NaN || value === '.'  ){
    return value
  }
  if ( formattedLastValue) {
    return value
  }
  if ( formattedLastValue===NaN && ( (typeof (value)) === 'number')){
    return value
  }
  if ( !lastValue && value===NaN ){
    return value
  }
}



const addInput = val => {
  const lastValue = (input[input.length-1])
  const newValue = validateInput(val,lastValue)
  if ( newValue ){
    setInput(input + newValue)
  }
};
//si el valor anterior es un numero dejame usar caracteres especiales

const calcResult = () => {
  if(input[0] === Number(input) || input[0] === "."){
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
