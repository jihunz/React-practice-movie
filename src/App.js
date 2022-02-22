import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setVal] = useState(0);
  const onClick = () => setVal((prev) => prev + 1);

  console.log("render");

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
