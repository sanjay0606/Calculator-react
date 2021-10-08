import React from "react";

import {useState} from "react";
import './App.css';

function App() {
  const[result,setResult]=useState("");

  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const handleAc=(e)=>{
        setResult("");
  }
  const handleC=(e)=>{
    setResult(result.slice(0,result.length-1))
  }
  const handleResult=()=>{
    try{
      setResult(eval(result).toString())
    }
    catch(error){
      setResult("....Error.....")
    }
  }
  return (
    <div className="App">
      <div className="input">
        <input className="input_" type="text" value={result} />
      </div>
      <div className="keypad">
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="ac" onClick={handleAc} className="ac" >AC</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="c" onClick={handleC}>c</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="*" onClick={handleClick}>*</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="/" onClick={handleClick}>/</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="=" onClick={handleResult} className="equals">=</button>
      </div>
     
    </div>
  );
}

export default App;
