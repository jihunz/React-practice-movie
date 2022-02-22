import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setVal] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setVal((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I render all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    console.log(counter + " changes");
  }, [counter]);

  useEffect(() => {
    if (keyword !== "" & keyword.length > 4) {
      console.log("search for " + keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <input type="text" placeholder="search" value={keyword} onChange={onChange}></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
