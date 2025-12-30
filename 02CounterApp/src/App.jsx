import { useState } from "react"

function App() {
  
let [counter,setCounter] = useState(15)
// let counter = 15
const addValue = () =>{
  // console.log("Clicked:", Math.random())
  counter += 1
  setCounter(counter)
  console.log("Clicked:", {counter})
}

const removeValue = () => {
  setCounter(counter-1)
}
  return (
    <>
    <h1>Chai aur code</h1>
    <h2>Couter value: {counter}</h2>

    <button onClick={addValue}>Add value</button><br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
