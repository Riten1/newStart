import { useState } from "react"

function App() {
let [count, setCount] = useState(0)

function add(){
  setCount(count + 1)
}

function sub(){
  if (count == 0){
    setCount(count = 0)
  }else{
  setCount(count - 1)}
}

  return (
    <div>
      
      <h1>{count} Riten Gurung </h1>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
}

export default App
