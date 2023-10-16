import React from "react";
import '../index.css';
import { useState } from "react";

const Button = ({name}) => {

  let i = 1;
  let [count, setCount] = useState(0);
  let [changeName, setChange] = useState(name[i])

  function add() {
    if (count == 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }
  }

  function sub() {
    if (count == 0) {
      setCount((count = 0));
    } else {
      setCount(count - 1);
    }
  }

  function handleChange(){
  
  }
 
  
  return (
    <>
    <div>
      <h1>{count} {changeName} </h1>

      <button onClick={add} className="bg-black text-white pl-5 pr-5">
        +
      </button>
      <button onClick={sub} className="bg-black text-white ml-5 pl-5 pr-5">
        -
      </button>

      <button onClick={handleChange}>Change</button>
      </div>
    </>
  );
  }

export default Button;
