import React from "react";
import '../index.css';
import { useState } from "react";

const Button = ({name}) => {
  let [count, setCount] = useState(0);

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
  return (
    <>
    <div>
      <h1>{count} {name} Gurung </h1>

      <button onClick={add} className="bg-black text-white pl-5 pr-5">
        +
      </button>
      <button onClick={sub} className="bg-black text-white ml-5 pl-5 pr-5">
        -
      </button>
      </div>
    </>
  );
};

export default Button;
