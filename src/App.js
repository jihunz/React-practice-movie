import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setVal] = useState(0);
  const onClick = () => setVal((prev) => prev + 1);

  console.log("I render all the time");

  const once = () => {
    console.log("I run only once");
  }

  useEffect(once, [])

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
